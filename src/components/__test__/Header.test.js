import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appstore"
import Header from "../Header"
import "@testing-library/jest-dom"


it("Should render a Header component with login button", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const LoginButton = screen.getByRole("button");
    expect(LoginButton).toBeInTheDocument();


})
it("Should render a Logout when clicked on login", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    )

    const LoginButton = screen.getByRole("button");
    fireEvent.click(LoginButton) //firing of event
    const LogOutButton = screen.getByRole("button"); 
    expect(LogOutButton).toBeInTheDocument(); 

})


it("Should render a cart to be rendered", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    )

    const Cart = screen.getByText(/Cart/);
    
    expect(Cart).toBeInTheDocument();
})

it("Should render a cart item to be 0", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    )

    const Cartitem = screen.getByText("Cart (0)");
    
    expect(Cartitem).toBeInTheDocument();
})