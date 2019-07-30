// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/pro-solid-svg-icons';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';
import { IconLayer, StepIndex } from './styled';
import { PURPLES, NEUTRALS, WHITE } from '../../../colors';

type Props = {
  active :boolean;
  className :string;
  complete :boolean;
  index :number;
};

const StepIcon = ({
  active,
  className,
  complete,
  index
} :Props) => (
  <IconLayer className={`${className} fa-layers`}>
    <FontAwesomeIcon icon={faCircle} color={(active || complete) ? PURPLES[2] : NEUTRALS[1]} />
    { complete
      ? <FontAwesomeIcon icon={faCheck} color={WHITE} transform="shrink-7" />
      : <StepIndex className="fa-layers-text fa-inverse">{index}</StepIndex>
    }
  </IconLayer>
);

export default StepIcon;
