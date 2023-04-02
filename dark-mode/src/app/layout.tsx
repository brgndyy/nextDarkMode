import "./globals.css";
import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
