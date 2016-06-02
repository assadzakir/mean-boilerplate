exports = module.exports = function(app) {
    app.api = {};

    require('./user')(app);
};