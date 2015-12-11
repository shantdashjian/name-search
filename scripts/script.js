/*jshint multistr:true */
var text = 'Books Shaun reads are very useful. She knows what is worth spending your time on. Shaun is an efficient reader.';
var myName = 'Shaun';
var hits = [];
for (var i = 0; i < text.length; i++) {
   var potential = text.substring(i,i+ myName.length);
   if (potential === myName) {
        hits.push(potential);    
   }
}
if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
