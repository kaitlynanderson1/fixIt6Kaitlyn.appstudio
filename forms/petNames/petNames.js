let petNames = ("Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie",  "Marge", "Sam")
let withMarmaduke = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie",  "Marge", "Sam"]
withMarmaduke.push("Marmaduke")
{
let selectedFunction = prompt("Choose an option from the list \n 1: Removes Vinny from the array \n 2: Removes Marty from the array \n 3: Add Nancy to the front of the array \n 4: Add your name to end of the array \n 5: Get the index of Riley \n 6: Get the index of Cindy \n 7: See the pet index")

if (selectedFunction == 1) {
removedItem = withMarmaduke.splice(5,1)
alert("The action taken was: Remove Vinny \n The remaining array data are:" + withMarmaduke)}


else if (selectedFunction == 2) {
withMarmaduke.splice(3,1)
alert('The action taken was: Remove Marty \n The remaining array data are:' + withMarmaduke)}

else if (selectedFunction == 3) {
withMarmaduke.unshift("Nancy")
alert('The action taken was: Added Nancy to the front of the array \n The remaining array data are:' + withMarmaduke)}

else if (selectedFunction == 4) {
name = "Enter your name"
withMarmaduke.push(prompt(name))
alert('The action taken was: Added your name to the end of the array \n The remaining array data are:' + withMarmaduke)}

else if (selectedFunction == 5) {
index_of_Riley = withMarmaduke.indexOf("Riley")
alert("The action taken was: Finding the index of Riley. The index of Riley is" +  ' ' + index_of_Riley)}

else if (selectedFunction == 6) {
index_of_Cindy = withMarmaduke.indexOf("Cindy")
alert("The action taken was: Finding the index of Cindy. The index of Cindy is" + ' ' + index_of_Cindy)}
else if (selectedFunction == 7)
alert(withMarmaduke)
}