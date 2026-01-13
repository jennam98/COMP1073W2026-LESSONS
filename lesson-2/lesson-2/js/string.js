 /* STEP 1: Creating Strings */

    let step1a= 'This is "a" string'; // Using single quotes to enclose double quotes

    let step1b= "This is a string";
    // Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

    /* STEP 2: Escaping Characters */

    let step2a= 'it\'s 4 o\'clock'; // Using backslash to escape single quotes


    /* STEP 3: Concatenation */
    let firstName = "John";
    let lastName = "Doe";       
    console.log("Full Name: " + firstName + " " + lastName); // Outputs: Full Name: John Doe


    /* STEP 4: Numbers and Strings */

    let step4a = "Faranheit " + 98;
    console.log(step4a + " "+ typeof(step4a)); // Outputs: Faranheit 98


    // numbers can be converted to strings
    let step4c= String(12345);
    console.log(step4c + " "+ typeof(step4c)); // Outputs: 12345 string


    // strings can be converted to numbers, too

    let step4b = Number("12345");
    console.log(step4b + " "+ typeof(step4b)); // Outputs: 12345 number

    // and back again, if we want