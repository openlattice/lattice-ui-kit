// @flow
import React, { Component } from 'react';

import { Checkbox } from '../..';
import { Card, CardSegment } from '../../../layout';

type Props = {
  action :(name :string) => () => void;
}

type State = {
  checkboxesChecked :Object;
};

class CheckboxController extends Component<Props, State> {

  state = {
    checkboxesChecked: {
      default: false,
      checked: true,
      checkedReadOnly: true,
      disabled: false,
      disabledChecked: true,
      event: false
    }
  }

  handleChange = (e :SyntheticEvent<HTMLInputElement>) => {
    const { action } = this.props;
    const { checkboxesChecked } = this.state;
    const { name, checked } = e.currentTarget;
    this.setState({
      checkboxesChecked: {
        ...checkboxesChecked,
        [name]: checked
      }
    });

    action('onChange');
  };

  render() {
    const { action } = this.props;
    const { checkboxesChecked } = this.state;
    return (
      <div>
        <h1>
          Controlled Checkbox
        </h1>
        <Card>
          <CardSegment>
            <form style={{
              display: 'flex',
              flex: '0 1 100%',
              flexDirection: 'column'
            }}>
              <Checkbox
                  id="story-default"
                  label="Default"
                  name="default"
                  checked={checkboxesChecked.default}
                  onChange={this.handleChange}
                  value="default" />

              <Checkbox
                  id="story-checked"
                  label="Checked"
                  name="checked"
                  checked={checkboxesChecked.checked}
                  onChange={this.handleChange}
                  value="checked" />

              <Checkbox
                  id="story-checkedreadonly"
                  label="Checked readOnly"
                  name="checkedReadOnly"
                  readOnly
                  checked={checkboxesChecked.checkedReadOnly}
                  value="checkedReadOnly" />

              <Checkbox
                  id="story-disabled"
                  label="Disabled"
                  name="disabled"
                  checked={checkboxesChecked.disabled}
                  onChange={this.handleChange}
                  value="disabled"
                  disabled />

              <Checkbox
                  id="story-disabledchecked"
                  label="Disabled
                  (checked)"
                  name="disabledChecked"
                  checked={checkboxesChecked.disabledChecked}
                  onChange={this.handleChange}
                  value="disabledChecked"
                  disabled />

              <Checkbox
                  id="story-eventhandlers"
                  label="Event handlers (see Actions tab)"
                  name="event"
                  checked={checkboxesChecked.event}
                  onChange={this.handleChange}
                  value="event"
                  onBlur={action('onBlur')}
                  onFocus={action('onFocus')} />

            </form>
          </CardSegment>
        </Card>
      </div>
    );
  }
}

export default CheckboxController;
