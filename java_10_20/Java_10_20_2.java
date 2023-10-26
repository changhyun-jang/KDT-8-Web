package java_10_20;

import java.sql.SQLOutput;
import java.util.Scanner;

public class Java_10_20_2 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("수를 입력하세요 : ");
        int num = sc.nextInt();

        if(num%3==0){
            System.out.println("3의 배수입니다.");
        }else{
            System.out.println("3의 배수가 아닙니다");
        }
        sc.close();
    }
}
