'use client';
import Footer from './ui/dashboard/footer/page';
import LinkBar from './ui/dashboard/linkBar/page';
import Navbar from './ui/dashboard/navbar';
import Providers from './Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Navbar />
          <LinkBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
