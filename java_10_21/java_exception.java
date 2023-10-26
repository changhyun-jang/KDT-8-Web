package java_10_21;

public class java_exception {
    public static void main(String[] args) {
        int num1=4;
        int num2=0;
        try{
            System.out.println(num1+"/"+num2+"="+(num1/num2));
        }catch(ArithmeticException e){
            System.out.println("0으로 나누는 에러가 발생했습니다 => " + e);

        }


    }
}
