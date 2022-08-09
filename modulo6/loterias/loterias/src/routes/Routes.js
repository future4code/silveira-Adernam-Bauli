import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MegaSena from '../pages/MegaSena';
import Quina from '../pages/Quina';
import Lotofacil from '../pages/Lotofacil';
import Lotomania from '../pages/Lotomania';
import Timemania from '../pages/Timemania';
import DiaDeSorte from '../pages/Dia-de-sorte';


export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MegaSena />} />
                <Route path='quina' element={<Quina />} />
                <Route path='lotofacil' element={<Lotofacil />} />
                <Route path='lotomania' element={<Lotomania />} />
                <Route path='timemania' element={<Timemania />} />
                <Route path='dia-de-sorte' element={<DiaDeSorte />} />
            </Routes>
        </BrowserRouter>
    );
};