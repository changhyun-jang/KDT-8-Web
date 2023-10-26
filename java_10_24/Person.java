package java_10_24;

public class Person {
    public String getName() {
    return name;
}

    private String name;

    public int getAge() {
        return age;
    }

    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toStirng(){
        return "Person-"+name +", age-"+age;
    }
}
