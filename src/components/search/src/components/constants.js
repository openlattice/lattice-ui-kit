const mockFilterFields = [
  {
    filterCallback: (searchResult, filter) => {
      // if (filter.value === 'All') return true;
      // return searchResult.getIn([filter.id, 0]) === filter.value;
      return true;
    },
    id: 'report-type',
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

export {
  mockFilterFields
};
