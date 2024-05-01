function currentdate() {
    d = new Date();
    date = d.getDate();
    month = d.getMonth() + 1;
    year = d.getFullYear(); 
        finalDate = date + '/' + month + '/' + year;
    return finalDate;
}
console.log(' Project Name : 1','\n','Project Name: Personal Message','\n',"Current Date :",currentdate(),'\n'); // Calling the function
let N = 'Syed Ali Mehdi Rizvi';
console.log('"hello', N ,'\n','Would you like to learn some python today?"','\n');


console.log(' Project Name : 2','\n','Project Name: Stripping Names','\n',"Current Date :",currentdate(),'\n'); // Calling the function
// Store a person's name with whitespace characters
const nameWithWhitespace = "\t\n   John Doe   \t\n";

// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);

// Remove whitespace using trim() function
const strippedName = nameWithWhitespace.trim();

// Print the name after stripping whitespace
console.log("Name after stripping whitespace:",strippedName);




const a =[1,2,3];
for(let i=0;i<a.length;i++){
  console.log(a[i]);
}

 