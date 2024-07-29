import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import SignIn from '../pages/SignIn/SignIn'
import User from '../pages/User/User'
import '../index.css'


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/User" element={<User />}></Route>
                    <Route path="/SignIn" element={<SignIn />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App

