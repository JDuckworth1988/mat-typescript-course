import { $, element, by, browser, ExpectedConditions, ElementFinder } from "protractor";

export class VolPartsEntryPage{

    public nameSearchField = $("input#txtName");

    public customerSearchButton = $("button#btnsearchCust");

    public selectCustomerButton = $("button#btnselectCust");

    public searchResultsTable = $("div#gridcustomerSearchGrid");

    public searchResultsRowSelector = "div.ui-grid-cell-contents.ng-binding.ng-scope";

    // Vehicle Details - This is a table, so we need to find the grid and the cell

    public vehicleResultsTable = $("div#gridvehicleSearchGrid");

    // This one is within the grid and has the text in it - no dollar
    public vehicleCellSelector = "p.form-control-static.ng-binding";


}