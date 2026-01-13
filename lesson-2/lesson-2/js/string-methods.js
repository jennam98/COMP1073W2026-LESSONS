     /* STEP 1: String Length */

     let step1 = "This is a string";
     output.textContent = step1.length; // Outputs: 16 


        /* STEP 2: Retrieving a Specific String Character */

        let step2 = "Jenna Moss";
        let firstChar = step2[0];
        output.textContent = firstChar; // Outputs: J
        output.textContent = step2.length; // Outputs: 10   
        output.textContent = step2.length -1;// outputs: 9
        output.textContent = step2[step2.length -1]; //outputs: s




        /* STEP 3: Extracting Part of a String */

        let step3a = step2.indexOf("B"); // Searching for a character that is not in the string
        output.textContent = step3a; // Outputs: -1

        let step3b = step2.indexOf("M"); // Searching for a character that is in the string
        output.textContent = step3b; // Outputs: 6

        let step3c = step2.indexOf("n" , 6); // Searching for "n" starting at index 6
        output.textContent = step3c; // Outputs: -1

        let step3d = step2.slice(0,5); // Extracting characters from index 0 to 4
        output.textContent = step3d; // Outputs: Jenna

        // Note - if the substring is not found within the string, indexOf() returns -1

        // Note - if you don't specify where to end the slice, the method returns the rest of the string

        /* STEP 4: Changing Case */

        let step4a = "Bank of canada";
        output.textContent = step4a.toUpperCase(); // Outputs: BANK OF CANADA
        output.textContent = step4a.toLowerCase(); // Outputs: bank of canada



        /* STEP 5: Updating Parts of a String */

        let step5 = "Barrie, ON";
        let updatedStep5 = step5.replace("ON", "Ontario");
        output.textContent = updatedStep5; // Outputs: Barrie, Ontario