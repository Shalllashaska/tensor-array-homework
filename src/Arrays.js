/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let array = [];
    let num = '';

    for (let i = 0; i < data.length; i++) {
        if (data[i] != ',') {
            num += data[i];
        } else if (data[i] == ',') {
            array.push(parseInt(num));
            num = '';
        }

        if (i + 1 == data.length) {
            array.push(parseInt(num));
            num = '';
        }
    }

    array.sort(function (a, b) {
        return a - b;
    });

    let string = '';
    for (let i = 0; i < array.length; i++) {
        string += array[i];
        if (i + 1 != array.length) {
            string += ',';
        }
    }

    return string;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let result = [];
    data.forEach(function (n) {
        if (n < 100) {
            result.push(n);
        }
    });

    return result;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивоqв, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let result = [];

    for (let i = 0; i < 5; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }

    return result;
}
