/*
 * @flow
 */

import React, { Children, Component } from 'react';
import type { Node } from 'react';

import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import styled from 'styled-components';
import { faBars } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { get, isCollection } from 'immutable';

import AppHeaderInnerWrapper from './styled/AppHeaderInnerWrapper';
import AppHeaderOuterWrapper from './styled/AppHeaderOuterWrapper';
import AppNavigationWrapper from './AppNavigationWrapper';
import NavigationWrapper, { APP_NAV_ROOT } from './styled/NavigationWrapper';
import * as Colors from '../../../../colors';
import { Button } from '../../../../button';
import { Select } from '../../../../select';
import {
  containerStyles,
  controlStyles,
  optionStyles,
  selectStyles,
} from '../../../../style/select';

const { NEUTRALS } = Colors;

// button line-height = font-size (12px) * desired line-height (1.5) = 18px
// total button height = line-height (18px) + padding (2*8px) + border (2*1px) = 36px
const LogoutButton = styled(Button)`
  border: solid 1px ${NEUTRALS[4]};
  font-size: 12px;
  line-height: 18px;
  padding: 8px 16px;
  width: 100px;
`;

const HeaderSectionContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto; /* this lets the select stretch a bit until max-width */
  font-size: 12px;
  font-weight: normal;
  justify-content: flex-end;
  justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : 'flex-start')};
  padding: 12px 0;

  > * {
    margin-left: 30px;
  }
`;

const NavigationToggleWrapper = styled.div`
  align-items: center;
  color: ${NEUTRALS[1]};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 32px;
  justify-content: center;
  margin-left: 21px; /* the icon is 14px wide, this div is 32px wide, so there's 9px on each side of the icon */
  margin-right: -9px; /* to offset the extra space around icon */
  width: 32px;

  &:hover {
    color: ${NEUTRALS[0]};
  }
