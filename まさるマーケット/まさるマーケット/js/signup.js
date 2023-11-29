// 注册表单提交事件
$('#registration-form').on('submit', function(e) {
    e.preventDefault();

    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirm-password').val();

    // 简单的验证
    if (password !== confirmPassword) {
        alert('パスワードが一致しません。');
        return;
    }

    // 存储用户信息
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert('登録が完了しました。');

    // 重定向到登录页面
    window.location.href = '../account_auth/login.html';
});
