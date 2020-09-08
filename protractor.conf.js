var outputDir = 'test-result';
var config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      w3c: false
    }
  },
  onPrepare: function() {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter(outputDir, true, true)
    );
  },
  specs: ['test/ui/**/*.spec.js']
};

exports.config = config;
