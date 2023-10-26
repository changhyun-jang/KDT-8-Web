package java_10_21;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class java_exception3 {
    public static void main(String[] args) throws IOException {

        try{
            System.out.println("배열의 크기를 입력해주세여. : ");
            BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
            int num= Integer.parseInt(br.readLine());
            int [] arr = {1,2,3,4,5};
            int sum=0;
            for(int i=0; i<num; i++){
                sum+=arr[i];
            }
            System.out.println(sum/num);
        }catch(IndexOutOfBoundsException e ){
            System.out.println("배열의 범위를 벗어났습니다.");
        }catch (ArithmeticException e ){
            System.out.println("배열의 크기0 을 입력해 나눗셈 오류가 발생했습니다.");
        }catch(NumberFormatException e){
            System.out.println("정수가아닌 다른 자료형을 입력하셨습니다.");
        }
    }
}
