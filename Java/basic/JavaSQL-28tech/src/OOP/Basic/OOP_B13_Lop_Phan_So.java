package OOP.Basic;

import java.util.Scanner;

public class OOP_B13_Lop_Phan_So {
    private final long tu1;
    private final long mau1;
    private final long tu2;
    private final long mau2;
    private long kqTu1;
    private long kqMau1;
    private long kqTu2;
    private long kqMau2;

    public OOP_B13_Lop_Phan_So(int tu1, int mau1, int tu2, int mau2) {
        this.tu1 = tu1;
        this.mau1 = mau1;
        this.tu2 = tu2;
        this.mau2 = mau2;
    }

    private long GCD(long a, long b) {
        while (b != 0) {
            long tmp = a;
            a = b;
            b = tmp % b;
        }
        return a;
    }

    public void C() {
        // tong
        this.kqTu1 = this.tu1 * this.mau2 + this.tu2 * this.mau1;
        this.kqMau1 = this.mau1 * this.mau2;

        // rut gon
        long gcd = GCD(this.kqTu1, this.kqMau1);
        this.kqTu1 /= gcd;
        this.kqMau1 /= gcd;

        // binh phuong
        this.kqTu1 *= this.kqTu1;
        this.kqMau1 *= this.kqMau1;
    }

    public void D() {
        this.kqTu2 = (this.tu1 * this.tu2 * this.kqTu1);
        this.kqMau2 = (this.mau1 * this.mau2 * this.kqMau1);
        //rut gon
        long gcd = GCD(this.kqTu2, this.kqMau2);
        this.kqTu2 /= gcd;
        this.kqMau2 /= gcd;
    }

    public String toString() {
        return kqTu1 + "/" + kqMau1 + " " + kqTu2 + "/" + kqMau2;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ts = sc.nextInt();
        while (ts-- > 0) {
            OOP_B13_Lop_Phan_So myO = new OOP_B13_Lop_Phan_So(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt());
            myO.C();
            myO.D();
            System.out.println(myO);
        }
    }
}
