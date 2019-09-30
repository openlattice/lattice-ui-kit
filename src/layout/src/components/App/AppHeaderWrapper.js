/*
 * @flow
 */

import React, { Children, Component } from 'react';
import type { Node } from 'react';

import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import styled from 'styled-components';
import { get, isCollection } from 'immutable';

import AppNavigationWrapper, { APP_NAV_ROOT, NavigationContentWrapper } from './AppNavigationWrapper';
import OpenLatticeAppIcon from '../../../../assets/images/ol_icon.png';
import * as Colors from '../../../../colors';
import { Button } from '../../../../button';
import { Select } from '../../../../select';
import { AppContentInnerWrapper, AppContentOuterWrapper } from './AppContentWrapper';
import { APP_CONTENT_PADDING } from '../../../../style/Sizes';

const { NEUTRALS, PURPLES, WHITE } = Colors;

const AppHeaderOuterWrapper = styled(AppContentOuterWrapper).attrs({
  as: 'header',
  bgColor: WHITE,
})`
  border-bottom: 1px solid ${NEUTRALS[5]};
`;

const AppHeaderInnerWrapper = styled(AppContentInnerWrapper)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${APP_CONTENT_PADDING}px;
`;

// button line-height = font-size (12px) * desired line-height (1.5) = 18px
// total button height = line-height (18px) + padding (2*8px) + border (2*1px) = 36px
const LogoutButton = styled(Button)`
  border: solid 1px ${NEUTRALS[4]};
  font-size: 12px;
  line-height: 18px;
  padding: 8px 16px;
  width: 100px;
`;

const HeaderRightContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto; /* this lets the select stretch a bit until max-width */
  font-size: 12px;
  font-weight: normal;
  justify-content: flex-end;
  padding: 12px 0;

  > * {
    margin-left: 30px;
  }
`;

