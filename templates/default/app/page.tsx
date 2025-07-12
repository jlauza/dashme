"use client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import {
  LogInIcon,
  Command,
  HomeIcon,
  WrenchIcon,
  FileTextIcon,
  PhoneIcon,
} from "lucide-react";

export default function Home() {
  const goToLogin = () => {
    redirect("/login");
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-white shadow">
        <div className="text-xl font-bold text-gray-800">
          <a href="#" className="flex items-center gap-2">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Command className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight ">
              <span className="truncate font-medium">Acme Inc</span>
              <span className="truncate text-xs">Enterprise</span>
            </div>
          </a>
        </div>
        <div className="flex justify-center space-x-6 py-4 bg-white">
          {[
            { label: "Home", href: "#", icon: <HomeIcon className="size-4" /> },
            {
              label: "Services",
              href: "#",
              icon: <WrenchIcon className="size-4" />,
            },
            {
              label: "Blogs",
              href: "#",
              icon: <FileTextIcon className="size-4" />,
            },
            {
              label: "Contacts",
              href: "#",
              icon: <PhoneIcon className="size-4" />,
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-primary transition"
            >
              {item.icon}
              <span className="truncate">{item.label}</span>
            </a>
          ))}
        </div>
        <div>
          <Button
            onClick={goToLogin}
            variant="link"
            size="sm"
            className="flex items-center cursor-pointer text-gray-800 hover:text-gray-600"
          >
            Login
            <LogInIcon className="mr-2" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to Template Dashboard
        </h1>
        <p className="text-gray-600 text-lg max-w-xl">
          Your one-stop solution for managing everything like a boss.
        </p>
        <Button
          variant="link"
          className="mt-6 px-8 py-3 cursor-pointer"
          onClick={goToLogin}
        >
          Get Started
          <LogInIcon />
        </Button>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-500 text-center text-sm py-4 border-t">
        Powered by{" "}
        <span className="font-semibold text-gray-700">Initiadev</span>
      </footer>
    </div>
  );
}
