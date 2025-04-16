
export class JobBoardPage {
  enterPostalCode(postalCode) {
    cy.get('[data-testid="is-postal-input"]').type(postalCode);
    cy.get(`[data-testid="location-${postalCode} Berlin"]`).click();
  }

  selectPosition(positionText) {
    cy.get('[data-testid="dropdown-input-position"]').click();
    cy.get(`[data-testid="dropdown-option-${positionText}"]`).click();
  }

  clickMehrErfahren() {
    cy.get('[data-testid="learn-more-position-link-default"]')
      .first()
      .should('be.visible')
      .and('contain', 'Mehr erfahren')
      .click();
  }

  clickInteressiertMich() {
    cy.contains('Interessiert mich').click();
  }
}
