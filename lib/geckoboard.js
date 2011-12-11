
var GeckoBoard = module.exports = function() {};

GeckoBoard.createClient = function(options) {
    if (!options) {
        throw new TypeError('createClient must include options object');
    }

    var instance = new this();
    instance.path = options.path + '/' || '/widget/';
    instance.server = options.server;
    instance.apiKey = options.key;
    return instance;
};

GeckoBoard.prototype.request = function(name, fn) {
    var self = this;

    this.server.get(this.path + name, function(req, res) {
        if (self.apiKey !== req.query.key) {
             res.json({"error": "invalid api key"}, 400);
             return;
        }

        var responder = function(err, response) {
            res.json(response);
        };

        fn(responder);
    });
};
