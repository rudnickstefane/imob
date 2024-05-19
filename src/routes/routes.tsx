import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Entrar from '../pages/Entrar'
import Home from '../pages/Home'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/entrar' element={<Entrar />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes