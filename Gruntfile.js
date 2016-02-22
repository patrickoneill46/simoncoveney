module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-embed-fonts');
    grunt.loadNpmTasks('grunt-includes');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        includes: {
          files: {
            src: ['index.html', 'manifesto.html', 'output.css'], // Source files
            dest: 'dist', // Destination directory
            flatten: true,
            cwd: '.',
            options: {
              silent: true,
              banner: '<!-- Developed by Patrick O\'Neill -->'
            }
          },
        },

        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'output.css': ['tmp/styles.css']
            }
          }
        },

        clean: ['dist/', 'tmp/'],

        copy: {
          img: {
            src: ['img/*.png'],
            dest: 'dist/',
          },
          fonts: {
            src: ['fonts/gotham-bold-webfont.*', 'fonts/GothamBook.*'],
            dest: 'dist/'
          }
        },

        embedFonts: {
          all: {
            files: {
              'tmp/fonts.css': ['fonts.css']
            }
          }
        },

        less: {
            development: {
              files: {
                  'tmp/styles.css': 'less/main.less'
              },
            }
        },

        watch: {
            less: {
                files: ['less/*less'],
                tasks: ['less']
            }
        }
    });

    grunt.registerTask('default', ['clean', 'less', 'cssmin', 'includes', 'copy']);
}