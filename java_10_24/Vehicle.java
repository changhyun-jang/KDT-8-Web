package java_10_24;

public class Vehicle {
    private int wheel;
    private int member;
    private String name;

    public Vehicle(int wheel,int member,String name){
        this.wheel = wheel;
        this.member=member;
        this.name=name;
    }

    public void sound(){
        System.out.println("운송수단은 경적을 울립니다.");
    }
}
