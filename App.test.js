import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
describe("Render App Components", () => {
  it("Renders Index", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
