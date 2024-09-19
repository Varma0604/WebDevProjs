function generateQR() {
  var text = document.getElementById("text").value;
  if(text) {
      document.getElementById("qrcode").innerHTML = "";
      new QRCode(document.getElementById("qrcode"), {
          text: text,
          width: 128,
          height: 128
      });
  } else {
      alert("Please enter text or URL");
  }
}