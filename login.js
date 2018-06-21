 $(function () {
            document.onkeydown = function (e) {
                var ev = document.all ? window.event : e;
                if (ev.keyCode == 13) {
                    login();
                }
            }
        });

        function login() {
            var UserPass = $("#userPass").val();
            $.ajax({
                url: "${ctx}/login/userLogin",
                data: {
                    userName: $("#userName").val(),
                    userPass: $.md5(UserPass).substring(8, 24).toUpperCase(),
                    verificationCode: $("#verificationCode").val(),
                    smsVerifyCode: $("#smsVerifyCode").val()
                },
                dataType: "JSON",
                success: function (data, status) {
                    if (data.errorCode == "000000") {
                        window.location.href = "../index.jsp";
                    } else if (data.errorCode == "888888") {
                        window.location.href = "login/resetDefaultPassWord.jsp";
                    } else {
                        alert(data.Msg);
                    }
                }
            });
        }