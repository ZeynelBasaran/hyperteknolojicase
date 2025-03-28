import Navbar from "../components/navbar/navbar";
import "./globals.css";
import ThemeProvider from "../components/ui/theme-provider";
import { BasketProvider } from "../store/basketStore";
import Footer from "../components/footer";

export const metadata = {
  title: "HyperTextCase",
  description: "Alışveriş Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BasketProvider>
            <Navbar />
            {children}
            <Footer/>
          </BasketProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
