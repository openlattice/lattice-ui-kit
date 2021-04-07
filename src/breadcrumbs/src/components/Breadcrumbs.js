// @flow
/* eslint-disable react/jsx-props-no-spreading */
import type { Node } from 'react';

import styled from 'styled-components';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcrumbs as MUIBreadcrumbs } from '@material-ui/core';

type Props = {
  separator ?:Node;
};

const Separator = styled(FontAwesomeIcon)`
  font-size: 60%;
`;

const Breadcrumbs = (props :Props) => <MUIBreadcrumbs {...props} />;

Breadcrumbs.defaultProps = {
  separator: <Separator icon={faChevronRight} fixedWidth />
};

export default Breadcrumbs;
