import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

import { NEUTRAL } from '../../../colors';

const FolderTabs = withStyles({
  root: {
    borderBottom: `1px solid ${NEUTRAL.N100}`,
    minHeight: '32px',
  },
  indicator: {
    backgroundColor: 'transparent',
  },
  flexContainer: {
    margin: '2px 8px 0',
  },
})(Tabs);

export default FolderTabs;
