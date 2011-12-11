
var GeckoBoard = module.exports = function() {};

GeckoBoard.createClient = function(options) {
    if (!options) {
        throw new TypeError('createClient must include options object');
    }

    var instance = new this();
    instance.path = options.path + '/' || '/gecko/';
    instance.server = options.server;
    instance.apiKey = options.key;
    return instance;
};

GeckoBoard.prototype.request = function(name, fn) {
    console.log("Adding ", this.path + name);

    var self = this;

    this.server.get(this.path + name, function(req, res) {
        if (self.apiKey !== req.query.key) {
             res.json({"error": "invalid api key"}, 400);
             return;
        }

        res.json(fn());
    });
};

GeckoBoard.prototype._checkKey = function(key) {
    return this.apiKey === key;
};
