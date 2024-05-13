//  Define an array of user objects with a name, age and if they are employed. Hint: this is an array of objects
const users=[
{name:'Lucy',age:19,employementStatus:false}
{name:'Annastacia',age:23,employementStatus:true}
{name:'Wanza',age:23,employementStatus:false}
]
// Define a function that destructively appends a new user to the array.
function 

// Define a function that destructively prepends a new user to the array.

// Define a function that destructively removes the last user in the array.

// Define a function that destructively removes the first user in the array.

// Define a function that non destructively add a new user to the array.

// Define an array of the first 5 prime numbers in order.
const primeNumbers=[2,3,5,7,11]

// Define a function that uses the splice method to remove the third element from the numbers array.
function removeThird(array){
array.splice(2,1)
}
//removeThird(primeNumbers)
//console.log(primeNumbers)

// Given an array of flowers, define a function that splits it in half and save each half to a variable eg halfOne, halfTwo
const flowers =["roses", "orchids", "peonies", "carnations", "tulips", "daisies"]
function splitinTwo(array){
    const halfOne= array.slice(0,3);
    const halfTwo= array.slice(3);
    return { halfOne, halfTwo };
}
const {halfOne, halfTwo}=splitinTwo(flowers)

// Define an object of a student that has the following keys, name- the student's name,  subjects - an array of 5 subjects they take at school, teacher - name of their teacher, address - an object with city (a string of the city they live in), street (a string of the street name) and postalCode( an integer of 4 numeric characters)
const student = {
    name: 'Taylor',
    subjects : ['Maths', 'English', 'History', 'Physics', 'Computer'],
    nameofTeacher :'Mr Drake',
    address : {
        city: 'Glasgow',
        street: 'Marula',
        postalCode: 2563
}
}

// Define a function that logs to the console their address as one string in the order postal code, street name and city
function

// Define a function that updates the array of subjects to 7 subjects
function 

// Define a function to delete the teacher's name from the object




