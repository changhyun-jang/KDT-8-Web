package java_10_20;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Java_10_20_for1 {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(bf.readLine());
        for( int i=1; i<=num; i++){
            System.out.print(i+" ");
        }
    }
}
