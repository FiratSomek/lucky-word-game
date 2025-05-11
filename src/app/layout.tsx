"use client";
import Header from "@/components/Header";
import "../styles/globals.css";
import { QuizProvider } from "../QuizContext/QuizProvider";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <QuizProvider>
          <UserProvider>
            <Header />
            <main className="main-content">{children}</main>
          </UserProvider>{" "}
        </QuizProvider>
      </body>
    </html>
  );
}
