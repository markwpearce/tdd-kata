'use strict';

module.exports = function(karma) {

  var karmaConf = {

    basePath: __dirname,

    browsers: ['PhantomJS'],
    frameworks: [ 'jasmine'],

    files: [

      { pattern: "src/**/*.js",
        watched: true,
        included: true,
        served: true
      }
      "test/**/*.spec.js"
    ],

    reporters: [ 'spec',  'coverage'],

       // use autoWatch=true for quick and easy test re-execution once files change
    autoWatch: true,


    coverageReporter: {
      reporters: [
        { type: 'html', dir: 'reports/test/unit/coverage' },
        { type: 'lcovonly', dir: 'reports/test/unit/coverage' },
        { type: 'json', dir: 'reports/test/unit/coverage' },
        { type: 'cobertura', dir: 'reports/test/unit/coverage' },
        {type: 'text-summary', dir: 'reports/coverage/' }
      ]
    }


  };


  karma.set(karmaConf);
};
