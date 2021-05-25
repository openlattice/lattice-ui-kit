// @flow
import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';
import styled from 'styled-components';
import { readableColor } from 'polished';
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
            isPlainObject(colors) && !isEmpty(colors)
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
                              textColor={readableColor(hex, 'black', 'white')}
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
