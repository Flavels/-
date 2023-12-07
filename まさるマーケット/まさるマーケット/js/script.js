$(document).ready(function() {
    // insert navbar and footer into other htmls
    $("#navbar-placeholder").load("../common/navbar.html", function() {
        updateNavbarLinks();
        redirectIfNotLoggedIn();
    });
    $("#footer-placeholder").load("../common/footer.html");

    // sign up
    $('#registration-form').on('submit', function(e) {
        e.preventDefault();
        registerUser();
    });

    // login
    $('#login-form').on('submit', function(e) {
        e.preventDefault();
        loginUser();
    });

    // 每次页面加载时检查会话
    checkSession();

    // logout
    $('#logout-btn').on('click', function() {
        logoutUser();
    });
    displayUsername();

    // Display Search
    displaySearchResults();

});

function registerUser() {
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirm-password').val();

    if (password !== confirmPassword) {
        alert('パスワードが一致しません。');
        return;
    }

    // 将用户信息保存到 localStorage
    var userData = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('登録が完了しました。');
    window.location.href = '../account_auth/login.html'; // 重定向到登录页面
}

function loginUser() {
    var email = $('#email').val();
    var password = $('#password').val();
    var userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.email === email && userData.password === password) {
        // 设置会话过期时间为60分钟
        var expireTime = new Date(new Date().getTime() + 60 * 60000);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('sessionExpire', expireTime.getTime());
        localStorage.setItem('currentUsername', userData.username);

        window.location.href = '../home/homepage.html'; // 重定向到主页
    } else {
        alert('メールアドレスまたはパスワードが正しくありません。');
    }
}

function checkSession() {
    var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    var sessionExpire = localStorage.getItem('sessionExpire');

    if (isLoggedIn && sessionExpire && new Date().getTime() > Number(sessionExpire)) {
        // 会话过期，清除登录状态
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('sessionExpire');
        // 根据需要可以添加重定向到登录页面的代码
    }
}


function updateNavbarLinks() {
    var isLoggedIn = checkLoginStatus();

    if (isLoggedIn) {
        $('#register').hide();
        $('#login-mark').hide();
        $('#myaccount').show();
    } else {
        $('#register').show();
        $('#login-mark').show();
        $('#myaccount').hide();
    }
}

function redirectIfNotLoggedIn() {
    $('#buy-history, #cart, #favorites,#sellercenter-mark').on('click', function(e) {
        if (!checkLoginStatus()) {
            e.preventDefault();
            window.location.href = '../account_auth/login.html'; // 修改为登录页面的路径
        }
    });
}

function checkLoginStatus() {
    var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    var sessionExpire = localStorage.getItem('sessionExpire');

    // 检查是否登录且会话未过期
    if (isLoggedIn && sessionExpire && new Date().getTime() < Number(sessionExpire)) {
        return true;
    } else {
        // 如果会话过期或未登录，清除登录状态和过期时间
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('sessionExpire');
        return false;
    }
}

function logoutUser() {
    // 清除本地存储中的登录信息
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('sessionExpire');

    // 重定向到登录页面或主页
    window.location.href = '../account_auth/login.html';
}

function displayUsername() {
    var currentUsername = localStorage.getItem('currentUsername');
    if (currentUsername) {
        $('#username-display').text(currentUsername);
    }
}
//ここまでは sign up ,login,logout機能,session 60分間/////////////////
//////////////////////////////////////////////////////////////////


//ホムページ真贋チェックボックス
const toggleDiv = document.getElementById('shingan-box');
const shouhinShinganDivs = document.querySelectorAll('#shouhin-ichiran #shouhin');

toggleDiv.addEventListener('change', function () {
    shouhinShinganDivs.forEach(div => {
        div.style.display = this.checked ? 'none' : 'block';
    });
});
////////////////////////////////////


// navbar searching
function runsearch() {
    var searchTerm = $("#search-items").val();

    // Check if the search term is not empty
    if (searchTerm.trim() !== "") {
        // Redirect to the search result page with the search term as a query parameter
        window.location.href = '../products/result.html?q=' + encodeURIComponent(searchTerm);
    } else {
        // Display a message or handle the case when the search term is empty
        alert("Please enter a search term.");
    }
};
/////////////////////////////////////


// result
function displaySearchResults() {
    // Retrieve the search term from the query parameter
    var searchTerm = decodeURIComponent(window.location.search.replace("?q=", ""));
    
    // Display the search result on the result.html page
    $("#result-container").empty().append(`<h1>${searchTerm}の検索結果:</h1>`);
}

////////////////////////////////////