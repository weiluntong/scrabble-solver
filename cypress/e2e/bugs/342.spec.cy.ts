import {
  assertResult,
  getResult,
  getResultsFilterInput,
  getSettingOption,
  getSettingsButton,
  solve,
  typeBoard,
  typeRack,
  visitIndex,
} from '../../support';

/*
 * @see https://github.com/kamilmielnik/scrabble-solver/issues/342
 */
it('Incorrect sorting when filtering (#342)', () => {
  visitIndex();
  getSettingsButton().realClick();
  getSettingOption('Language', 'Polski').check();
  cy.realPress('Escape');
  typeBoard('bopie', 6, 3);
  cy.findByLabelText('Kierunek wpisywania').click();
  typeBoard('apu', 8, 4);
  typeBoard('o', 10, 4);
  typeRack('oe');
  solve();
  getResultsFilterInput().type('p');

  assertResult(0, 'po', 5);
  assertResult(1, 'pe', 5);
  assertResult(2, 'op', 3);
  assertResult(3, 'eo', 6);
  getResult(0).should('not.have.attr', 'aria-hidden');
  getResult(1).should('not.have.attr', 'aria-hidden');
  getResult(2).should('not.have.attr', 'aria-hidden');
  getResult(3).should('have.attr', 'aria-hidden', 'true');
});
