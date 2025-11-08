"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import SolarSystem3D from "./SolarSystem3D";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <SolarSystem3D />

      {/* Floating decorative text with different fonts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[5%] text-6xl font-serif text-white animate-pulse">
          Welcome
        </div>
        <div className="absolute top-[20%] right-[10%] text-4xl font-mono text-blue-300 animate-bounce">
          Space
        </div>
        <div className="absolute top-[40%] left-[8%] text-5xl font-sans text-purple-300 animate-pulse" style={{ fontFamily: 'cursive' }}>
          Journey
        </div>
        <div className="absolute top-[60%] right-[15%] text-7xl font-bold text-yellow-200 animate-pulse">
          Login
        </div>
        <div className="absolute bottom-[15%] left-[12%] text-4xl font-light text-cyan-300" style={{ fontFamily: 'fantasy' }}>
          Explore
        </div>
        <div className="absolute top-[30%] right-[5%] text-3xl font-semibold text-pink-300 animate-bounce">
          Universe
        </div>
        <div className="absolute bottom-[25%] right-[20%] text-5xl font-mono text-green-300 animate-pulse">
          Cosmos
        </div>
        <div className="absolute top-[70%] left-[20%] text-4xl text-orange-300" style={{ fontFamily: 'Georgia, serif' }}>
          Galaxy
        </div>
      </div>

      {/* Login/Register Form */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-md backdrop-blur-xl bg-black/40 border-white/20 shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Space Portal
            </h1>
            <p className="text-gray-300 text-sm">
              {isLogin ? "Welcome back to the cosmos" : "Begin your cosmic journey"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                required
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-white">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-6 text-lg shadow-lg shadow-purple-500/50"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-300 hover:text-white transition-colors underline decoration-purple-400 underline-offset-4"
            >
              {isLogin
                ? "Don't have an account? Create Account"
                : "Already have an account? Sign In"}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-xs text-gray-400">Powered by Space Tech</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
