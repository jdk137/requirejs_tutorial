// require.js 模块
define(['jquery'], function($) {
  var $container;
  var page2 = {
    init: function(dom) {
      $container = $(dom);
      $container.find(".time").html(new Date().getFullYear() + '年');
    }
  };
  return page2;
});