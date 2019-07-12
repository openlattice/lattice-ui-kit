// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/pro-solid-svg-icons';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';
import { IconLayer, StepIndex } from './styled';
import { PURPLES, NEUTRALS, WHITE } from '../../../colors';

type Props = {
  active :boolean;
  complete :boolean;
  index :number;
};

const StepIcon = ({ active, complete, index } :Props) => (
  <IconLayer className="fa-layers">
    <FontAwesomeIcon icon={faCircle} color={(active || complete) ? PURPLES[2] : NEUTRALS[1]} />
    { complete
      ? <FontAwesomeIcon icon={faCheck} color={WHITE} transform="shrink-6" />
      : <StepIndex className="fa-layers-text fa-inverse">{index + 1}</StepIndex>
    }
  </IconLayer>
);

export default StepIcon;
