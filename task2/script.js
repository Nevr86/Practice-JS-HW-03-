document.getElementById('consoleLog').addEventListener('click', function() {
    alert('Метод console.log используется для вывода информации в консоль.');
    this.textContent = 'Пример использования команды console.log';
});

document.getElementById('alert').addEventListener('click', function() {
    alert('Метод alert используется для вывода информации в диалоговом окне.');
    this.textContent = 'Пример использования метода alert';
});

document.getElementById('prompt').addEventListener('click', function() {
    const userInput = prompt('Введите что-то:');
    alert(`Вы ввели: ${userInput}`);
    this.textContent = 'Пример использования метода prompt';
});