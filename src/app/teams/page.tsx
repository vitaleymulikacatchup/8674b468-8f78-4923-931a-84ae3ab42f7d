"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import Link from "next/link";
import { Trophy, Heart, Shield } from "lucide-react";

export default function TeamsPage() {
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
            {name: "Teams", id: "teams"},
            {name: "Stats", id: "/stats"},
            {name: "Contact", id: "/contact"}
          ]}
          brandName="F1 Racing"
          button={{
            text: "Watch Live",
            href: "https://f1.com"
          }}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Championship Drivers"
          description="Meet the elite drivers competing at the highest level of motorsport"
          tag="F1 Grid"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Lewis Hamilton",
              role: "7x World Champion",
              imageSrc: "https://pixabay.com/get/g9ad314dd9018d6337adbd0d4c1345d8e6602f8d46c86bb2f122acff828aa331196c93b01d38b466329fe9292c664bffee0139e0c71fb51e3135afbea5274a216_1280.jpg",
              imageAlt: "Lewis Hamilton portrait"
            },
            {
              id: "2",
              name: "Max Verstappen",
              role: "3x World Champion",
              imageSrc: "https://pixabay.com/get/gce05cc344671587875b8408c75d84963ed5bdb682213201b241e99bdf961eaf0d15e437140f56b8684145a57efe510aa1d4470d5712547c02b1df99dff43a606_1280.jpg",
              imageAlt: "Max Verstappen portrait"
            },
            {
              id: "3",
              name: "Charles Leclerc",
              role: "Ferrari Driver",
              imageSrc: "https://pixabay.com/get/g7cafec020ed7a7b60805190fea7028484d7da04220c87f75cc829045bc16eb566fb1c232edc101c6916fcd52f24dacad0b089cb02adfead4eda905a7001726bb_1280.jpg",
              imageAlt: "Charles Leclerc portrait"
            },
            {
              id: "4",
              name: "George Russell",
              role: "Mercedes Driver",
              imageSrc: "https://pixabay.com/get/gcfd15719445ed31b3c2ec3ee526f2186ac70a490bf74ce4d35dc8c791d2055a9a0d96244942be22ec25afd06df7bb4ac9fdc678ced84b0173c0a2128c3efa1c3_1280.jpg",
              imageAlt: "George Russell portrait"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Fans Say"
          description="Hear from passionate Formula 1 enthusiasts around the world"
          tag="Fan Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Marcus Chen",
              role: "Motorsport Enthusiast",
              company: "Racing Fan Club",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g8233450806ddb7b70b082f789221e2e0f4e547945b3b7961fdfced072a0fc953cb0335617f8fe27cab36001844793841486f9ddce6fbd80a5543392ddaea202a_1280.jpg",
              imageAlt: "Marcus Chen portrait"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "F1 Blogger",
              company: "Speed Weekly",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g2724c1a18267b2f199f655d4485cbe96d3e995271e6da0c762a44cc3f60a3576d9dce4b331f95ee03c83589a8b44c52a5977d98f818087fcad51feb1ac3959d0_1280.jpg",
              imageAlt: "Sarah Thompson portrait"
            },
            {
              id: "3",
              name: "Alessandro Rossi",
              role: "Circuit Marshal",
              company: "Monza Track",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ga0f92ca8466ba0d407d1f599f43b57398433b13fb2f2542af969d7ac6c20c914e7143c076f4e3cc2551cbbfd2e686bc28c1953b31e03fd8836868c004506d260_1280.jpg",
              imageAlt: "Alessandro Rossi portrait"
            },
            {
              id: "4",
              name: "Emma Wilson",
              role: "Racing Journalist",
              company: "GP Today",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g3ac517266525c2df3b78bd4054ee05c97c394a96b745443ba99e37986555d040346b78a5f19657814c65e0af43830ca009b32857163f9b3dd3ef1b2f2a7a8ccb_1280.jpg",
              imageAlt: "Emma Wilson portrait"
            },
            {
              id: "5",
              name: "Carlos Rodriguez",
              role: "Team Engineer",
              company: "McLaren F1",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g49bb5dd458019c178e4c21336421d3843091264c638f8a05e5520b8c315f9afa1bf49812536ba5c24887723b92f54c4cefd34cf546645dc5ff4124e799928a0e_1280.jpg",
              imageAlt: "Carlos Rodriguez portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Official F1 Teams"
          description="The world's most prestigious racing constructors compete in Formula 1"
          tag="Constructors"
          tagIcon={Shield}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g4334b9e9b76082322fe8cca8726c6efc7b83c90ecf1fdcc3249b233c7a8662b8e95941eb2df2988d4c09df269949ae10de4892381d8811dae65466e754fc5695_1280.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/tmp/ferrari-formula-1-racing-team-logo-1763991870879-f27ed7f7.jpg",
            "https://pixabay.com/get/g193a4aa3486e5594550b666fdde545e161a8af39109b9c86632bad871a5202fa62eb3f7ec89f558c5e3f2118445262595e60aa3f5b6e0b7b51d187add39c5ab9_1280.jpg",
            "https://pixabay.com/get/g206ac8a442849fec70ec2b1469881efa2442d9d770983ef4f6dc5189809a660ee01dd5cdf1ea500a750f1a3a5530849c7db524ddf5956f091f9e857c85a4f813_1280.jpg",
            "https://pixabay.com/get/g25e6220372fbaa053310b8862feaaf4051f813d0c74ae0b3eb304c9b24129ec0d943547b80e315d146f0d117e43c39daa4075334e7db47d8aecc8609d551eaf7_1280.jpg",
            "https://pixabay.com/get/gd0d7282478f691fb0651f410da9e07d574131aa553f80b418161006174e1a12fd7615e618239bddf464ceba9c6030b9d38dcf0b820909d2d623084813f8aa37b_1280.jpg",
            "https://pixabay.com/get/gf50b71caeb7e69e26712e34889e2d4deced4598078a517fc6441b17b0e98d2f4f1a4cf9a94e7c19ac308aba59adca4bb3c2b9fa10e875f2120469d4b85897d31_1280.jpg"
          ]}
          speed={30}
          showCard={true}
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