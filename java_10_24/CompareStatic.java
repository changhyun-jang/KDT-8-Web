package java_10_24;

public class CompareStatic {
    public static void main(String[] args) {
        WithoutStatic a = new WithoutStatic("장첸");
        WithoutStatic a2 = new WithoutStatic("밀라");
        System.out.println("WithoutStatic");
        System.out.println("장첸: "+a.getRegistered());
        System.out.println("밀라: "+a2.getRegistered() );
        WithStatic b= new WithStatic("뚬뚬");
        WithStatic b2= new WithStatic("숩");
        //static은 클래스 공통 변수
        System.out.println("WithStatic");
        System.out.println("뚬뚬: " + b.getRegistered() );
        System.out.println("숩: " + b2.getRegistered() );
        double circle = MathUtil.Circle(4);
    }
}

class MathUtil{
    private static double PI=3.14;
    public static double Circle(double radius){
        return PI * radius *radius;
    }
}
class WithoutStatic{
    private int registered =0;
    private String name;
    public WithoutStatic(String name) {
        this.name=name;
        registered++;
    }
    public int getRegistered(){
        return registered;
    }
}

class WithStatic{
    private static int registered =0;
    private String name;
    public WithStatic(String name) {
        this.name=name;
        registered++;
    }
    public int getRegistered(){
        return registered;
    }
}


