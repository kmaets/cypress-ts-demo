interface UserCreds {
	username: string
	password: string
}

export default class LoginPage {
	// waitForLoginPage(): void {
	// 	await cy.waitForElementPresent(SELECTORS.loginContainer, 2000);
	// }

	// isLoginPageVisible(): boolean {
	// 	return cy.isVisible(SELECTORS.loginContainer);
	// };

	enterUsername(text: string): void {
		cy.get(SELECTORS.username).type(text);
	}

	enterPassword(text: string): void  {
		cy.get(SELECTORS.password).type(text);
	}

	clickLogin(): void {
		cy.get(SELECTORS.loginButtonText).click();
	};

	login({ username, password }: UserCreds): void {
		this.enterUsername(username);
		this.enterPassword(password);
		this.clickLogin();
	};

	isLoginErrorVisible() {
		// cy.get(SELECTORS.error);
		cy.get(SELECTORS.error).should('be.visible', true);
	};

	checkLoginErrorMessage() {
		cy.get(SELECTORS.error).should('include.text', 'Username and password do not match') ;
	};
}

const SELECTORS = {
	loginContainer: 'div[data-test="login-container"]',
	username: '[data-test="username"]',
	password: '[data-test="password"]',
	loginButtonText: '[data-test="login-button"]',
	error: '[data-test="error"]',
};