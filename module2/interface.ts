{
    
    // Type Alias
    type User1 = {
        name: string;
        age: number;
    };
    

    // Intersection for Type Alias
    type UserWithRole1 = User1 & {role: string}

    // extends for interface
    interface UserWithRole2 extends User2 {
        role: string
    } 

    // Type Alias keo chaile interface banano jai
    interface UserWithRole2 extends User1 {
        role: string
    } 

    const user1: UserWithRole2 = {
        name: "Asad",
        age: 23,
        role: "Learner"
    }


    // Interface
    interface User2{
        name: string;
        age: number;
    }


    // Declare Array with type alias and interface
    type Roll1 = number[];

    interface Roll2{
        [index : number] : number;
    }

    const rollNumber1: Roll2 = [1, 2, 3];


    // Declare Function with type alias and interface
    type Add1 = (num1: number, num2: number) => number;

    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add2 = (num1, num2) => num1 + num2;


    

    // Note: Sob primitive datatype & object, array, function Type Alias diye korte parbo... 
    // But Interface diye only ooject, array, function datatype use korte parbo..


}