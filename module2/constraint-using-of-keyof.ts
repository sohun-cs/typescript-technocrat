{

    // Generic constraint with keyof operator


    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; // manually

    type Owner2 = keyof Vehicle;



    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];

    }

    const user = {
        name: "Mr. Asad",
        age: 23,
        address: 'ctg'
    }

    const car = {
        model: "Toyota",
        year: 2000
    }

    const result1 = getPropertyValue(car, 'model');

    // obj[key] 

}