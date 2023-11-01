package kdt.spring.kdtSpirng.helloWorld;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Hellowrold {
    public static void main(String[] args) {
        //스프링 컨텍스트 실행하는 단계
        var context=new AnnotationConfigApplicationContext(helloWorldConfiglation.class);
        // 스프링 프레임워크가 관리하도록설정
        System.out.println(context.getBean("name"));
        //스프링에서 관리하는 것은무엇이든Bean이 될수 있따.
        System.out.println(context.getBean(Infomation.class));
        //2개이상의 값을 가져올때는 가장 우선순위로 가져올것에 @Primary를 적어둠
        System.out.println(context.getBean(Address.class));
        String[] beens =context.getBeanDefinitionNames();
        for(String name : beens){
            System.out.println(name);
        }
    }
}
