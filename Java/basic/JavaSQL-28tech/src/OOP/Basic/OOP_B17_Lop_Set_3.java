package OOP.Basic;

import java.util.Collections;
import java.util.Scanner;
import java.util.TreeSet;

public class OOP_B17_Lop_Set_3 {
    private final TreeSet<String> set = new TreeSet<>();

    public OOP_B17_Lop_Set_3() {
    }

    public OOP_B17_Lop_Set_3(String c) {
        //tach ra tung tu
        String[] sp = c.split(" ");
        //them vao set
        Collections.addAll(set, sp);
    }

    public OOP_B17_Lop_Set_3 union(OOP_B17_Lop_Set_3 s2) {
        OOP_B17_Lop_Set_3 res = new OOP_B17_Lop_Set_3();
        res.set.addAll(this.set);
        res.set.addAll(s2.set);
        return res;
    }

    public OOP_B17_Lop_Set_3 intersection(OOP_B17_Lop_Set_3 s2) {
        OOP_B17_Lop_Set_3 res = new OOP_B17_Lop_Set_3();
        res.set.addAll(this.set);
        res.set.retainAll(s2.set);
        return res;
    }

    public String toString() {
        return String.join(" ", this.set);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        OOP_B17_Lop_Set_3 s1 = new OOP_B17_Lop_Set_3(sc.nextLine());
        OOP_B17_Lop_Set_3 s2 = new OOP_B17_Lop_Set_3(sc.nextLine());
        System.out.println(s1.union(s2));
        System.out.println(s1.intersection(s2));
    }
}
