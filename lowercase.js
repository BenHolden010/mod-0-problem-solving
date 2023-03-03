// Overall goal - the intent of this code is to create a list of 
// lowercase elements in an array containing random capital letters.

// pseudocode - the variable months contains an array of months with
// capital letters randomly placed. a for loop writes each 'month' starting from
//  0 - (JaNuARY) then writes it in only lowercase, prints it, then goes
//  to the next element 1 - (FeBrUaRy) and starts the loop over. this 
// continues for the length of the months array. 

var months = ["JaNuArY", "FeBrUaRy", "MaRcH", "ApRiL", "MaY", "JuNe",
 "JuLy", "AuGuSt", "SePtEmBeR", "OcToBeR", "NoVeMbEr", "DeCeMbEr"]

 for (var i = 0; i < months.length; i++) {
    var month = months[i]
        console.log(month.toLowerCase());
    }

//  final solution - 
// january
// february
// march
// april
// may
// june
// july
// august
// september
// october
// november
// december