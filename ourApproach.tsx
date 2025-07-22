import React, { useState } from "react";
import { useLocale } from "../LocaleContext";
import {
  ApproachSection,
  ApproachTitle,
  ApproachSubtitle,
  ApproachSteps,
  ApproachStep,
  StepIcon,
  StepTitle,
  StepDescription,
  StepArrow
} from "../assets/styles/ourApproach.styles";

const OurApproach: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const { localeContent } = useLocale();

  if (!localeContent?.ourApproach) {
    return <div>Loading...</div>;
  }

  const { title, subtitle, steps } = localeContent.ourApproach;

  // Преобразуем объект steps в массив для отображения
  const stepsArray = [
    steps.websiteCreation,
    steps.seoOptimization,
    steps.promotionSetup,
    steps.salesGrowth,
    steps.technicalSupport,
    steps.analyticsReporting,
  ];

  return (
    <ApproachSection>
      <ApproachTitle dangerouslySetInnerHTML={{ __html: title || "Our Effective <b>Approach</b>" }} />
      <ApproachSubtitle>
        {subtitle || "Steps that help you create a project without unnecessary stress"}
      </ApproachSubtitle>
      <ApproachSteps>
        {stepsArray.map((step, idx) => {
          const isActive = activeIdx === idx;
          return (
            <ApproachStep
              key={idx}
              $active={isActive}
              onClick={() => setActiveIdx(isActive ? null : idx)}
            >
              <StepIcon $active={isActive}>{step.icon}</StepIcon>
              <StepTitle dangerouslySetInnerHTML={{ __html: step.title || "" }} />
              <StepDescription $active={isActive}>
                {step.description}
              </StepDescription>
              <StepArrow $active={isActive}>&#8250;</StepArrow>
            </ApproachStep>
          );
        })}
      </ApproachSteps>
    </ApproachSection>
  );
};

export default OurApproach;
