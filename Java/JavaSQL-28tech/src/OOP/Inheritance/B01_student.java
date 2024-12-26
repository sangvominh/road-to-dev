package OOP.Inheritance;

import java.util.ArrayList;
import java.util.Scanner;

public class B01_student extends B01_person {
    private String id;
    private double gpa;
    private String lop;

    public B01_student(String name, String date, String adr, int id, double gpa, String lop) {
        super(name, date, adr);
        this.id = String.format("000%d", id);
        this.lop = lop;
        this.gpa = gpa;
    }

    public void chuanHoaTen() {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < super.name.length(); i++) {
            if (super.name.charAt(i) == ' ') {
                sb.append(" ");
                sb.append(Character.toUpperCase(super.name.charAt(i + 1)));
                i++;
            } else {
                sb.append(Character.toLowerCase(super.name.charAt(i)));
            }
        }
        super.name = sb.toString();
    }

    public void chuanHoaDate() {

    }

    public String toString() {
        return "";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<B01_student> array = new ArrayList<>();
        int num = sc.nextInt();

        // input, chuanHoaTen, chuanHoaDate
        for (int i = 1; i <= num; i++) {
            array.add(new B01_student(sc.nextLine(), sc.nextLine(), sc.nextLine(), i, sc.nextDouble(), sc.nextLine()));
            array.get(i - 1).chuanHoaTen();
            array.get(i - 1).chuanHoaDate();
        }

        // sort

    }
}