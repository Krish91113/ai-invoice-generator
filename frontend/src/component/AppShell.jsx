import React, { useState } from "react";
import { appShellStyles } from "../assets/dummyStyles";
import { useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

function AppShell() {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const { user } = useUser();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem("sidebar_collapsed") === "true";
    } catch {
      return false;
    }
  });

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className={appShellStyles.root}>
      <div className={appShellStyles.layout}>
        {/* sidebar */}
        <aside
          className={`${appShellStyles.sidebar} ${
            collapsed
              ? appShellStyles.sidebarCollapsed
              : appShellStyles.sidebarExpanded
          }`}
        >
            <div className={appShellStyles.sidebarGradient}>
                <div className={appShellStyles.sidebarContainer}>
                    <div>
                        <div className={appShellStyles}>

                        </div>
                    </div>
                </div>
            </div>
        </aside>
      </div>
    </div>
  );
}

export default AppShell;
