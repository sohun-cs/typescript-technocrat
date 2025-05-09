{

    // oop - class

    class Animal {
        name: string;
        species: string;
        sound: string;


        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
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