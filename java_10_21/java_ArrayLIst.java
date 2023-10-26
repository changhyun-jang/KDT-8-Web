package java_10_21;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class java_ArrayLIst {
    public static void main(String[] args) throws IOException {
        ArrayList<String> arr1= new ArrayList<>();
        while(true){
            System.out.println("문자를 입력해주세요. :");
            BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
            arr1.add(br.readLine());
            if(arr1.get(arr1.size()-1).equals("exit")){
                arr1.remove(arr1.size()-1);
                break;
            }
        }
        for(String s :arr1){
            System.out.println(s);
        }
    }
}
