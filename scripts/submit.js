const shell = require('shelljs');

// Windows users, please install gow for tar/gzip support
// https://github.com/bmatzelle/gow

shell.exec('tar -zcf submission.tar.gz .git');

