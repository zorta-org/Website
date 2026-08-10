import styles from '@/Components/Dashboard/Dashboard.module.css';
import Main from '@/Components/Dashboard/Main/main';
import Rightbar from '@/Components/Dashboard/rightbar';
import Sidebar from '@/Components/Dashboard/Sidebar/sidebar';
import Topbar from '@/Components/Dashboard/Topbar/topbar';

export default function Dashboard() {
    return (
        <main className={styles.dashboardContainer}>
            {/* Left Sidebar */}
            <aside className={styles.sidebar}>
                <Sidebar />
            </aside>
            {/* Top Bar */}
            <header className={styles.topbar}>
                <Topbar />
            </header>
            {/* Main Content */}
            <section className={styles.main}>
                <Main />
            </section>
             {/* Right Sidebar */}
            <aside className={styles.rightbar}>
                <Rightbar />
            </aside>
        </main>
    )
}