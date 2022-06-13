/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на 
третье. Числа передаются параметром. */

function getResult(num1, num12, num13){

    return (num1 - num12) / num13;
}
console.log( getResult(12, 2, 5) );

/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число 
передается параметром. */

let raiseDegree = function(num2){

    console.log(`${num2} во второй степени = `+ num2**2);
    console.log(`${num2} в третьей степени = `+ num2**3);
}
raiseDegree(5);

/* 3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b. */

function max (num3, num32){

    return Math.max(num3, num32);
}
console.log( max(5, -6) );


function min (num33, num34){

    if(num33 < num34) return num33;
    else return num34;
}
console.log( min(-58, -6) );

/* 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив. */

function getArray(){

    let start = +prompt("Введите начальное значение");
    let end = +prompt("Введите конечное значение");
    let array = [];

    for(let i= start; i <= end; i++){
        array.push(i);
    }

    return array;   
}

let printArray = function(num4){

    for(let i = 0; i< num4.length; i++){
        console.log( num4[i]);
    }
}
//let arr = getArray();
//printArray(arr);

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.*/

function isEven(num5) {

    if(num5 % 2 == 0) return true;
    else return false;
}
console.log( isEven(6) );

/* 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи. */

function containArray (arr6){

    let arr61 = [];

    for(let i = 0; i < arr6.length; i++){
        if( isEven(arr6[i]) ) arr61.push(arr6[i]);
    }

    return arr61;

}
console.log( containArray( [20, 21, 22, 23, 24, 25, 26] ) );

/* 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные 
циклы):
1 
22 
333 
4444 
55555 
666666 
7777777 
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. 
параметр, непредусмотренный ф-цией по умолчанию - один любой символ, 
кроме пробела, то пирамида должна быть нарисована этим символом, 
например: */

function pir (a, b){

    for (let i = 1; i <= a; i++){
        let str ="";

        for (let j = 1; j <= i; j++){
            if(b != undefined){
                str += i;
            } else {
                str += b;
            }
        }
        console.log(str);
    }
}
    
pir (9, 5);


/*8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек. Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же функцию, но которая выведет перевернутый треугольник.*/

function createTriangle(a){
    
    
    for(let i = 1; i <= a; i++){
        let line = "";
        for(let j = 1; j <= a - i; j++){
            line += " ";
        }
        for(let k = 1; k <= i + i -1; k++){
            line += "*"
        }
        console.log(line);
    }
}
createTriangle(5);

function reverseTriangle(a){

    for(let i = 1; i<= a; i++){
        let line = "";
        for(let k = 1; k <= i - 1; k++){
            line+= " ";
        }
        for(let j = 1; j <=(a *2) - i + 1 - i; j++){
            line+= "*"
        }
        console.log(line);
    }
}
reverseTriangle(16);

/* 9. Напишите ф-цию, которая возвращает массив заполненный числами 
Фибоначи от 0 до 1000.*/

function fibonachi (a){
    let arr = [];
    for(let i = 0; i <= a; i++){
        if(i <= 1){
            arr.push(i); 
            continue;
        }
        arr.push(arr[i- 1] + arr[i - 2]);
    }
    return arr;
}

console.log( fibonachi(1000) );

/* 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
опять сложите его цифры. И так, пока сумма не станет однозначным числом 
(9 и менее). Исп. Рекурсию. */

function additional(a){
    a = String(a);
    let sum = 0;
    for(let i = 0; i< a.length; i++){
        sum += +a[i];
    }
    if(sum > 9){
        return additional(sum);
    } else return sum;
}
console.log( additional(649388474) );

/* 11. Дан массив с числами (передается параметром). Выведите 
последовательно его элементы, используя рекурсию и не используя цикл.*/

function array(a, i = 0){
    console.log(a[i]);
    i++;
    if (a[i] == undefined){
        return;
    }
    array(a, i);
}
array([25, 18, "true", true]);