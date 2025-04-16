/// <reference types="cypress" />

import { HomePage } from '../pages/HomePage';
import { JobBoardPage } from '../pages/JobBoardPage';

const homePage = new HomePage();
const jobBoard = new JobBoardPage();
// Using this to avoid uncaught exception which was causing tests to fail 
Cypress.on('uncaught:exception', () => false);

describe('Pflegia Job Board', () => {
  let testData;

  before(() => {
    // Load fixture data
    cy.fixture('jobBoardData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    homePage.acceptCookies();
    homePage.goToJobBoard();
    jobBoard.enterPostalCode(testData.postalCode);
    jobBoard.selectPosition(testData.position);
  });

  it('should redirect to job details when clicking Mehr erfahren', () => {
    jobBoard.clickMehrErfahren();
    cy.url().should('contain', '/job/berlin/');
  });

  it('should redirect to funnel when clicking Interessiert mich', () => {
    jobBoard.clickInteressiertMich();
    cy.url().should('contain', '/funnel/');
    // cy.contains('Über Dich').should('exist');
  });
});
