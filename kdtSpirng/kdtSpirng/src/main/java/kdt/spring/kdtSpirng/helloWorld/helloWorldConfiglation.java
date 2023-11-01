package kdt.spring.kdtSpirng.helloWorld;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;


//record : getter,setter, 생성자 등 자동으로 생성
record Person2(String name, int age){};

record Address(String address, int post){};
record Infomation(String name, int age, Address address){};

//@Configuration : 빈(Baen) 정의를 포함하는 클래스임을 명시
@Configuration
public class helloWorldConfiglation {
    @Bean
    public String name(){
        return "KDT8";
    }
    @Bean
    int age(){
        return 30;
    }
    @Bean
    public String person(){
        return "장창현";
    }
    @Bean
    public Person2 person2(){
        return new Person2("Janm", 20);
    }

    @Bean(name="myAddress")
    public Address address(){
        return new Address("서울",1234);
    }
    @Bean
    @Primary
    public Address address2(){
        return new Address("서울",1234);
    }

    @Bean
    public Infomation info(){
        return new Infomation(name(),age(),address());
    }

}
