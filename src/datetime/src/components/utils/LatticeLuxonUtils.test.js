import { DateTime } from 'luxon';

import LatticeLuxonUtils from './LatticeLuxonUtils';

describe('LatticeLuxonUtils', () => {

  test('getWeekDays should return the days of the week starting with SUN', () => {
    const weekdays = new LatticeLuxonUtils().getWeekdays();
    expect(weekdays).toEqual(['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']);
  });

  test('getWeekArray should return a matrix of the month of the provided date', () => {
    const date = DateTime.fromISO('2019-01-01');
    const month = new LatticeLuxonUtils().getWeekArray(date);

    month.forEach((week) => {
      expect(Array.isArray(week)).toBe(true);
      week.forEach((day) => {
        expect(day.isLuxonDateTime).toBe(true);
      });
    });
  });

  test('May 31st, 2020', () => {
    const weeks = (new LatticeLuxonUtils()).getWeekArray(DateTime.fromISO('2020-05-13'));
    expect(weeks[weeks.length - 1][0]).toEqual(DateTime.fromISO('2020-05-31'));
  });
});
