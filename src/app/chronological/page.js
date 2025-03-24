// app/chronological/page.js
'use client'
import { useState } from 'react'
import { entries } from '/entries'
import {
    Container,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    Stack,
} from '@mui/material'

export default function Chronological() {
    const [index, setIndex] = useState(0)
    const entry = entries[index]

    const nextEntry = () =>
        setIndex((prev) => Math.min(prev + 1, entries.length - 1))
    const prevEntry = () => setIndex((prev) => Math.max(prev - 1, 0))

    return (
        <Container maxWidth="md" sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Chronological Mode
            </Typography>

            <Card>
                <CardMedia
                    component="img"
                    height="300"
                    image={entry.image}
                    alt={entry.title}
                />
                <CardContent>
                    <Typography variant="h5">{entry.title}</Typography>
                    <Typography variant="body1">{entry.content}</Typography>
                    {entry.citation && (
                        <Typography
                            variant="body2"
                            sx={{
                                mt: 2,
                                p: 1,
                                bgcolor: 'grey.200',
                                borderRadius: 1,
                            }}
                        >
                            <strong>Source:</strong> {entry.citation}
                        </Typography>
                    )}
                </CardContent>
            </Card>

            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mt: 3 }}
            >
                <Button
                    variant="contained"
                    onClick={prevEntry}
                    disabled={index === 0}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    onClick={nextEntry}
                    disabled={index === entries.length - 1}
                >
                    Next
                </Button>
            </Stack>
        </Container>
    )
}
