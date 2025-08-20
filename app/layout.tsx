import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vibrato Academia de Musica Online Bolivia",
  description: "Aprende música online y a domicilio con los mejores profesores. Clases de violín, canto y guitarra en La Paz, Bolivia.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        
      </body>
    </html>
  )
}
