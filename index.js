let pets = [
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type: `dog`, bornOn: 2016 }
];

// function getAge(pet) {
//   return new Date().getFullYear() - pet.bornOn;
// }
const getage =(pet)=>{
  return new Date().getFullYear()-pet.bornOn}
let petsWithAge = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   pet.age = getAge(pet);

//   petsWithAge.push(pet);
// }
// console.log(petsWithAge);

petsWithAge=pets.map(pet=>{pet.age=getage(pet)
  return pet})
/* or*/
// pets.forEach(el=>petsWithAge.push(el))
console.log(petsWithAge)




let dogs = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.type === "dog") {
//     dogs.push(pet);
//   }
// }



dogs=pets.find(dog=> dog.type === "dog")
console.log(dogs);
  
  
  // or
  
  
  // pets.filter((pet=>pet.type==dogs)
  console.log(dogs)





let jasper;
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.name === "Jasper") {
//     jasper = pet;
//   }
// }


jasper=pets.find(el=>el.name === "Jasper");
 
console.log(`Jasper is  ${jasper.age}, years old`);
