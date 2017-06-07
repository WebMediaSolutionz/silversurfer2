# Installing silversurfer 2 Frontend

## Step 1: Install Node, NPM

Install Node and NPM on your machine; this typically requires administrative access, 
e.g. become root or use `sudo` (or use a Windows installer).

You must be running at least Node 4.x.x and npm 3.x.x. You can verify 
what, if any, versions you have installed by running `node -v` and 
`npm -v` in a terminal window.

You can download current versions of these tools [here](https://nodejs.org/en/download/current/).

If you use a Linux-like environment, you are encouraged to use your
package manager to install these tools.

If you use OS X, you may wish to consider installing via [HomeBrew](http://brew.sh/).

## Step 2: Check out the source code

IMPORTANT NOTE: This, and all following steps, should be run as a regular (non-root) user.
Strange problems occur with package installation when you are the root user, or from using
the `sudo` command.

In a command shell, make a clone of the git repository:

`$ git clone https://git.pehr.in/mpierre/silversurfer2-frontend.git frontend`

Then enter the directory created. All further commands will be run inside that directory.

`$ cd frontend`

## Step 3: Install the NPM dependencies

`$ npm install`

## Step 4: Run the development server

`$ npm run server` or `$ ng serve`

(This will compile and run the node-based development server, and should automatically 
open your preferred browser to http://localhost:4200/. When application files are changed, 
the server will automatically reload the app in your browser to reflect the changes.
Configuration changes require a restart.

Note: This will provide local access only (e.g. as per URL above). To allow remote
access to the host, provide a HOST=value argument in the string before running the
server:

`$ HOST=192.168.0.10 npm run server`

## Step 5: Run unit tests

`$ npm run test` or `$ ng test`

This runs the code linter TSLint, then if it exists with code 0 runs the Karma testrunner
application in the browser according to config/karma.conf.js (Chrome at time of writing).

Code that does not pass TSLint will not be unit testing. Code can be linted independently
by running `npm run tslint`, `npm run lint` or just `ng lint` to identify and resolve code quality
issues.
