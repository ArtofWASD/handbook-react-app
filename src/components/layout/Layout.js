import React from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';



const Layout = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <main className="content grid justify-center">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>

    )
}

export {Layout};