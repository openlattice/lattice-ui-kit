const TABLE_HEADERS = [
  { key: 'name', label: 'Subject Name', cellStyle: { width: '33%' } },
  { key: 'dob', label: 'Date of Birth' },
  { key: 'manager', label: 'Manager' },
  { key: 'lastUpdated', label: 'Last Updated' },
  { key: 'id', label: 'ID', sortable: false },
];

const TABLE_DATA = [
  {
    name: 'Eugene Krabs',
    dob: '1942-11-30',
    manager: 'Spongebob',
    lastUpdated: '2019-09-01',
    id: '1'
  },
  {
    name: 'Squidward Tentacles',
    dob: '',
    manager: 'Smitty',
    lastUpdated: '2019-08-29',
    id: '2'
  },
  {
    name: 'Sandy Cheeks',
    dob: '1987-11-17',
    manager: 'Patrick',
    lastUpdated: '2019-07-30',
    id: '3'
  },
  {
    name: 'Larry the Lobster',
    dob: '1975-06-23',
    manager: 'Patchy',
    lastUpdated: '2019-08-16',
    id: '4'
  },
  {
    name: 'Sheldon Plankton',
    dob: '1942-11-30',
    manager: 'Spongebob',
    lastUpdated: '2019-08-20',
    id: '5'
  },
  {
    name: 'Mrs. Puff',
    dob: '',
    manager: 'Spongebob',
    lastUpdated: '2019-08-21',
    id: '6'
  },
  {
    name: 'Flying Dutchman',
    dob: '1678-04-20',
    manager: 'Spongebob',
    lastUpdated: '2019-06-21',
    id: '7'
  },
  {
    name: 'Spongebob Squarepants',
    dob: '1999-07-17',
    manager: 'Eugene Krabs',
    lastUpdated: '2019-06-21',
    id: '8'
  },
  {
    name: 'Patrick Star',
    dob: '1984-03-17',
    manager: 'N/A',
    lastUpdated: '2019-06-21',
    id: '9'
  },
  {
    name: 'Squilliam Fancyson',
    dob: '1965-07-07',
    manager: 'N/A',
    lastUpdated: '2019-06-21',
    id: '10'
  },
];

const PRIORITY_ORDER = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const comparator = (a, b) => {
  const priorityA = PRIORITY_ORDER[a];
  const priorityB = PRIORITY_ORDER[b];

  return priorityA - priorityB;
};

const COMPARATOR_HEADERS = [
  { key: 'title', label: 'Title' },
  { key: 'priority', label: 'Priority', comparator },
];

const COMPARATOR_DATA = [
  {
    id: '1',
    title: 'Issue #1',
    priority: 'High'
  },
  {
    id: '2',
    title: 'Issue #2',
    priority: 'Low'
  },
  {
    id: '3',
    title: 'Issue #3',
    priority: 'Medium'
  },
];

export {
  COMPARATOR_DATA,
  COMPARATOR_HEADERS,
  TABLE_DATA,
  TABLE_HEADERS,
};
