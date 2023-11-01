package kdt.spring.kdtSpirng.Game;

import java.io.Console;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class GameEngine{
    public GameConsole game;

    public GameEngine(@Qualifier("LOLGameQualifier") GameConsole game){
        this.game=game;
    }
    public void run(){
        game.up();
        game.down();
        game.left();
        game.right();
    }
}
