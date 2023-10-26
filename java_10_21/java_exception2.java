package java_10_21;

public class java_exception2 {
    public static void main(String[] args) {
        int [] arr= {1,2,3,4};
        try{
            for(int i=0; i<6;i++){
                System.out.println(arr[i]);
            }
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("인덱스가 범위를 벗어났습니다.");
        }
    }
}
