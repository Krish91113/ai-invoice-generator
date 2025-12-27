
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'

const ClerkProtected = ({children}) =>{
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
        <RedirectToSignIn/>
    </SignedOut>
  </>
}



function App() {
  return (
   <Routes>
        <Route path='/' element={<Home />} />

        {/* to protect the route */}
   </Routes>
  )
}

export default App