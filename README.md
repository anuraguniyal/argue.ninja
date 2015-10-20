All modules/libs are installed using npm, which requires Node.js, install it from here https://nodejs.org/en/
Nodei.js comes with npm but update it with this command
$ sudo npm install npm -g

We use 'Browserify' so that we can include javascript modules using 'require', 'Gulp' is used as a build system, all such dependency can be installed by running
$ npm install
It will pickup Dependencies from package.json in project folder.

We do not commit node_modules_ as part of git repo, `so npm install` is needed everytime, somebody adds a new lib

Install gulp and browserify globally so that you can use gulp command directly
$ sudo npm install -g gulp
$ sudo npm install -g browserify

I am following http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/ for gulp+browserify

development
===========
To serve file during devlopement use this from project folder
$ npm start

Now see the results at http://localhost:8000/dist/
