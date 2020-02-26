package NgonNguLapTrinhJava.B5_InterfaceAndAbstractClass.ThucHanh.AnimalAndInterfaceEdible.animal;

import NgonNguLapTrinhJava.B5_InterfaceAndAbstractClass.ThucHanh.AnimalAndInterfaceEdible.edible.Edible;

public class Chicken extends Animal implements Edible {
    @Override
    public String makeSound() {
        return "Chicken: cluck-cluck!";
    }

    @Override
    public String howToEat() {
        return "could be fried";
    }
}