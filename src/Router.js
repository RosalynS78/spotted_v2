import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";

import AddListingsLost from "./containers/AddListingsLost";
import ListingsLost from "./containers/ListingsLost";
import DetailsLost from "./containers/DetailsLost";

import AddListingsFound from "./containers/AddListingsFound.";
import ListingsFound from "./containers/ListingsFound";
import DetailsFound from "./containers/DetailsFound";

import Signup from "./containers/Signup";
// import Signup from "../../src/containers/Signup";
import Login from "./containers/Login";
import Home from "./containers/Home";
import HomeA from "./containers/HomeA";

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;

    return checkAuth() === true ? (
        <Component {...rest} />
    ) : (
        <Navigate to="/login" />
    );
};

const Router = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
            <Route path="homeA" element={<ProtectedRoute component={HomeA} />} />
            <Route
                path="/addlistingslost"
                element={<ProtectedRoute component={AddListingsLost} />}
            />

            <Route path="/listingslost" element={<ListingsLost />} />
            <Route path="/detailslost" element={<DetailsLost />} />
            <Route
                path="/detailslost/:id"
                element={<ProtectedRoute component={DetailsLost} />}
            />
            {/* <Route path="/detailslost/:id" element={<DetailsLost />} /> */}

            <Route
                path="/addlistingsfound"
                element={<ProtectedRoute component={AddListingsFound} />}
            />
            <Route path="/listingsfound" element={<ListingsFound />} />
            <Route path="/detailsfound" element={<DetailsFound />} />
            <Route
                path="/detailsfound/:id"
                element={<ProtectedRoute component={DetailsFound} />}
            />
            {/* <Route path="/detailsfound/:id" element={<DetailsFound />} /> */}
        </Routes>
    );
};

export default Router;
