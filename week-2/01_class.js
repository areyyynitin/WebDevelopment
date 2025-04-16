class rectangle{
    constructor(height,width,color){
        this.height=height,
        this.width=width,
        this.color=color
        // this. {i getting access to current object}
    }

    area(){
        return this.height*this.width;
    }

    paint(){
        console.log(`This paint is ${this.color}`);
    }
}

const rect = new rectangle(4,6,'red')
// const rect = new rectangle(4,6,'red') => this is syntax to create an object of an  class
console.log(rect)
const area = rect.area()
console.log(area)
rect.paint()

// when we write new ..constructor automatically called

let num=6,num2=8;
let colors='black'
const rect2 = new rectangle(num,num2,colors);
console.log(rect2)
const are = rect2.area()
console.log(are)
rect2.paint()


console.log(" ");

const date = new Date()
console.log(date.getDay());

console.log(" ");

const map = new Map();
map.set('name' , 'Nitin');
map.set('FullName' , 'Prajapat');
map.set('Age' , 21);
map.set('status' , 'single')

console.log(map.get('name') , map.get('FullName')) 