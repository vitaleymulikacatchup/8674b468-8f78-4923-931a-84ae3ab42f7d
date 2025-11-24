"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import Link from "next/link";
import { BarChart3, HelpCircle, Flag, Zap, Users, Globe } from "lucide-react";

export default function StatsPage() {
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
            {name: "Stats", id: "stats"},
            {name: "Contact", id: "/contact"}
          ]}
          brandName="F1 Racing"
          button={{
            text: "Watch Live",
            href: "https://f1.com"
          }}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Championship Statistics"
          description="Key performance metrics from the 2024 Formula 1 season"
          tag="Season Stats"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "23",
              title: "races",
              description: "Grand Prix events across six continents",
              icon: Flag
            },
            {
              id: "2",
              value: "350",
              title: "km/h",
              description: "Maximum speed reached on track",
              icon: Zap
            },
            {
              id: "3",
              value: "10",
              title: "teams",
              description: "Constructors competing for glory",
              icon: Users
            },
            {
              id: "4",
              value: "400M",
              title: "fans",
              description: "Global audience watching F1",
              icon: Globe
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Formula 1 FAQ"
          description="Everything you need to know about the world of Formula 1 racing"
          tag="Get Informed"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://pixabay.com/get/gdae290221016e2f183711858d1524323f04194e786ff229ad5e451ab2a5b4e9dc0a7bd6d05a7e45058e0a935c2444a150bbc3862cca46a673a0c3873707e4f00_1280.jpg"
          imageAlt="Formula 1 race track circuit"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "What makes Formula 1 cars so fast?",
              content: "F1 cars combine lightweight carbon fiber construction, powerful hybrid engines producing over 1000hp, advanced aerodynamics for maximum downforce, and cutting-edge technology to achieve speeds exceeding 350 km/h."
            },
            {
              id: "2",
              title: "How many races are in an F1 season?",
              content: "The 2024 Formula 1 season features 23 Grand Prix races held across six continents, from March to December, including iconic circuits like Monaco, Silverstone, and Spa-Francorchamps."
            },
            {
              id: "3",
              title: "How do F1 championship points work?",
              content: "Points are awarded to the top 10 finishers in each race: 25 points for 1st place, 18 for 2nd, 15 for 3rd, and so on. Additional points are available for fastest lap and sprint races."
            },
            {
              id: "4",
              title: "What is the cost cap in Formula 1?",
              content: "Teams must operate within a $135 million budget cap (excluding driver salaries, marketing, and certain other expenses) to promote competitive balance and financial sustainability."
            },
            {
              id: "5",
              title: "How do F1 engines work?",
              content: "Modern F1 power units are 1.6-liter V6 turbo engines combined with two electric motor systems (ERS-K and ERS-H) that recover energy from braking and exhaust heat, providing additional power and efficiency."
            }
          ]}
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