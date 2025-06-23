package OOP.Basic;

import java.util.Scanner;
import java.util.TreeSet;

public class OOP_B15_Lop_Set_1 {
    private final TreeSet<Integer> set = new TreeSet<>();

    public OOP_B15_Lop_Set_1() {

    }

    public OOP_B15_Lop_Set_1(int[] a) {
        for (int j : a) {
            this.set.add(j);
        }
    }

    public OOP_B15_Lop_Set_1 intersection(OOP_B15_Lop_Set_1 b) {
        OOP_B15_Lop_Set_1 result = new OOP_B15_Lop_Set_1();
        for (int x : b.set) {
            for (int y : this.set) {
                if (x == y) {
                    result.set.add(x);
                }
            }
        }
        return result;
    }

    public String toString() {
        StringBuilder res = new StringBuilder();
        for (int x : this.set) {
            res.append(x).append(" ");
        }
        return res.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] a = new int[n];
        int[] b = new int[m];
        for (int i = 0; i < n; i++) a[i] = sc.nextInt();
        for (int i = 0; i < m; i++) b[i] = sc.nextInt();
        OOP_B15_Lop_Set_1 s1 = new OOP_B15_Lop_Set_1(a);
        OOP_B15_Lop_Set_1 s2 = new OOP_B15_Lop_Set_1(b);
        OOP_B15_Lop_Set_1 s3 = s1.intersection(s2);
        System.out.println(s3);
    }
}
