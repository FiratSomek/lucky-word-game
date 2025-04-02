import Header from "@/components/Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
