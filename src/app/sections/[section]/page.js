// app/sections/[section]/page.js
'use client'
import { entries } from '../../../data/entries'
import Link from 'next/link'
import {
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Grid,
} from '@mui/material'

export default function SectionPage({ params }) {
    const { section } = params
    const filteredEntries = entries.filter((entry) => entry.section === section)

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                {section.replace('-', ' ')}
            </Typography>

            <Grid container spacing={3}>
                {filteredEntries.map((entry) => (
                    <Grid item xs={12} sm={6} md={4} key={entry.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="180"
                                image={entry.image}
                                alt={entry.title}
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    {entry.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {entry.content.slice(0, 100)}...
                                </Typography>
                                <Button
                                    size="small"
                                    component={Link}
                                    href={`/entries/${entry.id}`}
                                    sx={{ mt: 1 }}
                                >
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
