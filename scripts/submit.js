const shell = require('shelljs');

shell.exec('git archive HEAD | gzip > submission.tar.gz');
