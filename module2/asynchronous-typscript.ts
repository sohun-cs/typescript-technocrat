{
    // Promise


    type ToDo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<ToDo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        const data = await response.json();
        console.log(data)
        return data;
    }


    getTodo();

    type Something = { something: string }

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: "something" };

            if (data) {
                resolve(data);
            } else {
                reject('Failed to load data');
            }
        })
    }

    // Calling Create Promise Function

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        return data;
        // console.log(data);
    };

    showData();

}