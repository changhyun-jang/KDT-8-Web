package java_10_20;

import java.util.Scanner;

public class Java_10_20_if1 {
    public static void main(String[] args) {


        for(int i=0; i<5; i++){
            System.out.println("나이를 입력하세요.");
            Scanner sc= new Scanner(System.in);
            int age=sc.nextInt();
            if(1<=age && age<=7){
                System.out.println("유아");
            } else if (8<=age && age<=13) {
                System.out.println("초등학생");
            } else if (14<=age && age<=16) {
                System.out.println("중학생");
            } else if (17<=age && age<=19) {
                System.out.println("고등학생");
            }else if(age>=20){
                System.out.println("성인입니다.");
            }else{
                System.out.println("사람이아니무니다.");
            }
        }



    }
}
