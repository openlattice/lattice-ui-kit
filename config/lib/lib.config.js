const moment = require('moment');
const PACKAGE = require('../../package.json');

const BANNER = `
${PACKAGE.name} - v${PACKAGE.version}
${PACKAGE.description}
${PACKAGE.homepage}

Copyright (c) 2017-${moment().year()}, OpenLattice, Inc. All rights reserved.
`;

const ENTRY_FILE_NAME = 'index.js';
const LIB_FILE_NAME = 'lattice-ui-kit';
const LIB_NAMESPACE = 'LatticeUIKit';

module.exports = {
  BANNER,
  ENTRY_FILE_NAME,
  LIB_FILE_NAME,
  LIB_NAMESPACE
};
