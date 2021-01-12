import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: '1.25rem 1.875rem',
  },
}))(MuiExpansionPanelDetails);

export default ExpansionPanelDetails;
