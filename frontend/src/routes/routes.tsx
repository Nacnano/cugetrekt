import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import MyDocumentsPage from "../pages/MyDocuments";
import MyInfoPage from "../pages/MyInfo";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import WithdrawInfoPage from "../pages/WithdrawalInfo";
import ResignationInfoPage from "../pages/Resignationinfo";
import ScorePrediction from "../pages/ScorePrediction"
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="MyDocuments" element={<MyDocumentsPage />} />
          <Route path="MyInfo" element={<MyInfoPage />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="Register" element={<RegisterPage />} />
          <Route path="Withdrawal" element={<WithdrawInfoPage />} />
          <Route path="Resignation" element={<ResignationInfoPage />} />
          <Route path="ScorePrediction" element={<ScorePrediction />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
