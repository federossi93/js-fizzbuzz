// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const ul = document.getElementById("list")

const li = document.createElement('li')


for(let i = 1; i < 101 ; i++){
    console.log(i);
    
    if(i % 15 == 0){
        console.log('FizzBuzz');
        li.append( 'FrizzBuzz ')
        ul.append(li)
    }
    else if(i % 5 == 0){
        console.log('buzz');
        li.append( 'buzz ')
        ul.append(li)
    }
    else if(i % 3 == 0){
        console.log('Fizz');
        li.append( 'fizz ')
        ul.append(li)
    }

    else if(i % i == 0){
        console.log('Fizz');
        li.append( i + ' ')
        ul.append(li)
    }
    
    

}