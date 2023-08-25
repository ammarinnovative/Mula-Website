import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Contact from '../views/Contact/Contact';
import Courses from '../views/Courses/Courses';
import Consultation from '../views/Consultation/Consultation';
import Membership from '../views/Membership/Membership';
import MembershipVideo from "../views/Dashboard/MembershipVideos/MembershipVideos";
import SingleComponent from '../components/SingleComponent/SingleComponent';
import AddToCart from '../views/AddToCart/AddToCart';
import { MyProfile } from '../views/Dashboard/MyProfilr/MyProfile';
import MembershipById from "../components/MembershipById/MembershipById";
import MyProduct from "../views/Dashboard/MyProduct/MyProduct";
import MyVideo from '../views/Dashboard/MyVideos/MyVideos';
import MyCard from '../views/Dashboard/MyCard/MyCard';
import Tophead from '../components/Tophead/Tophead';
import { Stack } from '@chakra-ui/react';
export const UserContext = createContext();

export default function AppRoute() {
  return (
    <div>
      <Router>
      <Stack position={'absolute'} zIndex={'1'} w={'full'}>
        <Tophead />
        <Navbar />
      </Stack>
        <RouteSwitch>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route  path='/courses' element={<Courses />} />
          <Route  path='/consultation' element={<Consultation />} />
          <Route  path='/singlecomponent/:id' element={<SingleComponent />} />
          <Route  path='/membership' element={<Membership />} />
          <Route  path='/cart' element={<AddToCart />}/>
          <Route  path='/' element={<Home />}/>
          <Route  path='/myProfile' element={<MyProfile />} />
          <Route  path='/mycourses' element={<MyProduct />} />
          <Route  path='/mycards' element={<MyCard />} />
          <Route  path='/myVideo' element={<MyVideo />} />
          <Route  path='/membershipvideos' element={<MembershipVideo />} />
          <Route  path='/MembershipById/:id' element={<MembershipById/>} />
        </RouteSwitch>
      </Router>
    </div>
  );
}
