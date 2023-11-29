$(document).ready(function() {
    // 加载导航栏并插入到页面中
    $("#navbar-placeholder").load("../common/navbar.html", function() {
        updateAccountMenu();
    });
});

// 根据登录状态更新账户菜单
function updateAccountMenu() {
    const isLoggedIn = checkLoginStatus(); // 检查登录状态的函数

    if (isLoggedIn) {
        $("#register").hide();
        $("#login").hide();
        $("#myaccount").show();
    } else {
        $("#register").show();
        $("#login").show();
        $("#myaccount").hide();
    }
}

// 示例函数：检查用户是否登录
function checkLoginStatus() {
    // 这里应该包含检查用户登录状态的代码
    // 例如，可以从localStorage、cookies或服务器端session获取
    // 下面的代码仅为示例
    return localStorage.getItem('isLoggedIn') === 'true';
}

