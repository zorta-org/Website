"use client";

import { useState } from "react";
import styles from "@/Components/Dashboard/Dashboard.module.css";
import Main from "@/Components/Dashboard/Main/main";
import Rightbar from "@/Components/Dashboard/Rightbar/rightbar";
import Sidebar from "@/Components/Dashboard/Sidebar/sidebar";
import Topbar from "@/Components/Dashboard/Topbar/topbar";
import { Icon } from "@iconify/react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className={styles.dashboardContainer}>
      {/* Left sidebar */}
      <aside
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
      >
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="absolute right-4 top-4 z-10 hidden max-[1100px]:flex h-7 w-7 items-center justify-center rounded-md text-[#868585] hover:bg-[#f2f2f2]"
        >
          <Icon icon="lucide:x" width={17} />
        </button>

        <Sidebar />
      </aside>

      {/* Dark overlay when the sidebar is open */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 hidden max-[1100px]:block bg-black/20"
        />
      )}

      {/* Top bar */}
      <header className={styles.topbar}>
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
      </header>

      {/* Main content */}
      <section className={styles.main}>
        <Main />
      </section>

      {/* Right sidebar */}
      <aside className={styles.rightbar}>
        <Rightbar />
      </aside>
    </main>
  );
}
