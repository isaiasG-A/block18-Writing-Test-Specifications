                                              /* Unit Tests: */

/* 
1. A function called "multiplication" that returns the product of the two input numbers. 

  - if one of the two numbers or both numbers are  not a number, then an error message "x input is not a valid number" should be printed
    - Expect multiplication(3, "r") to be an error 

  - if if both outputs are numbers, then the function should work as intended and the product of both numbers should be returned
    - Expect multiplication(3, 4) to return 12;

  - If no input is passed into the function, the an error message should be return.
    - Expected multiplication() to return "Please provide two numbers"

*/


/*
2. A function called "concatOdds" takes two arrays of integers as arguments. 
   It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

   - If one or both of the arrays being passed as outputs have a non-integer data type, then an error message should be printed.
        - Expect concatOdds([3, "error", 1], [9, 1, 1, 1, 4, 15, -1]) to return "error: a non-integer was found in one of the arrays"

   - If there is a repeaded number in both arrays, then the function should exclude the repeated numbers and include just one number.
      - Expect concatOdds([3, 3, 1], [9, 1, 1, 1, 4, 15, -1])  to return [-1, 1, 3, 9, 15]

   - If only one array is passed as input, then an error message should be printed
     - Expect concatOdds([], [1,2,4,8]) to return "Error: Please provide a second array for comparison"

   - If no input or if two empty arrays are passed as inputs, then an error messaged should be printed
      - Expect concatOdds() to return "Error: Please provide two arrays for comparison"
*/

                                                /* Functional Tests */
    
/*
1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. 
  They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

    - If the user wants to checkout as a guest, then they should be taken to the checkout page where they can pay for the items after clicking on a "checkout as guest" button. 
      - A message asking the costumer if they want to create an account.

    -If the costumer already has an account, then there should be a button where that will allow them to login to their account in order to do a proper chekout

    -  When checking out as a guest, sensitive data such as payment methods should not be saved. 

    - The customer should be asked to provide an email address so they can see their receipt as well as their tracking code.

    - IF cart is empty then  a message should pop up telling the costumer that the cart is empty.


*/
          

