Package.describe({
  name: 'brettle:accounts-multiple',
  version: '0.0.1',
  summary: 'Handles users that login with multiple services.',
  git: ' git@github.com:brettle/meteor-accounts-multiple.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('accounts-base', 'server');
  api.use('underscore', 'server');
  api.use('oauth-encryption', 'server', 'weak');
  api.addFiles('accounts-multiple-server.js', 'server');
  api.export('AccountsMultiple');
});

Package.onTest(function(api) {
  api.use('brettle:accounts-multiple');
  api.use('brettle:accounts-anonymous');
  api.use('tinytest');
  api.use('underscore');
  api.use('accounts-password');
  api.addFiles('accounts-multiple-server-tests.js', 'server');
});
