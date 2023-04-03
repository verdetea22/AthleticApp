class User {
    totalPoints = 0;

    constructor(
        email,
        name,
        CWID,
        points
    ) {
        this.email = email;
        this.name = name;
        this.CWID = CWID;
        this.points = points;
    }

    /**
     * Calculates the total gain or loss the user takes in each month based on income and monthy transactions.
     * @returns {number} balance
     */
    calculateMonthlyTotal() {
        let total = this.income;
        for (let transaction of this.monthyTransactions) {
            total -= transaction.amount;
        }

        return total;
    }


    /**
     * Runs through user transactions and sorts them into wants and needs
     */
    sortTransactions() {
        for (let transaction of this.monthyTransactions) {
            switch (transaction.title) {
                case "Rent":
                case "Groceries":
                case "Utilities":
                case "Clothing":
                    this.needsSpending += transaction.amount;
                    break;
                case "Entertainment":
                case "Restaurant":
                    this.wantsSpending += transaction.amount;
                    break;
                default:
                    this.wantsTransactions += transaction.amount;
                    break;
            }
        }
        this.savingsSpending =
            this.income - this.needsSpending - this.wantsSpending;
    }



}

export default User;