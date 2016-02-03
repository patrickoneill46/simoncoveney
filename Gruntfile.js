module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

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
          img: {
            src: ['img/*.png'],
            dest: 'dist/img',
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
        }

    });

    grunt.registerTask('default', ['cssmin', 'includes']);
}