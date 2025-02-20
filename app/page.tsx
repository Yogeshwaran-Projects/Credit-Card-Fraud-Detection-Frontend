"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Users, ArrowRight, Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"


export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="w-full px-4 sm:px-8 md:px-12 lg:px-16 h-16 flex items-center border-b border-gray-200 dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">FraudShield</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about-us">
            About Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-4">
          {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Credit Card Fraud Detection
            </h1>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              Protecting your transactions with advanced AI and machine learning technology.
            </p>
            <div className="mt-6 space-x-4">
              <Button asChild>
                <a href="http://localhost:8501/">Try Our Model</a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">How It Works</h2>
            <InfiniteMovingCards
  items={[
    { quote: "Detect fraudulent transactions in real-time.", name: "AI Security Team", title: "Machine Learning Experts" },
    { quote: "Our ML models analyze spending patterns to flag suspicious activity.", name: "Fraud Detection Team", title: "Data Scientists" },
    { quote: "Adaptive learning keeps the system updated against evolving fraud tactics.", name: "Fintech Innovators", title: "AI Engineers" },
    { quote: "Seamless integration with banking systems for instant alerts.", name: "Tech Security Division", title: "Software Architects" },
    { quote: "98% accuracy in identifying fraud, reducing financial losses.", name: "Risk Assessment Team", title: "Cybersecurity Specialists" }
  ]}
/>


          </div>
        </section>
        <section id="about-us" className="w-full py-12 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">About the Developers</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              FraudShield was developed by a team of expert data scientists and software engineers with years of
              experience in financial technology and cybersecurity.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/team">
                  Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 FraudShield. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
