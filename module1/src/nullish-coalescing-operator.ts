{

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