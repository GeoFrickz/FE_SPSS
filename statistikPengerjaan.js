let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("hidden");
    } else {
        document.getElementById("navbar").classList.add("hidden");
    }
    prevScrollPos = currentScrollPos;
}

let fileInput = document.getElementById('bukti-button');
let uploadButton = document.getElementById('upload-bukti');
let fileSelectedMessage = document.getElementById('file-selected-message');
let fileNameSpan = document.getElementById('file-name');
let submitButton = document.getElementById('button-submit-jawaban');
let form = document.getElementById("form-bukti");

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

uploadButton.addEventListener('click', function(){
    fileInput.click();
});

fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        var fileName = fileInput.files[0].name;
        fileNameSpan.textContent = fileName;
        fileSelectedMessage.style.display = 'block';
        submitButton.disabled = false;
    }
    else {
        fileNameSpan.textContent = '';
        fileSelectedMessage.style.display = 'none';
        submitButton.disabled = true;
    }
});