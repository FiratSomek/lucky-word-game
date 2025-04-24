import Header from "@/components/Header";
import "../styles/globals.css";
import { QuizProvider } from "./QuizContext/QuizProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QuizProvider>
          <Header />
          <main className="main-content">{children}</main>
        </QuizProvider>
      </body>
    </html>
  );
}
