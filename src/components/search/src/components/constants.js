const mockFilterFields = [
  {
    filter: (searchResult, filter) => {
      if (filter.value === 'All') return true;
      return searchResult.getIn([filter.id, 0]) === filter.value;
    },
    id: 'report-type',
    label: 'Report type',
    options: ['Crisis Template', 'Follow-up'],
  },
  {
    filter: (searchResult, filter) => {
      if (filter.value === 'All') return true;
      return searchResult.getIn([filter.id, 0]) === filter.value;
    },
    id: 'badges',
    label: 'Badges',
    options: ['Officer Safety', 'Substance use'],
  },
  {
    filter: (searchResult, filter) => {
      if (filter.value === 'All') return true;
      return searchResult.getIn([filter.id, 0]) === filter.value;
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
