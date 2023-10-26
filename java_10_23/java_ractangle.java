package java_10_23;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class java_ractangle {
    public static void main(String[] args) throws IOException {
//        System.out.println("사각형의 가로와 세로의 길이를 띄어쓰기를기준으로 입력해주세요.");
//        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
//        StringTokenizer st=new StringTokenizer(br.readLine());
//        Ractangle rt= new Ractangle(Integer.parseInt(st.nextToken()),Integer.parseInt(st.nextToken()));
//        System.out.println(rt.area());
        ArrayList<Ractangle> rtArray = new ArrayList<>();
        while(true){
            System.out.println("사각형의 가로와 세로의 길이를 띄어쓰기를기준으로 입력해주세요.");
            BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
            StringTokenizer st=new StringTokenizer(br.readLine());
            int width=Integer.parseInt(st.nextToken());
            int height=Integer.parseInt(st.nextToken());
            if(width==0 && height==0){
                break;
            }
            Ractangle rt= new Ractangle(width);
            rt.setHeight(height);
            rtArray.add(rt);
        }
        for(Ractangle i : rtArray){
            System.out.println("가로 길이는: "+i.getWidth());
            System.out.println("가로 길이는: "+i.getHeight());
            System.out.println("넓이는: "+ i.area());
            System.out.println("----------------------------------");
        }

        System.out.println("Ractangle인스턴스의 개수: " + Ractangle.getCount());

    }
}
