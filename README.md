This module makes it slightly easier to define api widgets for geckoboard

Install
=======

    npm install geckoboard

Basic Usage
===========

Create a GeckoBoard client and pass in an express instance:


    GeckoBoard = GeckoBoard.createClient({
        server: app,
        path: '/widget',
        key: 'asdf123'
    });

and then define request handlers with `request`. Call the `respond` function with `error, data` to render your response to the API:

    GeckoBoard.request("live-users", function(respond) {
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