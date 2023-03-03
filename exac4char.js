// overall goal - the intent of this code is to print out months from 
// an array that contains exactly 4 letters.

// pseudocode - the variable months contains an array of months. 
// a for loop writes each 'month' starting from 0 - (january) then 
// checks to see if it is equivilent to the index(4) , prints it, then goes
// to the next element 1 - (february) and starts the loop over. this 
// continues for the length of the months array until all 4 letter months 
// are printed.

var months = ["january", "february", "march", "april", "may", "june",
 "july", "august", "september", "october", "november", "december"]

 for (var i = 0; i < months.length; i++) {
    var month = months[i]
    if (month.length === 4) {
        console.log(month);
    }
 }
//  final solution - 
// june
// july