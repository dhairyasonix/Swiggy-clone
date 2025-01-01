import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page testcases",()=>{ // to bind this test case we use describe
    test("should load component",()=>{  // we can use it also insted of test
        render(<Contact/>);  
        const heading = screen.getByRole("heading") // this is known as quering 
        expect(heading) // this is known as assertion
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
})



