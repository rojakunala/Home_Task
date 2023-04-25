import { Given, When, Then , DataTable} from "@badeball/cypress-cucumber-preprocessor";

Given("user visit the your playground page", () => {
  cy.visit('/') //base url
  cy.title().should('include','RBI Tech Skill Task')

  });

  When("user should see a columns and rows with rbi icons inside each Grid", () => {
    cy.xpath("//div[@class='mainGrid']").should('be.visible')
    
   cy.wrap("//div[@class='row']").should('have.length.gte', 3)
  });
  
  Then("user clicks all icons in the outer perimeter of Grid", () => {
   
    cy.xpath("(//div[@class='row'])[1]//div[@class='icon']")
    .should('have.length.gte', 3)
    .each(($el, index, $list) => {
     
        cy.wrap($el).click()
    })

    cy.xpath("(//div[@class='row'])[4]//div[@class='icon']")
    .should('have.length.gte', 3)
    .each(($el, index, $list) => {
     
        cy.wrap($el).click()
    })

      cy.xpath("(//div[@class='row'])[2]//div[@class='icon']").first().click()
      cy.xpath("(//div[@class='row'])[2]//div[@class='icon']").last().click()
 
      cy.xpath("(//div[@class='row'])[3]//div[@class='icon']").first().click()
      cy.xpath("(//div[@class='row'])[3]//div[@class='icon']").last().click()
  });

  Then("user should see the dialog box popup appeared on screen",()=>{
    cy.contains("This page says").should("be.visible")
    
  })

  Then("user should see the mssage like give me a size with text box to input the size",()=>{
    cy.contains("Done! Ready for the next try? Give me a size [3-9]:").should("be.visible")
  })

 