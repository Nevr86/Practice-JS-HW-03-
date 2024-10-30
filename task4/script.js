document.getElementById('changeTextLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    const newText = prompt('Введите новый текст для ссылки:'); 
    if (newText) { 
        this.textContent = newText; 
    }
});