
describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Visits the login page', () => {
        cy.contains('Login').should('be.visible')
        cy.contains('Username').should('be.visible')
        cy.contains('Password').should('be.visible')
        cy.contains('Forgot your password?').should('be.visible')   
    });   

    it.only('Logs in with valid credentials', () => {
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/dashboard')
    });

    it('Logs in with invalid credentials', () => {
        cy.get('input[name="username"]').type('InvalidUser')
        cy.get('input[name="password"]').type('InvalidPass')
        cy.get('button[type="submit"]').click()
        cy.contains('Invalid credentials').should('be.visible')
    }); 
})