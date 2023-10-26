package java_10_20;

public class Java_10_20_method2 {
    public static double area(int a){
        return  a * a * Math.PI;
    }
    public static double area(int a, int b){
        return a*b;
    }
    public static double area(int a, int b, int c){
        return a*b/c;
    }
    public static void main(String[] args) {
        System.out.println("반지름이 5인 원의 넓이: " + area(5));
        System.out.println("가로 4, 세로 7인 직사각형의 넓이: " + area(4,7));
        System.out.println("밑변 6, 높이 3인 삼각형의 넓이: " + area(6,3,2));
    }
}
