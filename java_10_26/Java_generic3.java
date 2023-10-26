package java_10_26;

import java.util.ArrayList;


public class Java_generic3 {
    //와일드 카드
    public void processList(ArrayList<? extends Number>list){
        for(Number num: list){
            System.out.println(num);
        }
        //불가능
//        list.add(1);
    }

    //타입파라미터
    public <T extends Number> void addToNumberList(ArrayList<T> list, T item){
        list.add(item);
    }
    
    //?super T


    public static void main(String[] args) {
        Java_generic3 example = new Java_generic3();
        ArrayList <Integer> integers=new ArrayList<>();
        integers.add(1);
        integers.add(2);
        integers.add(3);
        integers.add(4);
        ArrayList<Double> doubleList=new ArrayList<>();
        doubleList.add(1.1);
        doubleList.add(2.2);
        doubleList.add(3.3);


        
        //와일드 카드를 사용하여 리스트의 내용 출력
        example.processList(integers);
        example.processList(doubleList);
        //타입파라미터를 사용하여 리스트에 함수 추가
        example.addToNumberList(integers,4);
        example.addToNumberList(doubleList,4.4);

        System.out.println("--------------------------");
        example.processList(integers);
        example.processList(doubleList);

    }
}
