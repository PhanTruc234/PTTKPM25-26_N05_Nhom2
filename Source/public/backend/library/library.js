(function(){
    'use strict';
    var HT = {};
    var $document = $(document);

    HT.switchery = () => {
        $('.js-switch').each(function(){
            var color = $(this).data('color') ? $(this).data('color') : '#1AB394';
            var switchery = new Switchery(this, { color: color });
        });
    }  

    $document.ready(function(){
        HT.switchery();
    });
})(jQuery);