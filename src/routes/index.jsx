import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from '../Pages/Login'
import { Painel } from '../Pages/adminPainel'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/painel" exact element={<Painel />} />
            </Routes>
        </Router>
    )
}