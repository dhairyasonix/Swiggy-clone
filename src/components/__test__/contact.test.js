import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load component",()=>{
render(<Contact/>);
const heading = screen.getByRole("heading")
expect(heading)
});
test("should load button inside component",()=>{
render(<Contact/>);
const button = screen.getByRole("button")
expect(button).toBeInTheDocument();
});
test("should load button inside component",()=>{
render(<Contact/>);
const button = screen.getByText("Subbmit")
expect(button).toBeInTheDocument();
});
test("should load 2 input inside component",()=>{
render(<Contact/>);
const inputs = screen.getAllByRole("textbox") //quering
// console.log(inputs)
expect(inputs.length).toBe(2);
});

