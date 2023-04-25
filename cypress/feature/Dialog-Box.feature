    Feature : Dialog box
    Scenario: successfull user should enter size of the grid into dialog box
        Given  user visit the your playground page
        When  user should see a columns and rows with rbi icons inside each Grid
        And   user clicks all icons in the outer perimeter of Grid
        And user should see the dialog box popup appeared on screen
       Then user should see the mssage like give me a size with text box to input the size

