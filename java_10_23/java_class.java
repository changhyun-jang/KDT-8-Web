package java_10_23;

public class java_class {
    public static void main(String[] args) {
        Car bmw= new Car();
        Car benz= new Car();
        bmw.start();
        benz.start();
        //잘못된 접근 방법
//        bmw.speed=100;
//        benz.speed=101;

        //객체 보호
//        bmw.setSpeed(-90);
//        benz.setSpeed(-110);

        bmw.setSpeed(90);
        benz.setSpeed(110);

//        int bmwsppend=bmw.getSpeed();
//        int benzspeed=benz.getSpeed();
//        bmwsppend= bmwsppend+100;
//        bmw.setSpeed(bmwsppend);
//        benzspeed= benzspeed+90;
//        benz.setSpeed(benzspeed);

        System.out.println(bmw.getSpeed()  );
        System.out.println(benz.getSpeed());

    }
}
