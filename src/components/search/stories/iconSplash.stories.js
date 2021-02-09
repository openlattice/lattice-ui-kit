import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faDiceD20 } from '@fortawesome/pro-light-svg-icons';

import IconSplash from '../src/components/IconSplash';
import { Card, CardSegment } from '../../../layout';

export default {
  title: 'Icon Splash',
};

export const FontAwesomeIconDefinition = () => (
  <Card>
    <CardSegment>
      <IconSplash
          icon={faFingerprint}
          caption="Keep your finger on the sensor a little longer"
          size="3x" />
    </CardSegment>
  </Card>
);

FontAwesomeIconDefinition.story = {
  name: 'FontAwesome IconDefinition',
};

export const IconRenderProp = () => (
  <Card>
    <CardSegment>
      <IconSplash
          icon={(size) => <FontAwesomeIcon icon={faDiceD20} size={size} fixedWidth spin />}
          caption="Rolling the dice..." />
    </CardSegment>
  </Card>
);

IconRenderProp.story = {
  name: 'icon render prop',
};
