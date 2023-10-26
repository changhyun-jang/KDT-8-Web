package java_10_24;

public class Dog extends Animal{
    public Dog(String name, int age){
        super("강아지",name,age);
    }
    @Override
    public void makeSound(){
        System.out.println("멍멍");
    }
    public void action(){
        System.out.println("산책좀 데려가라");
    }
}
