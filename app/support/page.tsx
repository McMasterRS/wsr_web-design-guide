'use client';

import styles from '@/styles/Home.module.css'
import {useEffect} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function Support() {
    useEffect(() => {
        document.title = 'Support'
    }, [])

    return (
        <>
            <main className={styles.page}>
                <Container>
                    <BreadCrumbs />
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <h1>Help and Support</h1>
                    </Box>
                </Container>
            </main>
        </>
    )
}
