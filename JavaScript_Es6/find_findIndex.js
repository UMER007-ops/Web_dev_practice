let cities = ["Karachi","Lahore","Hyderabad","Multan","Peshawar","Quetta","Islamabad"]

let chars=6
let city = "Karachi"

let match1 = cities.find((item)=>{
    if(item===city) return true
})

console.log(`match was found ${match1}`);

let match2 = cities.find( (item) =>{
    if(item.length===chars) return true
})

console.log(match2);

let match3 = cities.findIndex( 
    item => item.toLocaleLowerCase().indexOf('t') > -1
)

console.log(match3);

const person = {
    id: 123,
    name: "Shehbaz",
    town: "Islamabad",
}

let match4 = cities.find ( function (item){
    if(item===this.town) return true;
},person);
console.log(person.name, "lives in matching town",match4);







