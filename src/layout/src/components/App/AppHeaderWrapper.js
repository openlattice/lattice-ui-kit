/*
 * @flow
 */

import React, { Children } from 'react';
import type { Node } from 'react';

import styled from 'styled-components';

import * as Colors from '../../../../colors';
import { Button } from '../../../../button';
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

const RightSideContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: normal;
  justify-content: flex-end;

  > span {
    margin: 0 30px 0 0;
  }
`;


// total button height
// line-height + padding + border
// 18 + 2*8px + 2*1px = 36px
const LogoutButton = styled(Button)`
  border: solid 1px ${NEUTRALS[4]};
  font-size: 12px;
  line-height: 18px; /* 12 * 1.5 = 18 */
  padding: 8px 16px;
  margin: 12px 0;
  width: 100px;
`;

const NavigationContentWrapper = styled.nav`
  display: flex;
  flex: 0 0 auto;
  height: 100%;
  justify-content: flex-start;

  > a {
    align-items: center;
    border-bottom: 3px solid transparent;
    color: ${NEUTRALS[1]};
    display: flex;
    font-size: 12px;
    font-weight: normal;
    justify-content: center;
    letter-spacing: normal;
    margin: 0 0 0 30px;
    outline: none;
    padding: 3px 3px 0px 3px;
    text-align: center;
    text-decoration: none;

    &:focus {
      outline: none;
      text-decoration: none;
    }

    &:hover {
      border-bottom: 3px solid ${NEUTRALS[2]};
      color: ${NEUTRALS[0]};
      cursor: pointer;
    }

    &.active {
      border-bottom: 3px solid ${PURPLES[1]};
      color: ${PURPLES[1]};
    }
  }

  > a:first-child {
    border: none;
    margin: 0;
    padding: 0;

    > h1 {
      color: ${NEUTRALS[0]};
      font-size: 14px;
      font-weight: 600;
      letter-spacing: normal;
      margin: 0 0 0 10px;
      padding: 0;
    }

    > img {
      height: 26px;
    }
  }
`;

const AppIcon = ({ icon } :Object) => (
  <img alt="OpenLattice Application Icon" src={icon} />
);

const AppTitle = ({ title = 'OpenLattice' } :Object) => (
  <h1>{title}</h1>
);

type Props = {
  children :Node;
  className :?string;
  icon :any;
  logout :() => void;
  user :?string;
};

const AppHeaderWrapper = ({
  children,
  className,
  icon,
  logout,
  user,
} :Props) => (
  <AppHeaderOuterWrapper className={className}>
    <AppHeaderInnerWrapper>
      <NavigationContentWrapper>
        {
          Children.map(children, (child, index) => {
            if (index === 0) {
              return React.cloneElement(
                child,
                { ...child.props },
                React.createElement(AppIcon, { icon }),
                React.createElement(AppTitle, { title: child.props.children }),
              );
            }
            return child;
          })
        }
      </NavigationContentWrapper>
      <RightSideContentWrapper>
        {
          user && (
            <span>{user}</span>
          )
        }
        <LogoutButton onClick={logout}>Log Out</LogoutButton>
      </RightSideContentWrapper>
    </AppHeaderInnerWrapper>
  </AppHeaderOuterWrapper>
);

export default AppHeaderWrapper;
