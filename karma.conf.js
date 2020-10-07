// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
'use strict';

module.exports = function (config) {
  process.env.TZ = 'Etc/UTC';

  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['AutomatedChrome'],
    client: {
      clearContext: false, // Leave Jasmine Spec Runner output visible in browser
    },
    colors: true,
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/cali-zoo'),
      fixWebpackSourcePaths: true,
      reports: ['html', 'lcovonly', 'text-summary'],
    },
    customLaunchers: {
      AutomatedChrome: {
        base: 'Chrome',
        flags: ['--enable-automation'],
      },
      // https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/continuous-integration.md
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    logLevel: config.LOG_INFO,
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    port: 9876,
    reporters: ['progress', 'kjhtml'],
    restartOnFileChange: true,
    singleRun: false,
    restartOnFileChange: true,
  });
};
