console.log("Hello world");

function getRandomInt() {
  return Math.floor(Math.random() * 6);
}

function getEmail(name, company) {
  //   console.log(name);
  //   console.log(company);

  let email = name + "@" + company + ".is";
  return email;
}

function removeIcelandicLetters(str) {
  const map = {
    á: "a",
    ð: "d",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ý: "y",
    þ: "th",
    æ: "ae",
    ö: "o",
    Á: "A",
    Ð: "D",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    Ý: "Y",
    Þ: "Th",
    Æ: "Ae",
    Ö: "O",
  };

  return str.replace(/[áðéíóúýþæöÁÐÉÍÓÚÝÞÆÖ]/g, (match) => map[match]);
}
getEmail("Kalli", "Zara");

let companies = ["Bonus", "Hagkaup", "Stór kaup", "Olís", "Zara"];

// console.log(companies);
// companies.push("Eldum rétt");
// let randomNumber = Math.floor(Math.random() * 6);

console.log(companies);
// console.log(randomNumber);

let employee = {
  name: "Gunnar",
  age: 36,
  country: "Iceland",
  //   company2: companies[randomNumber],
  company: companies[getRandomInt()],
};

let employee2 = {
  name: "Felix Bergson",
  age: 26,
  country: "Iceland",
  company: companies[getRandomInt()],
};
let employee3 = {
  name: "Gísli Martin",
  age: 16,
  country: "Iceland",
  company: companies[getRandomInt()],
};
companies.forEach((company) => console.log("Fyrirtæki: " + company));

// let employess = [employee, employee2, employee3];
// console.log(employess);

let employees = [employee, employee2, employee3];

employees.forEach((tempEmployee) => {
  console.log(tempEmployee.name), console.log(tempEmployee.company);
});

let companyCounts = {};

employees.forEach((currentEmployee) => {
  if (!companyCounts[currentEmployee.company]) {
    companyCounts[currentEmployee.company] = 0;
  }
  companyCounts[currentEmployee.company]++;
});
console.log(companyCounts);

employees.forEach((currentemployee) => {
  if (currentemployee.age > 25) {
    console.log(currentemployee.name);
  } else {
    console.log("aaaa");
  }
});

let output = document.getElementById("output");

employees.forEach((tempEmployee) => {
  const div = document.createElement("div");
  div.id = removeIcelandicLetters(tempEmployee.name);
  div.className = removeIcelandicLetters(tempEmployee.company.toLowerCase());
  div.appendChild(div);
  dispatchEvent.id = removeIcelandicLetters;

  const pname = document.createElement("p");
  pname.textContent = "Nafn: " + tempEmployee.name;
  div.appendChild(pname);

  const page = document.createElement("p");
  page.textContent = "Aldur: " + tempEmployee.age;
  div.appendChild(page);

  const country1 = document.createElement("p");
  country1.textContent = "Land: " + tempEmployee.country;
  div.appendChild(country1);

  const company1 = document.createElement("p");
  company1.textContent = "Fyrirtæki: " + tempEmployee.company;
  div.appendChild(company1);
});

// employees.forEach((temmpEmployee) =>
//   console.log(getEmail(temmpEmployee.name, temmpEmployee.company))
// );
// console.log(employees);
// console.log(employee.name);

// let firstEmployee = employees.find((emp) => emp.age > 25);

// console.log(employees.name);
// console.log(employee);
