package facespace

class Transaction {

    String amount
    String category
    String date
    String username


    static constraints = {
        //constaints so that year, month and day values all make sense
        //year > 0
        //1<= month && month <= 12
        //1<= day && day <= 31
    }
}
