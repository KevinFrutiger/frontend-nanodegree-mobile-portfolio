module.exports = function(grunt) {

  grunt.initConfig({

    /* Build */

    clean: {
      build: {
        src: ['deploy/*']
      }
    },

    htmlmin: {
      main: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeComments: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.html'],
          dest: 'deploy/'
        }]
      },
      views: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeComments: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: 'src/views/',
          src: ['*.html'],
          dest: 'deploy/views/'
        }]
      }
    },

    cssmin: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css'],
          dest: 'deploy/css/'
        }]
      },
      views: {
        files: [{
          expand: true,
          cwd: 'src/views/css/',
          src: ['*.css'],
          dest: 'deploy/views/css/'
        }]
      }
    },

    imagemin: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'deploy/img/'
        }]
      },
      views: {
        files: [{
          expand: true,
          cwd: 'src/views/images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'deploy/views/images/'
        }]
      }
    },

    uglify: {
      options: {
        mangle: false,
        wrap: false,
        compress: {
          negate_iife: false,
          drop_console: true
        }
      },
      main: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: ['**/*.js'],
          dest: 'deploy/js/'
        }]
      },
      views: {
        files: [{
          expand: true,
          cwd: 'src/views/js/',
          src: ['**/*.js'],
          dest: 'deploy/views/js/'
        }]
      }
    },

    copy: {
      hidden: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.htaccess'],
          dest: 'deploy/',
          dot: true
        }]
      }
    },


    /* Testing */

    jshint: {
      main: ['src/js/*.js']
    },

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

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-pagespeed');

  grunt.registerTask('build', ['htmlmin', 'cssmin', 'imagemin', 'uglify', 'copy']);

};