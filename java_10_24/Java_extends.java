package java_10_24;

public class Java_extends {
    public static void main(String[] args) {
        Person person = new Person("홍길동",30);
        System.out.println(person.toStirng());

        Student student = new Student("이몽룡",30,"컴공");
        System.out.println(student.getName());
        System.out.println(student.getAge());



    }
}
