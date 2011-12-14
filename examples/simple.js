/* node:true, radix:true*/
var app        = require('express').createServer(),
    GeckoBoard = require('geckoboard');

gecko = GeckoBoard.createClient({
    server: app,
    path: '/widget',
    key: null
});

var port = process.env.PORT || 3000;

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

app.listen(port, function() {
    console.log('Listening on port ' + port);
});