import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import { withStyles } from '@material-ui/core/styles';

const ExpansionPanel = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.header,
    border: '1px solid',
    borderColor: theme.palette.divider,
    borderRadius: 'inherit',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
}))(MuiExpansionPanel);

export default ExpansionPanel;
