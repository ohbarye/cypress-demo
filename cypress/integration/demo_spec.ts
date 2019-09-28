beforeEach(() => {
  cy.visit("https://ohbarye.hatenablog.jp/");
});

it("my first test", () => {
  cy.contains("SoundCloud").should("exist");
});

it("goes to next page", () => {
  cy.contains("次のページ").click();
  cy.url().should("include", "https://ohbarye.hatenablog.jp/?page=");
});
