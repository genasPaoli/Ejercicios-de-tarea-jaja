/*
Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of 
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/

let addnProd = [3, 67, 89 ,23 , 34];

export function ejercicioTres () {
    const suma = addnProd.reduce((acc,num)) => acc + num, 0;
    
}