package OOP.Basic;

import java.util.Scanner;

public class OOP_B12_Tuyen_Sinh {
    private final String mssv;
    private final String name;
    private final float t, l, h;

    public OOP_B12_Tuyen_Sinh(String mssv, String name, float t, float l, float h) {
        this.mssv = mssv;
        this.name = name;
        this.t = t;
        this.l = l;
        this.h = h;
    }

    public float UT() {
        if (this.mssv.charAt(2) == '1')
            return 0.5f;
        else if (this.mssv.charAt(2) == '2')
            return 1.0f;
        else
            return 2.5f;
    }

    public float sum() {
        return (this.t + this.l + this.h) + UT();
    }

    public String status() {
        return (sum() >= 24) ? "DAU" : "TRUOC";
    }

    @Override
    public String toString() {
        return mssv + " " + name + " " + sum() + " " + status();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        OOP_B12_Tuyen_Sinh sv = new OOP_B12_Tuyen_Sinh(sc.nextLine(), sc.nextLine(), sc.nextFloat(), sc.nextFloat(), sc.nextFloat());
        System.out.println(sv);
    }
}
