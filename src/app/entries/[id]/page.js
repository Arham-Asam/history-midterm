import { Typography } from '@mui/material'
// ... other imports

export default function EntryPage({ params }) {
    const { id } = params
    const entry = entries.find((e) => e.id === parseInt(id))

    if (!entry) return <Typography variant="h6">Entry not found.</Typography>

    return (
        <main>
            <Typography variant="h3" gutterBottom>
                {entry.title}
            </Typography>

            <img
                src={entry.image}
                alt={entry.title}
                style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    margin: '20px 0',
                }}
            />

            {/* ✅ THIS IS THE FIXED LINE */}
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
        </main>
    )
}
