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
    clickable: BLUE.B100,
    deletable: BLUE.B200,
  },
  green: {
    background: GREEN.G00,
    color: GREEN.G400,
    clickable: GREEN.G100,
    deletable: GREEN.G200,
  },
  magenta: {
    background: MAGENTA.M00,
    color: MAGENTA.M400,
    clickable: MAGENTA.M100,
    deletable: MAGENTA.M200,
  },
  orange: {
    background: ORANGE.O00,
    color: ORANGE.O500,
    clickable: ORANGE.O100,
    deletable: ORANGE.O200,
  },
  red: {
    background: RED.R00,
    color: RED.R400,
    clickable: RED.R100,
    deletable: RED.R200,
  },
  teal: {
    background: TEAL.T00,
    color: TEAL.T500,
    clickable: TEAL.T100,
    deletable: TEAL.T200,
  },
  violet: {
    background: VIOLET.V00,
    color: VIOLET.V400,
    clickable: VIOLET.V100,
    deletable: VIOLET.V200,
  },
  yellow: {
    background: YELLOW.Y00,
    color: YELLOW.Y500,
    clickable: YELLOW.Y100,
    deletable: YELLOW.Y200,
  },
  primary: {
    background: PURPLE.P300,
    color: 'white',
    deletable: PURPLE.P200,
  },
  secondary: {
    background: PURPLE.P00,
    color: PURPLE.P400,
    deletable: PURPLE.P200,
  },
};
