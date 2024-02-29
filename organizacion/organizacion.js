document.getElementById('fileInput').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
        document.getElementById('fileName').textContent = file.name;
    } else {
        document.getElementById('fileName').textContent = 'Ninguno archivo seleccionado';
    }
});
