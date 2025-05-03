
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Welcome back!",
      description: "Login successful. Time to surf the web!",
    });
  };

  return (
    <Card className="retro-card w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="retro-text text-3xl text-center">LOGIN</CardTitle>
        <CardDescription className="text-center mono-text">Access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="mono-text text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email Address
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                className="retro-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="mono-text text-sm font-medium flex items-center gap-2">
              <Lock className="h-4 w-4" /> Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="retro-input pr-10"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="retro-button w-full">
            LOG IN
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col space-y-2">
        <div className="text-center mono-text text-sm mt-2">
          <a href="#" className="text-retro-purple hover:underline">Forgot Password?</a>
        </div>
        <div className="text-center mono-text text-sm">
          Don't have an account? <a href="#" className="text-retro-teal hover:underline">Sign Up</a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
