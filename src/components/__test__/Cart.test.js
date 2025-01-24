import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../../mocks/reslistCatogry.json"
import { act } from "react"
import { Provider } from "react-redux"
import appstore from "../../utils/appstore"
import Headers from "../Header"
import Cart from "../Cart"
import RestaurantInfo from "../ResturantInfo"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve(
        { json: () => Promise.resolve(MOCK_DATA) }
    )
})

it("Should load the resturantsd manue", async () => {
    await act(async () => render(<BrowserRouter><Provider store={appstore}>
        <Headers />
        <RestaurantInfo />
        <Cart />
    </Provider>

    </BrowserRouter>))


    const accordianHeader = screen.getByText(/New Thin n Crispy Pizza/)
    fireEvent.click(accordianHeader)


    expect(screen.getAllByTestId("foodItems").length).toBe(6)

    const AddBtn = screen.getAllByRole("button", { name: "Add+" });
    fireEvent.click(AddBtn[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
    fireEvent.click(AddBtn[1]);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();


    expect(screen.getAllByTestId("foodItems").length).toBe(8)

    fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));

    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
});