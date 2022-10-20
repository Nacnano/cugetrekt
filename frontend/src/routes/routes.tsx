import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import MyDocumentsPage from "../pages/MyDocuments";
import MyInfoPage from "../pages/MyInfo";

const MyRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="MyDocuments" element={<MyDocumentsPage />} />
                <Route path="MyInfo" element={<MyInfoPage />} />
                {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default MyRoutes;