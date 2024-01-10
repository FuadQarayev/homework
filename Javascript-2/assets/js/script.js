// Task1
// for(let i=100; i<1000; i=i+10){
//     console.log(i)
// }
// Task2
// let sum=0
// for(let i=10; i<100;i++){
//     if(i % 2==1){
//         sum+=i
//     }
// }
// console.log(sum)
// Task3
// let a=prompt('Eded daxil edin')
// let sum=0
// for(let i=100; i<1000; i++){
//     if(i % a==0){
//         sum+=i
//     }
// }
// console.log(sum)
// Task4
// let n=1000
// for(let i=100; i<n; i++){
//     if(i % 7 ==0 && i % 8==0){
//         console.log(i)
//     }
// }
// Task5
// let n=1000
// let sum=0
// for(let i=100; i<n; i++){
//     if(i % 7 ==0 && i % 8==0){
//         sum+=i
//     }
// }
// console.log(sum)
// Task6
// let n=1000
// for(let i=100; i<n; i++){
//     if(i % 7 ==0 && i % 8==0){
//         console.log(i)
//         break;
//     }
// }
// Task7
// console.log('sade ededler')
// for(let i=2; i<100; i++){
//     let sade =true
//     for(let j=2; j*j<=i; j++){
//         if(i % j==0){
//             sade= false
//             break;
//         }
//     }
//     if(sade){
//         console.log(i)
//     }
// }
// console.log('murekkeb ededler')
// for(let i=2; i<100; i++){
//     let murekkeb =false
//     for(let j=2; j*j<=i; j++){
//         if(i % j==0){
//             murekkeb= true
//             break;
//         }
//     }
//     if(murekkeb){
//         console.log(i)
//     }
// }
// Task 8
// let hasil=1
// let cem=0
// for(let i=1; i<100; i++){
//     if(i % 2 ==0){
//         cem+=i
//         hasil*=i
//         console.log(i)
//     }
// }
// console.log(hasil)
// console.log(cem)
// Task9
// let result;
// let a = prompt("Reqem daxil edin");
// let b = prompt("Ikinci reqemi daxil edin");
// let operatr = prompt("*/+-");
// switch (operatr) {
//   case "+":
//     result = a + b;
//     break;
//   case "-":
//     result = a - b;
//     break;
//   case "*":
//     result = a * b;
//     break;
//   case "/":
//     result = a / b;
//     break;
// }
// console.log(result)
// Task11
// let a=prompt("Cinsinizi yazin")
// if(a =="F"){
//     console.log("Female")
// }else if(a =="M"){
//     console.log("Male")
// }
// Task12
// let metn=prompt("Metin daxil edin")
// for(let i=metn.length-1; i>=0; i--){
//     console.log(metn[i])
// }
// Task13
// let metn=("Menim adim fuaddir.")
// for(let i=0; i<metn.length; i++){
//     if(metn[i]=="."){
//         console.log(i)
//     }
// }
// Task14
// let metn=prompt("Metin daxil edin")
// let reqemVar=false
// for(let i=0; i<metn.length; i++){
//     if(metn[i]>=0 && metn[i]<=9){
//         reqemVar=true
//         break;
//     }
// }
// if(reqemVar){
//     console.log("Metnde reqem var")
// }else{
//     console.log("Metnde reqem yoxdur")
// }
// Task10
// let seasonMonth = prompt("fesilin ayinin reqemini qeyd edin");
// switch (seasonMonth) {
//   case "1":
//     console.log("qis");
//     break;
//   case "2":
//     console.log("qis");
//     break;
//   case "3":
//     console.log("yaz");
//     break;
//   case "4":
//     console.log("yaz");
//     break;
//   case "5":
//     console.log("yaz");
//     break;
//   case "6":
//     console.log("yay");
//     break;
//   case "7":
//     console.log("yay");
//     break;
//   case "8":
//     console.log("yay");
//     break;
//   case "9":
//     console.log("payiz");
//     break;
//   case "10":
//     console.log("payiz");
//     break;
//   case "11":
//     console.log("payiz");
//     break;
//   case "12":
//     console.log("qis");
//     break
//     default:
//         console.log('Yanlis reqem')
//         break;
// }
