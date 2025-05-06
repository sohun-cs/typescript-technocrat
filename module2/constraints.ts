{

    // Constraints

    const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
        const course = 'Next Level Web Development';

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>(
        { id: 221132, name: 'Mr. X', email: 'x@gmail.com', devType: 'NLWD' }
    );

    const student2 = addCourseToStudent({id: 23223, name: 'Mr. Y', email: 'y@gmail.com', hasWatch: 'Apple Watch' });


}