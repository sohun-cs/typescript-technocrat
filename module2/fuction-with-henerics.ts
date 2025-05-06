{

    // Function with Generics

    const createArray = (param: string): string[] => {
        return [param]
    }


    const createGenericArray = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh');
    const resGeneric = createGenericArray<boolean>(false);

    //type User = { id: number; name: string }
    interface User { id: number; name: string };

    const resGenericObj = createGenericArray<User>({
        id: 332,
        name: "MrX"
    });



    // Generics With Tuple

    const createGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }

    const res2 = createGenericTuple<string, number>('Bangladesh', 2024);
    const res3 = createGenericTuple<string, { name: string }>('Bangladesh', { name: 'Asia' });



    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development';

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'Mr. X', email: 'x@gmail.com', devType: 'NLWD' });
    const student2 = addCourseToStudent({ name: 'Mr. Y', email: 'y@gmail.com', hasWatch: 'Apple Watch' })
}