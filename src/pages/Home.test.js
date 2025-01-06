import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
    it("renders Home page content", () => {
        render(<Home />);

        expect(screen.getByText("Welcome to the Home Page")).toBeInTheDocument();
        expect(screen.getByText("This is a simple SPA created with React, Vite, and Tailwind CSS.")).toBeInTheDocument();
    });
});
