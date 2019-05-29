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
    labelMap: Map(),
  }

  transformDataToDetailsList = () => {
    const { data, labelMap } = this.props;
    const detail = data.map((value :any, key :string) => {
      let label = key;

      if (labelMap && Map.isMap(labelMap)) {
        label = labelMap.get(key, key);
      }

      return Map({
        key,
        label,
        value,
      });
    });
    return detail.toList();
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
