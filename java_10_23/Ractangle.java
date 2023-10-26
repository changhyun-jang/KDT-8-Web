package java_10_23;

public class Ractangle {
    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }


    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    private int width;
    private int height;

    public static int count=0;
    public Ractangle(int width){
        this.width=width;
        count++;
    }

    public int area(){
        return this.width * this.height;
    }

    public static int getCount(){
        return count;
    }

}
