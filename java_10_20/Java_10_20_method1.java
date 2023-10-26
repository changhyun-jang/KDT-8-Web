package java_10_20;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Java_10_20_method1 {
    public static double Add(double a, double b){
        return a+b;
    }
    public static double Sub(double a, double b){
        return a-b;
    }
    public static double Mul(double a, double b){
        return a*b;
    }
    public static double Devide(double a, double b){
        return a/b;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st= new StringTokenizer(br.readLine(), " ");
        double a= Double.parseDouble(st.nextToken());
        double b= Double.parseDouble(st.nextToken());

        System.out.println("덧셈 결과: "+ Add(a,b));
        System.out.println("뺼셈 결과: "+ Sub(a,b));
        System.out.println("나눗셈 결과: "+ Devide(a,b));
        System.out.println("곱셈 결과: "+ Mul(a,b));
    }

}
