// @flow

import { Component } from 'react';
import ReactDOM from 'react-dom';
import type { Node } from 'react';

import PropTypes from 'prop-types';

let portalOuterContainer :HTMLDivElement;

type Props = {
  children :Node;
};

/*
 * Inspiration:
 * https://reactjs.org/docs/portals.html
 * https://atlaskit.atlassian.com/packages/core/portal
 * https://atlaskit.atlassian.com/packages/core/layer-manager
 * https://github.com/segmentio/evergreen/blob/master/src/portal/src/Portal.js
 */
export default class Portal extends Component<Props> {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  portalInnerContainer :HTMLDivElement;

  constructor(props :Props) {

    super(props);

    // assumption is that we are dealing with a standard browser DOM
    const { body } = document;

    // checking body is truthy because Flow will complain about body.appendChild() otherwise
    if (body && !portalOuterContainer) {
      portalOuterContainer = document.createElement('div');
      portalOuterContainer.setAttribute('lattice-portal-outer-container', '');
      body.appendChild(portalOuterContainer);
    }

    this.portalInnerContainer = document.createElement('div');
    this.portalInnerContainer.setAttribute('lattice-portal-inner-container', '');
  }

  componentDidMount() {

    portalOuterContainer.appendChild(this.portalInnerContainer);
  }

  componentWillUnmount() {

    portalOuterContainer.removeChild(this.portalInnerContainer);
  }

  render() {

    const { children } = this.props;
    return ReactDOM.createPortal(children, this.portalInnerContainer);
  }
}
