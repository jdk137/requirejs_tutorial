// require.js 模块
define(['jquery'], function($) {
  var $container;
  var page1 = {
    init: function(dom) {
      $container = $(dom);
      $container.find(".time").html('' + new Date());
    }
  };
  return page1;
});