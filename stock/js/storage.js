$(document).ready(function() {
    $('#header-l .stock-storage').addClass('active').parent('ul').addClass('in').parents('li').addClass('active');
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    $("#demo-input-facebook-theme").tokenInput("....", {
        theme: "facebook",
        hintText: "请输入商家名称",
        noResultsText: "没有结果",
        searchingText: "搜索中..."
    });

    $('body').on('click', '.btn-storage-del', function() {
        var obj = $(this);
        var callback = function() {
            obj.parents('tr').remove();
        };
        showMsgPane('确认删除吗', 'confirm', callback);
    });


    $('body').on('keyup', '.somehow input', function() {
        var o = $(this);
        var t = "";
        $.each(o.parents('.somehow').find('input[type=text]'), function(i, item) {
            t = t + $(item).val();
        });

        if (t.length != 0) {
            o.parents('.somehow').find('.btn-primary').parent().show();
        } else {
            o.parents('.somehow').find('.btn-primary').parent().hide();
        }
    });

    $('body').on('click', '.table-active tbody tr', function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });

});
