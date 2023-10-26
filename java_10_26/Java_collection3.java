package java_10_26;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.Buffer;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class Java_collection3 {
    public static void main(String[] args) throws IOException {
        String userInput="";
        Map<String,Integer> map=new HashMap<>();
        while(!userInput.equals("종료")){
            System.out.println("이름과 나이를 입력해주세요.");
            BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
            StringTokenizer st=new StringTokenizer(bf.readLine()," ");
            String name=st.nextToken();
            if(name.equals("종료")){
                break;
            }
            Integer age=Integer.parseInt(st.nextToken());
            map.put(name,age);
        }
        System.out.println(map.entrySet());
    }
}
