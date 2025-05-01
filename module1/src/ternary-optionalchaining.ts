{

    // ternary operator || optional chaining || nullish coalescing

    const age: number = 15;

    if (age >= 18) {
        //console.log('Adult')
    }
    else {
        // console.log("Not Adult")
    }


    //const isAdult = age >= 18 ? "Adult" : "Not adult" 

    // Nullish coalescing operator
    // null / undefined ---> decision making

    const isAuthenticated = "";

    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 }, { result2 });

    // Uses of Nullish Coalescing Operator
    type User = {
        name: string;
        address: {
            city: string,
            road: string,
            presentLocation: string,
            permanentLocation?: string
        }
    }

    const user: User = {
        name: "Asad",
        address: {
            city: "Dhk",
            road: "Dhk",
            presentLocation: "Dhk",
            
        }
    }

    const permanentLocation = user?.address?.permanentLocation ?? "No Permanent Address";
    console.log({ permanentLocation })

}