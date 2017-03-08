module.exports = function(grunt) {
    grunt.initConfig({
        tmod: {
            build: {
                src: './view/*.html',
                dest: './view-build',
                options: {
                    base: "./view",
                    cache: true,
                    minify: true,
                    syntax: 'simple',
                    charset: "utf-8",
                    type: "cmd",
                    compress: true,
                    helper: "./view/template-helper.js"
                }
            }
        },
        watch: {
            template: {
                files: '<%=tmod.build.src%>',
                tasks: ['tmod:build'],
                options: {
                    spawn: false
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-tmod');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['tmod:build', 'watch:template']);
};