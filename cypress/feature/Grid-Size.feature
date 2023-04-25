    Feature : Grid size
    Scenario: successfull user should have appropriate number of columns and rows based on input.
        When  user visit the your playground
        Then  user should see a 4 columns and 4rows with rbi icons inside each Grid
        And user clicks all icons in the outer perimeter of Grid
        And user should see the dialog box popup appeared on screen
        And user should enter the size of the grid into dialog box
        Then user should have appropriate number of columns and rows based on input.

