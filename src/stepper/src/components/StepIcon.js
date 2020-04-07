// @flow
import React from 'react';

import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconLayer, StepIndex } from './styled';

import { NEUTRALS, PURPLES, WHITE } from '../../../colors';

type Props = {
  active :boolean;
  className ? :string;
  complete :boolean;
  index :number;
};

const StepIcon = ({
  active,
  className,
  complete,
  index
} :Props) => {
  const styledClassName = className ? `${className} fa-layers` : 'fa-layers';
  return (
    <IconLayer className={styledClassName}>
      <FontAwesomeIcon icon={faCircle} color={(active || complete) ? PURPLES[2] : NEUTRALS[1]} />
      {
        complete
          ? <FontAwesomeIcon icon={faCheck} color={WHITE} transform="shrink-7" />
          : <StepIndex className="fa-layers-text fa-inverse">{index}</StepIndex>
      }
    </IconLayer>
  );
};

StepIcon.defaultProps = {
  className: undefined
};

export default StepIcon;
