class Car {
    constructor(mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }
}
class Audi extends Car {
    constructor(mileage, fuel) {
        super(mileage, fuel);
    }
    drive(newMileage) {
        if (typeof newMileage !== 'number')
            return;
        if (this.fuel <= 0) {
            console.log('more fuel!');
        }
        else {
            this.mileage += newMileage;
            this.fuel -= 1;
        }
    }
    refuel() {
        this.fuel += 10;
        console.log('have a good trip!');
    }
    state() {
        console.log('км = ' + this.mileage + ' ' + 'бенз = ' + this.fuel);
    }
    get stateMil() {
        return this.mileage;
    }
}
const audirs5 = new Audi(0, 10);
audirs5.state();
for (let i = 0; i < 11; i++) {
    audirs5.drive(10);
    audirs5.state();
}
audirs5.refuel();
audirs5.state();
console.log('get -> ' + audirs5.stateMil);
