//var -> inside function scope (SayHello)
//let -> block scope (for loop)    --   let is better than var

function SayHello( )
{
    for( let i = 0; i < 10; i++ ){
        console.log( i );
    }
   // console.log( i );
}
SayHello( );

//const -> block scope (for loop)  --   const is better than let

const x = 1;  // we cannot reassign the value of x
console.log( x );