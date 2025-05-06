{

    // Generic Type

    type GenericArray<T> = Array<T>;

    // const rollNumbers: number[] = [2, 3, 5 ,3];
    // const rollNumbers: Array<number> = [2, 3, 5 ,3];
    const rollNumbers: GenericArray<number> = [2, 3, 5, 3];


    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
    // const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
    const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];



    interface User {
        name: string; 
        age: number
    }

    const user: GenericArray<User> = [
        {
            name: "Mezba",
            age: 100
        },
        {
            name: "Jhankar Mahbub",
            age: 110
        }
    ]


    // const user: GenericArray<{ name: string; age: number }> = [
    //     {
    //         name: "Mezba",
    //         age: 100
    //     },
    //     {
    //         name: "Jhankar Mahbub",
    //         age: 110
    //     }
    // ]


    // Generic Tuple

    type GenericTuple<X, Y> = [X, Y];

    // const manush: [string, string] = ['Mr. X', 'Mr. Y'];
    const manush: GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];

    const UserWithID: GenericTuple<number, { name: string, email: string }> = [1234, { name: 'Persian', email: 'a@gmail.com' }];




}