package kdt.spring.kdtSpirng.Game;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("kdt.spring.kdtSpirng.Game")
//@ComponentScan("패키지명")
public class GameMain {
    public static void main(String[] args) {
        //결합 : 무엇인가를 변경하는데, 얼마나 많은 작업이 관련되어 있는지에 대한 속성
        var context=new AnnotationConfigApplicationContext(GameMain.class);
        context.getBean(GameConsole.class).down();
        context.getBean(GameEngine.class).run();
    }
}
