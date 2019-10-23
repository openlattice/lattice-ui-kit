// @flow
import LuxonUtils from '@date-io/luxon';
import type { DateTime, DurationObject } from 'luxon';

// Extend LuxonUtils to start week on Sunday
// https://github.com/mui-org/material-ui-pickers/issues/1270
/* eslint-disable class-methods-use-this */
class LatticeLuxonUtils extends LuxonUtils {
  getWeekdays() {
    return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  }

  getWeekArray(date :DateTime) {
    const { days = 0 } :DurationObject = date
      .endOf('month')
      .endOf('week')
      .diff(date.startOf('month').startOf('week'), 'days')
      .toObject();

    const weeks :DateTime[][] = [];
    new Array(Math.round(days))
      .fill(0)
      .map((_, i) => i)
      .map((day :number) => date
        .startOf('month')
        .startOf('week')
        .minus({ days: 1 })
        .plus({ days: day }))
      .forEach((v :DateTime, i) => {
        if (i === 0 || (i % 7 === 0 && i > 6)) {
          weeks.push([v]);
          return;
        }

        weeks[weeks.length - 1].push(v);
      });

    return weeks;
  }
}

export default LatticeLuxonUtils;
