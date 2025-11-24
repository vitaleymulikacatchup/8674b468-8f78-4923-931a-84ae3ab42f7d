"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            {name: "Home", id: "/"},
            {name: "Teams", id: "/teams"},
            {name: "Stats", id: "/stats"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="F1 Racing"
          button={{
            text: "Watch Live",
            href: "https://f1.com"
          }}
        />
      </div>

      <div id="contact" data-section="contact" className="min-h-screen flex items-center">
        <ContactCenter
          tag="Stay Updated"
          title="Get F1 News & Updates"
          description="Subscribe to receive the latest Formula 1 news, race results, driver updates, and exclusive behind-the-scenes content delivered straight to your inbox."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive F1 updates and can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="F1 Racing"
          columns={[
            {
              items: [
                {label: "Race Calendar", href: "#schedule"},
                {label: "Championship Standings", href: "#standings"},
                {label: "Driver Profiles", href: "#drivers"},
                {label: "Team Information", href: "#teams"}
              ]
            },
            {
              items: [
                {label: "Live Timing", href: "https://f1.com/timing"},
                {label: "Race Highlights", href: "https://f1.com/highlights"},
                {label: "F1 TV", href: "https://f1tv.formula1.com"},
                {label: "Mobile App", href: "https://f1.com/app"}
              ]
            },
            {
              items: [
                {label: "News & Media", href: "#news"},
                {label: "Press Releases", href: "#press"},
                {label: "Photo Gallery", href: "#photos"},
                {label: "Video Archive", href: "#videos"}
              ]
            },
            {
              items: [
                {label: "Contact Us", href: "#contact"},
                {label: "Fan Support", href: "#support"},
                {label: "Partnerships", href: "#partnerships"},
                {label: "Careers", href: "#careers"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}