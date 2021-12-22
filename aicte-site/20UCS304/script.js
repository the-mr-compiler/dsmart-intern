function openModal(imgUrl, title) {
  document.getElementById("modalImage").src = imgUrl;
  document.getElementById("showImageModalLabel").innerHTML = title;
  new mdb.Modal(document.getElementById("showImageModal")).show();
}
function closeModal() {
  new mdb.Modal(document.getElementById("showImageModal")).hide();
}
