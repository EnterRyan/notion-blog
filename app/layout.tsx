import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

import { SideNavigator } from '@widgets/sideNavigator';
import './globals.css'

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ko">
     <body className="grid-layout-main h-screen">
      <div className="area-header h-1"><Header /></div>
      <div className="area-side"><SideNavigator /></div>
      <main className="area-contents">{children}</main>
      <footer className="area-footer"><Footer /></footer>
    </body>
    </html>
  );
}
