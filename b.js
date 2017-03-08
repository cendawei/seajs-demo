define(function(require, exports, module) {
    var renderb = {
        render: function(data) {
            var tmpl = require('./view-build/tmpl');
            return tmpl(data);
        }
    };

    exports.renderb = renderb;

});