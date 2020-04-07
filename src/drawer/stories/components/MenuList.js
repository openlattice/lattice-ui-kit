// @flow

import React from 'react';

import styled from 'styled-components';
import {
  faCommentDots,
  faFileAlt,
  faInbox,
  faSignOut,
  faUserCircle,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PURPLES } from '../../../colors';

const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
`;

const MenuItemWrapper = styled.div`
  font-weight: 500;
  padding: 15px 30px;

  :hover {
    background-color: ${PURPLES[5]};
    color: ${PURPLES[1]};
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
    icon: faCommentDots,
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
