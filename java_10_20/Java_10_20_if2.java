package java_10_20;

import java.util.Scanner;

public class Java_10_20_if2 {
    public static void main(String[] args) {
        for(int i=0; i<3; i++){
            System.out.println("이름을 입력하세요.");
            Scanner sc= new Scanner(System.in);
            String name= sc.next();

            if(name.equals("홍길동")){
                System.out.println("남자");
            } else if (name.equals("성춘향")) {
                System.out.println("여자");
            }else{
                System.out.println("모르겠어요.");
            }
        }

    }
}
