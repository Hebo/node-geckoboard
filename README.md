This module makes it slightly easier to define API widgets for geckoboard

Install
=======

    npm install geckoboard

Basic Usage
===========

Create a GeckoBoard client and pass in an [express](http://expressjs.com/) instance:

    var app        = require('express').createServer(),
        GeckoBoard = require('geckoboard');

    gecko = GeckoBoard.createClient({
        server: app,
        path: '/widget',
        key: 'asdf123'
    });

and then define request handlers with `request`. Call the `respond` function with `error, data` to render your response to the API:

    gecko.request("live-users", function(respond) {
        res = {item: [{
                    text: "",
                    "value" : 123
                }, {
                    text: "",
                    value: 238
                }]
        };

        respond(null, res);
    });

    app.listen(3000, function() {
        console.log('Listening on port 3000');
    });

Cool, now check out your api at `localhost:3000/widget/live-users`.

Check out the examples folder for more info.


API Keys
--------

If you set an API key, the server will use HTTP basic auth. Your key goes in the username field.
