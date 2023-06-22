import React from "react";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Stack from "@mui/material/Stack";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {MuiFileInput} from 'mui-file-input'
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography'

export interface SnackbarMessage {
    message: string;
    key: number;
}

export interface State {
    open: boolean;
    snackPack: readonly SnackbarMessage[];
    messageInfo?: SnackbarMessage;
}

export default function Home() {
    const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
    const [snackPack, setSnackPack] = React.useState<readonly SnackbarMessage[]>([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState<SnackbarMessage | undefined>(
        undefined,
    );

    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    const handleClick = (message: string) => () => {
        setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const handleChange = (newFiles: File[]) => {
        setSelectedFiles(newFiles);
    }

    return (
        <>
            <Head>
                <title>RSD Workshop App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Snackbar
                    sx={{paddingTop: 10}}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    TransitionProps={{ onExited: handleExited }}
                    message={messageInfo ? messageInfo.message : undefined}
                    action={action}
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                />
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={5}
                >
                    <Typography variant="h1">Hello World!</Typography>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Button variant="contained" onClick={handleClick('Primary Button Clicked!')}>Primary</Button>
                        <Button variant="contained" onClick={handleClick('Secondary Button Clicked!')}>Secondary</Button>
                    </Stack>
                    <MuiFileInput
                        multiple
                        placeholder="Click here and select file(s)"
                        value={selectedFiles}
                        onChange={handleChange}
                        hideSizeText
                    />
                </Stack>
            </main>
        </>
    )
}
