
$(function() {
    // 通过ajax获取微课数据列表
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3001/getAllCourse',
        success: function(res) {
            console.log(res);
            if (!res) return console.log('获取微课数据失败');
            // 将获取数据通过模板引擎渲染到页面
            let htmlStr = template('tpl-micro', res.result);
            $('#class-list').html(htmlStr);
        }
    })

})