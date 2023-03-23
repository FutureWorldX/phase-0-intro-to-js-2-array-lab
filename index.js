// Write your solution here!

// Making an array called cats, which is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];

//Array functions
function destructivelyAppendCat(name){
    //appends a cat to the end of the cats array
    cats.push(name);
}

function destructivelyPrependCat(name){
    //prepends a cat to the beginning of the cats array
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    //removes the last cat from the cats array
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    //removes the first cat from the cats array
    cats.shift();
}

function appendCat(name){
    //appends a cat to the cats array and returns a new array, leaving the cats array unchanged
    // write the ellipses <...> before writing the source array that you want to copy to a destination array
    const copyOfCats = [...cats, name];
    return copyOfCats;
}
function prependCat(name){
    //prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
    // write the variable, then ellipses <...> before writing the source array that you want to copy to a destination array
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}
function removeLastCat(){
    //removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
    const copyOfCats = cats.slice(0, cats.length - 1); //setting the start array position as 0, and then subtracting array length - 1
    console.log("The new copy of the cats array is: " + copyOfCats);
    return copyOfCats;
}
function removeFirstCat(){
    //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
    const copyOfCats = cats.slice(cats.length - 2); // setting the manual way of getting the array length then subtracting 2 elements
    console.log("The new copy of the cats array is: " + copyOfCats);
    return copyOfCats;
}