
var GeckoBoard = module.exports = function() {};


GeckoBoard.prototype._basicAuth = function(req, res, next) {
    console.log(req.headers.authorization);
    if (req.headers.authorization && req.headers.authorization.search('Basic ') === 0) {
        if (new Buffer(req.headers.authorization.split(' ')[1], 'base64').toString() == (this.apiKey + ':X')) {
            next();
            return;
        }
    }

    res.header('WWW-Authenticate', 'Basic realm="Auth"');
    if (req.headers.authorization) {
        setTimeout(function () {
            res.send('Authentication required', 401);
        }, 5000);
    } else {
        res.send('Authentication required', 401);
    }
};

GeckoBoard.createClient = function(options) {
    if (!options) {
        throw new TypeError('createClient must include options object');
    }

    var instance = new this();
    instance.path = options.path + '/' || '/widget/';
    instance.server = options.server;
    instance.apiKey = options.key;

    instance.server.configure(function() {
        if (instance.apiKey) {
            instance.server.use(instance._basicAuth.bind(instance));
        }
    });

    return instance;
};

GeckoBoard.prototype.request = function(name, fn) {
    var self = this;

    this.server.get(this.path + name, function(req, res) {
        var responder = function(err, response) {
            res.json(response);
        };

        fn(responder);
    });
};
