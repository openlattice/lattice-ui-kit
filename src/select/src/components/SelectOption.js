import { components } from 'react-select';

// this exists only as a (hopefully temporary) performance fix when there's many options
// https://github.com/JedWatson/react-select/issues/3128#issuecomment-451936743

/* eslint-disable react/jsx-props-no-spreading */
const SelectOption = ({ children, ...props }) => {
  const { innerProps } = props;
  const { onMouseMove, onMouseOver, ...finalInnerProps } = innerProps;
  const finalProps = Object.assign(props, { innerProps: finalInnerProps });
  return (
    <components.Option {...finalProps}>
      {children}
    </components.Option>
  );
};
/* eslint-enable */

export default SelectOption;
