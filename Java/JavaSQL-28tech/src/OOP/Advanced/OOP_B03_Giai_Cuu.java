package OOP.Advanced;

public class OOP_B03_Giai_Cuu {
    private int power;
    private int blood;
    private boolean status;

    public OOP_B03_Giai_Cuu(String power, String blood, String status) {
        this.power = Integer.parseInt(power.substring(9));
        this.blood = Integer.parseInt(blood.substring(9));
        this.status = (status.equals("ALIVE"));
    }

    public int getPower() {
        return power;
    }

    public int getBlood() {
        return blood;
    }

    public boolean isStatus() {
        return status;
    }

    public void pea() {
        this.blood += 10;
        this.power += 2;
    }

    public void mushroom() {
        this.blood -= 15;
        this.power -= 2;
    }

    public void witch(String poweOfWitch) {
        int powerOfWitchInt = Integer.parseInt(poweOfWitch);
        if (powerOfWitchInt >= this.power) {
            this.status = false;
        } else {
            this.power += 5;
        }
    }

    public void soilder(String soild) {
        int soidInt = Integer.parseInt(soild);
        if (soidInt >= this.power) {
            this.status = false;

        } else {
            this.blood += 5;
            this.power += 7;
        }
    }

    public String toString() {
        return "POWER : " + this.power +
                "\nBLOOD : " + this.blood +
                ((status) ? "\nALIVE\n" : "\nDEAD\n") +
                "--------------------\n";
    }
}
