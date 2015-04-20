Requirements:
------------

* npm
* gulp

Installation:
-------------

1. go to https://nodejs.org/ and install nodejs, it will automatically install npm

2. ```npm install -g gulp```

Initialization:
---------------

run ``` npm install```

run ``` bower install```

Usage:
------

There are two directoryes app and public. In the app directiry there are all files which are resposible for application. In the public there are minified and concatenated files. All you need is file *index.html* in the public directory. All logic you should write in the app and gulp will automatically build files to public

1. run task serve of gulp ```gulp serve```
2. Change main layout in *index.html*
3. All logic write in app directory
