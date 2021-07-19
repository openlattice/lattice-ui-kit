import React from 'react';

import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import { NEUTRAL, PURPLE } from '../../../colors';

// adjust tab content to take size of bold font
const ContentSpan = styled.span`
  &:before {
    display: block;
    content: ${(props) => (props.content ? `"${props.content}"` : '')};
    font-weight: 600;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;

const FolderTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.action.hover,
    minHeight: 32,
    borderRadius: '3px 3px 0px 0px',
    color: NEUTRAL.N700,
    opacity: 1,
    '&:hover': {
      color: PURPLE.P300,
    },
    '&$selected': {
      color: PURPLE.P300,
      backgroundColor: PURPLE.P00,
      fontWeight: theme.typography.fontWeightBold,
    },
    '&:focus': {
      color: PURPLE.P300,
    },
  },
  selected: {},
}))((props) => {
  const labelElement = <ContentSpan content={props.label}>{props.label}</ContentSpan>;
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return (<Tab disableRipple {...props} label={labelElement} />);
});

export default FolderTab;
