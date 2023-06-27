//import { useState } from 'react'
import React from 'react'
import './index.css'
import Calendar from './components/Calendar'
import SignIn from './components/SignIn'
import EventCreate from './components/EventCreate'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import EventCreationPage from "./pages/EventCreationPage";
import OrganizerViewPage from "./pages/OrganizerViewPage";
import UserViewPage from "./pages/UserViewPage"; 
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="organizerViewPage" element={<OrganizerViewPage />} />
            <Route path="eventCreationPage" element={<EventCreationPage />} />
            
            <Route path="userViewPage" element={<UserViewPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

