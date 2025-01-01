import { render,screen } from "@testing-library/react"
import ResCard from "../ResCard"
import MOCK_DATA from "../../mocks/resCardMock.json"


import "@testing-library/jest-dom"
it("Should load restcard component with props data",()=>{
    render(<ResCard resData={MOCK_DATA}/>);

    const namr = screen.getByText("Pizza Hut")
    expect(namr).toBeInTheDocument()

})