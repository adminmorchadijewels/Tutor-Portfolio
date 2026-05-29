import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#111111" }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12 text-center sm:text-left">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <p
              className="text-white text-xl font-semibold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Beyond Marks
              <span className="text-[#C9A84C]">.</span>
            </p>
            <p className="text-white/40 text-sm italic mb-6">
              Where Curious Minds Are Built, Not Drilled.
            </p>

            <div className="space-y-2">
              <a
                href="mailto:himanshu.g302000@gmail.com"
                className="flex items-center gap-2 text-white/50 hover:text-[#C9A84C] text-sm transition-colors"
              >
                <span>📧</span>
                <span>himanshu.g302000@gmail.com</span>
              </a>
              <a
                href="https://wa.me/9607375336"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-[#C9A84C] text-sm transition-colors"
              >
                <span>📱</span>
                <span>+960 7375336</span>
              </a>
              <a
                href="https://www.linkedin.com/in/himanshugupta5458/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-[#C9A84C] text-sm transition-colors"
              >
                <span>🔗</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-6">
              Navigation
            </p>
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/50 hover:text-[#C9A84C] text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Serving Students In */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-6">
              Serving Students In
            </p>
            <div className="space-y-3">
              {[
                "🌍 Students across Asia",
                "🌍 Students across Europe",
                "🌍 Students across Middle East",
                "🌍 Students across Australia and beyond",
              ].map((region) => (
                <p key={region} className="text-white/50 text-sm">
                  {region}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2025 Beyond Marks · Himanshu Gupta · Mentoring globally from the Maldives 🌊
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right">
            Ages 6–30 · 1-on-1 Only · Pay As You Go
          </p>
        </div>
      </div>
    </footer>
  );
}
