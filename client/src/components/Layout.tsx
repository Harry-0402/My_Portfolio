import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  
  return (
    <div className={cn(
      "flex flex-col min-h-screen transition-colors duration-300",
      theme === "dark" ? "bg-dark-800 text-white" : "bg-white text-dark-800"
    )}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
