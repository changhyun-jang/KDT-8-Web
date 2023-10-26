package java_10_21;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class java_array_3 {
    public static void main(String[] args) throws IOException {
        System.out.println("배열의 크기를 입력하십시오 :");
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());

        System.out.println("배열의 요소를 입력하십시오 :");
        BufferedReader br2= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st=new StringTokenizer(br2.readLine());
        ArrayList<Integer> arr= new ArrayList<>();
        ArrayList<Integer> arr2=new ArrayList<>();
        ArrayList<ArrayList<Integer>> array=new ArrayList<>();
        for(int i=0; i<num;i++){
            arr.add(Integer.parseInt(st.nextToken()));
        }
        for(int i =0; i<num-1; i++){
            for (int j = i+1; j<num; j++) {
                if (arr.get(i) == arr.get(j)) {
                    arr2.add(arr.get(i));
                }
            }
        }
        System.out.println(array);
    }
}
