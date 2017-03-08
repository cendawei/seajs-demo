seajs.config({

    // 别名配置
    alias: {
        'jquery': 'public/jquery-1.11.3.min.js'
    },

    // 路径配置
    paths: {
        'public': 'js'
    },

    // 变量配置
    vars: {
        'locale': 'zh-cn'
    },

    // 调试模式
    debug: true,

    // Sea.js 的基础路径
    //base: '/',

    // 文件编码
    charset: 'utf-8'
});

seajs.use('./a', function(a) {
    var html = a.rendera.init();
    document.getElementById('content').innerHTML = html;
});