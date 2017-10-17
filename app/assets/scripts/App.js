'use strict';

import $ from './vendor/jquery-3.2.1.min';
import func from './modules/_weather';
import quoteGenerator from './modules/_quotes';
import todoFunc from './modules/_todolist';
import links from "./modules/_links";

// import links from "./modules/_links";
//links.printHistory();
//links.printBookmarks();
//links.setStorage();
//links.printStorage();
// links.linkToggle();
// links.saveLinkEventListner();
// links.renderCustomLinks();


$(document).ready(function () {
    func.weatherReport();
    func.eventListeners();
    quoteGenerator();
    todoFunc();
    links.renderCustomLinks();
    links.renderTopSites();
    links.saveLinkEventListner();
});
