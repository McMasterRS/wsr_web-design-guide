'use client';

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "@/components/Footer/Footer";

export default function Template({children}: {children?: React.ReactNode} ) {
    return (
        <>
            <Navbar />
            <CssBaseline />
            {children}
            <Footer />
        </>
    )
}