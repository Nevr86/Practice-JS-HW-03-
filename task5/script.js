const form = document.getElementById('textForm');
const textInput = document.getElementById('textInput');
const duplicateField = document.getElementById('duplicateField');

textInput.addEventListener('input', function() {
    duplicateField.textContent = textInput.value;
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    console.log(textInput.value); 
    
    textInput.value = '';
    duplicateField.textContent = '';
});
