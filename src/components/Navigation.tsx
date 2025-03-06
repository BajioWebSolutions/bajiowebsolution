import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion as m } from "framer-motion";

export const Navigation = () => {
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container relative flex items-center justify-between h-20">
        {/* Logo section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center font-semibold">
            <span className="mr-2">🚀</span>
            Shape
          </Link>
        </div>

        {/* Main navigation */}
        <nav className={cn(
          "hidden lg:flex space-x-6 text-sm font-medium",
        )}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Authentication button / user profile */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.user_metadata?.avatar_url} alt={user?.user_metadata?.full_name || "Avatar"} />
                    <AvatarFallback>{user?.user_metadata?.full_name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem className="font-medium">
                  {user?.user_metadata?.full_name || "Profile"}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="outline">
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </div>

        {/* Mobile navigation button */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <m.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col h-full justify-between"
            >
              {/* Mobile navigation menu */}
              <m.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex flex-col space-y-6 text-sm font-medium"
              >
                <div className="flex justify-end pt-4">
                  <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </div>
                <div className="flex flex-col space-y-4 py-4">
                  <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
                  <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
                  <NavLink to="/services" onClick={closeMobileMenu}>Services</NavLink>
                  <NavLink to="/projects" onClick={closeMobileMenu}>Projects</NavLink>
                  <NavLink to="/blog" onClick={closeMobileMenu}>Blog</NavLink>
                  <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
                </div>
              </m.nav>

              {/* Mobile authentication button */}
              <div className="flex flex-col space-y-4 py-4">
                {user ? (
                  <Button
                    onClick={() => {
                      signOut();
                      closeMobileMenu();
                    }}
                    variant="outline"
                  >
                    Sign Out
                  </Button>
                ) : (
                  <Button asChild variant="outline" onClick={closeMobileMenu}>
                    <Link to="/auth">Sign In</Link>
                  </Button>
                )}
              </div>
            </m.div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
