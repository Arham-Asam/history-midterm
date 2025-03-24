// app/layout.js
import './globals.css'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'

export const metadata = {
    title: 'Islamic Golden Age',
    description: 'A project on the history of Islam from 600 CE to 1300 CE',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <Container maxWidth="md" sx={{ mt: 4 }}>
                    {children}
                </Container>
            </body>
        </html>
    )
}
