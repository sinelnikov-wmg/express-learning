module.exports = (grunt) => {
  [
    'grunt-cafe-mocha',
    'grunt-contrib-jshint',
    'grunt-exec',
  ].forEach((task) => {
    grunt.loadNpmTasks(task);
  });

  grunt.initConfig({
    cafemocha: {
      all: { src: 'qa/tests-*.js', options: { ui: 'tdd' } },
    },
    jshint: {
      options: {
        esversion: 6,
      },
      app: ['index.js', 'public/js/**/*.js', 'lib/**/*.js'],
      qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
    },
    exec: {
      linkchecker: { cmd: 'linckchecker http://localhost:3000' },
    },
  });
  grunt.registerTask('default', ['cafemocha', 'jshint']);
};
