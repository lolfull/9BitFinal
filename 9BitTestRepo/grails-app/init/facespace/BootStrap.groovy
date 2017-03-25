package facespace

class BootStrap {

    def init = { servletContext ->
        // This code runs on Grails startup.
        // Try adding some new accounts for testing!
//        new Transaction(amount: 5000, category: 'Bacon', date: '12/13/2017').save()
        def userRole = new Role(authority: 'ROLE_USER').save(failOnError: true)

        def me = new User(username: 'me', password: 'bob', enabled: true, accountExpired: false, accountLocked: false, passwordExpired: false).save(failonError: true)

        UserRole.create(me, userRole)
        def trans = null
        trans = new Transaction(username: 'bob', amount: "5000", category: "housing", date: "1/1/1")
        assert trans.save()
        trans = new Transaction(username: 'bob', amount: "10000", category: "housing", date: "1/1/1")
        assert trans.save()
     }
    def destroy = {
    }

}
