// app/page.js
'use client'
import { Container, Typography, Button, Stack } from '@mui/material'
import Link from 'next/link'

export default function Home() {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h3" gutterBottom>
                The Islamic Golden Age
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
                Explore the rise of Islam and its golden age from 600 CE to 1300
                CE.
            </Typography>

            <Stack spacing={2} direction="column" sx={{ mt: 3 }}>
                <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    href="/sections/rise-of-islam"
                >
                    Browse by Sections
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    href="/chronological"
                >
                    Start Chronological Mode
                </Button>
            </Stack>
        </Container>
    )
}
