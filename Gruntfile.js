module.exports = function(grunt) {

  grunt.initConfig({
    pagespeed: {
      options: {
        nokey: true,
        url: "http://test.frutigergroup.com/udacity/project4/index.html",
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