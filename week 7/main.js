function sayHello() {
    console.log( `Hello, I'm ${this.name} `);
}

const person1 = {
    name: 'israel',
    age: 25,
}

sayHello.call(person1); // call method inserts a new parameter 
sayHello.apply(person1);// similar to call exepct it applys it as an array

sayHello.description = 'say hello';

// Memoization --caching objects

function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

function party(){
    console.log('Wow this is amazing!'); // will only call the first time
    party = function(){
        console.log('Been there, got the T-Shirt'); //call the second time and anytime after.
    }
}
