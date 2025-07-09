"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function RegisterForm() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Registration Form */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <form className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Create an Account</h1>
                    <p className="text-muted-foreground text-sm">
                      Join the future of managing your stuff like royalty.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" required />
                  </div>

                  <Button type="submit" className="w-full">
                    Register
                  </Button>

                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <a href="/login" className="underline underline-offset-4">
                      Login
                    </a>
                  </div>
                </div>
              </form>

              {/* Right Image Side */}
              <div className="bg-muted relative hidden md:block">
                <Image
                  src="/placeholder.svg"
                  alt="Registration Image"
                  fill
                  className="object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-muted-foreground text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking register, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-500 text-center text-sm py-4 border-t">
        Powered by{" "}
        <span className="font-semibold text-gray-700">Initiadev</span>
      </footer>
    </div>
  );
}
