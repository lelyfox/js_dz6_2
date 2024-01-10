let arr = [];

for (let i = 0; i < Infinity; i++){
    let word = prompt('Введите команду');    
    let array = word.split(', ');
    if (array[0] == 'add' && arr.includes(array[1])){
        alert('Вы уже ввели это слово')
    }else if(array[0] == 'add'){
        arr.push(array[1]);
    }else if (array[0] == 'del'){
        for (let a = 0; a < arr.length; a++){
            if(arr[a] == array[1]){
                arr.splice(a, 1)
            }
        }
    }else if (array[0] == 'stop'){
        break;
    }
console.log(arr);
}