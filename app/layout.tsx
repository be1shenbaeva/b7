import Footer from "./ui/dashboard/footer/page";
import LinkBar from "./ui/dashboard/linkBar/page";
import Navbar from "./ui/dashboard/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <LinkBar/>
      {children}
      <Footer/>

      </body>
    </html>
  );
}
