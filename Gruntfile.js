module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-embed-fonts');

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
              'output.css': ['bootstrap.css', 'fonts.css', 'styles.css', 'image-collage-container.css']
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
            src: ['fonts/gotham-bold-webfont.*'],
            dest: 'dist/'
          }
        },

        embedFonts: {
          all: {
            files: {
              'tmp/fonts.css': ['fonts.css']
            }
          }
        }
    });

    grunt.registerTask('default', ['clean', 'embedFonts', 'cssmin', 'includes', 'copy']);
}