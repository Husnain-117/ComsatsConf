"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { useSpring, animated } from "@react-spring/web"
import { Button } from "@/Components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/Components/ui/dropdown-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/Components/ui/sheet"
import { Input } from "@/Components/ui/input"
import { MenuIcon, XIcon, ChevronDown, Zap, Search } from "lucide-react"

interface NavigationItem {
  label: string
  href: string
}

interface NavigationSection {
  title: string
  items: NavigationItem[]
}

const navigationSections: NavigationSection[] = [
  {
    title: "Conference",
    items: [
      { label: "Home", href: "/" },
      { label: "Call for Papers", href: "/call-for-papers" },
      { label: "Program", href: "/program" },
    ],
  },
  {
    title: "People",
    items: [
      { label: "Speakers", href: "/speakers" },
      { label: "Organizers", href: "/organizers" },
    ],
  },
  {
    title: "Participation",
    items: [
      { label: "Registration", href: "/registration" },
      { label: "Abstract Guidelines", href: "/abstract-guidelines" },
    ],
  },
  {
    title: "Information",
    items: [
      { label: "Gallery", href: "/gallery" },
      { label: "Accommodation & Travel", href: "/accommodation" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                               Animation variants                           */
/* -------------------------------------------------------------------------- */
const menuVariants: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.06 },
  },
  exit: { opacity: 0, y: -10, scale: 0.97, transition: { duration: 0.2 } },
}

const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
}

const buttonVariants: Variants = {
  hover: { y: -2, scale: 1.02 }, // More pronounced hover
  tap: { y: 0, scale: 0.98 },
}

/* -------------------------------------------------------------------------- */
const Header: React.FC = () => {
  /* ---------------------------------------------------------------------- */
  /*                                   STATE                                  */
  /* ---------------------------------------------------------------------- */
  const [anchorOpen, setAnchorOpen] = useState<Record<string, boolean>>({})
  // searchOpen state removed; search input is always visible
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({})

  /* ---------------------------------------------------------------------- */
  /*                                SPRING ANI                                */
  /* ---------------------------------------------------------------------- */
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" }, // More initial animation
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 250, friction: 20 }, // Slightly stiffer spring
  })

  // searchSpring removed; search input static

  /* ---------------------------------------------------------------------- */
  /*                               EVENT HANDLERS                             */
  /* ---------------------------------------------------------------------- */
  const toggleSection = (title: string, stateSetter: typeof setAnchorOpen) =>
    stateSetter((p) => ({ ...p, [title]: !p[title] }))

  /* ---------------------------------------------------------------------- */
  /*                                    UI                                    */
  /* ---------------------------------------------------------------------- */
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#3a2661]/90 via-[#503a7d]/90 to-[#3a2661]/90 border-b border-[#b7a6e9]/30 shadow-2xl backdrop-blur-lg">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 py-5 relative">
          {/* Logo --------------------------------------------------------- */}
          <animated.div style={logoSpring} className="flex-shrink-0 z-10">
            <motion.a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#BCEDF6",
                transition: "transform 0.3s",
              }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap style={{ height: 28, width: 28, color: "#BCEDF6" }} />
              <span>TechSummit 2025</span>
            </motion.a>
          </animated.div>

          {/* Desktop nav - Centered -------------------------------------------------- */}
          <div className="flex flex-1 items-center justify-center gap-6">
            {navigationSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
              >
                <DropdownMenu>
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="relative rounded-lg px-4 py-2 text-base font-medium normal-case text-[#cbd5ff] transition-all duration-300 hover:-translate-y-px hover:bg-[#412963]/40 hover:text-[#b7a6e9] before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-0 before:-translate-x-1/2 before:bg-gradient-to-r before:from-cyan-400 before:via-purple-400 before:to-pink-400 before:transition-all before:duration-300 hover:before:w-3/4"
                      >
                        {section.title}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                  </motion.div>
                  <DropdownMenuContent className="mt-2 min-w-[210px] rounded-xl border border-conference-500/50 bg-conference-800/95 p-2 shadow-2xl backdrop-blur-sm z-[60]">
                    {section.items.map((item) => (
                      <DropdownMenuItem
                        key={item.label}
                        className="cursor-pointer rounded-lg px-5 py-3 text-sm font-medium text-[#cbd5ff] transition-all duration-300 hover:translate-x-1 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:via-purple-600/20 hover:to-pink-500/20 hover:text-[#b7a6e9]"
                        asChild
                      >
                        <a href={item.href}>{item.label}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            ))}
          </div>

          {/* Search & mobile menu ---------------------------------------- */}
          <div className="flex items-center gap-4 flex-shrink-0 z-10">
            {/* Search box */}
            <div className="relative flex items-center">
  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-conference-300 pointer-events-none">
    <Search className="w-4 h-4" strokeWidth={2} />
  </span>
  <Input
    type="text"
    placeholder="Search…"
    className="w-64 pl-9 rounded-full border border-conference-500/50 bg-conference-800/80 py-2 text-sm text-conference-100 transition-all duration-300 placeholder:text-conference-300 hover:border-conference-300 focus:border-conference-300 focus:outline-none focus:ring-2 focus:ring-conference-300/30"
  />
</div>

            {/* Mobile trigger */}
            <Sheet open={mobileDrawerOpen} onOpenChange={setMobileDrawerOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open mobile menu"
                  className="rounded-full bg-conference-300 p-2 text-conference-800 shadow-md transition-all duration-300 hover:scale-110 hover:bg-conference-200 hover:shadow-lg"
                >
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 border-l-4 border-conference-500 bg-conference-900 p-0">
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ type: "spring", damping: 28, stiffness: 320 }}
                  className="flex h-full flex-col"
                >
                  <div className="flex justify-end p-4">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Close mobile menu"
                        className="text-conference-200"
                        onClick={() => setMobileDrawerOpen(false)}
                      >
                        <XIcon className="h-6 w-6" />
                      </Button>
                    </motion.div>
                  </div>
                  <nav className="flex-1 overflow-y-auto">
                    <ul className="m-0 list-none p-0">
                      {navigationSections.map((section, i) => (
                        <motion.li
                          key={section.title}
                          initial={{ opacity: 0, x: 35 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.12, duration: 0.35 }}
                          className="mb-2"
                        >
                          <Button
                            variant="ghost"
                            className="flex w-full items-center justify-between rounded-lg bg-conference-600/30 px-4 py-3 text-base font-semibold uppercase tracking-wide text-conference-200 transition-all duration-300 hover:bg-conference-600/50 hover:scale-[1.01] hover:text-conference-400"
                            onClick={() => toggleSection(section.title, setMobileExpanded)}
                          >
                            {section.title}
                            <motion.div
                              animate={{ rotate: mobileExpanded[section.title] ? 180 : 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.div>
                          </Button>
                          {/* subitems */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              mobileExpanded[section.title] ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <ul className="m-0 list-none pl-8 pt-2">
                              {section.items.map((item, j) => (
                                <motion.li
                                  key={item.label}
                                  initial={{ opacity: 0, x: 25 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.06, duration: 0.25 }}
                                  className="mb-1"
                                >
                                  <Button
                                    asChild
                                    variant="ghost"
                                    className="w-full justify-start rounded-lg px-4 py-2 text-conference-200 transition-all duration-300 hover:translate-x-1 hover:bg-conference-600/20 hover:text-conference-400"
                                    onClick={() => setMobileDrawerOpen(false)}
                                  >
                                    <a href={item.href}>{item.label}</a>
                                  </Button>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {/* Spacer to offset fixed header */}
      <div className="min-h-[72px]" />
    </>
  )
}

export default Header
