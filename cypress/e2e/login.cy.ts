import LoginPage from '../poms/loginPage';
import SideMenu from '../poms/components/sideMenu';
import { SAUCE_URLS } from '../fixtures/urls';
import { USER_CREDS } from '../fixtures/credentials';

describe('Login page', () => {
    it('should open swag labs login page', () => {
		cy.visit(SAUCE_URLS.base);
		cy.title().should('equal', 'Swag Labs');
	});

	it('should log in with valid credentials and log out', () => {
		const loginPage = new LoginPage();
		const sideMenu = new SideMenu();

		cy.visit(SAUCE_URLS.base);
		loginPage.login({ username: USER_CREDS.users.standard, password: USER_CREDS.password });
		cy.url().should('match', new RegExp(`${SAUCE_URLS.allProducts}`));
		sideMenu.clickSideMenuLink('Logout');
		cy.url().should('equal', 'https://www.saucedemo.com/');
	});

	it('should log in with invalid credentials', () => {
		const loginPage = new LoginPage();

		cy.visit(SAUCE_URLS.base);
		loginPage.login({ username: USER_CREDS.users.fake, password: USER_CREDS.password });
		loginPage.isLoginErrorVisible()
		loginPage.checkLoginErrorMessage()
	});
});