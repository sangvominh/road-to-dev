package GUI;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class JFrameExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("JFrameExample");
        frame.setSize(300, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // dong from == dong chuong trinh
        frame.setLocationRelativeTo(null); // cho frame nam giua man hinh

        frame.setLayout(null); // mac dinh la flow, null de tranh bi flow

        JLabel label = new JLabel("User name:");
        label.setBounds(10, 10, 80, 25);
        JTextField userField = new JTextField();
        userField.setBounds(100, 10, 165, 25);

        JLabel label2 = new JLabel("Password:");
        label2.setBounds(10, 50, 80, 25);
        JPasswordField passwordField = new JPasswordField();
        passwordField.setBounds(100, 50, 165, 25);

        // text Area
        JLabel label3 = new JLabel("Area");
        label3.setBounds(10, 90, 80, 25);
        JTextArea areaField = new JTextArea();
        areaField.setBounds(100, 90, 165, 100);
        areaField.setLineWrap(true); // tu dong xuong hang khi het cho
        areaField.setWrapStyleWord(true); // dong goi tu, dam bao de doc

        JButton button = new JButton("Submit");
        button.setBounds(150, 200, 100, 30);
        // Sự kiện khi nhấn nút
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("Button clicked");
                System.out.println(userField.getText());
                System.out.println(passwordField.getPassword());

                // pop up
                if (userField.getText().equals("admin") && String.valueOf(passwordField.getPassword()).equals("admin")) {
                    JOptionPane.showMessageDialog(frame, "correct password");
                } else {
                    JOptionPane.showMessageDialog(frame, "wrong password");
                }
            }
        });

        frame.add(label);
        frame.add(label2);
        frame.add(userField);
        frame.add(passwordField);
        frame.add(label3);
        frame.add(areaField);
        frame.add(button);

        frame.setVisible(true); // hien thi frame - dac o cuoi
    }
}
