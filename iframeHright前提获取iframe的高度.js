   var iframe = document.getElementById("chartIframe");
    if (iframe.attachEvent) {
        iframe.attachEvent("onload", function() {
            //iframe加载完成后你需要进行的操作
            if (iframe) {
                var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
                if (iframeWin.document.body) {
                    console.log(iframe.contentWindow.document.body)
                    iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
                }

            }
        });
    } else {
        iframe.onload = function () {
            //iframe加载完成后你需要进行的操作
            if (iframe) {
                var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
                if (iframeWin.document.body) {
                    console.log(iframe.contentWindow.document.body)
                    iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;

                }

            }
        };
    }