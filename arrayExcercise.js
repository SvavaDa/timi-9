// ============================================================
// 🧩 ÆFINGAR — Arrays, Objects, Methods & Destructuring
// (Stigvaxandi: léttar ➜ miðlungs ➜ smá challenge)
// ============================================================

// ====== Grunn-gögn sem má nota í æfingum (valfrjálst) ======
const nums = [3, 7, 1, 9, 4];
const colors = ['red', 'green', 'blue', 'green'];
const user = { name: 'Anna', age: 25, city: 'Reykjavík' };
const users = [
  { name: 'Jon', age: 30, scores: [7, 9, 8] },
  { name: 'Sara', age: 22, scores: [10, 9, 9] },
  { name: 'Aron', age: 27, scores: [6, 7, 7] },
];

// ===============
// 🟢 1. Þrep
// ===============

// 1) Bættu tölunni 5 aftan við nums með .push()
//    og loggaðu lengdina (length).

nums.push(5)
console.log(nums)
console.log(nums.length)


// 2) Fjarlægðu síðasta litinn í colors með .pop()
//    og loggaðu nýja listann.

nums.pop(6)
console.log(nums)

// 3) Bættu "yellow" fremst í colors með .unshift().
colors.unshift("yellow")
console.log(colors)

// 4) Er "blue" í colors? Notaðu .includes() og loggaðu true/false.

console.log(colors.includes("blue"))

// 5) Finndu index af "green" með .indexOf().
console.log(colors.indexOf("green"))

// 6) Búðu til object person með properties name og hobby
//    og loggaðu bæði með dot-notation.

let person={name:"Sigga",hobby:"dans"}

console.log(person.name)
console.log(person.hobby)

// 7) Object destructuring: Dragðu name og city úr user
//    og prentaðu "Anna býr í Reykjavík".
console.log(user.name," býr í ",user.city)


// 8) Array destructuring: Dragðu fyrstu tvær tölur úr nums í breytur a og b
//    og prentaðu summu þeirra.

let a=nums[0]
let b=nums[1]
console.log(a+b)

// 9) Búðu til nýtt array doubleNums sem er nums * 2 með .map().
let doubleNums = nums.map((n) => n * 2);
console.log(doubleNums)
// 10) Síaðu aðeins tölur > 5 úr nums í newNums með .filter().
let newNums = nums.filter((n) => n > 5);
console.log(newNums)
// ==================
// 🟡 2. Þrep
// ==================

// 11) Finnðu fyrsta notanda > 25 ára í users með .find().

// 12) Úr users: búðu til array af nöfnum með .map() og destructuring
//     í callback: ({ name }) => name.

// 13) Reiknaðu summu allra talna í nums með .reduce().

// 14) Búðu til fall getAverage(scoresArray) sem skilar meðaltali.
//     Prófaðu á users[0].scores.

// 15) Búðu til nýtt array highScorers þar sem meðaltal(scores) > 8
//     (notaðu .filter() + getAverage).

// 16) Úr users: búðu til array objects { name, avg }
//     með .map() og destructuring + getAverage.

// 17) Bættu methodi við object userCopy sem heitir greet()
//     og prentar "Hæ, ég heiti Anna". Kallaðu á það.
//     (Hafðu userCopy sem spread af user svo þú breytir ekki upprunalega)

// 18) Sameinaðu tvö array: nums og [10, 11] í combined með spread syntax.

// 19) Fjarlægðu tvítekin gildi úr colors (t.d. "green") með Set
//     og spread — fáðu uniqueColors.

// 20) Sorteraðu afrit af nums í hækkandi röð án þess að breyta nums.
//     (notaðu [...nums].sort((a,b)=>a-b)).

// ===================
// 🟠 3. Þrep
// ===================

// 21) Búðu til fall addUser(list, newUser) sem skilar NÝJU array
//     með nýja notandanum bættum við (immutability).
//     Prófaðu addUser(users, { name: "Eva", age: 24, scores: [8,8,9] }).

// 22) Gerðu "lookup" object úr users þar sem lykill er name og gildi er age
//     með .reduce(). Dæmi: { Jon: 30, Sara: 22, Aron: 27 }

// 23) Notaðu nested destructuring til að ná í fyrstu tvær einkunnir
//     hjá fyrsta notanda: const [{ scores: [s1, s2] }] = users.

// 24) Búðu til fall labelUser(u) sem notar destructuring í parameter:
//     function labelUser({ name, age }) { ... } og skilar streng
//     "Jon (30 ára)".

// 25) Úr users: búðu til array af strengjum "Nafn – Meðaltal: X.YY"
//     (með .map(), getAverage og .toFixed(2)).

// 26) Notaðu .every() til að athuga hvort ALLIR notendur séu ≥ 18 ára.

// 27) Notaðu .some() til að athuga hvort EINHVER hafi meðaltal > 9.

// 28) Flattið út tvívítt array með .flat():
//     const matrix = [[1,2],[3,4],[5]];
//     fáðu [1,2,3,4,5].

// 29) Notaðu .flatMap() á users til að fá "flatan" lista af öllum scores
//     (t.d. [7,9,8,10,9,9,6,7,7]).

// 30) Búðu til frequency-count af litum í colors:
//     Útkoma t.d. { red: 1, green: 2, blue: 1 } með .reduce().

// 31) Hópaðu users eftir því hvort avg ≥ 8 eða ekki:
//     Útkoma: { passed: [ ... ], others: [ ... ] } (reduce + skilyrði).

// 32) Sniðugt destructuring-trix: Þegar property vantar
//     settu default gildi:
//     const { nickname = "No nickname" } = user;
//     Prentaðu nickname.

// 33) Endurskýra property við destructuring (rename):
//     const { city: hometown } = user; prentaðu hometown.

// 34) Skerðu út fyrsta og síðasta element úr nums með rest:
//     const [first, ...middle] = nums; // ... síðan síðasta úr middle

// 35) Smíða „immutable update“:
//     Uppfærðu age hjá "Aron" í NÝJU array án þess að breyta uppr. users
//     (map yfir users: ef name==="Aron" skilarðu nýju objecti með breyttu age).

// 36) Búa til "top N" fall:
//     function topN(arr, n) — tekur inn array af {name, avg} og skilar
//     fyrstu n eftir avg (desc). Notaðu sort á afrit og slice.

// 37) Sameina gögn úr tveimur arrays með .map():
//     const ids = [1,2,3]; const names = ["A","B","C"];
//     fáðu [{id:1,name:"A"}, ...] — notaðu index í map.

// 38) Deep-nested destructuring:
//     const obj = { a: { b: { c: 42 } } };
//     Náðu í c í einni línu með const { a: { b: { c } } } = obj;

// 39) Byggja "path picker":
//     function pickCity({ address: { city } = { city: "?" } }) { ... }
//     Prófaðu á objecti með/án address.

// 40) Endurteknar æfingar (hraðastrik):
//     - Snúa nums við (reverse) á afriti
//     - Sækja síðustu 2 tölur með slice(-2)
//     - Taka fyrstu 3 litina með slice(0,3)
//     - Sameina uniqueColors + ["purple"] í nýtt array
//     - Búa til object { min, max } úr nums með Math.min/Math.max + spread

// ============================
// 👏 Gangi þér/ ykkur vel!
// ============================
