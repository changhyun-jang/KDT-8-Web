package java_10_20;

import java.util.Scanner;

public class Java_10_20 {
    public static void main(String[] args) {
//        Scanner sc= new Scanner(System.in);
//        String name=sc.next();
//        int age=sc.nextInt();
//        double key= sc.nextDouble();
//        boolean married= sc.nextBoolean();
//        System.out.printf("%s",name).println();
//
//        sc.close();
        System.out.println("이름을 입력하세요.");
        Scanner sc1= new Scanner(System.in);
        String name = sc1.next();
        System.out.println("나이을 입력하세요.");
        Scanner sc2= new Scanner(System.in);
        Integer age = sc2.nextInt();
        System.out.println("안녕하세요!" +name +"님("+age+"세)");

        sc1.close();
        sc2.close();
    }
}
