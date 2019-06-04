// @flow
import React, { Component } from 'react';
import { Map } from 'immutable';
import { ResultGrid, Truncated } from './styled/StyledResultComponents';
import Label from '../../../../label';

type Props = {
  className ? :string;
  columns ? :number;
  data :Map;
  labelMap ? :Map;
  emptyString ? :string;
};

class DataGrid extends Component<Props> {

  static defaultProps = {
    className: undefined,
    columns: 4,
    emptyString: '---',
    labelMap: undefined,
  }

  transformDataToDetailsList = () => {
    const { data, emptyString, labelMap } = this.props;

    let details;
    if (labelMap && Map.isMap(labelMap)) {
      details = labelMap.map((label :string, key :string) => Map({
        label,
        value: data.get(key, emptyString),
        key
      }));
    }
    else {
      details = data.map((value :any, key :string) => Map({
        label: key,
        value,
        key
      }));
    }

    return details.toList();
  }

  render() {
    const { className, columns } = this.props;
    const details = this.transformDataToDetailsList();

    return (
      <ResultGrid className={className} columns={columns}>
        { details
          && details.map((detail :Map, index :number) => (
            <div key={index.toString()}>
              <Label subtle>
                {detail.get('label', '')}
              </Label>
              <Truncated>
                {detail.get('value', '')}
              </Truncated>
            </div>
          ))
        }
      </ResultGrid>
    );
  }
}

export default DataGrid;
