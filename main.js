class Parent {
    constructor(name){
        this.name = name;
    }

    sayHello(){

        console.log(`Hello ${this.name}`)

    }
}

class Children extends Parent {

    constructor(name, age){
        super(name)
        this.age = age;
    }

    tellAge(){
        console.log(`Hello my age is ${this.age} years old!`)
    }

}

const child = new Children("Aisyah", 5)

child.sayHello();
child.tellAge();