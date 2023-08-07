import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Header from './components/Header'
import { StateContext } from './context/StateContext'

import './globals.css'

export const metadata = {
  title: 'This Fabulous Family',
  description: 'Clothing and Merchandise for Foster, Biological, and Adoptive Families',
}

export default function RootLayout({ children }) {
  return (
    <StateContext>
      <html lang="en">
        <body className='flex flex-col items-center'>

          <Header />

          {children}

          <Footer />

          <Toaster position='top-center'/>
          
      </body>
      </html>
    </StateContext>
  )
}
