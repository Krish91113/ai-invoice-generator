import React, { useState } from 'react'
import { appShellStyles } from '../assets/dummyStyles'
import { useNavigate } from 'react-router-dom'
import { useClerk, useUser } from '@clerk/clerk-react';


function AppShell() {
    const navigate =useNavigate();
    const {signOut} = useClerk();
    const {user} = useUser();

    const [mobileOpen,setMobileOpen] = useState(false);
  return (
    <div className={appShellStyles.root}>
        <div className={appShellStyles.layout}>
            {/* sidebar */}
            <aside className={`${appShellStyles.sidebar}`}>
                
            </aside>
        </div>
    </div>
  )
}

export default AppShell