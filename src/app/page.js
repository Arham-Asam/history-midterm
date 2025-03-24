'use client'
import { Typography, Button, Stack } from '@mui/material'
import Link from 'next/link'

export default function Home() {
    return (
        <Stack spacing={3} sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h3" gutterBottom>
                The Rise of Islam and the Islamic Golden Age
            </Typography>
            <Typography variant="h6" color="text.secondary">
                Explore the transformation of the Near East from 600 to 1300 CE
                through interactive historical entries.
            </Typography>

            <Stack
                direction="column"
                spacing={2}
                alignItems="center"
                sx={{ mt: 4 }}
            >
                <Button
                    variant="contained"
                    component={Link}
                    href="/sections/golden-age-of-islam"
                >
                    Browse by Section
                </Button>
                <Button
                    variant="outlined"
                    component={Link}
                    href="/chronological"
                >
                    Start Chronological Mode
                </Button>
            </Stack>
        </Stack>
    )
}
