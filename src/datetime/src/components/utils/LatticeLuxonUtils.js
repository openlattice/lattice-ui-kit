import LuxonUtils from '@date-io/luxon';
import { Info } from 'luxon';

// Extend LuxonUtils to start week on Sunday
// https://github.com/mui-org/material-ui-pickers/issues/1270
/* eslint-disable class-methods-use-this */
class LatticeLuxonUtils extends LuxonUtils {
  getWeekdays() {
    // need to copy the existing, and use Info to preserve localization
    const days = [...Info.weekdaysFormat('short', this.locale)]
      .map((day) => day.toLocaleUpperCase());
    // remove Sun from end of list and move to start of list
    days.unshift(days.pop());
    return days;
  }

  getWeekArray(date) {
    const endDate = date
      .endOf('month')
      // if a month ends on sunday, luxon will consider it already the end of the week
      // but we need to get the _entire_ next week to properly lay that out
      // so we add one more day to cover that before getting the end of the week
      .plus({ days: 1 })
      .endOf('week');
    const startDate = date
      .startOf('month')
      .startOf('week')
      // must subtract 1, because startOf('week') will be Mon, but we want weeks to start on Sun
      // this is the basis for every day in a our calendar
      .minus({ days: 1 });

    const { days } = endDate.diff(startDate, 'days').toObject();

    const weeks = [];
    new Array(Math.round(days))
      .fill(0)
      .map((_, i) => i)
      .map((day) => startDate.plus({ days: day }))
      .forEach((v, i) => {
        if (i === 0 || (i % 7 === 0 && i > 6)) {
          weeks.push([v]);
          return;
        }

        weeks[weeks.length - 1].push(v);
      });

    // a consequence of all this shifting back/forth 1 day is that you might end up with a week
    // where all the days are actually in the previous or next month.
    // this happens when the first day of the month is Sunday (Dec 2019 or Mar 2020 are examples)
    // or the last day of the month is Sunday (May 2020 or Jan 2021 is one example)
    // so we're only including weeks where ANY day is in the correct month to handle that
    return weeks.filter((w) => w.some((d) => d.month === date.month));
  }
}

export default LatticeLuxonUtils;
