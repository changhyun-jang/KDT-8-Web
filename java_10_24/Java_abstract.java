package java_10_24;

public class Java_abstract {
    public static void main(String[] args) {
        Kim k = new Kim("김정은", "창현고", 17, 1823123123);
        System.out.println(k.getName()+"은"+k.getSchool()+"에 다니는"+k.getAge()+"살 학생입니다.");
        k.todo();
        Baek b= new Baek("백창엽", "서울대", 22,243423434);
        System.out.println(b.getName()+"은"+b.getSchool()+"에 다니는"+b.getAge()+"살 학생입니다.");
        b.todo();
    }
}
