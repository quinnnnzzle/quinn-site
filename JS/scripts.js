function openModal(imgElement) {
    var modal = document.getElementById("imgModal");
    var modalImg = document.getElementById("modalImg");
    modal.classList.add("active");
    modalImg.src = imgElement.src;
}

function closeModal() {
    var modal = document.getElementById("imgModal");
    modal.classList.remove("active");
}
