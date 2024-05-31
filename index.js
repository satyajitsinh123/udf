
// //  qus 1 find palindrome  using function

// function isPalindrome(number) {
//     const originalNumber = number;
//     let reversedNumber = 0;
  
//     while (number > 0) {
//       const digit = number % 10;
//       reversedNumber = reversedNumber * 10 + digit;
//       number = Math.floor(number / 10);
//     }
  
//     return originalNumber === reversedNumber;
//   }
  
//   const inputNumber = 12321;
//   const result = isPalindrome(inputNumber);
  
//   if (result) {
//     console.log(`${inputNumber} is a palindrome.`);
//   } else {
//     console.log(`${inputNumber} is not a palindrome.`);
//   }
  




// // qus 2 program to check the last digit same OR not using UDF.(User Input Three Integer Numbers).


// const num1 = parseInt(prompt('Enter the first integer:'));
// const num2 = parseInt(prompt('Enter the second integer:'));
// const num3 = parseInt(prompt('Enter the third integer:'));

// const lastDigit1 = num1 % 10;
// const lastDigit2 = num2 % 10;
// const lastDigit3 = num3 % 10;

// if (lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3) {
//   console.log('All three integers have the same last digit.');
// } else {
//   console.log('The last digits are not the same for all three integers.');
// }





// // qus 3  Check Armstrong Number of Three Digits Using UDF.
    

// function isArmstrong(number) {
//     const originalNumber = number;
//     let sum = 0;
  
//     while (number > 0) {
//       const digit = number % 10;
//       sum += digit ** 3;
//       number = Math.floor(number / 10);
//     }
  
//     return originalNumber === sum;
//   }
  
//   const inputArmstrong = 153;
//   const armstrongResult = isArmstrong(inputArmstrong);
  
//   if (armstrongResult) {
//     console.log(`${inputArmstrong} is an Armstrong number.`);
//   } else {
//     console.log(`${inputArmstrong} is not an Armstrong number.`);
//   }
  
