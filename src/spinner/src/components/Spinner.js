// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird, faCircle } from '@fortawesome/pro-light-svg-icons';

import Rotate from './styled/Rotate';
import { NEUTRALS } from '../../../colors';

type Props = {
  /** color of spinner circle */
  bottomColor ? :string;
  /** set align-self to center or flex-start */
  centered ? :boolean;
  /** React component className */
  className ? :string;
  /** animation duration */
  duration ? :string;
  /** FontAwesomeIcon size */
  size ? :string;
  /** color of spinner-third */
  topColor ? :string;
};

const Spinner = (props :Props) => {
  const {
    bottomColor,
    centered,
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
    <Rotate className={styledClassName} duration={duration} centered={centered}>
      <FontAwesomeIcon
          id="spinner-circle"
          color={bottomColor}
          icon={faCircle} />
      <FontAwesomeIcon
          id="spinner-third"
          color={topColor}
          icon={faSpinnerThird} />
    </Rotate>
  );
};


Spinner.defaultProps = {
  bottomColor: NEUTRALS[3],
  centered: true,
  className: undefined,
  duration: undefined,
  size: '1x',
  topColor: NEUTRALS[0],
};

export default Spinner;
