package OOP.Advanced;

public class OOP_B02_Bank_Account {
    private String ID;
    private String CustomerID;
    private String STK;
    private String PINCode;
    private String SoDu;

    public OOP_B02_Bank_Account(String ID, String customerID, String STK, String PINCode, String soDu) {
        this.ID = ID;
        CustomerID = customerID;
        this.STK = STK;
        this.PINCode = PINCode;
        SoDu = soDu;
    }

    public String getID() {
        return ID;
    }

    public String getCustomerID() {
        return CustomerID;
    }

    public String getSTK() {
        return STK;
    }

    public String getPINCode() {
        return PINCode;
    }

    public String getSoDu() {
        return SoDu;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public void setCustomerID(String customerID) {
        CustomerID = customerID;
    }

    public void setSTK(String STK) {
        this.STK = STK;
    }

    public void setPINCode(String PINCode) {
        this.PINCode = PINCode;
    }

    public void setSoDu(String soDu) {
        SoDu = soDu;
    }

    @Override
    public String toString() {
        return "ID : " + this.ID +
                "\nCusID  : " + this.CustomerID +
                "\nNumber : " + this.STK +
                "\nPIN : " + this.PINCode +
                "\nBalance : " + this.SoDu +
                "\n-------------------\n";
    }
}
