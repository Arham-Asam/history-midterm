// app/entries/[id]/page.js
import { entries } from '../../../data/entries'
import {
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Box,
} from '@mui/material'

export default function EntryPage({ params }) {
    const { id } = params
    const entry = entries.find((e) => e.id === parseInt(id))

    if (!entry) return <Typography variant="h5">Entry not found.</Typography>

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Card>
                <CardMedia
                    component="img"
                    height="300"
                    image={entry.image}
                    alt={entry.title}
                />
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {entry.title}
                    </Typography>
                    <Typography variant="body1">{entry.content}</Typography>
                    {entry.citation && (
                        <Box
                            sx={{
                                mt: 2,
                                p: 1,
                                bgcolor: 'grey.200',
                                borderRadius: 1,
                            }}
                        >
                            <Typography variant="body2">
                                <strong>Source:</strong> {entry.citation}
                            </Typography>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Container>
    )
}
