This module makes it slightly easier to define api widgets for geckoboard


Try this:

    GeckoBoard = GeckoBoard.createClient({
        server: app,
        path: '/widget',
        key: 'asdf123'
    });

and then 
    GeckoBoard.request("live-users", function() {
            res = {item: [{
                        text: "",
                        "value" : 123
                    }, {
                        text: "",
                        value: 238
                    }]
            };

        return res;
    });