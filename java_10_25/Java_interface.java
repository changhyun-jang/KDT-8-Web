package java_10_25;

//인터페이스 특징
//1.추상화 : 메서드를 선언하여 상속받은 클래스에서 사용하게함.
//2. 다중 상속: 하나의 클래스는 여러 인터페이스를 구현할 수 있음.
//하나의 인터페이스를 통해 여러 클래스에서 공통의 동작을 정의할 수 있고 각클래스는 그 동작을 자신의 박식대로 구현할 수 있음
public class Java_interface {
    public static void main(String[] args) {
        LOL lol=new LOL();
        lol.up();
        lol.down();
        lol.left();
        lol.right();
    }
}
