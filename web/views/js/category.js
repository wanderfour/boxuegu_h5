
$(function() {
    // 根据左侧一级分类导航切换右侧二级导航页面
    $('.cate-left li').on('click', function() {
        // 获得当前li的索引号
        let index = $(this).index();
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
        $('.cate-right .label-item').eq(index).show();
        $('.cate-right .label-item').eq(index).siblings().hide();
    })
})