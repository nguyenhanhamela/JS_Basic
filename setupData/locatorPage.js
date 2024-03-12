// const { By } = require('selenium-webdriver');'
import { By } from "selenium-webdriver";
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
class locatorPage {
  //Main Page
  showMenuButton = By.xpath(`//header[@class='panel-head']//a[@class='bb-toggle-panel']`);
  xpandCompanyButton = By.xpath(`//li[@id='menu-item-1806']//i[@class='bb-icon-l bb-icon-angle-down bs-submenu-toggle']`);
  createCompanyButton = By.id('menu-item-1812');
  //CREATE COMPANY PAGE
  companyName = By.xpath(`//input[@id='group-name']`);
  companyDescription = By.id('group-desc');
  engName = By.xpath(`//input[@name='grp_english_name']`);
  engFamilyName = By.xpath(`//input[@name='grp_english_family_name']`);
  email = By.xpath(`//input[@name='grp_email_address']`);
  role = By.xpath(`//input[@name='grp_role_in_the_company']`);
  // phoneDropdown = By.className('phone_pre');
  phoneDropdown = By.xpath(`//*[@id="group-create-body"]/section[2]/div[5]/div/select`)
  optionPhone = generateRandomNumber(1, 30)
  choosePhone = By.xpath(`//*[@id="group-create-body"]/section[2]/div[5]/div/select/option[${this.optionPhone}]`)
  phoneBox = By.xpath(`//*[@id="group-create-body"]/section[2]/div[5]/div/input[1]`);

  //CREATE CHAMPION COMPANY PAGE
  // productOption = generateRandomNumber(1,3)
  productOption = 1;
  productType = By.xpath(`//*[@id="group-create-body"]/section[2]/div[6]/div/select/option[${this.productOption}]`);

  // tagFunctionNo = generateRandomNumber(1, 20)
  tagFunctionNo = 1;
  tagFunction = By.xpath(`//*[@id="group-create-body"]/section[2]/div[7]/div/select/option[${this.tagFunctionNo}]`);

  
  // tagTechnologyNo = generateRandomNumber(1, 20)
  tagTechnologyNo = 1;
  tagTechnology = By.xpath(`//*[@id="group-create-body"]/section[2]/div[8]/div/select/option[${this.tagTechnologyNo}]`);

  ////APPLY GFT
  gftCheck = By.xpath(`//input[@name='grp_fasktrack_program']`);

  // option_stage = generateRandomNumber(1, 3)
  option_stage =1
  Stages = By.xpath(`//*[@id="group-create-body"]/section[2]/div[10]/div/select/option[${this.option_stage}]`);

  website = By.xpath(`//input[@name='grp_website']`);
  tc = By.xpath(`//input[@name='grp_terms_conditions']`);
  policy = By.xpath(`//input[@name='grp_privacy_policy']`);
  inYourOwn = By.xpath(`//textarea[@name='grp_refine_your_matches']`);
  publishProfile = By.xpath(`//textarea[@name='grp_gft_public_profile']`);

  //CREATE FINTECH COMPANY
  // stateOfProducOption = generateRandomNumber(1, 4)
  stateOfProducOption =1;
  stateOfProduct = By.xpath(`//*[@id="group-create-body"]/section[2]/div[6]/div/select/option[${this.stateOfProducOption}]`);
  verticalServiceDrop = By.xpath(`//select[@name='grp_project_category_tag']`);
  // verticalServiceOption = generateRandomNumber(1, 12);

  verticalServiceOption = 1;
  verticalServiceInput = By.xpath(`//*[@id="group-create-body"]/section[2]/div[7]/div/select/option[${this.verticalServiceOption}]`);

  customerInteractionDrop = By.className('grp_customer_interaction');
  // customerInteractionOption = generateRandomNumber(1, 7);
  customerInteractionOption =1;
  customerInteractionInput = By.xpath(`//*[@id="group-create-body"]/section[2]/div[8]/div/select/option[${this.customerInteractionOption}]`);

  // productTypeOption = generateRandomNumber(1, 3);
  productTypeOption = 1;
  productTypeOption = By.xpath(`//*[@id="group-create-body"]/section[2]/div[9]/div/select/option[${this.productTypeOption}]`);
  companySize = By.className('grp_company_size');
  // companySizeOption = generateRandomNumber(1, 4);
  companySizeOption = 1
  companySizeInput = By.xpath(`//*[@id="group-create-body"]/section[2]/div[10]/div/select/option[${this.companySizeOption}]`);

  tagFunctionFintech = By.xpath(`//*[@id="group-create-body"]/section[2]/div[11]/div/select/option[${this.tagFunctionNo}]`);

tagTechnologyFintech = By.xpath(`//*[@id="group-create-body"]/section[2]/div[12]/div/select/option[${this.tagTechnologyNo}]`);

alreadyInHKDrop = By.className('grp_already_in_hong_kong');
alreadyInHKYes = By.xpath(`//*[@id="group-create-body"]/section[2]/div[13]/div/select/option[1]`);
alreadyInHKNo = By.xpath(`//*[@id="group-create-body"]/section[2]/div[13]/div/select/option[2]`);
planingToHKDrop = By.className(`grp_expand_in_hong_kong`);
planingToHKOption = generateRandomNumber(1,4)
planingToHKInput = By.xpath(`//*[@id="group-create-body"]/section[2]/div[14]/div/select/option[${this.planingToHKOption}]`);
matchingDrop = By.className('grp_fin_open_for_matching');
matchingOption = generateRandomNumber(1,2);
matchingInput = By.xpath(`//*[@id="group-create-body"]/section[2]/div[17]/div/select/option[${this.planingToHKOption}]`);

ppAndTc = By.xpath(`//input[@name='grp_fin_terms_condition']`);
create = By.id('group-creation-create');

//APPROVE GFT
buddyBoss = By.xpath(`//div[normalize-space()='BuddyBoss']`);


}
export default new locatorPage();