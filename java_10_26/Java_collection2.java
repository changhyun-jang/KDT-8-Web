package java_10_26;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

public class Java_collection2 {
    public static void main(String[] args) throws IOException {
        Set<Integer> set=new HashSet<>();
        int num=0;
        try{
            while(num!=-1){
                System.out.println("숫자를 입력하세요.");
                BufferedReader bf= new BufferedReader(new InputStreamReader(System.in));
                num=Integer.parseInt(bf.readLine());
                if(num==-1){
                    break;
                }
                set.add(num);
            }
            System.out.println(set);
        }catch(Exception e){
            System.out.println(e);
        }



    }
}
