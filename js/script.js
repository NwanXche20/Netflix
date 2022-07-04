"use strict";

const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

const removeBorder = function () {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
};

const removeShow = function () {
  tabContentItems.forEach((item) => item.classList.remove("show"));
};

// Reveal tab content
const revealContent = function (e) {
  // Remove border from all tabs initially
  removeBorder();
  removeShow();

  // Add border to current tab
  this.classList.add("tab-border");

  const tabContents = document.querySelector(`#${this.id}-content`);

  // Add show class
  tabContents.classList.add("show");
};

// Tab event handler
tabItems.forEach((item) => item.addEventListener("click", revealContent));
