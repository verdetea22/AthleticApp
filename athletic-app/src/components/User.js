class User {
    totalPoints = 0;

    constructor(
        email,
        firstname,
        lastname,
        password,
        CWID,
        points
    ) {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.CWID = CWID;
        this.points = points;
    }

    /**
     * Calculates the total points
     * @returns {number} balance
     */
    calculatePointTotal() {
        let totalPoints = this.points;
        for (let transaction of this.monthyTransactions) {
            total -= transaction.amount;
        }

        return total;
    }


}

export default User;