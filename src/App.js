import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import Home from "./Pages/Home";
import "./style.css";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashNav from "./Components/Dashboard/DashNav/DashNav";
import ProductAdd from "./Components/Dashboard/ProductAdd/ProductAdd";
import ProductList from "./Components/Dashboard/ProductList/ProductList";
import DiscountTime from "./Components/Dashboard/ProductList/DiscountTime/DiscountTime";
import SliderImage from "./Components/Dashboard/SliderImage/SliderImage";
import './main.css';
import './fullcalendar.css';
import './morris.css';
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />}> </Route>
        <Route path="/login" element={<Login />}> </Route> */}
          <Route  path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/dashboard"  element={
          <RequireAuth>
            <DashNav></DashNav>
            <Dashboard></Dashboard>
          </RequireAuth>
          }></Route>
          <Route
            path="/dashboard/add_product"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <ProductAdd></ProductAdd>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/slider_image"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <SliderImage></SliderImage>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/product_list"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <ProductList></ProductList>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/discount"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <DiscountTime></DiscountTime>
              </RequireAuth>
            }
          ></Route>
            <Route
            path="/dashboard/settings"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <Profile></Profile>
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
