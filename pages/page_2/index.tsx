import React from "react";
import styles from '@/styles/Home.module.css'
import {useEffect} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete'
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function Page_2() {
    useEffect(() => {
        document.title = 'Page 2'
    }, [])

    const [openSD, setOpenSD] = React.useState(false)
    const handleOpenSD = () => setOpenSD(true)
    const handleCloseSD = () => setOpenSD(false)

    const actions = [
        {icon: <EditIcon />, name: 'Edit', action: handleCloseSD},
        {icon: <SaveIcon />, name: 'Save', action: handleCloseSD},
        {icon: <DeleteIcon />, name: 'Delete', action: handleCloseSD},
    ]


    return (
        <>
            <main className={styles.page}>
                <Container>
                    <BreadCrumbs />
                    <Box sx={{height: 78, transform: 'translateZ(0px)', flexGrow: 1}}
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <h1>Page 2</h1>
                        <SpeedDial
                            ariaLabel="Demo SpeedDial"
                            sx={{
                                position: 'fixed',
                                top: 10,
                                right: 10,
                                zIndex: 2000,
                            }}
                            icon={<SpeedDialIcon />}
                            onClose={handleCloseSD}
                            onOpen={handleOpenSD}
                            open={openSD}
                            direction="down"
                        >
                            {actions.map(action => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    onClick={action.action}
                                />
                            ))}
                        </SpeedDial>
                    </Box>
                </Container>
            </main>
        </>
    )
}
