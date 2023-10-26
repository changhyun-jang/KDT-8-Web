package java_10_21;

import java.util.Arrays;

public class java_array_2 {
    public static void main(String[] args) {
        int[] arr1={0,1,2,3,4};

        int[] newArr1= Arrays.copyOf(arr1, arr1.length);
        int[] newArr2= Arrays.copyOf(arr1, 3);
        int[] newArr3= Arrays.copyOf(arr1, arr1.length+3);
        System.out.println(Arrays.toString(newArr1));
        System.out.println(Arrays.toString(newArr2));
        System.out.println(Arrays.toString(newArr3));

        int []newArr4= Arrays.copyOfRange(newArr3,1,4);
        int[] fillArr1=new int[5];
        Arrays.fill(fillArr1,1);
        System.out.println(Arrays.toString(fillArr1));

        int[] fillArr2=new int[5];
        fillArr2[0]=1;
        fillArr2[1]=2;
        fillArr2[2]=3;
        Arrays.fill(fillArr2,3, fillArr2.length,100);
    }
}
