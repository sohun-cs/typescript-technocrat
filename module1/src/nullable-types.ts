{

    // Nullable types / Unknown Types

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching");
        } else {
            console.log("There is nothing to search");
        }
    };

    searchName(null);

    // Unknown typeof 

    const getSpeedInMeterPerSecond=(value: unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value*1000)/3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else if(typeof value === 'string'){
            const [speed, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(speed) * 1000)/3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else{
            console.log("Wrong Input");
        }

    };

    getSpeedInMeterPerSecond(null);



    // never
    function throwError(msg: string): never {
        throw new Error(msg);
    }

    throwError("Banam bol")



    

}