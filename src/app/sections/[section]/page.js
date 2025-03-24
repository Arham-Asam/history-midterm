import { entries } from '../../../data/entries'

// ✅ This tells Next.js which static pages to generate!
export function generateStaticParams() {
    const uniqueSections = [...new Set(entries.map((entry) => entry.section))]
    return uniqueSections.map((section) => ({ section }))
}

export default function SectionPage({ params }) {
    const filtered = entries.filter((e) => e.section === params.section)
    return (
        <div>
            <h1>{params.section}</h1>
            {filtered.map((entry) => (
                <div key={entry.id}>
                    <h2>{entry.title}</h2>
                </div>
            ))}
        </div>
    )
}
