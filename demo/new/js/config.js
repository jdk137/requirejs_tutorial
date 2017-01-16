require.config({
  baseUrl: './',
  paths: {
    text: 'lib/requirejs/text',
    css: 'lib/requirejs/css',
    jquery: 'lib/jquery.min',
    page1: 'js/1',
    page2: 'js/2'
  },
  shim: { // 模块依赖关系
    /*
    "bootstrap": {
      deps: ["jquery"]
    }
    */
  }
});