package kdt.spring.kdtSpirng.Game;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
@Qualifier("LOLGameQualifier")
public class lolGame implements GameConsole{
    @Override
    public void up() {
        System.out.println("up");
    }

    @Override
    public void down() {
        System.out.println("down");

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
