import "./globals.css";
import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContentCard from "@/components/Card/ContentCard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Card>
          <Header />
          <ContentCard>{children}</ContentCard>
        </Card>
        <Footer />
      </body>
    </html>
  );
}
