import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import About from "../pages/About"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;