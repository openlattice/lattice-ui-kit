const moment = require('moment');
const PACKAGE = require('../../package.json');

const BANNER = `
${PACKAGE.name} - v${PACKAGE.version}
${PACKAGE.description}
${PACKAGE.homepage}

Copyright (c) 2017-${moment().year()}, OpenLattice, Inc. All rights reserved.
`;

module.exports = {
  BANNER,
};
