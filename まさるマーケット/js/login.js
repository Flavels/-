// 登录表单提交事件
$('#login-form').on('submit', function(e) {
    e.preventDefault();

    var email = $('#email').val();
    var password = $('#password').val();

    var user = JSON.parse(localStorage.getItem('user'));

    // 验证用户信息
    if (user && user.email === email && user.password === password) {
        // 设置登录状态和会话过期时间（5分钟）
        var expireTime = new Date(new Date().getTime() + 5 * 60000);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('sessionExpire', expireTime.getTime());

        // 重定向到用户页面
        window.location.href = '../home/homepage.html';
    } else {
        alert('メールアドレスまたはパスワードが正しくありません。');
    }
});
