//Задание 1
localStorage.setItem("greeting", "Привет Мир") 

const getGreeting = localStorage.getItem("greeting")
console.log(getGreeting)
//Задание 2
 localStorage.removeItem("greeting")
console.log(localStorage.getItem("greeting"))//null
//Задание 3
const user = {
    name :" Фиосий",
    age:40
}
localStorage.setItem("user" , JSON.stringify(user))
const savedUser = JSON.parse(localStorage.getItem("user"))
console.log(savedUser)
//Задание 4
savedUser.country ="Россия"
localStorage.setItem("user" , JSON.stringify(savedUser))
console.log(JSON.parse(localStorage.getItem("user")))
//Задание 5
if (localStorage.getItem("user")){
let savedUser = JSON.parse(localStorage.getItem("user"))
console.log(savedUser)
}
else{
    let newUser = {
        name : "Фиола",
        age: 50
    }
    localStorage.setItem("user" , JSON.stringify(newUser))
    console.log(newUser)
}
//Задание 6
localStorage.clear("user");
console.log(user);
//Задание 7
 let arr = [
    {title:"Invincible",completed:false},
    {title:"Immortal",completed:false},
    {title:"Rex",completed:false},
 ]
 localStorage.setItem("arr",JSON.stringify(arr));

 const stored = JSON.parse(localStorage.getItem("arr"));
 console.log(stored)
 //Задание 8
  arr=JSON.parse(localStorage.getItem("arr"));

 if(arr.length > 0){
    arr[0].completed = true
    localStorage.setItem("arr",JSON.stringify(arr));
    console.log(JSON.parse(localStorage.getItem("arr")))
 }
 else{
console.log("Нет сохраненных данных")
 }
