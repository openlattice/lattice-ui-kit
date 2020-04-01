import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { withStyles } from '@material-ui/core/styles';

const ExpansionPanelSummary = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.header,
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.divider,
    borderRadius: 'inherit',
    marginBottom: -1,
    minHeight: 52,
    padding: '0 1.875rem',
    '&$expanded': {
      minHeight: 52,
      borderBottom: '1px solid',
      borderBottomColor: theme.palette.divider,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  content: {
    '&$expanded': {
      margin: '0.75rem 0'
    }
  },
  expanded: {}
}))(MuiExpansionPanelSummary);

export default ExpansionPanelSummary;
