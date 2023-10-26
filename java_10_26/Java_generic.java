package java_10_26;

import java.util.ArrayList;

class MycustonList{
    ArrayList<String> list = new ArrayList<>();
    public void addElement(String element){
        list.add(element);
    }
    public void removeElement(String element){
        list.remove(element);
    }
}

//제네릭클래스
class MycustomListGeneric<T>{
    ArrayList<T> list = new ArrayList<>();
    public void addElement(T element){
        list.add(element);
    }
    public void removeElement(T element){
        list.remove(element);
    }
    public T get(int index){
        return list.get(index);
    }
}

public class Java_generic {
    public static void main(String[] args) {
        MycustonList list = new MycustonList();
        list.addElement("element1");
        list.addElement("element2");

        MycustomListGeneric<String> list2=new MycustomListGeneric();
        list2.addElement("hello");
        MycustomListGeneric<Integer> list3 =new MycustomListGeneric<>();
        list3.addElement(3);
        list3.addElement(2);
        list3.addElement(1);
        Integer num=list3.get(2);
    }
}
