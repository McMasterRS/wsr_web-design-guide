import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import {Grid} from '@mui/material'
import Link from 'next/link'

export default function Footer() {
    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                borderRadius: 0,
            }}
            component="footer"
            square
            variant="outlined"
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        display: 'flex',
                        my: 1,
                    }}
                ></Box>
                <Grid item xs={12} sm={6} md={3} sx={{display: 'flex'}}></Grid>
                <Grid
                    sx={{
                        flexGrow: 1,
                        justifyContent: 'space-between',
                        display: 'flex'
                    }}
                    container
                    spacing={2}
                >
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: 'flex-start',
                                display: 'flex',
                                mb: 2,
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography
                                component={Link}
                                href="/support"
                                variant="caption"
                                color="inherit"
                            >
                                Help and Support
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: 'center',
                                display: 'flex',
                                mb: 2,
                            }}
                        >
                            <Typography variant="caption" color="inherit">
                                © McMaster University {new Date().getFullYear()}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: 'flex-end',
                                display: 'flex',
                                mb: 2,
                                alignItems: 'flex-end',
                            }}
                        >
                            <Typography
                                component={Link}
                                href="mailto: example@mcmaster.ca"
                                variant="caption"
                                color="inherit"
                            >
                                Contact Us
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}
