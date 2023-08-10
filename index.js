function openFile() {
  const fileInput = document.getElementById('fileInput');
  fileInput.click(); // Simula o clique no elemento de entrada de arquivo
}

// Este evento é acionado quando um arquivo é selecionado
document.getElementById('fileInput').addEventListener('change', function() {
  const selectedFile = this.files[0];
  if (selectedFile) {
    console.log('Arquivo selecionado:', selectedFile.name);
    // Aqui você pode realizar ações com o arquivo selecionado, como fazer upload para um servidor, processá-lo, etc.
  }
});