"use client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";
import { LogInIcon } from "lucide-react";

export default function Home() {
  const goToLogin = () => {
    redirect("/login");
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-white shadow">
        <div className="text-xl font-bold text-gray-800">Logo</div>
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
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-500 text-center text-sm py-4 border-t">
        Powered by{" "}
        <span className="font-semibold text-gray-700">Initiadev</span>
      </footer>
    </div>
  );
}
