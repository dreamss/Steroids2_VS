/// <binding AfterBuild='shell_steroids_deploy' ProjectOpened='shell_steroids_update, shell_steroids_connect_livereload' />
/*

Default Gruntfile for AppGyver Steroids
http://www.appgyver.com
Licensed under the MIT license.

*/

module.exports = function (grunt) {
	


   grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks("grunt-steroids");
  grunt.registerTask("default", [
    "steroids-make-fresh"
	]);
	grunt.registerTask('shell_steroids_connect', ['shell:stdconnect']);
	grunt.registerTask('shell_steroids_deploy', ['shell:stddeploy']);
	grunt.registerTask('shell_steroids_deploy_allowConfigCreation', ['shell:stddeployallowConfigCreation']);
	grunt.registerTask('shell_steroids_login', ['shell:stdlogin']);
	grunt.registerTask('shell_steroids_update', ['shell:stdupdate']);
	grunt.registerTask('shell_steroids_log_steroids', ['shell:stdlog']);
	grunt.registerTask('shell_steroids_log_logcat', ['shell:stdloglogcat']);
	grunt.registerTask('shell_steroids_log_logcat_tail', ['shell:stdloglogcattail']);
	grunt.registerTask('shell_steroids_emulate', ['shell:stdemulate']);
	grunt.registerTask('shell_steroids_debug', ['shell:stdconnect']);
	grunt.registerTask('shell_steroids_connect_livereload', ['shell:stdconnectlivereload']);
 
	grunt.initConfig({
		shell: {
			stdconnect: {
				command: 'steroids connect'
			},
			stddebug: {
				command: 'steroids debug'
			},
			stdconnectlivereload: {
				command: 'steroids connect --livereload '
			},
			stddeploy: {
				command: 'steroids deploy'
			},
			stddeployallowConfigCreation: {
				command: 'steroids deploy -allowConfigCreation'
			},
			stdlogin: {
				command: 'steroids login'
			},
			stdlog: {
				command: 'steroids log steroids'
			}, 
			stdloglogcat: {
				command: 'steroids log logcat'
			}, 
			stdloglogcattail: {
				command: 'steroids log logcat -tail'
			}, 
			stdupdate: {
				command: 'steroids update'
			}, 
			stdemulate: {
				command: 'steroids emulate android'
			}


		}
 
	});
 
}
