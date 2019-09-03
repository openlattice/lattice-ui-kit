import styled, { css } from 'styled-components';

const getPosition = (props) => {
  const { side } = props;
  switch (side) {
    case 'right':
      return css`
        right: 0;
      `;

    case 'left':
    default:
      return css`
        left: 0;
      `;
  }
};

const DrawerWrapper = styled.div`
  position: fixed;
  background-color: white;
  height: 100%;
  width: 300px;
  top: 0;
  z-index: 900;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);

  ${getPosition};
`;

export {
  // eslint-disable-next-line import/prefer-default-export
  DrawerWrapper
};
