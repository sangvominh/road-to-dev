package OOP.Basic;

import java.util.Scanner;

public class OOP_B18_Lop_Ma_Tran {
    private final int[][] matrix;

    public OOP_B18_Lop_Ma_Tran(int n, int m) {
        this.matrix = new int[n][m];
    }


    public void nextMatrix(Scanner sc) {
        for (int i = 0; i < this.matrix.length; i++) {
            for (int j = 0; j < this.matrix[i].length; j++) {
                this.matrix[i][j] = sc.nextInt();
            }
        }
    }

    public OOP_B18_Lop_Ma_Tran mul(OOP_B18_Lop_Ma_Tran b) {
        int n = this.matrix.length; //hang cua matran hien tai
        int m = this.matrix[0].length; //cot matran A va hang matran B
        int p = b.matrix[0].length; //cot ma tran B

        OOP_B18_Lop_Ma_Tran res = new OOP_B18_Lop_Ma_Tran(n, p);

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
        StringBuilder sb = new StringBuilder();
        for (int[] row : this.matrix) {
            for (int col : row) {
                sb.append(col).append(" ");
            }
            sb.append("\n");
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), m = sc.nextInt(), p = sc.nextInt();
        OOP_B18_Lop_Ma_Tran a = new OOP_B18_Lop_Ma_Tran(n, m);
        a.nextMatrix(sc);
        OOP_B18_Lop_Ma_Tran b = new OOP_B18_Lop_Ma_Tran(m, p);
        b.nextMatrix(sc);
        System.out.println(a.mul(b));
    }
}

