// @flow
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Node } from 'react';

import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcrumbs as MUIBreadcrumbs } from '@material-ui/core';

type Props = {|
  separator ?:Node;
|};

const Breadcrumbs = (props :Props) => <MUIBreadcrumbs {...props} />;

Breadcrumbs.defaultProps = {
  separator: <FontAwesomeIcon icon={faChevronRight} fixedWidth />
};

export default Breadcrumbs;
