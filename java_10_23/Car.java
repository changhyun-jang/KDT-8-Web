package java_10_23;

public class Car {

    //접근 제어자
    //public : 같은 클래스 o, 같은패키지 o, 자식클래스 o,전체 o
    //protected : 같은 클래스 o, 같은패키지 o , 자식클래스 o, 전체 x
    //default : 같은클래스 o, 같은패키지 o , 자식클래스 x, 전체 x
    //private : 같은클래스 o, 같은패키지 x , 자식클래스 x, 전체 x
    int speed;

    public Car(){

    }
    public Car(int speed){
        this.speed=speed;
    }

    public void start(){
        System.out.println("Car");
    }

    public void setSpeed(int speed){
        if(speed>0){
            this.speed=speed;
        }
    }

    public int getSpeed(){
        return speed;
    }

    public void increase(int speed){
        this.speed = this.speed +speed;
    }
}
