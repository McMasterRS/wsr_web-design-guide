import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings'
import {useTheme} from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const pages = [
    ['Page 1', '/page_1'],
    ['Page 2', '/page_2'],
]

export default function Navbar() {
    const theme = useTheme()

    const imgStyle = {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '30px',
    }

    const router = useRouter()
    const currentRoute = usePathname()

    return (
        <AppBar
            position="relative"
            sx={{zIndex: theme => theme.zIndex.drawer + 1, borderRadius: 0}}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        MacApp
                    </Typography>
                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                        {pages.map(page => (
                            <Button
                                key={page[0]}
                                component={Link}
                                href={page[1]}
                                sx={{mx: 0.3, my: 2, color: 'white', display: 'block'}}
                            >
                                {page[0]}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{paddingRight: 1, display: 'flex'}}>
                        <Tooltip
                            title={
                                theme.palette.mode === 'dark'
                                    ? 'Switch to Light Mode'
                                    : 'Switch to Dark Mode'
                            }
                        >
                            <IconButton
                                sx={{ml: 1}}
                                color="inherit"
                            >
                                {theme.palette.mode === 'dark' ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{paddingRight: 1, display: 'flex'}}>
                        <Tooltip title="Settings">
                            <IconButton
                                aria-label="settings"
                                color="inherit"
                                component={Link}
                                href="/settings"
                            >
                                <SettingsIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}