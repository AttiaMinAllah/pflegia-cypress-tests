
export class HomePage {
  acceptCookies() {
    cy.get('[data-testid="accept-cookies"]').click();
  }

  goToJobBoard() {
    cy.contains('Jobbörse').should('be.visible');
    cy.get('[data-testid="link-jobBoard"]').click();
  }
}
