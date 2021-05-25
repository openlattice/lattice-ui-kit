// @flow
import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import * as Colors from '../src/Colors';
import { Card, CardSegment } from '../../layout';

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ColorBlock = styled.div`
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  cursor: pointer;
  height: 100px;
  padding: 10px;
  width: 100%;
`;

export default {
  title: 'Colors',
};

export const LUKColors = () => {
  const getTextColor = (hexcolor :string) :string => {
    const r = parseInt(hexcolor.substr(1, 2), 16);
    const g = parseInt(hexcolor.substr(3, 2), 16);
    const b = parseInt(hexcolor.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
  };

  const copyToClipboard = (e :SyntheticInputEvent<HTMLInputElement>) => {
    const copyText = e.target.getAttribute('value') || '';
    navigator.clipboard.writeText(copyText).then(() => {
      console.info(`"${copyText}" copied to clipboard`);
    });
  };

  return (
    <Card>
      <CardSegment>
        <h1>Colors</h1>
      </CardSegment>
      <ColorGrid>
        {
          Object.entries(Colors).map(([label, colors]) => (
            (isPlainObject(colors) && !isEmpty(colors))
              && (
                <CardSegment>
                  <h4>{label}</h4>
                  <div>
                    {
                      Object.entries(colors).map(([color, hex]) => (
                        isString(hex) && (
                          <ColorBlock
                              color={hex}
                              onClick={copyToClipboard}
                              textColor={getTextColor(hex)}
                              value={`${label}.${color}`}>
                            <Typography color="inherit" variant="button">{color}</Typography>
                            /
                            <Typography variant="button">{hex}</Typography>
                          </ColorBlock>
                        )
                      ))
                    }
                  </div>
                </CardSegment>
              ))
            )
        }
      </ColorGrid>
    </Card>
  );
};
