package OOP.Advanced;

public class OOP_B01_Account_Class {
    private final String ID;
    private final String CustemerID;
    private final String Username;
    private final String Password;

    public OOP_B01_Account_Class(String ID, String custemerID, String username, String password) {
        this.ID = ID;
        CustemerID = custemerID;
        Username = username;
        Password = password;
    }

    public boolean checkUserName(String name) {
        return this.Username.equals(name);
    }

    public boolean checkUserPass(String pass) {
        return this.Password.equals(pass);
    }
}
