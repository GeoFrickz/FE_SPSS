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


function setupCard(cardIndex) {
    const uploadButton = document.getElementById(`upload-bukti${cardIndex}`);
    const fileInput = document.getElementById(`bukti-button${cardIndex}`);
    const fileNameSpan = document.getElementById(`file-name${cardIndex}`);
    const fileSelectedMessage = document.getElementById(`file-selected-message${cardIndex}`);
    
    uploadButton.addEventListener('click', function(){
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
            fileNameSpan.textContent = fileName;
            fileSelectedMessage.style.display = 'block';
        } else {
            fileNameSpan.textContent = '';
            fileSelectedMessage.style.display = 'none';
        }
    });
}

setupCard(1);
setupCard(2);
setupCard(3);
