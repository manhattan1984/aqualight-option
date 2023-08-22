import "server-only";
import SupabaseListener from "./(context)/supabase-listener";
import SupabaseProvider from "./(context)/supabase-provider";

// import Header from "./(components)/Header";
import Header from "@/components/Header";
import Menu from "./(components)/Menu";
import MenuProvider from "./(context)/MenuContext";
import "./globals.css";
import { createClient } from "@/utils/supabase-server";
import { BsFillCheckSquareFill } from "react-icons/bs";
import Link from "next/link";
import Footer from "@/components/Footer";

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user.id;

  return (
    <html lang="en">
      <head />
      <body className="">
        <SupabaseProvider accessToken={session?.access_token}>
          <SupabaseListener serverAccessToken={session?.access_token} />

          <Header signedIn={session?.access_token ? true : false} />
          {children}
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
