package java_10_25;
interface Constants{
    //public final이 생략되었음
    //final 키워드
    //클래스에서 사용:상속될 수 없다.
    //메소드에서 사용:오버라이드 될 수 없다.
    //변수에서 사용 : 상수가됨, 값 변경 불가능,
    //매개변수에서 사용 : void Func(final int x){}

    int MAX_VALUE=100;
    double PI=3.14;
}
public class Java_interface2 implements Constants{
    void display(){
        System.out.println(MAX_VALUE);
        System.out.println(PI);
    }

}
