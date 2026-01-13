let a = 10;
console.log(a);
  
  
  /* STEP 1: Number types (integer, float, and double)
        declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
        let output = document.querySelector('p');
        // Note - there are also different number systems: binary, octal, and hexadecimal

        let myInt = 10;
        let myFloat = 10.5646;
        let typeTest= typeof(myFloat); // returns 'number' for both integer and float
        output.textContent = typeTest;

        let binNum = 0b1010; // 0b indicates binary
        console.log("Binary " + binNum); // Outputs: 10
        let octNum = 0o12; // 0o indicates octal
        console.log("Octal " + octNum); // Outputs: 10
        let hexNum = 0xA; // 0x indicates hexadecimal
        console.log("Hexadecimal " + hexNum); // Outputs: 10 


        /* STEP 2: Arithmetic operators
        + (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
        let 

        // Try declaring and initializing a couple of variables as numbers


        /* OR… num1 * num2 / 8 + 2 - 0.5; */

        /* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
        num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
        
        /* If you want to avoid this precedence, use parenthesis
        (num1 + num2) * 5 - 25 */

        /* STEP 3: Increment and decrement operators
        ++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */


        // Note 1 - you cannot increment/decrement a number directly
        // Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

        /* STEP 4: Assignment Operators
        = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */


        /* STEP 5: Comparison Operators
        ===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
