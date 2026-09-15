import Link from "next/link";
import { Coffee, Leaf, ShieldCheck, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tighter text-primary">Lumina</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              A premium, AI-assisted smart café experience designed for the modern university campus.
            </p>
            <p className="text-xs text-muted-foreground font-semibold">
              Demo Project — UPES AI Course
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
              <li><Link href="/recommendations" className="hover:text-primary transition-colors">Smart Recommendations</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* AI & Tech */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Responsible AI</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/responsible-ai" className="hover:text-primary transition-colors flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> AI Guardrails</Link></li>
              <li><Link href="/trust-but-verify" className="hover:text-primary transition-colors flex items-center gap-2"><FileText className="w-4 h-4" /> Trust But Verify</Link></li>
              <li><Link href="/integrity-log" className="hover:text-primary transition-colors flex items-center gap-2"><FileText className="w-4 h-4" /> AI Integrity Log</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors flex items-center gap-2"><Coffee className="w-4 h-4" /> AI Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact (Fictional) */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Visit Us (Fictional)</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>University Campus, Block B</li>
              <li>Mon - Fri: 8:00 AM - 10:00 PM</li>
              <li>Sat - Sun: 9:00 AM - 8:00 PM</li>
              <li className="pt-2 text-xs italic opacity-80">
                Note: No real personal data is collected or required for this demonstration.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Lumina Café Demo. Created for educational purposes.
          </p>
          <div className="flex gap-4">
            <Link href="/team" className="text-xs text-muted-foreground hover:text-primary transition-colors">Project Team</Link>
            <Link href="/viva-prep" className="text-xs text-muted-foreground hover:text-primary transition-colors">Viva Prep</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
