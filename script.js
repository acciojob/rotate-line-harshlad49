//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

setInterval(() => {
  angle = (angle + 2) % 360; // Keep angle within 0–359 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
describe('Rotating Line Test', () => {
  it('should have correct styles', () => {
    cy.visit('index.html'); // or use your local server path

    cy.get('#line')
      .should('have.css', 'position', 'absolute')
      .and('have.css', 'width', '200px')
      .and('have.css', 'height', '2px')
      .and('have.css', 'background-color', 'rgb(0, 0, 0)');
  });

  it('should rotate over time', () => {
    cy.visit('index.html');

    cy.get('#line').then(($el) => {
      const initialTransform = $el.css('transform');

      cy.wait(100); // wait to allow some rotation to occur

      cy.get('#line').should(($newEl) => {
        const newTransform = $newEl.css('transform');
        expect(newTransform).to.not.equal(initialTransform);
      });
    });
  });
});
