// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const ul = document.getElementById("list")

for(let i = 1; i < 101 ; i++){
    console.log(i);

    const li = document.createElement('li')

    li.append(i)
    ul.append(li)
    
    if(i % 3 == 0 && i % 5 ==0){
        console.log('FizzBuzz');
        li.innerHTML = 'FizzBuzz'
        li.style.backgroundColor ='red'
        
    }
    else if(i % 5 == 0){
        console.log('buzz');
        li.innerHTML = 'Buzz'
        li.style.backgroundColor ='yellow'
    }
    else if(i % 3 == 0){
        console.log('Fizz');
        li.innerHTML = 'Fizz'
        li.style.backgroundColor ='green'
    }
}