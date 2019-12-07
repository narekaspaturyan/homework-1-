

// // Homework 1

// // exercise 1

// var a = 5;
// var b = 3;

// if(a>b){
//     console.log(a + b)

// }


// var a = 5;
// var b = 3;
// var difference = a-b;

// console.log(difference);


// var a = 5;
// var b = 4;
// var quotient = a % b;

// console.log(quotient);

// var a = 5;
// var b = 2;
// var reminder = a/b;

// console.log(reminder);

// // corect answer 
// var a = 14
// var b= 10

// if(a>b){
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a%b);
//     console.log(a/b);
//     console.log(a- (a%b)) /b ;
// }


// // exercise 2 

// var num = -7;
// num =+7

// console.log(Math.abs(num));

// correct answer

// var a= -20;
// console.log(-a)

// var a = -20;
// var abs = a>0 ? +a : -a;
// console.log(abs);



// // exercise 3

// var a= 28;
// a%=10
// console.log(a);

// // correct answer
// var a= -28;
// console.log(-a%10);


// // exercise 4

// // 1st version 
// var cel = 25;
// var far = cel*1.8;
// far += 32;
// console.log(far) 

// // 2nd version 
// var cel = 25;
// var far = cel*1.8;
// far=far+ 32;
// console.log(far);

// // 3rd version 
// var cel = 25;
// var far = cel*1.8+32;
// console.log(far);

// corect answer

// var a = 10
// var celsius = a + "C";

// console.log(celsius);

// var farenheit = a* 1.8 + 32+ "F"
// console.log(farenheit + "F");

// var result = farenheit + "=" + celsius;
// console.log(result)


// // exercise 5

//  var a = 5;
// b= 1;
// c= 10;
// d= 16;

// // console.log(Math.max(a,b,c,d));
// // console.log(Math.min(a,b,c,d));

// if (a<=b && a<=c && a<=d){
//     alert(a);
// }
// else if(b<=a && b<=c && b<=d){
//     alert(b);
// }
// else if (c<=a && c<=b && c<=d){
//     alert(c)
// }
// else{alert(d)}


// if (a>=b && a>=c&& a>=d){
//     alert(a);
// }
// else if(b>=a && b>=c && b>=d){
//     alert(b);
// }
// else if (c>=a && c>=b && c>=d){
//     alert(c)
// }
// else{alert(d)}

// corect answer

// var a = 5;
// b= 99;
// c= 10;
// d= 16;

// var min = null
// if (a<=b && a<=c && a<=d){
//     min=a;
// }
// else if(b<=a && b<=c && b<=d){
//     min=b;
// }
// else if (c<=a && c<=b && c<=d){
//     min=c;
// }
// else{ min= d}
// console.log(min);

// var a = 5;
// b= 99;
// c= 10;
// d= 16;

// if( a>b){
//     a=b;
// };
// if( a>c){
//     a=c;
// }
// if( a>d){
//     a=d;
// } else{
//     console.log(a);
// }





// exercise 6

var num = 57;

num %=2;
if (num===1){
    alert("odd");
}
else { alert ("even");
}

// exercise 7

var a=15;
b=20;
c=30;

if (a+b>c && a+c>b && b+c>a){
    alert ("yes");
}
else{ alert ("no")
};


// exercise 8

var n = 55;
var result = (n * (n+1)) / 2;
 console.log(result);



var a= 25;

var result = (25-5==20) ? a: 0;

console.log(result);

var res = 10;

switch (res) {
    case 3:
    console.log('true for case 1');
    break;
    case 10:
    console.log('true for case 2');
    break;
    case 9:
    console.log('true for case 9');
    break;
    default:
    console.log('false');
}
























