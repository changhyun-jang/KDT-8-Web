package java_10_25;

interface Move{
    void MoveForward();
    void MoveBackward();

}
interface Power{
    void PowerOn();
    void PowerOff();
}
interface Car extends Power, Move{
    //인터페아스는 인터페이스를 다중 상속들 수 있다.
    void  changeGear(int gear);
}
class Suv implements Car{

    @Override
    public void MoveForward() {
        System.out.println("앞으로");
    }

    @Override
    public void MoveBackward() {
        System.out.println("뒤로");
    }

    @Override
    public void PowerOn() {
        System.out.println("엔진온");
    }

    @Override
    public void PowerOff() {
        System.out.println("엔진오프");
    }

    @Override
    public void changeGear(int gear) {
        System.out.println("기어변경"+gear);
    }
}
public class Java_interface3 {
    public static void main(String[] args) {
        Suv s=new Suv();
        s.changeGear(6);
        s.MoveBackward();
        s.PowerOff();
    }
//   1.상속
//    - 추상클래스: 한클래스는 하나의 추상 클래스만 상속
//    - 인터페이스 : 한클래스는 여러 인터페이스를 구현가능
//   2. 멤버변수
//    - 추상클래스 : 멤버변수를 가질 수 있다.
//    - 인터페이스 :상수만 포함가능
//    3. 구성요소
//    - 추상클래스: ㅊ상메섣, 생성자, 변수
//    - 인터페시스 : 추상메서듸, 상수, 디폴트메서드
//    4. 사용
//    -추상클래스 : 상속과계에서 공통의 기능이나 상태를 유지할 떄 사용
//    -인터페이스 : 여러 클래스에서 공토으로필요한 기능을 정의 할때 사용
//
//    5. 생성자
//    추상클래스 : 생성자 초기화 가능
//    인터페이스 : 생성자 초기화 불가능
//
//    6. 공통점
//    - 하위클래스에서 특정한 행동을 강제하기 위해사용
    
//    다형성
//    하나의 인터페이스나 클래스를 여러가지 방식으로동작하게 하는 것
//    상속과 인터페이스를 활용하여 ㅜ구현
//
//    다형성의 장점
//    1.재사용성 : 기존코드를 재사용하여 새로운 클래스 생성
//    2.확장성 : 기존 코드를 수정하지 않고 기능 추가 및확장
//
//    다형성의 단점
//    1. 복잡성 증가: 여러 객체가 동일한 인터페이스나 슈퍼 클래스를상속 받을 때, 실제 어떤 객체의 메서드가 호출되는지 파악하기 어려울 수 있음.
//    2. 디버깅어려움 : 여러 클래스가 동일한 메서드를 오버라이드 할경우, 디버깅시 실제로 어떤 클래스의 메서드가 실행되는지 파악하기 어려울 수 있음.
//    3. 유지보수의 어려움 : 다형성을 과도하게 사용하게되면 새로운 클래스나 메서드가 추가될때, 유지보수가 어려워질 수 있음.(양면성)
    
}
