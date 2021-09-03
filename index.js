

//0. Определить палиндром
const palindrom = ( str ) => {
	str = str.split(' ').join('').toLowerCase()
	return str === [...str].reverse().join('')
} 
console.log()



//1. функция принимает число и выводит все числа до этого числа и 'делится на 3' в случае, если число делится на 3, 'делится на 5', если число делится на 5 и 'делится на 3 и 5'', если число делится на 3 и 5 
const fizzBuzz = (n) => {
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('делится на 3 и 5')
		} else if (i % 3 === 0) {
			console.log('делится на 3')
		} else if (i % 5 === 0) {
			console.log('делится на 5')
		} else {
			console.log(i)
		}
	}
}

for (let i = 1; i <= 100; i++) { 
  let f = i % 3 == 0,
    b = i % 5 == 0;
  console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}
// fizzBuzz(5)

// ((n)=>{ 
//   for ( let i=1; i<=n; i++ ) {
//     if ( i % 3 === 0 && i % 5 === 0 ) {
//         console.log( 'делится и на 3, и на 5' )
//     } else if ( i % 3 === 0 ) {
//         console.log('делится на 3')
// } else if ( i % 5 === 0 ) {
//     console.log('делится на 5')
// } else {
// console.log(i)
// }
//    }
// })(30)




// 2. Найти кол-во гласных в слове
const countVowels = ( word ) => {
	let count = 0
	const vowels = ['a', 'e', 'i', 'o', 'u']

	for ( w of word ) {
		if ( vowels.includes( w.toLowerCase() )){
			count+=1
		} 
	}
	return count
}
console.log( countVowels('Hello'))




//3 выяснить, являются ли два слова, переданные в аргументах анаграммами(имеют одинаковые буквы)
const anagramm = ( w1, w2 ) => {
	return w1.toLowerCase().split('').sort().join() === w2.toLowerCase().split('').sort().join()
}
// console.log(anagramm('molly', 'eew'))



//4 вычислить число фибоначчи
const fibonacci = (num) => {
	let a = 1,
		b = 1

	for (let i = 3; i <= num; i++) {
		[a, b] = [b, a + b]
	}
	return b
}
// console.log( fibonacci( 12 ))





//5 дается массив, в котором некоторые значения повторяются несколько раз. нужно отсортировать его таким образом, чтобы элементы шли по частоте использования и не повторялись
let classNames = [
	'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
] // [ 'link', 'menu-item', 'menu', 'header', 'footer' ];

let uniqCount = {}

for (let i = 0; i < classNames.length; i++) {
	let current = classNames[i]
	if (uniqCount[current]) {
		uniqCount[current] += 1
	} else {
		uniqCount[current] = 1
	}
}

let result = Object.keys(uniqCount).sort((a, b) => uniqCount[b] - uniqCount[a])

// console.log(result)




//необходимо из массива всех валютных операций за день создать объект с суммами всех операций по каждой валюте. usd: [10000, 30000], где usd - валюта, первый эл-т массива - купили, второй- продали
//резульат
// const output = {
// 	usd: [10000, 30000],
// 	gbp: [9000, 0],
// 	eur: [0, 7000],
// 	uah: [10000, 0]
// }

const input = [
	['usd', 'buy', 10000],
	['usd', 'sell', 5000],
	['gbp', 'buy', 9000],
	['eur', 'sell', 7000],
	['uah', 'buy', 10000],
	['usd', 'sell', 25000],
];

const result = {}

input.map((el) => {
	let [val, type, amount] = el
	if (!result[val]) {
		result[val] = [0, 0]
	}
	result[val][type === 'buy' ? 0 : 1] += amount // записываем значение. если тип buy, то записываем в первый элемент массива(0), иначе во второй

})

// console.log(result)





//6 решить, есть ли у лабиринта выход (по ноликам)

let maze = [
	[1, 1, 1, 0, 0, 1],
	[1, 1, 1, 1, 0, 1],
	[0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 0]
];





//7.банкомат. запрашиваем деньги и он выдает нам их по купюрам 100, 50, 20, 10 клиент всегда запрашивает сумму, которая может быть выведена
const iWantToGet = (amount) => {
	const available = [100, 50, 20, 10] //доступные купюры
	const result = []

	if (amount > 0) {

		for (let i = 0; i < available.length; i++) { //проходимся по по купюрам
			let current = available[i] // каждая отдельная купюра 

			while (amount - current >= 0) { // до тех пор, пока в случае, если мы от запрашиваемой суммы отнимаем  купюру получается ноль или больше
				amount -= current // отнимаем эту купюру
				result.push(current) //и кладем ее в массив
			}
		}
	} else {
		console.log('Запрашиваемая сумма не может быть меньше 0')
	}
	return result
}


// console.log(iWantToGet(320))


((getMoney) => {
	const available = [100, 50, 20, 10]
	const result = []

	for (let i = 0; i < available.length; i++) {
		let node = available[i]

		while (getMoney - node >= 0) {
			getMoney = getMoney - node
			result.push(node)
		}
	}
	return result
})(230)





