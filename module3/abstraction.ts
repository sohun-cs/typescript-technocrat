{

    // abstraction : 1 --> interface. 2 --> abstract

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }


    // implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I'm starting the car engine`);
        }

        stopEngine(): void {
            console.log(`I'm stopping the car engine`);
        }

        move(): void {
            console.log(`I'm moving the car`)
        }

        test() {
            console.log(`I'm just testing`);
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();



    // abstract class
    // idea
    abstract class Car2 {

        abstract startEngine(): void

        abstract stopEngine(): void

        abstract move(): void

        test() {
            console.log(`I'm just testing`);
        }

    }


    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I'm starting the car engine`)
        }

        stopEngine(): void {
            console.log(`I'm stopping the car engine`);
        }

        move(): void {
            console.log(`I'm moving the car`)
        }
    }

    // const nissanCar = new Car2();
    // nissanCar.startEngine();



}