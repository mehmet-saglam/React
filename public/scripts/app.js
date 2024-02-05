"use strict";

var root = ReactDOM.createRoot(document.getElementById('root'));
function clickMe() {
  renderApp();
  alert("Butona tiklandi");
}
function renderApp() {
  var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: clickMe
  }, " Click me "));
  root.render(template2);
}
renderApp();
