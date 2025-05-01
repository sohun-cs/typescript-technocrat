{

    // Type Alias

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string,
    }


    const student1: Student = {
        name: 'Asaduzzaman Sohun',
        age: 23,
        gender: "male",
        contactNo: "016XXXXXXXX",
        address: 'brb'
    };

    const student2: Student = {
        name: 'Sadia Sabah Shadh',
        age: 20,
        contactNo: "015XXXXXXXX",
        gender: "female",
        address: 'jhk'
    };


    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'sohun3313';
    const isAdmin: IsAdmin = false;


    // For Function
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;

}