import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocale } from '../LocaleContext';
import { 
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalForm,
  FormGroup,  
  FormInput,
  FormTextarea,
  FormSelect,
  SubmitButton,
  TelegramButton,
  OrText,
  PhoneInputWrapper,
  CountryCodeSelect,
  CountryDropdown,
  CountryList,
  CountryItem,
  CountrySearchInput,
  ServicesContainer,
  ServicesTitle,
  ServicesToggle,
  ServicesToggleTitle,
  ServicesToggleIcon,
  ServicesDropdown,
  ServiceItem,
  ServiceLabel,
  ServiceIcon,
  ServicePrice,
  SubmitMessage
} from '../assets/styles/contactModal.styles';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Country {
  name: string;
  code: string;
  flag: string;
}

const countries: Country[] = [
  { code: '+380', flag: '🇺🇦', name: 'Ukraine' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: '+46', flag: '🇸🇪', name: 'Sweden' },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+43', flag: '🇦🇹', name: 'Austria' },
  { code: '+45', flag: '🇩🇰', name: 'Denmark' },
  { code: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: '+47', flag: '🇳🇴', name: 'Norway' },
  { code: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: '+30', flag: '🇬🇷', name: 'Greece' },
  { code: '+353', flag: '🇮🇪', name: 'Ireland' },
  { code: '+420', flag: '🇨🇿', name: 'Czech Republic' },
  { code: '+36', flag: '🇭🇺', name: 'Hungary' },
  { code: '+421', flag: '🇸🇰', name: 'Slovakia' },
  { code: '+386', flag: '🇸🇮', name: 'Slovenia' },
  { code: '+385', flag: '🇭🇷', name: 'Croatia' },
  { code: '+40', flag: '🇷🇴', name: 'Romania' },
  { code: '+359', flag: '🇧🇬', name: 'Bulgaria' },
  { code: '+370', flag: '🇱🇹', name: 'Lithuania' },
  { code: '+371', flag: '🇱🇻', name: 'Latvia' },
  { code: '+372', flag: '🇪🇪', name: 'Estonia' },
];


