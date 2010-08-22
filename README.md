heroku-express
==============

This is a Hello World [express][expressjs] 1.0 app to get going on [heroku's][heroku] experimental [node.js][node] support.  Heroku does not support any packagement management at this time so this project follows the convention of putting everything in `vendor`.

It uses the [html 5 boilerplate][boilerplate] from github to give you a good place to get started.  This gives you a default layout and a bunch of extra crap you probably wouldn't want to have to track down yourself.

Clone this repo and you're ready to go.

Running
=======

For local development you can simply run `node` on the server.js file at the root of the project.  Keep in mind that it doesn't reload code dynamically so you'll end up restarting the server quite often. :)

    % node server.js

Setup
=====

Follow the instructions on the [heroku beta-docs site][beta-docs] to create a project.  It should be as simple as:

    % heroku create my-knockout-app --stack beech
    % git push heroku master

Each time you push to heroku it will display a link that you can open to see your running application.

Branches
========

There's also a few branches for other use cases on heroku

* Vanilla [Connect][connectjs] App - [link][connect-branch]
* Express 0.14.1 (Old Express Version) - [link][v0.14.1-branch]

[heroku]: http://heroku.com
[node]: http://nodejs.org
[connectjs]: http://senchalabs.github.com/connect/
[expressjs]: http://expressjs.com
[boilerplate]: http://github.com/paulirish/html5-boilerplate
[beta-docs]: http://docs-beta.heroku.com/
[connect-branch]: http://github.com/atmos/heroku-express/tree/connect
[v0.14.1-branch]: http://github.com/atmos/heroku-express/tree/v0.14.1
