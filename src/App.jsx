import './App.css';
import BottomNav from './bottomNav';
import Header from './header';
import Home from './home';
import './home.css';
import { useEffect, useState } from 'react';
import video from './assets/video/home.mp4';
import { Send, Phone, Mail, MapPin } from 'lucide-react';


function App() {


  return (
    <main className='col-12'>
      <Header />
      <Home />
      <BottomNav />
    </main>
  );
}

export default App;
