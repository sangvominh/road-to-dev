package OOP.Basic;

import java.util.Scanner;
import java.util.TreeMap;

public class OOP_B20_Lop_Time {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        TreeMap<Integer, String> map = new TreeMap<>();
        while (n-- != 0) {
            int h = sc.nextInt();
            int m = sc.nextInt();
            int s = sc.nextInt();
            String str = h + " " + m + " " + s;
            map.put(h * 3600 + m * 60 + s, str);
        }
        for (String v : map.values()) {
            System.out.println(v);
        }

    }
}
