package java_10_25;

public class LOL implements Game{
    @Override
    public void up(){
        System.out.println("앞으로이동");
    }
    @Override
    public void left(){
        System.out.println("왼쪽으로이동");
    }
    @Override
    public void right(){
        System.out.println("오른쪽으로이동");
    }
    @Override
    public void down(){
        System.out.println("뒤로이동");
    }
}
