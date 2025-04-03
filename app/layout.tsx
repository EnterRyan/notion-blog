export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ko">
      <body>
        <header>header</header>
        <nav>navigator</nav>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
