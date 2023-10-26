package java_10_24;

public class Kim extends Student_a{
    Kim(String name, String school, int age, int num){
        super(name, school,age,num);
    }

    @Override
    public void todo(){
        System.out.println("점심은 김가네 김밥");
    }

}
