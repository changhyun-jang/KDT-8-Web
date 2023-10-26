package java_10_25;

public class Mp3Player implements Playable {

    @Override
    public void play() {
        System.out.println("MP3플레이어를 실행합니다.");
    }

    @Override
    public void pause() {
        System.out.println("MP3플레이어를 일시정지합니다.");

    }

    @Override
    public void stop() {
        System.out.println("MP3플레이어를 정지합니다.");

    }
}
