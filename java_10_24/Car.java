package java_10_24;

public class Car extends Vehicle{
    public String sound;
    Car(int wheel,int member,String name,String sound){
        super(wheel,member,name);
        this.sound=sound;
    }

    @Override
    public void sound(){
        System.out.println("자동차는 "+sound+" 경적을 울립니다.");
    }
}
