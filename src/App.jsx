
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import main from './components/main'
import Header from './components/header'
import Footer from './components/footer'
import Blogs from './pages/blogs'
import About from './pages/about'
import Home from './pages/home'
import NotFound from './pages/notFound'

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="/blogs" element ={<Blogs/>}/>
          <Route path="*" element ={<NotFound/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* 
      <Blogs/>   
      
       */}

    </div>
  )
}

export default App
