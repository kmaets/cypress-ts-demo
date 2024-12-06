export default class SideMenu {
	openSideMenu(): void  {
		cy.get(SELECTORS.openMenu).click();
	};

	closeSideMenu(): void {
		cy.get(SELECTORS.closeMenu).click();
	};

	clickSideMenuLink(link: string): void {
		this.openSideMenu();
		switch (link) {
			case 'All Items':
				cy.get(SELECTORS.sideMenu.allItems).click({ force: true });
				break;
			case 'About':
				cy.get(SELECTORS.sideMenu.about).click({ force: true });
				break;
			case 'Logout':
				cy.get(SELECTORS.sideMenu.logout).click({ force: true });
				break;
			default:
				break;
		}
	};
}

const SELECTORS = {
	sideMenu: {
		allItems: '[data-test="inventory-sidebar-link"]',
		about: '[data-test="about-sidebar-link"]',
		logout: '[data-test="logout-sidebar-link"]',
		resetSate: '[data-test="reset-sidebar-link"]',
	},
	openMenu: 'button[id="react-burger-menu-btn"]',
	closeMenu: 'button[id="react-burger-cross-btn"]',
};
