import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Content from './Content/Content'
// import RegisterForm from ''
import NoPage from './ErrorPage'
import About from './About/About'
import Contact from './Contact/Contact'
import InsertScoop from './crud/InsertScoop'
import UpdateScoop from './crud/UpdateScoop'


const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/about' element={<About />}></Route>
            {/* <Route path='/registerForm' element={<RegisterForm />} /> */}
            <Route path="*" element={<NoPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post" element={<InsertScoop/>} />
            <Route path='/update' element={<UpdateScoop />} />
        </Routes>
    </>
  )
}

export default AllRoutes