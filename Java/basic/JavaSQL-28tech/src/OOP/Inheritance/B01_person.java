package OOP.Inheritance;

public class B01_person {
    protected String name;
    protected String date;
    protected String adr;

    public B01_person() {
        name = "";
        date = "";
        adr = "";
    }

    public B01_person(String name, String date, String adr) {
        this.name = name;
        this.date = date;
        this.adr = adr;
    }

    public String toString() {
        return "";
    }
}
