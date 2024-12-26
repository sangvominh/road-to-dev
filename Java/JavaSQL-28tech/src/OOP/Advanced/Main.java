package OOP.Advanced;

import java.util.Scanner;

public class Main {
    /*
cau 1
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        sc.nextLine();
        OOP_B01_Account_Class[] list = new OOP_B01_Account_Class[n];
        for (int i = 0; i < n; i++) {
            list[i] = new OOP_B01_Account_Class(sc.nextLine(), sc.nextLine(), sc.nextLine(), sc.nextLine());
        }

        // query
        int q = sc.nextInt();
        sc.nextLine();
        while (q-- != 0) {
            String nameLogin = sc.nextLine();
            String passLogin = sc.nextLine();

            boolean success = false;
            for (int i = 0; i < n; i++) {
                System.out.println("cccc");
                if (list[i].checkUserName(nameLogin) && list[i].checkUserPass(passLogin)) {
                    success = true;
                    break;
                }
            }

            System.out.println(success ? "Login Successful" : "Login Failed");
        }
    }
*/

    /* public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt(); // input quality bankAccount
        sc.nextLine();
        OOP_B02_Bank_Account[] list = new OOP_B02_Bank_Account[n]; //list bank account

        // account infor
        for (int i = 0; i < n; i++) {
            list[i] = new OOP_B02_Bank_Account(sc.nextLine(), sc.nextLine(), sc.nextLine(), sc.nextLine(), sc.nextLine());
        }

        // test case
        int q = sc.nextInt();
        sc.nextLine();
        while (q-- != 0) {
            String type = sc.nextLine(); // type transfer

            if (type.equals("transfer")) {
                String sender = sc.nextLine(); // stk sender
                String receiver = sc.nextLine(); // stk receiver
                String valueTransfer = sc.nextLine(); // value transfer

                // find sender
                for (OOP_B02_Bank_Account x : list) {
                    // found and remaining >=50_000
                    if (x.getSTK().equals(sender) && (Long.parseLong(x.getSoDu()) - Long.parseLong(valueTransfer) >= 50000)) {
                        // find receiver
                        for (OOP_B02_Bank_Account y : list) {
                            if (y.getSTK().equals(receiver)) {
                                long tmp = Long.parseLong(x.getSoDu()) - Long.parseLong(valueTransfer);
                                // subtraction sender money
                                x.setSoDu(String.valueOf(tmp));
                                // update receiver money
                                y.setSoDu(String.valueOf(tmp));
                            }
                        }
                    }
                }
            } else if (type.equals("withdraw")) {
                String withdrawer = sc.nextLine(); //stk
                long value = sc.nextLong(); //tien can rut

                // find withdrawer
                for (OOP_B02_Bank_Account wDrawer : list) {
                    if (wDrawer.getSTK().equals(withdrawer)) {
                        // check condition: soDu > Y
                        long remain = Long.parseLong(wDrawer.getSoDu()) - value;
                        if (remain >= 50000) {
                            wDrawer.setSoDu(remain + "");
                            break;
                        }
                    }
                }
            } else {
                String acc = sc.nextLine();
                long value = sc.nextLong();
                for (OOP_B02_Bank_Account depo : list) {
                    if (depo.getSTK().equals(acc)) {
                        long cal = Long.parseLong(depo.getSoDu()) + value;
                        depo.setSoDu(cal + "");
                    }
                }
            }
        }

        //output
        for (int i = 0; i < n; i++) {
            System.out.println(list[i]);
        }
    }
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        OOP_B03_Giai_Cuu HoangTu = new OOP_B03_Giai_Cuu(sc.nextLine(), sc.nextLine(), sc.nextLine());
        System.out.println(HoangTu.getBlood());
        int event = sc.nextInt();
        sc.nextLine();

        while (event-- > 0) {
            String ev = sc.nextLine();
            String[] sp = ev.split(" ");

            switch (sp[0]) {
                case "pea" -> {
                    HoangTu.pea();
                    System.out.println(HoangTu);
                }
                case "mushroom" -> {
                    HoangTu.mushroom();
                    System.out.println(HoangTu);
                }
                case "witch" -> {
                    HoangTu.witch(sp[1]);
                    System.out.println(HoangTu);
                }
                case "soilder" -> {
                    HoangTu.soilder(sp[1]);
                    System.out.println(HoangTu);
                }
            }
        }
    }
}
