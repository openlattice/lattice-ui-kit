import { css } from 'styled-components';
import { LATTICE_SELECT } from '../consts';

export default css`
  .${LATTICE_SELECT}__control {
    min-height: 44px;
    border-radius: 3px;
    background-color: #f9f9fd;
    border: solid 1px #dcdce7;
    margin-top: 10px;
    box-shadow: 0 0 0 0;

    :hover {
      background-color: #f0f0f7;
      border: solid 1px #dcdce7;
    }
  }

  .${LATTICE_SELECT}__control.${LATTICE_SELECT}__control--is-focused {
    border: solid 1px #6124e2;
    box-shadow: 0 0 0 0;
    background-color: white;
  }

  .${LATTICE_SELECT}__menu {
    display: ${({ hideMenu }) => (hideMenu ? 'none' : 'block')};
  }

  .${LATTICE_SELECT}__option {
    color: #555e6f;
    font-size: 14px;
    line-height: 19px;

    :active {
      background-color: #e4d8ff;
    }
  }

  .${LATTICE_SELECT}__option--is-focused {
    background-color: #f0f0f7;
  }

  .${LATTICE_SELECT}__option--is-selected {
    background-color: #e6e6f7;
    color: #6124e2;
  }

  .${LATTICE_SELECT}__single-value {
    color: #2e2e34;
    font-size: 14px;
    line-height: 19px;
  }

  .${LATTICE_SELECT}__indicator-container {
    margin-right: '5px';
    color: '#b6bbc7';
  }

  .${LATTICE_SELECT}__indicator-separator {
    display: none;
  }

  .${LATTICE_SELECT}__clear-indicator {
    padding: '0';
    margin: '5px';
  }

  .${LATTICE_SELECT}__dropdown-indicator {
    display: ${({ hideMenu }) => (hideMenu ? 'none' : 'flex')};
    color: #b6bbc7;
    padding: '0';
    margin: '5px';
  }
`;
