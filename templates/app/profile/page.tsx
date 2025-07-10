"use client";
import { useState } from "react";
import AppShell from "@/components/app-shell";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, XCircle, Mail, LogIn } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function ProfilePage() {
  const [enabled, setEnabled] = useState(true);
  const [signInMethod, setSignInMethod] = useState("google");
  return (
    <AppShell>
      <div className="min-h-screen bg-gray-100 py-12 px-4 gap-6 flex justify-start items-start">
        {/* Basic Info */}
        <Card className="w-full max-w-2xl">
          <CardHeader className="flex flex-col items-center gap-2">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/avatar-placeholder.png" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <CardTitle className="text-xl">John Doe</CardTitle>
            <p className="text-muted-foreground text-sm text-center">
              CEO/Founder at Example Corp
            </p>
          </CardHeader>

          <CardContent className="grid gap-6">
            {/* Full Name (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fname">First Name</Label>
                <Input id="fname" placeholder="John" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lname">Last Name</Label>
                <Input id="lname" placeholder="Doe" />
              </div>
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            {/* Phone */}
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
            </div>

            {/* Company */}
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Example Corp" />
            </div>

            {/* Status */}
            <div className="grid gap-2">
              <Label>Status</Label>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                Verified
              </div>
            </div>

            {/* Sign-in Method */}
            <div className="grid gap-2">
              <Label htmlFor="signin-method">Sign-in Method</Label>
              <Select defaultValue="google" onValueChange={setSignInMethod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">
                    <span className="flex items-center gap-2">
                      <FaGoogle />
                      Google
                    </span>
                  </SelectItem>
                  <SelectItem value="github">
                    <span className="flex items-center gap-2">
                      <FaGithub />
                      GitHub
                    </span>
                  </SelectItem>
                  <SelectItem value="email">
                    <span className="flex items-center gap-2">
                      <MdOutlineAlternateEmail />
                      Email
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Created At */}
            <div className="grid gap-2">
              <Label>Created At</Label>
              <p className="text-muted-foreground text-sm">July 5, 2024</p>
            </div>

            {/* Save Button */}
            <div className="mt-4 w-full md:flex md:justify-end">
              <Button className="w-full md:w-auto">Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="w-full max-w-2xl max-w-2md">
          <CardHeader className="flex flex-col items-start gap-4">
            <CardTitle className="text-xl">Change Password Settings</CardTitle>
            <p className="text-muted-foreground text-sm text-center">
              Manage your password information.
            </p>
          </CardHeader>

          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="password">Old Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">New Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="mt-4 w-full md:flex md:justify-end">
              <Button className="w-full md:w-auto">Save Changes</Button>
            </div>
          </CardContent>

          <CardHeader className="flex flex-col items-start gap-4">
            <CardTitle className="text-xl">
              2FA Authentication Settings
            </CardTitle>
            <p className="text-muted-foreground text-sm text-center">
              Enable 2FA authentication for added security.
            </p>
          </CardHeader>
          <CardContent className="grid gap-6">
            {/* Toggle 2FA */}
            <div className="flex items-center justify-between">
              <Label htmlFor="twofa-toggle">Enable Two-Factor Auth</Label>
              <Switch
                id="twofa-toggle"
                checked={enabled}
                onCheckedChange={setEnabled}
              />
            </div>

            {/* QR Code + OTP Input */}
            {enabled && (
              <div className="grid gap-4">
                <div className="text-sm text-muted-foreground">
                  Scan this QR code with Google Authenticator or Authy:
                  <p className="text-red-600">
                    Replace QR code with real security QR code
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/sample-QR.png"
                    alt="QR Code"
                    className="h-40 w-40 border rounded bg-white p-2 shadow"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="otp">Enter 6-digit code</Label>
                  <Input
                    id="otp"
                    type="text"
                    maxLength={6}
                    pattern="\d{6}"
                    inputMode="numeric"
                    placeholder="123456"
                  />
                </div>

                <div className="mt-4 w-full md:flex md:justify-end">
                  <Button className="w-full md:w-auto">Save Changes</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
