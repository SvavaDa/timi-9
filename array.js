let pets = ["dog", "cat", "hamster", "cat"];
console.log(pets);
console.log(pets.length);
console.log(pets[1]);
// console.log(pets);

console.log(pets.includes("cat"));
console.log(pets.indexOf("cat"));
if (pets[1] === "cat") {
}

let nums = [1, 2, 3, 4, 5, 6];
console.log(nums);

//notum function var1,var2)
//notum[]þegar notumst with ARRAY eða til að komast í value innan ARRAY eða Object
//[] =ARRAY
//{} =Object
// sker út value í lista frá index1 að index 2
let index1 = 2;
let index2 = 5;
// let sliced = nums.slice(2, 5);
let sliced = nums.slice(index1, index2);
console.log(sliced);
console.log(nums);

// nums.splice(2, 2, 99, 100);
console.log(nums);

//let spliced = nums.splice(1, 3, 99, 100); //breytir upp haf gögnum
//splice (start, deleteCount, hvað kemur í staðinn)
let spliced = nums.splice(1, 3); //breytir upp haf gögnum
console.log(spliced);
console.log(nums); //sýnir heildina eftir að hafa sett saman array með splice

let letters = ["c", "b", "a", "g", "z"];
let oneTime = [...letters];
console.log(letters);
//sorter eftir starfróðsöð
letters.sort();
//spegalar línuna
letters.reverse();
console.log(letters);

console.log(oneTime);

//map, filter, reduce-þetta helta

let numbers = [1, 2, 3, 4, 5];
// numbers [0]*2

//map mappar yfir hvert item í arrayog framkvæmir skipun
//filter mappar yfir hvert item í array og uppfyllit kröfur
//reduce byrjar með einhverja grunn og bætir við hverjum item ofan á hann
let dubled = numbers.map((n) => n * 2);
console.log(numbers);
console.log(dubled);
let even = numbers.filter((n) => n % 2 === 0);
console.log(even);
let sum = numbers.reduce((sum, numbers) => sum + numbers);
console.log(sum);
// constmultiply(numbers){
// for(let i=0, i<numbers.length;i++){ numbers[i]*2}
// return numbers

// let loggedIN= false;
// const login(){
//     const usernmae = getElemetbyId("usernameInput")
//     const passwors = getElemetbyId("passwordInput")
//     if(usernmae ==DBusername && password ===DBpassword) )
// }

// let num = 22;
// let num2 = "22";

// console.log(num === num2);
// =gefa/skrifa value
//hálfur amanburdur
//"Absoulte smanburður "
