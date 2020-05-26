describe('Blog app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
            name: "superuser",
            username: "root",
            password: '12345'
        }
        cy.request('POST', 'http://localhost:3001/api/users', user)
        cy.visit('http://localhost:3000')
    })

    it('Login form is shown', function () {
        cy.contains('login')
    })

    describe('Login', function() {
        it('succeeds with correct credentials', function() {
            cy.get('#username').type('root')
            cy.get('#password').type('12345')
            cy.get('#login_button').click()
            cy.contains('User: root successfuly logged in')
        })

        it('fails with wrong credentials', function() {
            cy.get('#username').type('root')
            cy.get('#password').type('54321')
            cy.get('#login_button').click()
            cy.contains('UserName or Password are Incorrect. Access denied!')
        })

        describe.only('When logged in', function() {
            beforeEach(function(){
                cy.get('#username').type('root')
                cy.get('#password').type('12345')
                cy.get('#login_button').click()
            })

            it('A blog can be created', function() {
                cy.get('#add_blog').click()
                cy.get('#title').type('TEST_TITLE')
                cy.get('#author').type('TEST_AUTHOR')
                cy.get('#url').type('TEST_URL')
                cy.get('#submit_blog').click()
                cy.contains('TEST_TITLE by TEST_AUTHOR')
            })

            it('A user can like blog', function() {
                cy.get('#add_blog').click()
                cy.get('#title').type('TEST_TITLE')
                cy.get('#author').type('TEST_AUTHOR')
                cy.get('#url').type('TEST_URL')
                cy.get('#submit_blog').click()
                cy.get('#view').click()
                cy.get('#like').click()
                cy.contains('1')
            })

            it('A user can delete blog', function () {
                cy.get('#add_blog').click()
                cy.get('#title').type('TEST_TITLE')
                cy.get('#author').type('TEST_AUTHOR')
                cy.get('#url').type('TEST_URL')
                cy.get('#submit_blog').click()
                cy.get('#view').click()
                cy.get('#remove').click()
            })
        })
    })
})
