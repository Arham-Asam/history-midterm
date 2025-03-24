'use client'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import Link from 'next/link'

export default function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div">
                    Islamic Golden Age
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} href="/">
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        href="/sections/golden-age-of-islam"
                    >
                        Browse by Section
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        href="/chronological"
                    >
                        Chronological Mode
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
