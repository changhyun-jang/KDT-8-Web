package java_10_26;

class Box<T extends Number>{
    private T item;
    public void setItem(T item){
        this.item=item;
    }
    public T getItem(){
        return item;
    }
}

interface Movable{
    void move();
}

class Car implements Movable{
    @Override
    public void move(){
        System.out.println("경기도 무시???");
    }
}
//제너릭 클래스
//Movable을 상속받고있는 클래스만 사용가능.
//'extends 뒤에 나오는 것을' 상속하는 클래스 또는 인터페이스
//'super뒤에나오는 것이' 상속하는 클래스 또는 인터페이스
class Container<T extends Movable>{
    private T item;
    public Container(T item){
        this.item = item;
    }
    public void makeItMove(){
        item.move();
    }

}


public class Java_generic2 {
    public static void main(String[] args) {
//        Box<String> stringBox=new Box<>();
//        stringBox.setItem("Hello world");
//        String value=stringBox.getItem();
//        System.out.println(value);

        Box<Integer> intBox = new Box<>();
        intBox.setItem(1);
        Box<Double> doubleBox=new Box<>();
        doubleBox.setItem(3.0);
        Integer value=intBox.getItem();
        System.out.println(value);


        Container<Car> carContainer= new Container<>(new Car());
        carContainer.makeItMove();
    }
}

