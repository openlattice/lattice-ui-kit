// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird, faCircle } from '@fortawesome/pro-light-svg-icons';

import Rotate from './styled/Rotate';
import { NEUTRALS } from '../../../colors';

type Props = {
  bottomColor ? :string;
  className ? :string;
  duration ? :string;
  size ? :string;
  topColor ? :string;
};

const Spinner = (props :Props) => {
  const {
    bottomColor,
    className,
    duration,
    size,
    topColor,
  } = props;

  // https://github.com/FortAwesome/react-fontawesome#advanced
  // $FlowFixMe trying to coerce undefined but is provided by defaultProps
  const defaultClassName = `fa-layers fa-fw fa-${size}`;
  const styledClassName = className ? `${defaultClassName} ${className}` : defaultClassName;

  return (
    <Rotate className={styledClassName} duration={duration}>
      <FontAwesomeIcon
          color={bottomColor}
          icon={faCircle} />
      <FontAwesomeIcon
          color={topColor}
          icon={faSpinnerThird} />
    </Rotate>
  );
};


Spinner.defaultProps = {
  bottomColor: NEUTRALS[3],
  className: undefined,
  duration: undefined,
  size: '1x',
  topColor: NEUTRALS[0],
};

export default Spinner;
