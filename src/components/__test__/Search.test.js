import { render } from "@testing-library/react"
import Body from "../Body"

global.fetch = jest.fn(()=>{ //  mocking fech wth promise as resolved
    return Promise.resolve({
        json:()=>{Promise.resolve(data)}

        }
    )
})

global.fetch = jest.fn(()=>{
   return Promise.resolve({
    json:()=>{return Promise.resolve(data)}
   })
})

it("should render the body component by search button",()=>{
  render(<Body/>)  
})