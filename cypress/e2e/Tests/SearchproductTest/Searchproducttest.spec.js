/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchProduct from "../Pages//SearchProductPage/SearchProductPage.spec";
import homePage from "../../Pages/HomePage/Homepage.spec";

Given("I navigate to the Website", () => {
homePage.enterURL();
});

When("Search the blog", (datatable) => {
datatable.hashes().forEach((element) => {
searchProduct.SearchProduct(element.blog);
});
});

Then("Verify correct blog name searched", (datatable) => {
datatable.hashes().forEach((element) => {
searchProduct.verifyProduct(element.searchValue);
});
});