package OOP.Basic;

import java.util.Scanner;
import java.util.TreeSet;

public class OOP_B16_Lop_Set_2 {
    private final TreeSet<Integer> set = new TreeSet<>();

    public OOP_B16_Lop_Set_2() {
    }

    public OOP_B16_Lop_Set_2(int[] a) {
        for (int i : a) {
            this.set.add(i);
        }
    }

    public OOP_B16_Lop_Set_2 union(OOP_B16_Lop_Set_2 b) {
        OOP_B16_Lop_Set_2 res = new OOP_B16_Lop_Set_2();
        res.set.addAll(this.set);
        res.set.addAll(b.set);
        return res;
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
        OOP_B16_Lop_Set_2 s1 = new OOP_B16_Lop_Set_2(a);
        OOP_B16_Lop_Set_2 s2 = new OOP_B16_Lop_Set_2(b);
        OOP_B16_Lop_Set_2 s3 = s1.union(s2);
        System.out.println(s3);
    }
}
