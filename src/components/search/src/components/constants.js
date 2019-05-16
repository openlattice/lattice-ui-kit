import { List, Map, fromJS } from 'immutable';

const mockFilterFields = [
  {
    filterCallback: (searchResult, filter) => {
      // if (filter.value === 'All') return true;
      // return searchResult.getIn([filter.id, 0]) === filter.value;
      return true;
    },
    id: 'reportType',
    label: 'Report type',
    options: ['Crisis Template', 'Follow-up'],
  },
  {
    filterCallback: (searchResult, filter) => {
      // if (filter.value === 'All') return true;
      // return searchResult.getIn([filter.id, 0]) === filter.value;
      return true;
    },
    id: 'badges',
    label: 'Badges',
    options: ['Officer Safety', 'Substance use'],
  },
  {
    filterCallback: (searchResult, filter) => {
      // if (filter.value === 'All') return true;
      // return searchResult.getIn([filter.id, 0]) === filter.value;
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
    submitter: 'squidward@bubblebowl.com'
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

const mockSearchResultsForPeople = fromJS([
  [
    {
      value: 'Werbenjagermanjensen',
      label: 'Last name',
      key: 'lastName',
    },
    {
      value: 'Smitty',
      label: 'First name',
      key: 'firstName',
    },
    {
      value: '',
      label: 'Middle name',
      key: 'middleName',
    },
    {
      value: 'M',
      label: 'Sex',
      key: 'sex',
    },
    {
      value: 'M',
      label: 'Gender',
      key: 'gender',
    },
    {
      value: 'Fish',
      label: 'Ethnicity',
      key: 'ethnicity',
    },
    {
      value: '02/22/2002',
      label: 'DOB',
      key: 'dob',
    },
    {
      value: '365ba027-0c71-47d1-a5f4-61346ed96d8c',
      label: 'Identifier',
      key: 'identifier',
    },
  ],
  [
    {
      value: 'Thornton',
      label: 'Last name',
      key: 'lastName',
    },
    {
      value: 'Cameron',
      label: 'First name',
      key: 'firstName',
    },
    {
      value: 'Orville',
      label: 'Middle name',
      key: 'middleName',
    },
    {
      value: 'M',
      label: 'Sex',
      key: 'sex',
    },
    {
      value: 'M',
      label: 'Gender',
      key: 'gender',
    },
    {
      value: 'Black / African American',
      label: 'Ethnicity',
      key: 'ethnicity',
    },
    {
      value: '01/05/1982',
      label: 'DOB',
      key: 'dob',
    },
    {
      value: '565ba027-0c71-47d1-a5f4-61346ed96d8c',
      label: 'Identifier',
      key: 'identifier',
    },
  ],
  [
    {
      value: 'Gerner',
      label: 'Last name',
      key: 'lastName',
    },
    {
      value: 'Timothy',
      label: 'First name',
      key: 'firstName',
    },
    {
      value: 'Pernell',
      label: 'Middle name',
      key: 'middleName',
    },
    {
      value: 'M',
      label: 'Sex',
      key: 'sex',
    },
    {
      value: 'M',
      label: 'Gender',
      key: 'gender',
    },
    {
      value: 'Native Hawaiian or Other Pacific Islander',
      label: 'Ethnicity',
      key: 'ethnicity',
    },
    {
      value: '10/02/1991',
      label: 'DOB',
      key: 'dob',
    },
    {
      value: '465ba027-0c71-47d1-a5f4-61346ed96d8c',
      label: 'Identifier',
      key: 'identifier',
    },
  ]
]);

export {
  mockFilterFields,
  mockSearchResultsForReports,
  mockSearchResultsForPeople
};
