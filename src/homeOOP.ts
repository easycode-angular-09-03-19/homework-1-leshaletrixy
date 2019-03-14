abstract class Car {

    protected mileage: number;
    protected fuel: number;

    constructor (mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }

    public abstract drive(newMileage): void;
    public abstract refuel(): void;

}

class Audi extends Car {
    constructor (mileage, fuel) {
        super(mileage, fuel);
    }   
    public drive(newMileage: number): void {
        if (typeof newMileage !== 'number') return;
        
        if (this.fuel <= 0) {
            console.log('more fuel!');
        } else {
            this.mileage += newMileage;
            this.fuel -= 1;
        }
    }
    public refuel(): void {
        this.fuel += 10;
        console.log('have a good trip!');
    }
    public state(): void {
         console.log('км = ' + this.mileage + ' ' + 'бенз = ' + this.fuel);
    }

    public get stateMil(): number { 
        return this.mileage;
    }

}

const audirs5: Audi = new Audi(0, 10);

audirs5.state();
for (let i: number = 0; i < 11; i++) {
    audirs5.drive(10);
    audirs5.state();
}
audirs5.refuel();
audirs5.state();
console.log('get -> ' + audirs5.stateMil);







