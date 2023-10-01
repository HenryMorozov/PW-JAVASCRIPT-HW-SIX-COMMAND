let arr = []; // Создаю пустой массив

while(true) { // Запускаю бесконечный цикл

    let input = prompt('Enter the command (add, del, stop) and name (or stop to exit): '); // Считываю ввод пользователя

    if(input === 'stop') break; // Если пользователь ввел стоп, выхожу из цикла


    let arrAdd = input.split(' '); // Разбиваю строку ввода на массив с помощью разделителя пробел

    switch(arrAdd[0]) { // Проверяю первую строку массива

        case 'add': 

            arr.push(arrAdd[1]); // Добавляю второе значение массива в конец основного массива
        break; 

        case 'del': 

            let index = arr.indexOf(arrAdd[1]); 
        
        if(index !== -1) arr.splice(index, 1); // Удаляю элемент из основного массива если он существует
        break;

        default: 
        console.log('Invalid command'); 
    }

}

console.log(arr)