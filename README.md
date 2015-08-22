App Developer Club
==================

The App Developer Club is an organization of coders, designers, developers, and entrepreneurs, who simply love to build. This site is currently in development and will eventually feature a web app that would allow members within the club to create portfolios, interact with one another, and connect with industry mentors.


Table of Contents
-----------------

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)


Features
--------

- **OAuth 2.0 Authentication** via Facebook
- MVC Project Structure
- Node.js clusters support
- Rails 3.1-style asset pipeline by connect-assets
- LESS stylesheets (auto-compiled without Gulp/Grunt)
- Contact Form (powered by Mailgun, Sendgrid or Mandrill)
- Cross-Site Request Scripting protection
- **Account Management**
 - Gravatar
 - Profile Details
 - Change Password
 - Forgot Password
 - Reset Password
 - Link multiple OAuth strategies to one account
 - Delete Account


Prerequisites
-------------

- [MongoDB](http://www.mongodb.org/downloads)
- [Node.js](http://nodejs.org)

**Note:** There will be many more packages and plugins necessary to run the application. I suggest reading through which errors are raised when compiling either the web or mobile end and installing those necessary plugins into your computer. Note that you will probably need to install certain versions of python/rvm in order for some packages to work properly.


Getting Started
---------------

Get started by first cloning the repository:

```bash
# Get the latest version:
$ git clone https://github.com/danXyu/ADC_Website.git
$ cd ADC_Website

# In a separate terminal window, run:
$ mongod

# To finally run the web app:
$ npm install
$ node app.js
```

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `nodemon app.js`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`sudo npm install -g nodemon`.


Deployment
----------


Changelog
---------
### 0.0.1 (August 21, 2015)
- Created static forward facing index page for ADC.
- Working on CSS styling to match designer specs.

### 0.1.0 (August 22, 2015)
- Finished styling for ADC site, working on responsivity.
- Added smart email parsing to verify Stanford identities.


Contributing
------------

If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requests are always welcome, but due to the opinionated nature of this
project, I cannot accept every pull request. Please open an issue before
submitting a pull request. This project uses
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a
few minor exceptions. If you are submitting a pull request that involves
Jade templates, please make sure you are using *spaces*, not tabs.

License
-------

The MIT License (MIT)

Copyright (c) 2014-2015 App Developer Club

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
