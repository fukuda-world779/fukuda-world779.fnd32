'use strict'

const indexDialog = document.getElementById('indexDialog');

document.getElementById('openDialog').addEventListener('click', function() { 
  indexDialog.showModal();
});

document.getElementById('closeDialog').addEventListener('click', function() {
  indexDialog.close();
});