import React from 'react';
import {
  WhyChooseUsSection,
  SectionTitle,
  CardsContainer,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from '../assets/styles/whyChoseUs.styles';
import { useLocale } from '../LocaleContext';

const WhyChooseUs: React.FC = () => {
  const { localeContent } = useLocale();

  return (
    <WhyChooseUsSection>
      <SectionTitle>
        {localeContent?.whyChooseUs.title || "Why Choose Us? 🤔"}
      </SectionTitle>
      
      <CardsContainer>
        <FeatureItem>
          <FeatureIcon>
            <span role="img" aria-label="team">{localeContent?.whyChooseUs.features.skilledTeam.icon || "👨‍💻"}</span>
          </FeatureIcon>
          <FeatureTitle>{localeContent?.whyChooseUs.features.skilledTeam.title || "Skilled Team"}</FeatureTitle>
          <FeatureDescription>
            {localeContent?.whyChooseUs.features.skilledTeam.description || "Our developers have hands-on experience across 20+ industries. We provide tested, practical solutions tailored to your specific business goals — from startups to large enterprises."}
          </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            <span role="img" aria-label="individual approach">{localeContent?.whyChooseUs.features.tailoredSolutions.icon || "✍️"}</span>
          </FeatureIcon>
          <FeatureTitle>{localeContent?.whyChooseUs.features.tailoredSolutions.title || "Tailored Solutions"}</FeatureTitle>
          <FeatureDescription>
            {localeContent?.whyChooseUs.features.tailoredSolutions.description || "Every project starts with research and competitor analysis. We create a personalized strategy that fits your brand, audience, and market."}
          </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            <span role="img" aria-label="experience">{localeContent?.whyChooseUs.features.realWorldExperience.icon || "🎯"}</span>
          </FeatureIcon>
          <FeatureTitle>{localeContent?.whyChooseUs.features.realWorldExperience.title || "Real-World Experience"}</FeatureTitle>
          <FeatureDescription>
            {localeContent?.whyChooseUs.features.realWorldExperience.description || "With over 100 completed projects, we've delivered results in real estate, e-commerce, logistics, healthcare, and more. We build what works — not just what looks good."}
          </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            <span role="img" aria-label="growth">{localeContent?.whyChooseUs.features.alwaysEvolving.icon || "🚀"}</span>
          </FeatureIcon>
          <FeatureTitle>{localeContent?.whyChooseUs.features.alwaysEvolving.title || "Always Evolving"}</FeatureTitle>
          <FeatureDescription>
            {localeContent?.whyChooseUs.features.alwaysEvolving.description || "We stay ahead of trends by constantly learning and applying the latest technologies, ensuring your solution stays relevant in a fast-changing digital world."}
          </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            <span role="img" aria-label="visibility">{localeContent?.whyChooseUs.features.transparentProcess.icon || "🎨"}</span>
          </FeatureIcon>
          <FeatureTitle>{localeContent?.whyChooseUs.features.transparentProcess.title || "Transparent Process"}</FeatureTitle>
          <FeatureDescription>
            {localeContent?.whyChooseUs.features.transparentProcess.description || "With 2+ years in digital strategy, we deliver clear reports, open communication, and measurable results. You always know what you're getting — and why it works."}
          </FeatureDescription>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            <span role="img" aria-label="tech advantage">{localeContent?.whyChooseUs.features.smartTechnology.icon || "💪"}</span>
          </FeatureIcon>
          <FeatureTitle>{localeContent?.whyChooseUs.features.smartTechnology.title || "Smart Technology"}</FeatureTitle>
          <FeatureDescription>
            {localeContent?.whyChooseUs.features.smartTechnology.description || "We use modern tools and data-driven methods to supercharge your marketing, optimize performance, and help your business grow faster."}
          </FeatureDescription>
        </FeatureItem>
      </CardsContainer>
    </WhyChooseUsSection>
  );
};

export default WhyChooseUs;