const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { localeContent } = useLocale();
  
  // Локализованный массив услуг
  const services = [
    { id: 'seo', name: localeContent?.contactModal?.services?.seoOptimization || 'SEO optimization' },
    { id: 'design', name: localeContent?.contactModal?.services?.webDesign || 'Web design' },
    { id: 'development', name: localeContent?.contactModal?.services?.websiteDevelopment || 'Website development' },
    { id: 'marketing', name: localeContent?.contactModal?.services?.digitalMarketing || 'Digital Marketing'},
    { id: 'consulting', name: localeContent?.contactModal?.services?.consultations || 'Consultations' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    service: ''
  });
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [phoneError, setPhoneError] = useState(false);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch)
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Закрытие дропдауна при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isCountryDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('.country-selector-wrapper')) {
          setIsCountryDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Для поля телефона разрешаем только цифры
    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
    setCountrySearch('');
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      
      // Получаем названия выбранных сервисов
      const selectedServiceNames = selectedServices.map(serviceId => {
        const service = services.find(s => s.id === serviceId);
        return service ? service.name : serviceId;
      });

      const submitData = {
        name: formData.name,
        phone: selectedCountry.code + formData.phone,
        comment: formData.comment,
        selectedServices: selectedServiceNames
      };

      const response = await fetch(`${apiUrl}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage({ 
          type: 'success', 
          text: result.message || localeContent?.contactModal?.messages?.successSent || 'Your application has been successfully sent!' 
        });
        
        // Очищаем форму при успешной отправке
        setFormData({
          name: '',
          phone: '',
          comment: '',
          service: ''
        });
        setSelectedServices([]);
        
        // Закрываем модальное окно через 2 секунды
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: result.message || localeContent?.contactModal?.messages?.errorOccurred || 'An error occurred while sending the application' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({ 
        type: 'error', 
        text: localeContent?.contactModal?.messages?.serverError || 'Error connecting to the server. Try later' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTelegramContact = () => {
    // Логика для связи через Telegram
    window.open('https://t.me/moun_digital', '_blank');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Рендерим модальное окно через Portal в корень документа
  // Это гарантирует, что модальное окно не будет конфликтовать со стилями хедера
  return createPortal(
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>
            <span className="main-text">{localeContent?.contactModal?.title?.mainText || "Leave your details"}</span>
            <span className="sub-text">{localeContent?.contactModal?.title?.subText || "and our manager will contact you soon"}</span>
          </ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <ModalForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              type="text"
              name="name"
              placeholder={localeContent?.contactModal?.form?.namePlaceholder || "Your name"}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <PhoneInputWrapper className={`country-selector-wrapper ${phoneError ? 'error' : ''}`}>
              <CountryCodeSelect 
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className={isCountryDropdownOpen ? 'open' : ''}
              >
                <span>{selectedCountry.flag}</span>
                <span>{selectedCountry.code}</span>
              </CountryCodeSelect>
              
              {isCountryDropdownOpen && (
                <CountryDropdown>
                  <CountrySearchInput
                    type="text"
                    placeholder={localeContent?.contactModal?.form?.countrySearchPlaceholder || "Country search..."}
                    value={countrySearch}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountrySearch(e.target.value)}
                  />
                  <CountryList>
                    {filteredCountries.map((country, index) => (
                      <CountryItem
                        key={index}
                        onClick={() => handleCountrySelect(country)}
                        className={selectedCountry.code === country.code ? 'selected' : ''}
                      >
                        <div className="country-flag">{country.flag}</div>
                        <div className="country-name">{country.name}</div>
                        <div className="country-code">{country.code}</div>
                      </CountryItem>
                    ))}
                  </CountryList>
                </CountryDropdown>
              )}
              
              <FormInput
                type="tel"
                name="phone"
                placeholder={localeContent?.contactModal?.form?.phonePlaceholder || "Phone number"}
                value={formData.phone}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  // Разрешаем: цифры (0-9), Backspace, Delete, Tab, Enter, стрелки
                  const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
                  const isNumber = /^[0-9]$/.test(e.key);
                  
                  if (!isNumber && !allowedKeys.includes(e.key)) {
                    e.preventDefault();
                    setPhoneError(true);
                    setTimeout(() => setPhoneError(false), 2000);
                  }
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  const pastedText = e.clipboardData.getData('text');
                  const numbersOnly = pastedText.replace(/\D/g, '');
                  
                  // Если в скопированном тексте были нецифровые символы, показываем ошибку
                  if (pastedText.length > numbersOnly.length) {
                    setPhoneError(true);
                    setTimeout(() => setPhoneError(false), 2000);
                  }
                  
                  // Если есть цифры в скопированном тексте, вставляем только их
                  if (numbersOnly) {
                    setFormData(prev => ({
                      ...prev,
                      phone: prev.phone + numbersOnly
                    }));
                  }
                }}
                required
              />
            </PhoneInputWrapper>
            {phoneError && (
              <div style={{ 
                color: '#ff6b6b', 
                fontSize: '14px', 
                marginTop: '8px', 
                fontWeight: '500',
                opacity: phoneError ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}>
                {localeContent?.contactModal?.form?.phoneOnlyNumbers || "⚠️ Only numbers are allowed in phone field"}
              </div>
            )}
          </FormGroup>

          <FormGroup>
            <FormTextarea
              name="comment"
              placeholder={localeContent?.contactModal?.form?.commentPlaceholder || "Your comment"}
              value={formData.comment}
              onChange={handleInputChange}
              rows={3}
            />
          </FormGroup>

          <FormGroup>
            <ServicesContainer>
              <ServicesToggle 
                isOpen={isServicesOpen}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <ServicesToggleTitle>{localeContent?.contactModal?.form?.additionalServices || "Additional services"}</ServicesToggleTitle>
                <ServicesToggleIcon isOpen={isServicesOpen} />
              </ServicesToggle>
              
              <ServicesDropdown isOpen={isServicesOpen}>
                {services.map((service) => (
                  <ServiceItem
                    key={service.id}
                    selected={selectedServices.includes(service.id)}
                    onClick={() => toggleService(service.id)}
                  >
                    <ServiceIcon selected={selectedServices.includes(service.id)} />
                    <ServiceLabel>{service.name}</ServiceLabel>
                    {/* <ServicePrice selected={selectedServices.includes(service.id)}>
                      {service.price}
                    </ServicePrice> */}
                  </ServiceItem>
                ))}
              </ServicesDropdown>
            </ServicesContainer>
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 
              (localeContent?.contactModal?.form?.sending || 'Sending...') : 
              (localeContent?.contactModal?.form?.send || 'Send')
            }
          </SubmitButton>

          {submitMessage && (
            <SubmitMessage type={submitMessage.type}>
              {submitMessage.text}
            </SubmitMessage>
          )}

          <OrText>{localeContent?.contactModal?.telegram?.orChooseMessenger || "Or choose a messenger to communicate:"}</OrText>

          <TelegramButton type="button" onClick={handleTelegramContact}>
            {localeContent?.contactModal?.telegram?.telegramButton || "📱 Telegram"}
          </TelegramButton>
        </ModalForm>
      </ModalContainer>
    </ModalOverlay>,
    document.body // Рендерим в корень документа
  );
};

export default ContactModal;
