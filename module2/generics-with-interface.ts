{

    // interface - generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T,
        bike?: X
    }

    type EmilabWatch = {
        brand: string,
        model: string,
        display: string,
    }


    const jrDeveloper: Developer<EmilabWatch> = {
        name: 'Asad',
        computer: {
            brand: 'Microsoft',
            model: 'Surface 1',
            releaseYear: 2017
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'OLED'
        }
    }


    interface AppleWatch {
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean,
    }

    interface YamahaBike {
        brand: string,
        engine: string
    }

    const srDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Sohun',
        computer: {
            brand: 'Macbook',
            model: 'Series 3',
            releaseYear: 2021
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'latest',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            brand: "Yamaha",
            engine: "150cc"
        }
    }



}