const organizationsSelectStyles = {
  clearIndicator: (base) => ({ ...base, padding: '0', margin: '5px' }),
  container: (base, state) => ({
    ...base,
    cursor: state.isDisabled ? 'not-allowed' : 'default',
    pointerEvents: 'auto', // not sure what this was for
    // the following are not ideal, but it's tricky figuring out how to make it flex perfectly in all cases
    flex: '1 1 auto',
    maxWidth: '300px',
    minWidth: '200px',
  }),
  control: (base, state) => {

    const { isFocused, isDisabled, selectProps } = state;
    let backgroundColor = isFocused ? WHITE : NEUTRALS[8];
    let border = isFocused ? `solid 1px ${PURPLES[1]}` : `solid 1px ${NEUTRALS[4]}`;

    if (selectProps && selectProps.noBorder) {
      backgroundColor = 'transparent';
      border = 'none';
    }

    const style = {
      backgroundColor,
      border,
      borderRadius: '3px',
      boxShadow: 'none',
      fontSize: '12px',
      lineHeight: '18px', // 12px font size * 1.5 = 18px
      minHeight: '36px', // to match log out button total height
      pointerEvents: isDisabled ? 'none' : 'auto',
      ':hover': {
        backgroundColor,
        border,
      },
    };
    return { ...base, ...style };
  },
  dropdownIndicator: (base, state) => ({
    ...base,
    color: NEUTRALS[2],
    display: state.selectProps && state.selectProps.hideMenu ? 'none' : 'flex',
    margin: '4px',
    padding: '0',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  indicatorsContainer: (base) => ({ ...base, marginRight: '5px', color: NEUTRALS[2] }),
  menuList: (base) => ({ ...base, borderRadius: '4px' }),
  menuPortal: (base) => ({ ...base, zIndex: 1000 }),
  option: (base, state) => {

    const { isFocused, isSelected } = state;
    const color = isSelected ? PURPLES[1] : NEUTRALS[0];
    let backgroundColor = WHITE;
    if (isSelected) {
      backgroundColor = PURPLES[6];
    }
    else if (isFocused) {
      backgroundColor = NEUTRALS[6];
    }

    return {
      ...base,
      color,
      backgroundColor,
      fontSize: '12px',
      ':active': {
        backgroundColor: PURPLES[5],
      },
    };
  },
  singleValue: (base, state) => ({ ...base, color: state.isDisabled ? NEUTRALS[1] : NEUTRALS[0] }),
  valueContainer: (base) => ({ ...base, padding: '0 10px' }),
};

const AppIcon = ({ icon = OpenLatticeAppIcon } :Object) => (
  <img alt="OpenLattice Application Icon" src={icon} />
);

const AppTitle = ({ title = 'OpenLattice' } :Object) => (
  <h1>{title}</h1>
);

type Props = {
  appIcon :any;
  appTitle :string;
  children :Node;
  className :?string;
  logout :() => void;
  organizationsSelect :{
    isDisabled :boolean;
    isLoading :boolean;
    onChange :(selectedOption :Object) => void;
    organizations :any;
    selectedOrganizationId :UUID;
  };
  user :?string;
};

type State = {
  shouldWrapNav :boolean;
};

class AppHeaderWrapper extends Component<Props, State> {

  headerRef :{ current :null | HTMLElement } = React.createRef();
  nav1Ref :{ current :null | HTMLElement } = React.createRef();
  nav2Ref :{ current :null | HTMLElement } = React.createRef();
  rightRef :{ current :null | HTMLElement } = React.createRef();

  constructor(props :Props) {

    super(props);
    this.state = {
      shouldWrapNav: false,
    };
  }

  componentDidMount() {

    // from the gods themselves... https://stackoverflow.com/a/19014495/196921
    window.addEventListener('resize', this.handleOnResize.bind(this));

    this.wrapNavIfNecessary();
  }

  componentDidUpdate() {

    this.wrapNavIfNecessary();
  }

  componentWillUnmount() {

    window.removeEventListener('resize', this.handleOnResize.bind(this));
  }

  handleOnResize = () => {

    const { ignoreNavigation } = this.processChildren();
    if (ignoreNavigation) {
      return;
    }

    const header = this.headerRef.current;
    const right = this.rightRef.current;
    const nav1 = this.nav1Ref.current;
    const nav2 = this.nav2Ref.current;

    // the lower nav ref will be null if it is not rendered, so this is to check if we should wrap the nav
    if (header && !nav2) {
      if (header.offsetWidth < header.scrollWidth) {
        this.setState({ shouldWrapNav: true });
      }
    }
    // check if the nav can fit in the header and undo the wrap if it can
    else if (header && nav1 && nav2 && right) {
      // this is a *super* basic estimate for checking if all header content will fit in a single row
      let headerWidthEstimate = 0;
      for (let i = 0; i < right.children.length; i += 1) {
        headerWidthEstimate += right.children[i].offsetWidth;
      }
      headerWidthEstimate += nav1.offsetWidth;
      headerWidthEstimate += nav2.offsetWidth;
      if (headerWidthEstimate < header.offsetWidth) {
        this.setState({ shouldWrapNav: false });
      }
    }
    // I don't think this is possible, but it's here for just in case
    else {
      this.setState({ shouldWrapNav: false });
    }
  }

  wrapNavIfNecessary = () => {

    const { ignoreNavigation } = this.processChildren();
    if (ignoreNavigation) {
      return;
    }

    // initially on mount, we know the lower nav will not render and the ref will be null
    const header = this.headerRef.current;
    if (header && header.offsetWidth < header.scrollWidth) {
      // ensure "shouldWrapNav" has not already been set to true to prevent infinite renders in the case when the nav
      // has already been wrapped but there's still overflow in the header (when the browser window is very small)
      const { shouldWrapNav } = this.state;
      if (!shouldWrapNav) {
        this.setState({ shouldWrapNav: true });
      }
    }
  }

  processChildren = () => {

    const { children } = this.props;

    let navigationChildrenCount :number = 0;
    let navigationComponentDefined :boolean = false;

    if (Children.count(children) > 0) {
      Children.forEach(children, (child, index) => {
        // we expect the first child to be <AppNavigationWrapper />
        if (index === 0 && child.type.name === AppNavigationWrapper.name) {
          navigationChildrenCount = Children.count(child.props.children);
          // we won't handle navigation wrapping if <AppNavigationWrapper /> has the "component" prop
          if (child.props.component !== null && child.props.component !== undefined) {
            navigationComponentDefined = true;
          }
        }
      });
    }

    return {
      navigationChildrenCount,
      ignoreNavigation: navigationChildrenCount <= 1 || navigationComponentDefined,
    };
  }

  renderHeaderRight = () => {

    const {
      logout,
      organizationsSelect = {},
      user,
    } = this.props;

    let organizations = [];
    if (isArray(organizationsSelect.organizations) || isPlainObject(organizationsSelect.organizations)) {
      organizations = Object.values(organizationsSelect.organizations);
    }
    else if (isCollection(organizationsSelect.organizations)) {
      organizations = organizationsSelect.organizations.valueSeq();
    }

    const organizationOptions = [];
    organizations.forEach((organization) => {
      organizationOptions.push({
        label: get(organization, 'title'),
        value: get(organization, 'id'),
      });
    });

    const selectedOrganizationOption = organizationOptions.find((option) => (
      option.value === organizationsSelect.selectedOrganizationId
    ));

    return (
      <HeaderRightContentWrapper ref={this.rightRef}>
        {
          user && (
            <span>{user}</span>
          )
        }
        {
          organizationOptions.length > 0 && (
            <Select
                isClearable={false}
                isDisabled={organizationsSelect.isDisabled}
                isLoading={organizationsSelect.isLoading}
                isMulti={false}
                menuPortalTarget={document.body}
                onChange={organizationsSelect.onChange}
                options={organizationOptions}
                placeholder="Select an organization..."
                styles={organizationsSelectStyles}
                value={selectedOrganizationOption} />
          )
        }
        <LogoutButton onClick={logout}>Log Out</LogoutButton>
      </HeaderRightContentWrapper>
    );
  }

  render() {

    const {
      appIcon,
      appTitle,
      children,
      className,
    } = this.props;
    const { shouldWrapNav } = this.state;

    const { navigationChildrenCount } = this.processChildren();

    return (
      <>
        <AppHeaderOuterWrapper className={className} ref={this.headerRef}>
          <AppHeaderInnerWrapper>
            {
              navigationChildrenCount === 0 && (
                <NavigationContentWrapper>
                  <a href={window.location.href} className={APP_NAV_ROOT}>
                    <AppIcon icon={appIcon} />
                    <AppTitle title={appTitle} />
                  </a>
                </NavigationContentWrapper>
              )
            }
            {
              navigationChildrenCount > 0 && Children.map(children, (child, index) => {
                // the first child is expected to be <AppNavigationWrapper />
                if (index === 0 && child.type.name === AppNavigationWrapper.name) {
                  return (
                    <NavigationContentWrapper ref={this.nav1Ref}>
                      {
                        Children.map(child.props.children, (navChild, navIndex) => {
                          // first child is expected to be the root route, i.e. the app icon + app title
                          if (navIndex === 0) {
                            return React.cloneElement(
                              navChild,
                              { ...navChild.props, className: APP_NAV_ROOT },
                              React.createElement(AppIcon, { icon: appIcon }),
                              React.createElement(AppTitle, { title: navChild.props.children }),
                            );
                          }
                          return shouldWrapNav ? null : navChild;
                        })
                      }
                    </NavigationContentWrapper>
                  );
                }
                return child;
              })
            }
            {this.renderHeaderRight()}
          </AppHeaderInnerWrapper>
        </AppHeaderOuterWrapper>
        {
          navigationChildrenCount > 1 && shouldWrapNav && (
            <AppNavigationWrapper className={className} ref={this.nav2Ref}>
              {
                Children.map(children, (child, index) => {
                  // the first child is expected to be <AppNavigationWrapper />
                  if (index === 0 && child.type.name === AppNavigationWrapper.name) {
                    // first child is expected to be the root route, i.e. the app icon + app title
                    return Children.map(child.props.children, (navChild, navIndex) => (
                      navIndex !== 0 ? navChild : null
                    ));
                  }
                  return null;
                })
              }
            </AppNavigationWrapper>
          )
        }
      </>
    );
  }
}

export default AppHeaderWrapper;
export {
  AppHeaderInnerWrapper,
  AppHeaderOuterWrapper,
};
