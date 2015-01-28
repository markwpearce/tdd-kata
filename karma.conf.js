'use strict';

module.exports = function(karma) {

  var karmaConf = {

    basePath: __dirname,

    browsers: ['PhantomJS'],
    frameworks: [ 'jasmine'],

    files: [
      "src/**/*.js"
    ],

    reporters: [ 'spec',  'coverage'],

       // use autoWatch=true for quick and easy test re-execution once files change
    autoWatch: true,


    coverageReporter: {
      reporters: [
          {type: 'text-summary', dir: 'reports/coverage/' }
      ]
    }


  };


  karma.set(karmaConf);
};
