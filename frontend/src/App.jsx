import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import AppShell from "./component/AppShell";
import Dashboard from "./pages/Dashboard";

const ClerkProtected = ({ children }) => {
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>;
};

function App() {
  return (
    <div className="min-h-screen max-w-full overflow-w-hidden">
      <Routes>
      <Route path="/" element={<Home />} />

      {/* to protect the route */}
      <Route path="/app"element={<ClerkProtected><AppShell /></ClerkProtected>}/>
      <Route index element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
