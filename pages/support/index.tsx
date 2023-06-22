import styles from '@/styles/Home.module.css'
import {useEffect} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Typography from '@mui/material/Typography'

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
                        <Typography variant="h1">Help and Support</Typography>
                    </Box>
                </Container>
            </main>
        </>
    )
}
