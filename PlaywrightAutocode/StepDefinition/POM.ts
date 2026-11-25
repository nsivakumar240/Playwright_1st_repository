import { LoginPage } from "../Pages/Loginpage";
import { pageFixture } from "../hooks/pageFixture";
import { CredentialsOrangeHRM } from "../Files/TestData.json"
import { Given, Then} from "@cucumber/cucumber";
import { ForgotYourPasswordPage } from "../Pages/ForgotYourPasswordPage";
import { HomePage } from "../Pages/HomePage";
import { AdminPage } from "../Pages/AdminPage";


let lp: LoginPage
let fyp: ForgotYourPasswordPage
let hp: HomePage
let ap: AdminPage

Given('I launch the OrangeHRM Application', async function () {

    lp = new LoginPage(pageFixture.page)

   await lp.navigateToOrangeHRM(CredentialsOrangeHRM.url)
})


Given('I verify Login functionality for the OrangeHRM Application', async function () {

    lp = new LoginPage(pageFixture.page)

    await lp.enterCredentials(CredentialsOrangeHRM.username, CredentialsOrangeHRM.password)
})

Given('I verify Login forgot Your Password functionality for the OrangeHRM Application', async function () {

    lp = new LoginPage(pageFixture.page)
    await lp.clickForgotYourPasswordLink()
    
    fyp =new ForgotYourPasswordPage(pageFixture.page)
    await fyp.enterUsername(CredentialsOrangeHRM.usernameFYP)
    await fyp.clickCancelButton()
    await pageFixture.page.waitForTimeout(5000);
})
Then('I verify Logout functionality for the OrangeHRM Application', async function () {
  
    hp = new HomePage(pageFixture.page)
    await pageFixture.page.waitForTimeout(3000)

    hp.clickAdminTab()
    await pageFixture.page.waitForTimeout(3000)

 ap = new AdminPage(pageFixture.page)

    await pageFixture.page.waitForTimeout(3000)

    ap.enterUsernameTextbox(CredentialsOrangeHRM.usernameValue)

    await pageFixture.page.waitForTimeout(3000)

    ap.clickSearchButton()

    await pageFixture.page.waitForTimeout(3000)

    hp.clickUserDropdown()

    await pageFixture.page.waitForTimeout(3000)

    hp.clickLogoutText()

    await pageFixture.page.waitForTimeout(3000)




});
