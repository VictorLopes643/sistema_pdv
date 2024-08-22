import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import SessionProviderClientComponent from "@/components/sessionProvider/SessionProviderClientComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Management",
  description: "Business Management Project",
  icons: "/assets/simbolo.svg",
};

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const session = await getServerSession();

  return (
    <html lang={"en"} suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProviderClientComponent session={session}>
            <ThemeProvider>
              {children}
            </ThemeProvider>
        </SessionProviderClientComponent>

      </body>
    </html>
  );
};