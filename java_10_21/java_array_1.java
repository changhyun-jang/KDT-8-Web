package java_10_21;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class java_array_1 {
    public static void main(String[] args) throws IOException {
        System.out.println("5개의 정수를 입력하세요.");
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= new StringTokenizer(br.readLine());

        int [] arr1= new int[5];
        int sum=0;
        for (int i =0; i<arr1.length; i++){
            arr1[i]= Integer.parseInt(st.nextToken());
            sum+=arr1[i];
        }
        System.out.println("평균은 "+ (double)sum/ arr1.length);
    }
}
