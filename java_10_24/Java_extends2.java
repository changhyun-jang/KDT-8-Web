package java_10_24;

public class Java_extends2 {
    public static void main(String[] args) {
        Cat ani1= new Cat("네로", 3);
        System.out.println("Cat");
        ani1.makeSound();
        ani1.action();
        Dog ani2 = new Dog("멍뭉", 4);
        System.out.println("Dog");
        ani2.makeSound();
        ani2.action();
    }
}
