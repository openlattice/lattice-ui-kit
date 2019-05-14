// @flow
import * as React from 'react';
import styled from 'styled-components';

const CountIndicator = styled.div`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type Props = {
  getStyles :(name :string, props :any) => Object;
  children :React.ChildrenArray<any> | React.Element<any>
};

class ValueContainer extends React.Component<Props> {

  renderChildren = () => {
    const { children } = this.props;
    const count = React.Children.count(children);
    if (count > 2) {
      const newChildren = React.Children.toArray(children);
      newChildren.splice(
        1,
        newChildren.length - 2,
        <CountIndicator key="count-indicator">
          {`+${newChildren.length - 2} Filter`}
        </CountIndicator>
      );
      return newChildren;
    }

    return children;
  }

  render() {
    const { getStyles } = this.props;
    const style = {
      ...getStyles('valueContainer', this.props),
      flexWrap: 'nowrap',
    };
    return (
      <div style={style}>
        
        { this.renderChildren() }
      </div>
    );
  }
}

export default ValueContainer;
