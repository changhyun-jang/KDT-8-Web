package java_10_21;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class java_array {
    public static void main(String[] args) throws IOException {
        //2차원배열
        int [][] intArray = new int[2][5];
        // 배열생성
        int [] arr1= new int[10];

        // 배열 초기화
        int[] intArr2={1,2,3,4,5};
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st=new StringTokenizer(br.readLine());
        for(int i=0; i<arr1.length;i++){
            arr1[i]= Integer.parseInt(st.nextToken());
        }
        System.out.println(Arrays.toString(arr1));
        for (int i : arr1){
            System.out.println(i);
        }

    }
}