`;

const organizationsSelectStyles = {
  ...selectStyles,
  container: (base, state) => ({
    ...containerStyles(base, state),
    // the following are not ideal, but it's tricky figuring out how to make it flex perfectly in all cases
    flex: '1 1 auto',
    maxWidth: '300px',
    minWidth: '200px',
  }),
  control: (base, state) => ({
    ...controlStyles(base, state),
    fontSize: '12px',
    lineHeight: 1.5,
    minHeight: '36px', // to match log out button total height
  }),
  option: (base, state) => ({
    ...optionStyles(base, state),
    fontSize: '12px',
  }),
};

const AppIcon = ({ icon } :{ icon :any }) => (
  <img alt="OpenLattice Application Icon" src={icon} />
);

const AppTitle = ({ title = 'OpenLattice' } :{ title :string }) => (
  <h1>{title}</h1>
);

type Props = {
  appIcon :any;
  appTitle :string;
  children :Node;
  className :string;
  logout :() => void;
  organizationsSelect :{
    isDisabled :boolean;
    isLoading :boolean;
    onChange :(selectedOption :Object) => void;
    organizations :any;
    selectedOrganizationId :UUID;
  };
  user :string;
};

type State = {
  isNavigationOpen :boolean;
  shouldWrapNavigation :boolean;
};

class AppHeaderWrapper extends Component<Props, State> {

  headerRef :{ current :null | HTMLElement } = React.createRef();
  nav1Ref :{ current :null | HTMLElement } = React.createRef();
  nav2Ref :{ current :null | HTMLElement } = React.createRef();
  rightRef :{ current :null | HTMLElement } = React.createRef();

  static defaultProps = {
    className: undefined,
    logout: undefined,
    organizationsSelect: {},
    user: undefined,
  }

  constructor(props :Props) {

    super(props);
    this.state = {
      isNavigationOpen: false,
      shouldWrapNavigation: false,
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

  closeNavigation = () => {

    const { isNavigationOpen } = this.state;
    if (isNavigationOpen) {
      this.setState({ isNavigationOpen: false });
    }
  }

  toggleNavigation = () => {

    const { isNavigationOpen } = this.state;
    this.setState({ isNavigationOpen: !isNavigationOpen });
  }

  handleOnClickHeader = () => {

    this.closeNavigation();
  }

  handleOnResize = () => {

    const { handleNavigationWrapping, navigationChildrenCount } = this.processChildren();
    if (!handleNavigationWrapping || navigationChildrenCount <= 1) {
      // there's nothing to wrap if there's no children or if there's only 1 child, which is treated as the the
      // header's app icon + app title section
      return;
    }

    const header = this.headerRef.current;
    const right = this.rightRef.current;
    const nav1 = this.nav1Ref.current;
    const nav2 = this.nav2Ref.current;

    // the lower nav ref will be null if it is not rendered, so this is to check if we should wrap the nav
    if (header && !nav2) {
      if (header.offsetWidth < header.scrollWidth) {
        this.setState({ shouldWrapNavigation: true });
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
        this.setState({ shouldWrapNavigation: false });
      }
    }
    // I don't think this is possible, but it's here for just in case
    else {
      this.setState({ shouldWrapNavigation: false });
    }
  }

  wrapNavIfNecessary = () => {

    const { handleNavigationWrapping, navigationChildrenCount } = this.processChildren();
    if (!handleNavigationWrapping || navigationChildrenCount <= 1) {
      // there's nothing to wrap if there's no children or if there's only 1 child, which is treated as the the
      // header's app icon + app title section
      return;
    }

    // initially on mount, we know the lower nav will not render and the ref will be null
    const header = this.headerRef.current;
    if (header && header.offsetWidth < header.scrollWidth) {
      // ensure "shouldWrapNavigation" has not already been set to true to prevent infinite renders in the case where
      // the nav has already been wrapped but there's still overflow in the header (when the window is very small)
      const { shouldWrapNavigation } = this.state;
      if (!shouldWrapNavigation) {
        this.setState({ shouldWrapNavigation: true });
      }
    }
  }

  processChildren = () => {

    const { children } = this.props;

    let handleNavigationWrapping :boolean = true;
    let navigationChildrenCount :number = 0;

    if (Children.count(children) > 0) {
      Children.forEach(children, (child, index) => {
        // we expect the first child to be <AppNavigationWrapper />
        if (index === 0 && child.type.name === AppNavigationWrapper.name) {
          navigationChildrenCount = Children.count(child.props.children);
          // we won't handle navigation wrapping if <AppNavigationWrapper /> has the "drawer" prop
          if (child.props.drawer === true) {
            handleNavigationWrapping = false;
          }
        }
      });
    }

    return {
      handleNavigationWrapping,
      navigationChildrenCount,
    };
  }

  renderHeaderRight = (renderLogOutButton :boolean) => {

    const { logout, organizationsSelect, user } = this.props;

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
      <HeaderSectionContentWrapper align="right" ref={this.rightRef}>
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
        {
          renderLogOutButton && isFunction(logout) && (
            <LogoutButton onClick={logout}>Log Out</LogoutButton>
          )
        }
        {
          !renderLogOutButton && (
            <NavigationToggleWrapper onClick={this.toggleNavigation}>
              <FontAwesomeIcon icon={faBars} />
            </NavigationToggleWrapper>
          )
        }
      </HeaderSectionContentWrapper>
    );
  }

  render() {

    const {
      appIcon,
      appTitle,
      children,
      className,
    } = this.props;
    const { isNavigationOpen, shouldWrapNavigation } = this.state;
    const { handleNavigationWrapping, navigationChildrenCount } = this.processChildren();

    let headerBounds;
    if (this.headerRef.current) {
      headerBounds = this.headerRef.current.getBoundingClientRect();
    }

    return (
      <>
        <AppHeaderOuterWrapper className={className} ref={this.headerRef} onClick={this.handleOnClickHeader}>
          <AppHeaderInnerWrapper>
            {
              /*
               * this block is expected to handle the following examples:
               *
               *   1. this is unlikely to be common and is not ideal
               *     <AppHeaderWrapper ... />
               *
               *   2. this is unlikely to be common and should be avoided
               *     <AppHeaderWrapper ...>
               *       <AppNavigationWrapper />
               *     </AppHeaderWrapper>
               */
              navigationChildrenCount === 0 && (
                <NavigationWrapper>
                  <a href={window.location.href} className={APP_NAV_ROOT}>
                    <AppIcon icon={appIcon} />
                    <AppTitle title={appTitle} />
                  </a>
                </NavigationWrapper>
              )
            }
            {
              /*
               * this block is responsible for rendering nav items inside the header. here's how it works:
               *
               *   1. AppNavigationWrapper MUST NOT have any special props enabled (like "drawer")
               *
               *      AND
               *
               *   2. AppNavigationWrapper's 1st child is expected to be the root route, i.e. the app icon + app title,
               *      and will ALWAYS be rendered in the header
               *   3. AppNavigationWrapper has many children AND they all will fit (otherwise, wrapping happens)
               *
               * this block is expected to handle the following examples. additionally, only example 2 is relevant when
               * the header is handling navigation wrapping. nothing fancy happens with example 1.
               *
               * for example...
               *
               *     <AppHeaderWrapper ...>
               *       <AppNavigationWrapper>
               *         <NavLink to="/home" />
               *         <NavLink to="/tab1">Tab 1</NavLink>
               *         <NavLink to="/tab2">Tab 2</NavLink>
               *       </AppNavigationWrapper>
               *     </AppHeaderWrapper>
               */
              navigationChildrenCount > 0 && Children.map(children, (child, index) => {
                // the 1st child is expected to be <AppNavigationWrapper />
                if (index === 0 && child.type.name === AppNavigationWrapper.name) {
                  return (
                    <NavigationWrapper ref={this.nav1Ref}>
                      {
                        Children.map(child.props.children, (navChild, navIndex) => {
                          // the 1st child is expected to be the root route, i.e. the app icon + app title
                          if (navIndex === 0) {
                            return React.cloneElement(
                              navChild,
                              { ...navChild.props, className: APP_NAV_ROOT },
                              React.createElement(AppIcon, { icon: appIcon }),
                              React.createElement(AppTitle, { title: navChild.props.children || appTitle }),
                            );
                          }
                          // return null if...
                          //   - the header is not responsible for navigation wrapping (i.e. if the nav is a drawer)
                          //   - the header has computed that the nav items won't fit and need to wrap around
                          return (!handleNavigationWrapping || shouldWrapNavigation) ? null : navChild;
                        })
                      }
                    </NavigationWrapper>
                  );
                }
                return child;
              })
            }
            {this.renderHeaderRight(handleNavigationWrapping)}
          </AppHeaderInnerWrapper>
        </AppHeaderOuterWrapper>
        {
          /*
           * this block is only relevant when the header is handling navigation wrapping, and it only applies to the
           * following example:
           *
           *   <AppHeaderWrapper ...>
           *     <AppNavigationWrapper>
           *       <NavLink to="/home" />
           *       <NavLink to="/tab1">Tab 1</NavLink>
           *       <NavLink to="/tab2">Tab 2</NavLink>
           *     </AppNavigationWrapper>
           *   </AppHeaderWrapper>
           */
          handleNavigationWrapping && navigationChildrenCount > 1 && shouldWrapNavigation && (
            <AppNavigationWrapper className={className} ref={this.nav2Ref}>
              {
                Children.map(children, (child, index) => {
                  // the 1st child is expected to be <AppNavigationWrapper />
                  if (index === 0 && child.type.name === AppNavigationWrapper.name) {
                    return Children.map(child.props.children, (navChild, navIndex) => (
                      // the 1st child is expected to be the root route, i.e. the app icon + app title, which will be
                      // processed above and moved into the header, so we want to return null here
                      navIndex === 0 ? null : navChild
                    ));
                  }
                  // ignoring other children for now...
                  return null;
                })
              }
            </AppNavigationWrapper>
          )
        }
        {
          /*
           * this block is only relevant when the header is NOT handling navigation wrapping, i.e. if the
           * navigation is a drawer (or something else in the future)
           *
           *   <AppHeaderWrapper ...>
           *     <AppNavigationWrapper drawer ...>
           *       <NavLink to="/home" />
           *       <NavLink to="/tab1">Tab 1</NavLink>
           *       <NavLink to="/tab2">Tab 2</NavLink>
           *     </AppNavigationWrapper>
           *   </AppHeaderWrapper>
           */
          !handleNavigationWrapping && navigationChildrenCount > 0 && (
            Children.map(children, (child, index) => {
              // the 1st child is expected to be <AppNavigationWrapper ... />
              if (index === 0) {
                return (
                  <AppNavigationWrapper
                      drawer={child.props.drawer}
                      headerBounds={headerBounds}
                      isOpen={isNavigationOpen}
                      onClose={this.closeNavigation}>
                    {
                      Children.map(child.props.children, (navChild, navIndex) => (
                        // the 1st child is expected to be the root route, i.e. the app icon + app title, which will be
                        // processed above and moved into the header, so we want to return null here
                        navIndex === 0
                          ? null
                          : React.cloneElement(navChild, { ...navChild.props, onClick: this.closeNavigation })
                      ))
                    }
                  </AppNavigationWrapper>
                );
              }
              // ignoring other children for now...
              return null;
            })
          )
        }
      </>
    );
  }
}

export default AppHeaderWrapper;
