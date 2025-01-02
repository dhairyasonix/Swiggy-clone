import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from "../../mocks/mockResListDat.json"
import { act } from "react"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => { //  mocking fech wth promise as resolved
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),

    }

    )
})



it("should search on imput pizza", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));
    const cardsBefore = screen.getAllByTestId("ResCard")

    expect(cardsBefore.length).toBe(8)

    const Searchbtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target: {value: "Pizza"} })
    fireEvent.click(Searchbtn)
    const cardsAfter = screen.getAllByTestId("ResCard")

    expect(cardsAfter.length).toBe(2)



})
it("should filter on click of top rated resturant", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));
    const cardsBefore = screen.getAllByTestId("ResCard")

    expect(cardsBefore.length).toBe(8)

    const TopRaratedBtn = screen.getByRole("button",{name: "Top rated restrunt"})
    fireEvent.click(TopRaratedBtn)
    const cardsAfter = screen.getAllByTestId("ResCard")

    expect(cardsAfter.length).toBe(6)

}) 