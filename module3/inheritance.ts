{

    // OOP - Inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }


    class Student extends Person {


        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }


    }


    const student1 = new Student("Mr. student", 20, "Bangladesh");
    // student1.



    class Teacher extends Person {

        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} classes`);
        }
    }

    const teacher1 = new Teacher("Mr. Teacher", 45, "Bangladesh", "Sr. Teacher");
    // teacher1.


}