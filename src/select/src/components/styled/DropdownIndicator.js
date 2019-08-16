/*
 * @flow
 */

import React, { Component } from 'react';
import type { ElementConfig, Element } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { components } from 'react-select';

const { DropdownIndicator: RSDropdownIndicator } = components;

type Props = ElementConfig<typeof RSDropdownIndicator>;


class DropdownIndicator extends Component<Props> {

  renderIcon = () :Element<any> => {
    const { selectProps: { icon } } = this.props;

    if (typeof icon === 'function') {
      return icon();
    }

    return <FontAwesomeIcon icon={icon} fixedWidth />;
  }

  render() {
    /* eslint-disable react/jsx-props-no-spreading */
    return (
      <RSDropdownIndicator {...this.props}>
        { this.renderIcon() }
      </RSDropdownIndicator>
    );
    /* eslint-enable */
  }
}

export default DropdownIndicator;
