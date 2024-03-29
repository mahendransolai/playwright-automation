import{test} from "../fixtures/formFixture"
import PracticeFormPage from "../pages/practiceFormPage";
import dotenv from 'dotenv';

dotenv.config({
    path:`./config/.env.qa`,
    override: true
})
test.only("Level 1 - Basic test ",async({ page }) => { 

    await page.goto(process.env.BASE_URL as string);
    await page.locator("#firstName").fill("QA");
    await page.locator("#lastName").fill("Team");
    await page.locator("#userNumber").fill("1234567890");

 });

test("Level 2 - PracticeForm Entering Data using POM ",async({ page }) => { 

    // await page.goto("https://demoqa.com/automation-practice-form");
    // await page.locator("#firstName").fill("QA");
    // await page.locator("#lastName").fill("Team");
    // await page.locator("#userNumber").fill("1234567890");

    const practiceFormPage = new PracticeFormPage(page);

    await practiceFormPage.getappUrl(PracticeFormPage.url);
    await practiceFormPage.fillFirstName("QA");
    await practiceFormPage.fillLastName("Test");
    await practiceFormPage.fillPhoneNumber("1234567890");
    //await page.pause();

 });

test(" Level 3 - PracticeForm Entering Data using fixtures ",async({ practiceformPage, page}) => { 

    // await page.goto("https://demoqa.com/automation-practice-form");
    // await page.locator("#firstName").fill("QA");
    // await page.locator("#lastName").fill("Team");
    // await page.locator("#userNumber").fill("1234567890");

    // const practiceFormPage = new PracticeFormPage(page);

    // await practiceFormPage.getappUrl(PracticeFormPage.url);
    // await practiceFormPage.fillFirstName("QA");
    // await practiceFormPage.fillLastName("Test");
    // await practiceFormPage.fillPhoneNumber("1234567890");
    await page.pause();

 });