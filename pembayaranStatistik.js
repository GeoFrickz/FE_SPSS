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

let namaPengirimInput = document.getElementById('nama-pengirim');
let namaBankInput = document.getElementById('nama-bank');
let fileInput = document.getElementById('bukti-button');
let uploadButton = document.getElementById('upload-bukti');
let fileSelectedMessage = document.getElementById('file-selected-message');
let fileNameSpan = document.getElementById('file-name');
let form = document.getElementById("content-form");
let submitButton = document.getElementById('form-send');

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
    }
    else {
        fileNameSpan.textContent = '';
        fileSelectedMessage.style.display = 'none';
    }
});

// Function to check if all input fields are filled
function checkFields() {
    const namaPengirimValue = namaPengirimInput.value.trim();
    const namaBankValue = namaBankInput.value.trim();
    const fileInputValue = fileInput.files.length > 0;
    console.log(namaPengirimValue);
    // Enable the "Send" button only if all fields have values
    submitButton.disabled = !(namaPengirimValue && namaBankValue && fileInputValue);
}

// Add event listeners to input fields to detect changes
namaPengirimInput.addEventListener('input', checkFields);
namaBankInput.addEventListener('input', checkFields);
fileInput.addEventListener('change', checkFields);