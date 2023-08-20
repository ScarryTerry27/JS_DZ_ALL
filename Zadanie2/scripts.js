// 1 создать аналог встроенной функции Map

//  а) обычная функция
function customMap(arr, func) {
  function myMap() {
    let count = 0;
    let newArr = [];
    while (true) {
      if (!arr[count]) {
        break;
      }
      newArr[count] = func(arr[count]);
      count++;
    }
    return newArr;
  }
  return myMap();
}
let newArray = customMap([1, 4, 9], (el) => el - 15);
console.log(newArray); //[2, 8, 18]

//  генератор

function* IterMap(arr, func) {
  for (let a in arr) {
    yield func(arr[a]);
  }
}

for (let a of IterMap([20, 40, 60], (el) => el - true)) {
  console.log(a);
}

// 2 создать аналог встроенной функции ForEach

function customForEach(arr, func) {
  for (let elem in arr) {
    arr[elem] = func(arr[elem]);
  }
}

let arr = [1, 4, 9];
customForEach(arr, (el) => el * 2);
console.log(arr);
// в данном задании переписал ваше условие, в моем понимании данная функция не должна возвращать новый массив
// а менять старый, поэтому создал сначала массив, а затем его поменял. с вашим условием напишу ниже

function customForEach1(arr, func) {
  let new_arr = [];
  for (let elem in arr) {
    new_arr[elem] = func(arr[elem]);
  }
  return new_arr;
}

customForEach1([1, 4, 9], (el) => el * 2);
console.log(customForEach1([1, 4, 9], (el) => el * 2)); //[2, 8, 18]

// 3 создать аналог встроенной функции Find

function customFind(arr, elem) {
  for (let el in arr) {
    if (arr[el] === elem) {
      return el;
    }
  }
  return "Такого значения в массиве нет";
}

console.log(customFind([1, 4, 9], 9)); // 2

// 4  создать аналог встроенной функции slice

function customSlice(arr, start, end) {
  function MySlice() {
    result = [];
    for (let i = start; i < end; i++) {
      result[i - start] = arr[i];
    }
    return result;
  }
  return MySlice();
}

let newArray3 = customSlice([1, 4, 9, 16, 18, 145, 2, 156], 2, 5); // [9, 16, 18]
console.log(newArray3);
