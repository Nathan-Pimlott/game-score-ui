import * as _ from 'lodash';

import { selectors } from '../store/selectors';

describe('Going to home page should render header bar', () => {
  it('should visit the homepage and show the app title and logo', () => {
    cy.visit('/');
    cy.get(selectors.headerLogo).should('be.visible');
    cy.get(selectors.headerTitle).should('be.visible');
    cy.get(selectors.headerSubtitle).should('be.visible');
  });
  // it('should add and subtract numbers correctly', () => {
  //   cy.visit('/');

  //   _.times(10, () => {
  //     cy.get(selectors.subtractButton).click();
  //   });
  //   cy.get(selectors.currentCount).should('contain', 'Count is -10');

  //   _.times(10, () => {
  //     cy.get(selectors.addButton).click();
  //   });
  //   cy.get(selectors.currentCount).should('contain', 'Count is 0');
  // });
});
