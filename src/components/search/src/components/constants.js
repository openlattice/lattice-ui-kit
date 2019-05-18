// @flow
import { List, Map } from 'immutable';
import intersection from 'lodash/intersection';

// TODO: Create class for filterDefinition
const mockFilterFields = [
  {
    filterCallback: (searchResult :Map, selectedOptions :Object[]) => {
      const selectedValues = selectedOptions.map(option => option.value);
      const searchResultValue = searchResult.get('reportType');

      if (selectedValues.length) {
        return selectedValues.includes(searchResultValue);
      }

      return true;
    },
    id: 'reportType',
    label: 'Report type',
    options: ['Crisis Template', 'Follow-up'],
  },
  {
    filterCallback: (searchResult :Map, selectedOptions :Object[]) => {
      const selectedValues = selectedOptions.map(option => option.value);
      const searchResultValue :any[] = searchResult.get('badges', []);

      if (selectedValues.length) {
        return intersection(searchResultValue, selectedValues).length > 0;
      }

      return true;
    },
    id: 'badges',
    label: 'Badges',
    options: ['Officer Safety', 'Substance use'],
  },
  {
    filterCallback: (searchResult :Map, selectedOptions :Object[]) => {
      const selectedValues = selectedOptions.map(option => option.value);
      const searchResultValue = searchResult.get('submitter');

      if (selectedValues.length) {
        return selectedValues.includes(searchResultValue);
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
    reportType: 'Crisis Template',
    badges: ['Officer Safety'],
    submitter: 'squidward@bubblebowl.com'
  }),
  Map({
    reportType: 'Follow-up',
    badges: ['Officer Safety', 'Substance use'],
    submitter: 'squidward@bubblebowl.com',
  }),
  Map({
    reportType: 'Crisis Template',
    badges: ['Officer Safety', 'Substance use'],
    submitter: 'smitty@werbenjagermanjensen.com'
  }),
  Map({
    reportType: 'Follow-up',
    badges: ['Substance use'],
    submitter: 'wumbology@thestudyofwumbo.com'
  }),
  Map({
    reportType: 'Crisis Template',
    badges: ['Officer Safety', 'Substance use'],
    submitter: 'enigma@innermachinations.com'
  }),
  Map({
    reportType: 'Follow-up',
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
