package java_10_24;

public class Cat extends Animal {
    public Cat(String name, int age){
        super("고양이",name,age);
    }
    @Override
    public void makeSound(){
        System.out.println("야옹");
    }
    public void action(){
        System.out.println("뭘봐 집사야");
    }
}
