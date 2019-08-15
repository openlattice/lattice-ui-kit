// @flow
import { List, Map } from 'immutable';
import intersection from 'lodash/intersection';
import isArray from 'lodash/isArray';
import type { FilterFieldDefinition } from '../../types';
import type { ReactSelectValue } from '../../../../select/types';

// TODO: Create class for filterDefinition
const mockFilterFields :FilterFieldDefinition[] = [
  {
    filterCallback: (searchResult :Map, filterValues :ReactSelectValue) => {
      if (isArray(filterValues)) {
        const values = filterValues.map((option) => option.value);
        const searchResultValue = searchResult.get('reportType');

        if (values.length) {
          return values.includes(searchResultValue);
        }
      }

      return true;
    },
    id: 'reportType',
    label: 'Report type',
    options: ['Report #1', 'Report #2'],
  },
  {
    filterCallback: (searchResult :Map, filterValues :ReactSelectValue) => {
      if (isArray(filterValues)) {
        const values = filterValues.map((option) => option.value);
        const searchResultValue :any[] = searchResult.get('badges', []);

        if (values.length) {
          return intersection(searchResultValue, values).length > 0;
        }
      }

      return true;
    },
    id: 'badges',
    label: 'Badges',
    options: ['Badge #1', 'Badge #2'],
  },
  {
    filterCallback: (searchResult :Map, filterValues :ReactSelectValue) => {
      if (isArray(filterValues)) {
        const values = filterValues.map((option) => option.value);
        const searchResultValue = searchResult.get('submitter');

        if (values.length) {
          return values.includes(searchResultValue);
        }
      }

      return true;
    },
    id: 'submitter',
    label: 'Submitter',
    options: [
      'squidward@bubblebowl.com',
      'smitty@werbenjagermanjensen.com',
      'wumbology@thestudyofwumbo.com',
      'enigma@innermachinations.com'
    ],
  },
];

const mockSearchResultsForReports = List([
  Map({
    reportType: 'Report #1',
    badges: ['Badge #1'],
    submitter: 'squidward@bubblebowl.com'
  }),
  Map({
    reportType: 'Report #2',
    badges: ['Badge #1', 'Badge #2'],
    submitter: 'squidward@bubblebowl.com',
  }),
  Map({
    reportType: 'Report #1',
    badges: ['Badge #1', 'Badge #2'],
    submitter: 'smitty@werbenjagermanjensen.com'
  }),
  Map({
    reportType: 'Report #2',
    badges: ['Badge #2'],
    submitter: 'wumbology@thestudyofwumbo.com'
  }),
  Map({
    reportType: 'Report #1',
    badges: ['Badge #1', 'Badge #2'],
    submitter: 'enigma@innermachinations.com'
  }),
  Map({
    reportType: 'Report #2',
    submitter: 'enigma@innermachinations.com'
  }),
]);

const mockSearchResultsForPeople = List([
  Map({
    lastName: 'Werbenjagermanjensen',
    firstName: 'Smitty',
    middleName: '',
    sex: 'M',
    gender: 'M',
    ethnicity: 'Fish',
    dob: '02/22/2002',
    identifier: '365ba027-0c71-47d1-a5f4-61346ed96d8c',
  }),
  Map({
    lastName: 'Thornton',
    firstName: 'Cameron',
    middleName: 'Orville',
    sex: 'M',
    gender: 'M',
    ethnicity: 'Black / African American',
    dob: '01/05/1982',
    identifier: '565ba027-0c71-47d1-a5f4-61346ed96d8c',
  }),
  Map({
    lastName: 'Gerner',
    firstName: 'Timothy',
    middleName: 'Pernell',
    sex: 'M',
    gender: 'M',
    ethnicity: 'Native Hawaiian or Other Pacific Islander',
    dob: '10/02/1991',
    identifier: '465ba027-0c71-47d1-a5f4-61346ed96d8c',
  })
]);

const mockResultLabels = Map({
  lastName: 'Last name',
  firstName: 'First name',
  middleName: 'Middle name',
  sex: 'Sex',
  gender: 'Gender',
  ethnicity: 'Ethnicity',
  dob: 'DOB',
  identifier: 'Identifier',
});

export {
  mockFilterFields,
  mockResultLabels,
  mockSearchResultsForPeople,
  mockSearchResultsForReports,
};
