import React from 'react';
import { MainWrapper, MainHeading, MainSubheading } from '../assets/styles/mainSection.styles';
import OrderButton from './orderButton';
import PurpleGuy from '../components/PurpleGuy';
import Laptop3D from './Laptop3D';
import { useLocale } from '../LocaleContext';

const MainSection: React.FC = () => {
  const { localeContent } = useLocale();

  return (
    <MainWrapper>
      <div className="purple-guy">
        <PurpleGuy />
      </div>
      <div className="content">
        <MainHeading>
          {localeContent?.hero.title || "We turn your ideas into unique websites"}
        </MainHeading>
        <MainSubheading>{localeContent?.hero.subtitle || "Quickly, efficiently, reliably"}</MainSubheading>
        <OrderButton text={localeContent?.hero.cta || "To order a site"} />
      </div>
      <div className="laptop-3d">
        <Laptop3D />
      </div>
    </MainWrapper>
  );
};

export default MainSection;