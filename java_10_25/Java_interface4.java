package java_10_25;
interface Playable{
    void play();
    void pause();
    void stop();
}
class DVDPlayer implements Playable{

    @Override
    public void play() {
        System.out.println("DVD플레이어를 실행합니다.");
        
    }

    @Override
    public void pause() {
        System.out.println("DVD플레이어를 일시정지합니다.");

    }

    @Override
    public void stop() {
        System.out.println("DVD플레이어를 정지합니다.");

    }
}

public class Java_interface4 {
    public static void main(String[] args) {
        Mp3Player mp3 = new Mp3Player();
        mp3.play();
        mp3.pause();
        mp3.stop();

        DVDPlayer dvd=new DVDPlayer();
        dvd.play();
        dvd.pause();
        dvd.stop();
    }
}
