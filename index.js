/* Bir Pisagor üçlüsü, a < b < c olmak üzere üç doğal sayı kümesidir.

a2 + b2 = c2
Örneğin, 32 + 42 = 9 + 16 = 25 = 52.

a + b + c = 1000 olan tam olarak bir Pisagor üçlüsü vardır.
abc ürününü bulun. */

/*
a<b<c
a*a + b*b = c * c 
*/

function pythagoreanTriad(n){
    let sumOfabc = 0;
    let equationabc = n;
    for (let a = 1; a<999; a++){
        for(let b = 1; b<999; b++){
            let c = 1000 - a - b;
            if ((c * c) == (a * a) + (b * b)){
                equationabc = a * b * c;
            }
        }
    }
    console.log(equationabc);
}  
pythagoreanTriad(1000);




