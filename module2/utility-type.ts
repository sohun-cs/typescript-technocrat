{
    // Utility types

    // 1. Pick type
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, "name" | "age">


    // 2.Omit

    type ContactInfo = Omit<Person, "name" | "age">


    // 3.Required
    type PersonRequire = Required<Person>


    // 4.Partial
    type PerPartial = Partial<Person>;




    // 5.Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: "Mr. XY",
        age: 200,
        contactNo: "016"
    }


    // 6.Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // };

    type MyObj = Record<string, unknown>

    const EmptyObj: Record<string, unknown> = {}

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
        e: 4
    }



}