package java_10_26;

class Pair<K,V>{
    K key;
    V value;

    Pair(K key,V value){
        this.key=key;
        this.value=value;
    }
    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }
}

public class Java_Pair {
    public static void main(String[] args) {
        Pair p1=new Pair<>("One",1);
        Pair p2=new Pair<>(2,"Two");
        System.out.println("Key : "+ p1.getKey() + ", Value : "+ p1.getValue());
        System.out.println("Key : "+ p2.getKey() + ", Value : "+ p2.getValue());
    }


}
