package java_10_24;

public class Motorcycle extends Vehicle{
    public String sound;
    Motorcycle(int wheel,int member,String name,String sound){
        super(wheel,member,name);
        this.sound=sound;
    }

    @Override
    public void sound(){
        System.out.println("오토바이는 "+sound+" 경적을 울립니다.");
    }
}
