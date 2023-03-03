// overall goal - the intent of this code is to return words form an 
// array that start with the letter "t".

// pseudocode - the variable days contains an array of days with
// some of them starting with a "t". a for loop writes each 'day' starting from element
//  0 - (monday) then checks index position 0 for a "t", prints it if true, then goes
//  to the next element 1 - (tuesday) and starts the loop over. this 
// continues for the length of the days array. 


var days = ['monday', 'tuesday', 'wednsday', 'thursday', 
'friday', 'saturday', 'sunday']

 for (var i = 0; i < days.length; i++) {
    var day = days[i]
    if (day.startsWith("t")) {
        console.log(day)
 }
}

// final solution - 
// tuesday
// thursday