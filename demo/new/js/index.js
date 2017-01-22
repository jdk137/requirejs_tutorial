require(['jquery'], function($) {
  var drawPage = {
    'page1': function () {
      require(['text!html/1.html', 'page1', 'requireCss!css/1.css'], function(template, jsModel) {
        $("#content").html(template);
        jsModel.init($("#content").find('#page1'));
      });
    },
    'page2': function () {
      require(['text!html/2.html', 'page2', 'requireCss!css/2.css'], function(template, jsModel) {
        $("#content").html(template);
        jsModel.init($("#content").find('#page2'));
      });
    }
  };

  $('.pageButton').click(function () {
    drawPage[$(this).data('page')]();
  });

  drawPage['page1']();
});