import { css } from 'styled-components';

export const selectStyles = css`
  .lattice-select__control {
    min-height: 44px;
    border-radius: 3px;
    background-color: #f9f9fd;
    border: solid 1px #dcdce7;
    margin-top: 10px;
    box-shadow: 0 0 0 0px;

    :hover {
      background-color: #f0f0f7;
      border: solid 1px #dcdce7;
    }
  }

  .lattice-select__control.lattice-select__control--is-focused {
    border: solid 1px #6124e2;
    box-shadow: 0 0 0 0px;
    background-color: #fff;
  }

  .lattice-select__option {
    color: #555e6f;
    font-size: 14px;
    line-height: 19px;

    :active {
      background-color: #e4d8ff;
    }
  }

  .lattice-select__option--is-focused {
    background-color: #f0f0f7;
  }

  .lattice-select__option--is-selected {
    background-color: #e6e6f7;
    color: #6124e2;
  }

  .lattice-select__single-value {
    color: #2e2e34;
    font-size: 14px;
    line-height: 19px;
  }

  .lattice-select__indicator-separator {
    display: none;
  }
`;
