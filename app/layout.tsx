import type { Metadata } from "next"

import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';
import { SideNavigator } from '@widgets/sideNavigator';

import './globals.css'
import ReactQueryProvider from '@shared-client/providers/tanstackquery/ReactQueryProvider';

export const metadata: Metadata = {
  title: "changetodev blog",
  description: "프론트엔드 학습 및 잡담 블로그입니다.",
}


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ko">
      <body className="grid-layout-main">
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
