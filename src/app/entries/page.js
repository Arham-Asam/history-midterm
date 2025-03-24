// app/entries/[id]/page.js
import { entries } from '../../data/entries'
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material'

// ✅ This tells Next.js which entry pages to statically generate
export function generateStaticParams() {
    return entries.map((entry) => ({
        id: entry.id.toString(),
    }))
}

export default function EntryPage({ params }) {
    const entry = entries.find((e) => e.id.toString() === params.id)

    if (!entry) {
        return <Typography variant="h6">Entry not found.</Typography>
    }

    return (
        <Box sx={{ mt: 5 }}>
            <Card>
                {entry.image && (
                    <CardMedia
                        component="img"
                        height="300"
                        image={entry.image}
                        alt={entry.title}
                    />
                )}
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {entry.title}
                    </Typography>

                    {/* ✅ This preserves your line breaks */}
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                        {entry.content}
                    </Typography>

                    {entry.citation && (
                        <Typography
                            variant="body2"
                            sx={{ mt: 3, fontStyle: 'italic', color: 'gray' }}
                        >
                            {entry.citation}
                        </Typography>
                    )}

                    {entry.comments_analysis && (
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h6">Your Analysis</Typography>
                            <Typography
                                variant="body2"
                                sx={{ whiteSpace: 'pre-line' }}
                            >
                                {entry.comments_analysis}
                            </Typography>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Box>
    )
}
