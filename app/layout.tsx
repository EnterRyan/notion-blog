import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

import './globals.css'

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
