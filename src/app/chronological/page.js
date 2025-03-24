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
} from '@mui/material'

export default function ChronologicalPage() {
    const [index, setIndex] = useState(0)
    const entry = entries[index]

    const next = () => {
        if (index < entries.length - 1) {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
                Chronological Mode
            </Typography>

            <Card sx={{ mb: 3 }}>
                {entry.image && (
                    <CardMedia
                        component="img"
                        height="300"
                        image={entry.image}
                        alt={entry.title}
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

            <Stack direction="row" spacing={2} justifyContent="center">
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
        </Box>
    )
}
