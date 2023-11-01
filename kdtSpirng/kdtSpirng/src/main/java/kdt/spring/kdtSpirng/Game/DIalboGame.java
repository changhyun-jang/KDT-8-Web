package kdt.spring.kdtSpirng.Game;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class DIalboGame implements GameConsole{
    @Override
    public void up() {
        System.out.println("front");
    }

    @Override
    public void down() {
        System.out.println("back");

    }

    @Override
    public void left() {
        System.out.println("left");

    }

    @Override
    public void right() {
        System.out.println("right");

    }
}
