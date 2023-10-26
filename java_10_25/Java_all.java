package java_10_25;

import java.util.ArrayList;
import java.util.List;

abstract class Vehicle{
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxSpeed() {
        return MaxSpeed;
    }

    public void setMaxSpeed(int maxSpeed) {
        MaxSpeed = maxSpeed;
    }

    private int MaxSpeed;

    abstract public void move();
}

interface Flyable{
    public void fly();
}
class Car2 extends Vehicle{

    @Override
    public void move() {
        System.out.println("도로를 따라이동중");
    }
}
class AirPlane extends Vehicle implements Flyable{
    @Override
    public void move() {
        System.out.println("하늘을 날아가는 중");
    }

    @Override
    public void fly() {
        System.out.println("고도 10,000에서 비행 중");
    }
}
public class Java_all {
    public static void main(String[] args) {
        List<Vehicle> arr=new ArrayList<>();
        Car2 c=new Car2();
        AirPlane a=new AirPlane();

        arr.add(c);
        arr.add(a);

        for(Vehicle vehicle:arr){
            vehicle.move();
            //instanceof:객체가 특정 클래스나 인터페이스의 인스턴스인지 확인하는 연산자
            if(vehicle instanceof AirPlane){
                ((AirPlane) vehicle).fly();
            }
        }
    }

}
