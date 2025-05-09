{

    // oop - class

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // Parameter Properties
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        // Normal function only. Arrow function e this kaaj kore name
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        };
    }


    const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
    const cat = new Animal("Persian bhai", "cat", "meaw meaw");

    cat.makeSound();

}