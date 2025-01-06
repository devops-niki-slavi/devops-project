import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Page", () => {
  it("renders About page content", () => {
    render(<About />);
    
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Learn more about our project and goals.")).toBeInTheDocument();
  });
});
