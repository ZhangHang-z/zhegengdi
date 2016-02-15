module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: [
          { src: ['src/xcgqy.js'], dest: 'build/xxx.min.js' }
        ]
      }
    },


    watch: {
      files: ['src/*.js'],
      tasks: ['uglify']  
    },

/*
    jshint: {
     	build: ['src/*.js'],
     	options: {
     		jshintrc: '.jshintrc'
     	}
    }
*/

  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch']);

};




