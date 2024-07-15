// let savol1 = prompt ("Savol: Uzb Poytaxti: a)Samarqand b)Buxoro c)Toshkent");
// switch (savol1) {
//     case "a":
//         console.log("Bu poytaxt emas");
//     break;    

//     case "b":
//         console.log("Bu poytaxt emas");
//     break;    

//     case "c":
//         console.log("Bu poytaxt");
//     break;    

//     default: 
//     console.log("Bunaqa shahar yo'q")
// }

// let savol2 = prompt ("Savol: Korea Poytaxti: a)Seoul b)Pusan c)Chedju");
// switch (savol2) {
//     case "a":
//         console.log("Bu poytaxt");
//     break;    

//     case "b":
//         console.log("Bu poytaxt emas");
//     break;    

//     case "c":
//         console.log("Bu poytaxt emas");
//     break;    

//     default: 
//     console.log("Bunaqa shahar yo'q")
// }

// let savol3 = prompt ("Savol: America Poytaxti: a)New  York b)Vashington c)Texas");
// switch (savol3) {
//     case "a":
//         console.log("Bu poytaxt emas");
//     break;    

//     case "b":
//         console.log("Bu poytaxt");
//     break;    

//     case "c":
//         console.log("Bu poytaxt emas");
//     break;    

//     default: 
//     console.log("Bunaqa shahar yo'q")
// }



// let savol4 = prompt ("Savol: Kamaleda nechta rang bor: a)3 b)7 c)12");
// switch (savol4) {
//     case "a":
//         console.log("Noto'ri");
//     break;    

//     case "b":
//         console.log("To'ri");
//     break;    

//     case "c":
//         console.log("Noto'ri");
//     break;    

//     default: 
//     console.log("Kamaleda 7 ta rang mavjud")
// }

// let savol5 = prompt ("Savol: Bts nechnch yl debut qlshgan: a)2013 b)2012 c)2014");
// switch (savol5) {
//     case "a":
//         console.log("To'ri");
//     break;    

//     case "b":
//         console.log("Noto'ri");
//     break;    

//     case "c":
//         console.log("Noto'ri");
//     break;    

//     default: 
//     console.log("Bts bu yl debut qmagan")
// }



let array = [ 
    { 
      savol: "Muhabbat qoshigini kim etgan", 
      javob: "Anvar Sanayev", 
    }, 
   
    { 
      savol: "Toshkent poytaxti", 
      javob: "Qoyliq", 
    }, 
   
    { 
      savol: "Qoyliq poytaxti", 
      javob: "Nurafshon kochasi", 
    }, 
  ]; 
   
  let savol = document.querySelector("#savol"); 
  let check = document.querySelector("#checkQuestion"); 
  let input = document.querySelector("input"); 
  let button = document.querySelector("button"); 
   
  let i = 0;

  savol.innerHTML = "Savol: " + array[i].savol + "?" ;

  button.addEventListener("click", () => {
    switch (input.value) {
        case array [i].javob:
            check.classList.add("text-emerald-500", "text-3xl");
            check.innerHTML = "TOG'RI JAVOB";
            break;

        default:
            check.classList.add("text-red-500", "text-3xl");
            check.innerHTML = "NOTOG'RI JAVOB";
            break;              
    }
    i++;
    savol.innerHTML = "Savol: " + array[i].savol + "?" ;
  });