//8 похожа на задачу 5. оперделить, сколько раз повторяются слова в массиве и занести в объект с помощью reduce
const fruit = [ 'pinaple', 'banana', 'apple', 'apple', 'peach', 'banana', 'banana', 'qiwi'  ] 

const countFruit = ( arr ) => arr.reduce((acc, elem) => {
		if ( acc[elem] ) {
			acc[elem] += 1
		} else {
			acc[elem] = 1
		}
		return acc
}, { })

console.log(countFruit(fruit))




//9.написать функию, которая будет принимать число и возвращать true / false  в зависимости от того, будет ли принимаемое число простым или нет
//простое число - натуральное (целое положительное) число, имеющее ровно два различных натуральных делителя — единицу и самого себя
const simple = ( n ) => {
	for ( let i = 2; i < n; i ++ ) {
		if ( n % i === 0 ) {
			return false
		} 
	}
	return n > 1
} 
console.log(simple(10))


//10. написать функию, которая принимает аргумент и выводит массив, содердащий простые числа
const isPrimes = (num) => {
	for ( let i = 2; i < num; i ++ ) {
		if ( num % i === 0 ) {
			return false
		}
	}  
	return num > 1
}

const getAllPrimes = ( num )  => {
	const primes = []

		for ( let i = 2; i <= num; i ++ ) {
			if ( isPrimes(i) ) {
				primes.push(i)
			}
		}
	return primes
}

console.log( getAllPrimes(12))



//11. дан массив с числами, в нем необходимо найти индексы двух чисел, сумма которых будет равна заданному числу target. 

const sumOfTwo = ( arr, target ) => {
	const res = []
	for ( let i = 0; i < arr.length; i++ ) {
		for ( let j = i + 1; j < arr.length; j++ ) {
			if ( arr[i] + arr[j] === target ) {
				res.push(i);
				res.push(j)
			}
		}
	}
	return res
}

console.log( sumOfTwo( [2,7,11,15], 22 ))


//другой вариант решения
const summ = ( arr, target ) => {
const obj = {}

	for ( let i = 0; i < arr.length; i++ ) {
		obj[ arr[i] ] = i
	}	
	for ( let i = 0; i < arr.length; i++ ) {
		const diff = target - arr[i]

		if ( obj[diff] ) {
			return [ i, obj[diff] ]
		}

	} 
} 
console.log( summ([ 2,3,4,3 ], 6 ) )


//12 удалить дубликаты из массива
//1 вариант: new Set - в Sete могут быть только уникалные элементы
const array = [ "Anna", "John", "Anna", "Amalia" ]
const newArray = [  ...new Set( array ) ] 
console.log(newArray)

//2
const array = [ "Anna", "John", "Anna", "Amalia" ]
const newArr = array.filter(( item, index ) => {
	return index === array.indexOf(item)  // если индексы равны, то удаляем эл-т
})	


//3
const array = [ "Anna", "John", "Anna", "Amalia" ]
const newArr = array.reduce(( uniq, item ) => {
	return uniq.includes( item ) ? uniq : [ ...uniq, item ] // если массив уже имеет значение, то мы не будем его добавлять и возвращаем тот же самый массив, иначе добавляем его с помощью спред оператера
}, [])



//13/ удалить дубликаты из масиссива, но есть важное ограничение — сложность алгоритма по памяти должна быть O(1) и вернуть кол-во уникальных эл-тов 

 const arr = [ 0,0,1,1,1,1,1,1,1,1,2,2,3,4, 4 ]
// const arr1 = [1,1,2,3]

 const uniqArr = ( arr ) => {
		for ( let i = 0; i < arr.length; i++ ) {
			if ( arr[i] === arr[i -1]) {
				arr.splice( i, 1 )
				i--
			}
		}

		return arr.length
	}
	console.log( uniqArr(arr)) 
	console.log( arr )

	
	const arr = [ 0,0,1,1,1,1,1,1,1,1,2,2,3,4, 4 ]

	const uniqArr = (arr) => {
		for ( let i = 0; i < arr.length; i++ ) {
			if ( arr[i] === arr[i -1] ){ // если текущий эл-т равен предыдущему, то удаляем этот эл-т 
				arr.splice( i,1 )
				i--
			}
		}
		return arr.length
	}
console.log( uniqArr(arr) ) //кол-во уникальных значений
console.log(arr)//измененный массив


const nums = [ 0,0,1,1,1,1,1,1,1,1,2,2,3,4, 4 ]

const uniq = (arr) => {
	for ( let i = 0; i < arr.length; i++ ) {
		if ( arr[i] === arr[ i -1 ] ) {
			arr.splice( i,1 )
			i--
		}
	}
	return arr.length
}

console.log(nums)
console.log( uniq(nums) )




//14/дан массив с числами, в нем все числа повторяются по 2 раза, кроме одного числа. Его и нужно найти. Есть еще одно ограничение: необходимо решить эту задачу за линейное время.

const arr = [ 1,2,1,2,3 ]

const findSingle = (arr) => {

}

console.log( findSingle(arr) )