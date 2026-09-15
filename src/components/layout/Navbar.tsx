"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Recommendations", href: "/recommendations" },
  { name: "About", href: "/about" },
  { name: "Verify AI", href: "/trust-but-verify" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-primary">Lumina</span>
              <span className="text-sm tracking-widest uppercase text-muted-foreground hidden sm:block">Café</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Link href="/cart" className="relative p-2 text-foreground hover:text-primary transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-primary-foreground bg-primary rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link href="/presentation" className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors">
              Presentation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-foreground hover:text-primary transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-primary-foreground bg-primary rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === link.href ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/presentation"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground bg-primary"
            >
              Presentation Mode
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
