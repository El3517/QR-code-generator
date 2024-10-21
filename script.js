let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img")

        document.querySelector(".em").style.display = "none"
    } else {
        qrText.classList.add('error');
        setTimeout(function () {
            qrText.classList.remove('error')
        }, 1000)
        document.querySelector(".em").style.display = "block"
    }
}