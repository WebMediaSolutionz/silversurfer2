# Installing silversurfer 2

## Step 1: Install Node, NPM

Install Node and NPM on your machine; this typically requires administrative access, 
e.g. become root or use `sudo` (or use a Windows installer).

You must be running at least Node 4.x.x and npm 3.x.x. You can verify 
what, if any, versions you have installed by running `$ node -v` and 
`$ npm -v` in a terminal window.

You can download current versions of these tools [here](https://nodejs.org/en/download/current/).

If you use a Linux-like environment, you are encouraged to use your
package manager to install these tools.

If you use OS X, you may wish to consider installing via [HomeBrew](http://brew.sh/).

## Step 2: Check out the source code

IMPORTANT NOTE: This, and all following steps, should be run as a regular (non-root) user.
Strange problems occur with package installation when you are the root user, or from using
the `sudo` command.

In a command shell, make a clone of the git repository:

`$ git clone https://git.pehr.in/mpierre/silversurfer2.git`

Then enter the directory created. All further commands will be run inside that directory.

`$ cd silversurfer2`

## Step 3: Install the NPM dependencies

`$ npm install`

## Step 4: Run the development server

`$ ng serve`

(This will compile and run the node-based development server, and should automatically 
open your preferred browser to http://localhost:4200/. When application files are changed, 
the server will automatically reload the app in your browser to reflect the changes.
Configuration changes require a restart.

Note: This will provide local access only (e.g. as per URL above). To allow remote
access to the host, provide a HOST=value argument in the string before running the
server:

`$ HOST=192.168.0.10 npm run server`

## Testing

The QuickStart documentation doesn't discuss testing.
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

## Step 5: Run Unit Tests
TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`.

Look for the example `src/app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `$ ng test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

## Step 6: Run End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `src` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured Protractor to find them.

Thereafter, run them with `$ npm run e2e`.

That command first compiles, then simultaneously starts the `lite-server` at `localhost:8080`
and launches Protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart

## Step 7: Run lint

`$ ng lint`

This runs the code linter TSLint, then if it exists with code 0 runs the Karma testrunner
application in the browser according to config/karma.conf.js (Chrome at time of writing).

Code that does not pass TSLint will not be unit testing. Code can be linted independently
by running `$ npm run tslint`, `$ npm run lint` or just `$ ng lint` to identify and resolve code quality
issues.