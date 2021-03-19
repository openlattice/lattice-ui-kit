import * as Colors from '../../../colors';

const {
  NEUTRAL,
  PURPLE,
  BLUE,
  TEAL,
  GREEN,
  YELLOW,
  ORANGE,
  RED,
  MAGENTA,
  VIOLET
} = Colors;

export default {
  default: {
    background: NEUTRAL.N00,
    color: NEUTRAL.N600
  },
  blue: {
    background: BLUE.B00,
    color: BLUE.B400,
    clickable: BLUE.B100
  },
  green: {
    background: GREEN.G00,
    color: GREEN.G400,
    clickable: GREEN.G100
  },
  magenta: {
    background: MAGENTA.M00,
    color: MAGENTA.M400,
    clickable: MAGENTA.M100
  },
  orange: {
    background: ORANGE.O00,
    color: ORANGE.O500,
    clickable: ORANGE.O100
  },
  purple: {
    background: PURPLE.P00,
    color: PURPLE.P400,
    clickable: PURPLE.P100
  },
  red: {
    background: RED.R00,
    color: RED.R400,
    clickable: RED.R100
  },
  teal: {
    background: TEAL.T00,
    color: TEAL.T500,
    clickable: TEAL.T100
  },
  violet: {
    background: VIOLET.V00,
    color: VIOLET.V400,
    clickable: VIOLET.V100
  },
  yellow: {
    background: YELLOW.Y00,
    color: YELLOW.Y500,
    clickable: YELLOW.Y100
  },
  primary: {
    color: 'white'
  },
  secondary: {
    color: PURPLE.P400
  },
};
