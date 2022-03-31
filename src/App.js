import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage/HomePage';
import Measurements from '../src/pages/Measurements/Measurements';
import Layout from '../src/pages/Layout/Layout';
import AboutUs from '../src/pages/AboutUs/AboutUs';
import ContactUs from '../src/pages/ContactUs/ContactUs';
import Solutions from '../src/pages/Solutions/Solutions';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='aboutus' element={<AboutUs />}/>
        <Route path="solutions" element={<Solutions />}/>
        <Route path="contactus" element={<ContactUs />}/>
        <Route path="measurements" element={<Measurements />}/>
      </Route>
    </Routes>
  );
}
