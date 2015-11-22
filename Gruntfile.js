module.exports = function(grunt) {

  grunt.initConfig({
    pagespeed: {
      options: {
        nokey: true,
        url: "https://kevinfrutiger.github.io/frontend-nanodegree-web-optimization/",
        locale: "en_US",
        threshold: 90
      },
      desktop: {
        options: {
          strategy: "desktop"
        }
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-pagespeed');
};