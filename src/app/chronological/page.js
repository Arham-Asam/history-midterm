'use client'

import { useState } from 'react'
import { entries } from '../../data/entries'
import {
    Typography,
    Button,
    Stack,
    Card,
    CardContent,
    CardMedia,
    Box,
    Container,
} from '@mui/material'

export default function ChronologicalPage() {
    const [index, setIndex] = useState(0)
    const entry = entries[index]

    const next = () =>
        setIndex((prev) => Math.min(prev + 1, entries.length - 1))
    const prev = () => setIndex((prev) => Math.max(prev - 1, 0))

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Chronological Mode
            </Typography>

            <Card>
                {entry.image && (
                    <CardMedia
                        component="img"
                        image={entry.image}
                        alt={entry.title}
                        height="300"
                        sx={{ objectFit: 'cover' }}
                    />
                )}
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {entry.title}
                    </Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                        {entry.content}
                    </Typography>

                    {entry.citation && (
                        <Typography
                            variant="body2"
                            sx={{ mt: 2, fontStyle: 'italic', color: 'gray' }}
                        >
                            {entry.citation}
                        </Typography>
                    )}
                </CardContent>
            </Card>

            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mt: 4 }}
            >
                <Button
                    variant="outlined"
                    onClick={prev}
                    disabled={index === 0}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    onClick={next}
                    disabled={index === entries.length - 1}
                >
                    Next
                </Button>
            </Stack>
        </Container>
    )
}
