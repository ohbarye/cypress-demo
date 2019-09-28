it("my first test", () => {
  cy.visit("https://ohbarye.hatenablog.jp/");
  cy.contains("SoundCloud").should("exist");
});

it("goes to next page", () => {
  cy.visit("https://ohbarye.hatenablog.jp/");
  cy.contains("次のページ").click();
  cy.url().should("include", "https://ohbarye.hatenablog.jp/?page=");
});
