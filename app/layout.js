import Footer from './components/Footer'
import Header from './components/Header'

import './globals.css'

export const metadata = {
  title: 'This Fabulous Family',
  description: 'Clothing and Merchandise for Foster, Biological, and Adoptive Families',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col items-center'>

        <Header />

        {children}

        <Footer />
        
    </body>
    </html>
  )
}
