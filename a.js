define(function(require, exports, module) {
    // 异步加载一个模块，在加载完成时，执行回调
    var rendera = {
        init: function(){
            var data = {
                title: '基本例子',
                isAdmin: true,
                list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
            };

            var b = require('./b');
            return b.renderb.render(data);
        }
    }
    exports.rendera = rendera;
});