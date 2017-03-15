"use strict";
var protractor_1 = require("protractor");
var Ng4CliDemoPage = (function () {
    function Ng4CliDemoPage() {
    }
    Ng4CliDemoPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Ng4CliDemoPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return Ng4CliDemoPage;
}());
exports.Ng4CliDemoPage = Ng4CliDemoPage;
//# sourceMappingURL=app.po.js.map