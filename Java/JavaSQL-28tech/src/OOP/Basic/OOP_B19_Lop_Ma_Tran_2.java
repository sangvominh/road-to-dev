package OOP.Basic;

import java.util.Scanner;

public class OOP_B19_Lop_Ma_Tran_2 {
    private final int[][] matrix;


    public OOP_B19_Lop_Ma_Tran_2(int n, int m) {
        this.matrix = new int[n][m];
    }

    public void nextMatrix(Scanner sc) {
        for (int i = 0; i < this.matrix.length; i++) {
            for (int j = 0; j < this.matrix[0].length; j++) {
                this.matrix[i][j] = sc.nextInt();
            }
        }
    }

    public OOP_B19_Lop_Ma_Tran_2 trans() {
        OOP_B19_Lop_Ma_Tran_2 res = new OOP_B19_Lop_Ma_Tran_2(this.matrix[0].length, this.matrix.length);
        for (int i = 0; i < this.matrix.length; i++) {
            for (int j = 0; j < this.matrix[0].length; j++) {
                res.matrix[j][i] = this.matrix[i][j];
            }
        }
        return res;
    }

    public OOP_B19_Lop_Ma_Tran_2 mul(OOP_B19_Lop_Ma_Tran_2 b) {
        int n = this.matrix.length; // dong A
        int m = this.matrix[0].length; //cot A dong B
        int p = b.matrix[0].length; //cot B

        OOP_B19_Lop_Ma_Tran_2 res = new OOP_B19_Lop_Ma_Tran_2(n, p);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < p; j++) {
                res.matrix[i][j] = 0;
                for (int k = 0; k < m; k++) {
                    res.matrix[i][j] += this.matrix[i][k] * b.matrix[k][j];
                }
            }
        }
        return res;
    }

    public String toString() {
        StringBuilder res = new StringBuilder();
        for (int[] row : this.matrix) {
            for (int col : row) {
                res.append(col).append(" ");
            }
            res.append("\n");
        }
        return res.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), m = sc.nextInt();
        OOP_B19_Lop_Ma_Tran_2 a = new OOP_B19_Lop_Ma_Tran_2(n, m);
        a.nextMatrix(sc);
        OOP_B19_Lop_Ma_Tran_2 b = a.trans();
        System.out.println(a.mul(b));
    }
}
