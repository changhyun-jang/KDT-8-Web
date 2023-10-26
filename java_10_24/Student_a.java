package java_10_24;

abstract class Student_a {
    public String getName() {
        return name;
    }

    private String name;
    private String school;

    public String getSchool() {
        return school;
    }

    public int getAge() {
        return age;
    }

    public int getNum() {
        return num;
    }

    private int age;
    private int num;
    Student_a(String name, String school, int age, int num){
        this.name=name;
        this.school=school;
        this.age=age;
        this.num=num;
    }
    abstract public void todo();
}
