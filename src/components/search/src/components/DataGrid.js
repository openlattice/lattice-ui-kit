// @flow
import React, { Component } from 'react';
import { Map } from 'immutable';
import { ResultGrid, Truncated } from './styled/StyledResultComponents';
import Label from '../../../../label';

type Props = {
  classNames ? :string;
  columns ? :number;
  data :Map;
  labelMap ? :Map;
};

class DataGrid extends Component<Props> {

  static defaultProps = {
    classNames: undefined,
    columns: 4,
    labelMap: undefined,
  }

  transformDataToDetailsList = () => {
    const { data, labelMap } = this.props;

    let details;
    if (labelMap && Map.isMap(labelMap)) {
      details = labelMap.map((label :string, key :string) => Map({
        label,
        value: data.get(key, ''),
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
    const { classNames, columns } = this.props;
    const details = this.transformDataToDetailsList();

    return (
      <ResultGrid classNames={classNames} columns={columns}>
        { details
          && details.map((detail :Map, index :number) => (
            <div key={index.toString()}>
              <Label bold>
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
