import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button Component", () => {
  it("renders with correct label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("applies primary variant styles by default", () => {
    render(<Button label="Primary" />);
    const button = screen.getByText("Primary");
    expect(button.className).toContain("bg-blue-500");
  });

  it("applies secondary variant styles when specified", () => {
    render(<Button label="Secondary" variant="secondary" />);
    const button = screen.getByText("Secondary");
    expect(button.className).toContain("bg-gray-200");
  });
});
