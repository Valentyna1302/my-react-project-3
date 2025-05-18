import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
// import Home from "../pages/Home";
// import About from "../pages/About";
import NotFound from "../pages/NotFound";
// import Aim from "./NestedRoutes/Aim";
import Company from "./NestedRoutes/Company";
import Team from "./NestedRoutes/Team";
// import Users from "../pages/Users";
// import UserDetails from "../pages/UserDetails";
import UserPosts from "./NestedRoutes/UserPosts";

const Aim = lazy(() => import("./NestedRoutes/Aim"));
// const Home = lazy(() => import("../pages/Home"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const About = lazy(() => import("../pages/About"));
const UserDetails = lazy(() => import("../pages/UserDetails"));
const Users = lazy(() => import("../pages/Users"));

const App = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          {/* localhost/about/aim */}
          {/* localhost/about/company */}
          {/* localhost/about/team */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/about" element={<About />}>
            <Route path="aim" element={<Aim />} />
            <Route path="company" element={<Company />} />
            <Route path="team" element={<Team />} />
          </Route>

          <Route path="/users" element={<Users />} />

          <Route path="/users/:userId" element={<UserDetails />}>
            <Route path="info" element={<h2>Info about user</h2>} />
            <Route path="posts" element={<UserPosts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};
export default App;
