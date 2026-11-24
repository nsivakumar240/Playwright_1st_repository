Feature: Page object model

    @smoke1
    Scenario: Verify Login functionality for the OrangeHRM Application
        Given I launch the OrangeHRM Application
        Then I verify Login functionality for the OrangeHRM Application

    @smoke1
    Scenario: Verify Login forgot Your Password functionality for the OrangeHRM Application
        Given I launch the OrangeHRM Application
        Then I verify Login forgot Your Password functionality for the OrangeHRM Application

    @smoke
    Scenario: Verify Login functionality for the OrangeHRM Application
        Given I launch the OrangeHRM Application
        Then I verify Login functionality for the OrangeHRM Application
        And I verify Logout functionality for the OrangeHRM Application
