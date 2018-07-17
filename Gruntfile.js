module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                files: {
                    'dist/css/pretty.css': 'src/css/pretty.less'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/js/magic.min.js': 'src/js/magic.js'
                }
            }
        }


    });
    grunt.loadNpmTasks('grunt-contrib-less');
};