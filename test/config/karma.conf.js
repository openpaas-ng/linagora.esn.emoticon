'use strict';

module.exports = function(config) {
  config.set({
    basePath: '../../',
    files: [
      'frontend/components/chai/chai.js',
      'frontend/components/lodash/dist/lodash.min.js',
      'frontend/components/jquery/dist/jquery.min.js',
      'frontend/components/angular/angular.js',
      'frontend/components/angular-mocks/angular-mocks.js',
      'frontend/components/sinon-chai/lib/sinon-chai.js',
      'frontend/components/angular-component/dist/angular-component.min.js',
      'node_modules/sinon/pkg/sinon.js',
      'frontend/js/**/*.module.js',
      'frontend/js/**/*.js',
      'frontend/**/*.pug'
    ],
    frameworks: ['mocha'],
    colors: true,
    singleRun: true,
    autoWatch: true,
    browsers: ['PhantomJS', 'Chrome', 'Firefox'],
    reporters: ['coverage', 'spec'],
    preprocessors: {
      'frontend/js/**/!(*spec).js': ['coverage'],
      '**/*.pug': ['ng-jade2module']
    },

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-mocha',
      'karma-coverage',
      'karma-spec-reporter',
      '@linagora/karma-ng-jade2module-preprocessor'
    ],

    coverageReporter: {type: 'text', dir: '/tmp'},

    ngJade2ModulePreprocessor: {
      stripPrefix: 'frontend',
      cacheIdFromPath: function(filepath) {
        var cacheId = filepath.replace(/pug$/, 'html').replace(/^frontend/, '/linagora.esn.emoticon');

        return cacheId;
      },
      prependPrefix: '/linagora.esn.emoticon',
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('templates')
      jadeRenderConfig: {
        __: function(str) {
          return str;
        }
      },
      moduleName: 'jadeTemplates'
    }

  });
};
