it("my first test", () => {
  cy.visit("https://ohbarye.hatenablog.jp/");
  cy.contains("SoundCloud").should("exist");
});
