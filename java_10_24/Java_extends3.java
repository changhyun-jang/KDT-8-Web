package java_10_24;

public class Java_extends3 {
    public static void main(String[] args) {
        Vehicle veh= new Vehicle(3,40,"비행기");
        veh.sound();
        System.out.println("<버스>");
        Bus bus= new Bus(8,20,"버스","뿌앙뿌앙");
        bus.sound();
        System.out.println("<자동차>");
        Car car=new Car(4,8,"자동차","뛰뛰");
        car.sound();
        System.out.println("<오토바이>");
        Motorcycle motorcycle=new Motorcycle(2,3,"오토바이","삑삑");
        motorcycle.sound();
        
    }
}
