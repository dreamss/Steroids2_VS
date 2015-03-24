The template export wizard wont work, errors on index...

** IMPORTANT: Make sure you git-checkout to a folder with 6 characters or less in the name, in the root of the HDD. otherwise you get path to long issues! IE: C:\proj1 **


* Instructions:

1. Download http://nodejstools.codeplex.com/ and  https://visualstudiogallery.msdn.microsoft.com/dcbc5325-79ef-4b72-960e-0a51ee33a0ff for VS 2015 (make sure u select the right file to download)
2. Open project in VS 2015
3. open config/app.coffee bower.json package.json from solution explorer and edit the app name 
4. View->other windows->Task Runner explorer
6. right click on "shell_steroids_login"-> Run
7. right click on "shell_steroids_deploy_allowConfigCreation"-> Run

* I suggest you also do this: (Look at Task_Runner_Explorer_Bindings.png)

8. Readd shell_steroids_deploy to "After build" in Task Runner Explorer Bindings
9. Readd steroids-make-fresh to "Clean" in Task Runner Explorer Bindings
10. Readd shell_steroids_update and under it add shell_steroids_connect_livereload to "Project Open" in Task Runner Explorer Bindings


* Docs:
- https://github.com/AppGyver/steroids
- http://docs.appgyver.com/tooling/cli/
- http://docs.appgyver.com/tooling/build-service/build-settings/deploying-to-cloud/