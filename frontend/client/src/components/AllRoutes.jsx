import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Content from './Content/Content'
// import RegisterForm from ''
import NoPage from './ErrorPage'
import About from './About/About'
import Contact from './Contact/Contact'
import InsertScoop from './crud/InsertScoop'
import UpdateScoop from './crud/UpdateScoop'
import LoginForm from './User Validation/LoginForm.jsx'
import SignupForm from './User Validation/Signup'
import FilteredContent from './Content/FilteredContent.jsx'


const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/about' element={<About />}></Route>
            <Route path="*" element={<NoPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post" element={<InsertScoop/>} />
            <Route path='/update' element={<UpdateScoop />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignupForm />} />
            <Route path='/filteredcontent' element={<FilteredContent />} />
        </Routes>
    </>
  )
}

export default AllRoutes