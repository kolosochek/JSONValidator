import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PageContainer} from "./components/PageContainer/PageContainer";
import {IndexView} from "./views/IndexView";
import {Error404} from "./views/Error404";


export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageContainer />} >
                    <Route path="/" element={<IndexView />} />
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}
