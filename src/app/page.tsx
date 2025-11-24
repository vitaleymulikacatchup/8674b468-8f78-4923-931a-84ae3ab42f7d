"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import Link from "next/link";
import { Zap, Users, Trophy, Globe, Settings, Car } from "lucide-react";

export default function HomePage() {
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
            {name: "Teams", id: "teams"},
            {name: "Cars", id: "cars"},
            {name: "Stats", id: "stats"},
            {name: "News", id: "news"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="F1 Racing"
          button={{
            text: "Watch Live",
            href: "https://f1.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="The Ultimate F1 Experience"
          description="Witness the speed, precision, and excitement of Formula 1 racing with cutting-edge cars and world-class teams competing for glory on the world's most challenging circuits."
          tag="Season 2024"
          tagIcon={Zap}
          imageSrc="https://pixabay.com/get/gc28fe9996e9fb76c722d6ca3bf4d1d750b71d0848e6efeee11195ab5ba973e7a1ca9e7ef40391d5f19c6b65c0f728c105299730e8befa5db39eb2a2b1dae9e42_1280.jpg"
          imageAlt="charles leclerc, formula one, race, racing, formula 1, f1, motor sport, silverstone circuit, charles leclerc, formula one, formula 1, formula 1, formula 1, formula 1, formula 1"
          imagePosition="right"
          buttons={[
            {
              text: "Watch Highlights",
              href: "https://f1.com/highlights"
            },
            {
              text: "View Schedule",
              href: "#schedule"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Formula 1 represents the pinnacle of motorsport engineering, where cutting-edge technology meets human skill and determination. Every race is a testament to innovation, speed, and the relentless pursuit of perfection."
          features={[
            {
              icon: Zap,
              title: "Lightning Speed",
              description: "Cars reach speeds of over 350 km/h with precision engineering that pushes the boundaries of physics and aerodynamics."
            },
            {
              icon: Users,
              title: "Elite Teams",
              description: "Ten world-class constructors compete with hundreds of engineers and the best drivers on the planet."
            },
            {
              icon: Trophy,
              title: "Championship Glory",
              description: "Drivers and constructors battle for prestigious world championship titles in the most competitive motorsport series."
            },
            {
              icon: Globe,
              title: "Global Spectacle",
              description: "Racing across iconic circuits worldwide, from Monaco's streets to Silverstone's high-speed corners."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSix
          title="Racing Technology"
          description="Discover the cutting-edge innovations that make Formula 1 the pinnacle of motorsport"
          tag="Innovation"
          tagIcon={Settings}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Aerodynamics",
              description: "Advanced wind tunnel testing and computational fluid dynamics create the perfect balance between downforce and drag, allowing cars to corner at incredible speeds.",
              imageSrc: "https://pixabay.com/get/gc28fe9996e9fb76c722d6ca3bf4d1d750b71d0848e6efeee11195ab5ba973e7a1ca9e7ef40391d5f19c6b65c0f728c105299730e8befa5db39eb2a2b1dae9e42_1280.jpg",
              imageAlt: "F1 car aerodynamics"
            },
            {
              id: 2,
              title: "Power Units",
              description: "Hybrid turbo engines combining internal combustion with electric motors deliver over 1000 horsepower while maintaining exceptional fuel efficiency.",
              imageSrc: "https://pixabay.com/get/g4e12f78c0fc12b11b430bc1f356ba6c77a0c7eb091054e695b02b4c64c3d6b13c1c73f0a824aabce764bd1bd15d9447aeead226ced45535032deb2d24b40a40b_1280.jpg",
              imageAlt: "F1 power unit technology"
            },
            {
              id: 3,
              title: "Data Analytics",
              description: "Real-time telemetry and advanced data analysis help teams optimize performance, strategy, and driver feedback during every session.",
              imageSrc: "https://pixabay.com/get/gb3b31464e48cff120408b881439e8b9c202f22c59754f010c67d72f8a5fa9385fce752814116e04d3e78eee9d2aae76f1f677019747f2c0e84877a156964b07e_1280.jpg",
              imageAlt: "F1 data analytics dashboard"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="2024 F1 Cars"
          description="Explore the most advanced Formula 1 racing machines ever built"
          tag="Latest Models"
          tagIcon={Car}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "rb19",
              name: "Red Bull RB19",
              price: "Championship Winner",
              imageSrc: "https://pixabay.com/get/g4e12f78c0fc12b11b430bc1f356ba6c77a0c7eb091054e695b02b4c64c3d6b13c1c73f0a824aabce764bd1bd15d9447aeead226ced45535032deb2d24b40a40b_1280.jpg",
              imageAlt: "Red Bull RB19 Formula 1 car"
            },
            {
              id: "sf23",
              name: "Ferrari SF-23",
              price: "Italian Power",
              imageSrc: "https://pixabay.com/get/gb3b31464e48cff120408b881439e8b9c202f22c59754f010c67d72f8a5fa9385fce752814116e04d3e78eee9d2aae76f1f677019747f2c0e84877a156964b07e_1280.jpg",
              imageAlt: "Ferrari SF-23 Formula 1 car"
            },
            {
              id: "w14",
              name: "Mercedes W14",
              price: "Silver Arrow",
              imageSrc: "https://pixabay.com/get/g88f71bb859645e2dbc3c0c06fceed0a9cfd9f67962aad6e0565d780b264c1bba070cb289c280a44414b7d26d85835f08f37181f40c0e9f155638151c064dcb94_1280.jpg",
              imageAlt: "Mercedes W14 Formula 1 car"
            }
          ]}
        />
      </div>

      <div className="flex justify-center mt-8 mb-12">
        <nav className="flex gap-6">
          <Link href="/teams" className="text-foreground hover:text-accent transition-colors">View Teams →</Link>
          <Link href="/stats" className="text-foreground hover:text-accent transition-colors">Championship Stats →</Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition-colors">Get F1 Updates →</Link>
        </nav>
      </div>
    </ThemeProvider>
  );
}