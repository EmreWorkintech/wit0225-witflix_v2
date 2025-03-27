/* eslint-disable no-undef */
describe("Signup Page:", () => {
  beforeEach(() => {
    //Arrange
    cy.visit("http://localhost:5173/");
    cy.get("[data-cy='email-input']").as("email");
    cy.get("[data-cy='password-input']").as("pass");
    cy.get("[data-cy='submit-button']").as("submit");
  });
  it("submits form", () => {
    //Act
    cy.get("@email").type("emre@wit.com");
    cy.get("@pass").type("1234qwerTY*");
    cy.get("@submit").click();

    //Arrange
    cy.url().should("contain", "welcome");
  });

  it("gets 1 error on invalid email", () => {
    //Act
    cy.get("@email").type("emre@w");

    //Arrange
    cy.get("[data-cy='error']").should("have.length", 1);
  });

  it("gets correct error message on invalid email", () => {
    //Act
    cy.get("@email").type("emre@w");

    //Arrange
    cy.get("[data-cy='error']").contains(/geçerli bir email adresi giriniz!/i);
  });
});

describe("Signup Page:", () => {
  it("submits form", () => {
    //Arrange
    cy.visit("http://localhost:5173/");

    //Act
    cy.get("[data-cy='email-input']").type("emre@wit.com");
    cy.get("[data-cy='password-input']").type("1234qwerTY*");
    cy.get("[data-cy='submit-button']").click();

    //Arrange
    cy.url().should("contain", "welcome");
  });

  it("gets 1 error on invalid email", () => {
    //Arrange
    cy.visit("http://localhost:5173/");

    //Act
    cy.get("[data-cy='email-input']").type("emre@w");

    //Arrange
    cy.get("[data-cy='error']").should("have.length", 1);
  });

  it("gets correct error message on invalid email", () => {
    //Arrange
    cy.visit("http://localhost:5173/");

    //Act
    cy.get("[data-cy='email-input']").type("emre@w");

    //Arrange
    cy.get("[data-cy='error']").contains(/geçerli bir email adresi giriniz!/i);
  });
});
