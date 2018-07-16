$(function () {
    min_height();
    switchover({
        nav_parent: ".taskBox ul",
        nav_label: 'li',
        nav_class: 'active'
    });
    switchover({
        nav_parent: ".platform ul",
        nav_label: 'li',
        nav_class: 'active'
    });
    $(".screen").click(function () {
        $(".selectBox").show();
        $("footer").hide();
        // PC端无法滚动
        $("body").css({
            overflow: "hidden"
        });
        // 移动端无法滚动
        $('.content,.bg').bind("touchmove", function (e) {
            e.preventDefault();
        });
    })
    $(".accomplish").click(function () {
        $(".selectBox").hide();
        $("footer").show();
        $("body").css({
            overflow: "visible"
        });
    })
})