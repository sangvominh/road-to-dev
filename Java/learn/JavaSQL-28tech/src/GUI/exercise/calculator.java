package GUI.exercise;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class calculator {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Calculator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 500);
        frame.setLocationRelativeTo(null);
        frame.setLayout(null);

        JLabel firstNumLabel = new JLabel("First Number:");
        firstNumLabel.setBounds(10, 10, 150, 30);
        JTextField firstNumField = new JTextField();
        firstNumField.setBounds(180, 10, 200, 30);

        JLabel secondNumLabel = new JLabel("Second Number:");
        secondNumLabel.setBounds(10, 60, 150, 30);
        JTextField secondNumField = new JTextField();
        secondNumField.setBounds(180, 60, 200, 30);

        JLabel resultLabel = new JLabel("Result:");
        resultLabel.setBounds(10, 110, 150, 30);
        JTextField resultField = new JTextField();
        resultField.setBounds(180, 110, 200, 30);
        resultField.setEditable(false); // Chỉ hiển thị kết quả, không cho nhập

        // clear
        JButton clear = new JButton("CLEAR");
        clear.setBounds(10, 160, 150, 30);
        clear.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                firstNumField.setText("");
                secondNumField.setText("");
                resultField.setText("");
            }
        });

        // add
        JButton add = new JButton("ADD");
        add.setBounds(10, 200, 150, 30);
        add.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int firstNum = Integer.parseInt(firstNumField.getText());
                int secondNum = Integer.parseInt(secondNumField.getText());
                resultField.setText(firstNum + secondNum + "");
            }
        });

        frame.add(firstNumLabel);
        frame.add(firstNumField);
        frame.add(secondNumLabel);
        frame.add(secondNumField);
        frame.add(resultLabel);
        frame.add(resultField);
        frame.add(clear);
        frame.add(add);

        frame.setVisible(true);
    }
}
