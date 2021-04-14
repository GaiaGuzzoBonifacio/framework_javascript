import Counter from './Counter.js'; // require 
import CounterElement from './CounterElement.js'


let contatore = new Counter()
console.log(contatore.value)
contatore.increment()
contatore.increment()

console.log(contatore.value == 2);


contatore = new Counter(10)
//console.log(contatore.value)
contatore.increment()
contatore.increment()

console.log(contatore.value == 12);

/**
 * 1 arg partenza
 * 2 arg min
 * 3 arg max
 */
contatore = new Counter(10,10,15)
//console.log(contatore.value)
contatore.increment() //11
//console.log(contatore.value)
contatore.increment() // 12
contatore.increment() // 13

console.log(contatore.value == 13)

contatore.increment() // 14
contatore.increment() // 15
contatore.increment() // 15
contatore.increment() // 15

console.log(contatore.value == 15)




//new CounterElement('#counterA')
//new CounterElement('#counterB')
new CounterElement('#counterC')