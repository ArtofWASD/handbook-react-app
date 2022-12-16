import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/footer';
const Layout = () => {
    return (
        <>
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default Layout;