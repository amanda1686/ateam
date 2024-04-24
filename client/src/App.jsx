
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home.jsx'
import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'
import Header from './components/header/header.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Vision from './pages/vision/vison.jsx';
import Products from './pages/products/products.jsx';
import Footer from "./components/footer/footer.jsx";
import Contact from "./pages/contact/contact.jsx";
import PrivateRoute from "./components/privateRoute/privateRoute.jsx";
import OnlyAdminPrivateRoute from "./components/onlyAdminPrivateRoute/onlyAdminPrivateRoute.jsx";
import CreatePost from "./pages/createPost/createPost.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
          <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path="/create-post" element={<CreatePost/>}/>
          </Route>
          <Route path="/vision" element={<Vision/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

