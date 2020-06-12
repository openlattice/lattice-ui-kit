// @flow

import React from 'react';

import styled from 'styled-components';
import {
  faCommentAltLines,
  faFileAlt,
  faInbox,
  faSignOut,
  faUserCircle,
  faUsers,
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PURPLE } from '../../../colors';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
`;

const MenuItemWrapper = styled.div`
  font-weight: 500;
  padding: 15px 30px;

  :hover {
    background-color: ${PURPLE.P100};
    color: ${PURPLE.P300};
    cursor: pointer;
  }
`;

const MenuListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px 0;

  > ${MenuItemWrapper}:last-of-type {
    margin-top: auto;
  }
`;

const menuValues = [
  {
    icon: faUsers,
    text: 'People'
  },
  {
    icon: faFileAlt,
    text: 'New Report'
  },
  {
    icon: faInbox,
    text: 'Inbox'
  },
  {
    icon: faUserCircle,
    text: 'Profile'
  },
  {
    icon: faCommentAltLines,
    text: 'Feedback'
  },
  {
    icon: faSignOut,
    text: 'Sign Out'
  }
];

const MenuItem = ({ icon, text } :any) => (
  <MenuItemWrapper>
    <Icon icon={icon} fixedWidth />
    {text}
  </MenuItemWrapper>
);

const MenuList = () => (
  <MenuListWrapper>
    {
      menuValues.map((value) => {
        const { icon, text } = value;
        return <MenuItem key={text} icon={icon} text={text} />;
      })
    }
  </MenuListWrapper>
);

export default MenuList;
