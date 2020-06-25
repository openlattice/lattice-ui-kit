// @flow
import { DateTime } from 'luxon';

import LatticeLuxonUtils from './LatticeLuxonUtils';

const COMMON_YEAR_KEY = [
  31, // January
  28, // February
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31, // December
];

const LEAP_YEAR_KEY = [
  31, // January
  29, // February
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31, // December
];

const countDaysOfMonth = (weekArray :DateTime[][], month :number) :number => {
  let daysInMonth = 0;
  weekArray.forEach((week) => {
    expect(Array.isArray(week)).toBe(true);
    expect(week).toHaveLength(7);

    week.forEach((day) => {
      expect(day.isValid).toBe(true);
      if (day.get('month') === month) {
        daysInMonth += 1;
      }
    });
  });

  return daysInMonth;
};

const testDaysPerMonthForYear = (year :number, daysPerMonthKey :number[]) => {
  daysPerMonthKey.forEach((numberOfDays, monthIndex) => {
    const date = DateTime.fromObject({ year, month: monthIndex + 1, day: 1 });
    const weekArray :DateTime[][] = new LatticeLuxonUtils().getWeekArray(date);
    const daysInMonth = countDaysOfMonth(weekArray, monthIndex + 1);
    expect(daysInMonth).toEqual(daysPerMonthKey[monthIndex]);
  });
};

describe('LatticeLuxonUtils', () => {
  test('getWeekDays should return the days of the week starting with SUN', () => {
    const weekdays :string[] = new LatticeLuxonUtils().getWeekdays();
    expect(weekdays).toEqual(['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']);
  });


  // https://en.wikipedia.org/wiki/Leap_year
  test('getWeekArray should yield correct number of days per month in a common year', () => {
    // Common years are non-integer multiples of 4 or multiples of 100
    testDaysPerMonthForYear(2019, COMMON_YEAR_KEY);
    testDaysPerMonthForYear(2100, COMMON_YEAR_KEY);
  });

  test('getWeekArray should yield correct number of days per month in a leap year', () => {
    // Leap years are integer multiples of 4 or 400
    testDaysPerMonthForYear(2000, LEAP_YEAR_KEY);
    testDaysPerMonthForYear(2020, LEAP_YEAR_KEY);
  });
});