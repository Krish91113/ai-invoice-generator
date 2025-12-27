import React from 'react'
import { appShellStyles } from '../assets/dummyStyles'


function AppShell() {
  return (
    <div className={appShellStyles.root}>
        <div className={appShellStyles.layout}>
            {/* sidebar */}
            <aside className=''>

            </aside>
        </div>
    </div>
  )
}

export default AppShell