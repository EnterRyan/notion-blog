import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

import { SideNavigator } from '@widgets/sideNavigator';

import './globals.css'
import ReactQueryProvider from '@shared-client/providers/tanstackquery/ReactQueryProvider';

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ko">
      <body className="grid-layout-main h-screen">
        <ReactQueryProvider>
          <div className="area-header"><Header /></div>
          <div className="area-side"><SideNavigator /></div>
          <main className="area-contents">{children}</main>
          <footer className="area-footer"><Footer /></footer>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
