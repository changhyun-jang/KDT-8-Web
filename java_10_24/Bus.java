package java_10_24;

public class Bus extends Vehicle{
    public String sound;
    Bus(int wheel,int member,String name,String sound){
        super(wheel,member,name);
        this.sound=sound;
    }

    @Override
    public void sound(){
        System.out.println("버스는 "+sound+" 경적을 울립니다.");
    }
}
