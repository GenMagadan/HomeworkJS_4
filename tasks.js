// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i < 11; i++) {
//    if (i == 0) {
//       console.log(`${i} - это ноль`)
//    } else if (i % 2 == 0) {
//       console.log(`${i} - четное число`)
//    } else {
//       console.log(`${i} - нечетное число`)
//    }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// arr.splice(3, 2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let arr = [];
for (let i = 0; i < 5; i++) {
   let number = parseInt(Math.random() * 9 - 0);
   arr[i] = number;
}
console.log(arr);
let sum = 0;
let min = arr[0];
for (let j = 0; j < arr.length; j++) {
   sum = sum + arr[j];
   if (arr[j] < min) {
      min = arr[j];
   }
}
let findThree = (array) => {
   for (let i = 0; i < array.length; i++) {
      if (array[i] === 3) {
         return 'Присутствует'
      }
   }
   return 'Отсутствует'
}

console.log(`Сумма элементов массива = ${sum}`);
console.log(`Минимальное число в массиве - ${min}`);
console.log(`3 в массиве - ${findThree(arr)}`);