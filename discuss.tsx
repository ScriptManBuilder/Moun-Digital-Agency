import React, { useState, useEffect, useRef } from 'react';
import { useLocale } from '../LocaleContext';
import {
  DiscussContainer,
  DiscussContent,
  DiscussTextContainer,
  DiscussTitle,
  DiscussSubtitle,
  TextWrapper,
  DiscussForm,
  FormGroup,
  FormInput,
  FormTextarea,
  PhoneInputWrapper,
  CountryCodeSelect,
  CountryDropdown,
  CountrySearchInput,
  CountryList,
  CountryItem,
  ScrollArrow,
  RobotImage,
  FormSubmit,
  FormSelect,
  SelectedTags,
  SelectedTag,
  ServicesDropdown,
  ServicesButton,
  ServicesDropdownList,
  ServiceOption,
  AlertContainer,
  AlertTextContainer
} from '../assets/styles/discuss.styles';

const Discuss: React.FC = () => {  
  const { localeContent } = useLocale();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    services: [] as string[]
  });
  const [phoneError, setPhoneError] = useState('');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  // Состояние для кастомного алерта
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
    // Список стран с кодами и флагами
  const countries = [
    { code: '+38', flag: '🇺🇦', name: 'Ukraine' },
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
  
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Валидация для телефона - только числа
    if (name === 'phone') {
      // Проверка, что введены только цифры
      if (value && !/^\d*$/.test(value)) {
        setPhoneError(localeContent?.discuss?.form?.phoneError || 'Please enter only numbers');
        return;
      } else {
        setPhoneError('');
      }
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };  
  
  // Функция для показа кастомного алерта
  const showCustomAlert = (message: string, success: boolean = true) => {
    setAlertMessage(message);
    setIsSuccess(success);
    setShowAlert(true);
    
    // Автоматически скрыть алерт через 5 секунд
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверяем, что нет ошибок в телефонном номере
    if (phoneError) {
      showCustomAlert(localeContent?.discuss?.form?.formError || 'Please fix the errors in the form before submitting.', false);
      return;
    }
    
    // Проверка, что телефон содержит только цифры
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      setPhoneError(localeContent?.discuss?.form?.phoneError || 'Please enter only numbers');
      showCustomAlert(localeContent?.discuss?.form?.phoneOnlyNumbers || 'Please enter only numbers in phone field.', false);
      return;
    }
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      
      // Получаем названия выбранных сервисов
      const selectedServiceNames = formData.services.map(serviceId => getServiceLabel(serviceId));

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
        // Сбросить форму после отправки
        setFormData({
          name: '',
          phone: '',
          comment: '',
          services: []
        });
        setPhoneError('');
        
        // Показать успешное уведомление
        showCustomAlert(result.message || localeContent?.discuss?.alerts?.success || 'Your message has been sent successfully!', true);
      } else {
        showCustomAlert(result.message || localeContent?.discuss?.alerts?.error || 'An error occurred while sending the message.', false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showCustomAlert(localeContent?.discuss?.alerts?.error || 'Connection error. Please try again later.', false);
    }
  };

  // Закрытие выпадающего списка при клике вне компонента
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const [countrySearchTerm, setCountrySearchTerm] = useState('');
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCountryDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Фильтрация стран по поисковому запросу
  const filteredCountries = countrySearchTerm
    ? countries.filter(country => 
        country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) || 
        country.code.includes(countrySearchTerm))
    : countries;

  const handleCountrySelect = (country: {code: string, flag: string, name: string}) => {
    setSelectedCountry(country);
    setCountryDropdownOpen(false);
  };

  // Ссылка на список стран для прокрутки
  const countryListRef = useRef<HTMLUListElement>(null);
  
  // Функция для прокрутки списка
  const handleScroll = (direction: 'up' | 'down') => {
    if (!countryListRef.current) return;
    
    const scrollAmount = 100;
    const currentScroll = countryListRef.current.scrollTop;
    
    if (direction === 'up') {
      countryListRef.current.scrollTo({
        top: currentScroll - scrollAmount,
        behavior: 'smooth'
      });
    } else {
      countryListRef.current.scrollTo({
        top: currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Функция для удаления выбранного сервиса
  const removeService = (serviceToRemove: string) => {
    setFormData({
      ...formData,
      services: formData.services.filter(service => service !== serviceToRemove)
    });
  };

  // Функция для получения читаемого названия сервиса
  const getServiceLabel = (value: string) => {
    if (!localeContent?.discuss?.services) {
      // Fallback если локализация не загружена
      const serviceLabels: { [key: string]: string } = {
        'design': 'Web design',
        'development': 'Development',
        'seo': 'SEO Optimization',
        'marketing': 'Digital Marketing',
        'support': 'Technical Support'
      };
      return serviceLabels[value] || value;
    }

    const serviceLabels: { [key: string]: string } = {
      'design': localeContent.discuss.services.webDesign,
      'development': localeContent.discuss.services.development,
      'seo': localeContent.discuss.services.seoOptimization,
      'marketing': localeContent.discuss.services.digitalMarketing,
      'support': localeContent.discuss.services.technicalSupport
    };
    return serviceLabels[value] || value;
  };

  // Функция для переключения выбора сервиса
  const toggleService = (serviceValue: string) => {
    const currentServices = formData.services;
    const isSelected = currentServices.includes(serviceValue);
    
    if (isSelected) {
      // Убираем сервис из списка
      setFormData({
        ...formData,
        services: currentServices.filter(service => service !== serviceValue)
      });
    } else {
      // Добавляем сервис в список
      setFormData({
        ...formData,
        services: [...currentServices, serviceValue]
      });
    }
  };

  return (
    <DiscussContainer>
      <DiscussContent>        <DiscussTextContainer>
          <RobotImage src={`${process.env.PUBLIC_URL}/images/28logo.jpg`} alt="AI Assistant" />
          <TextWrapper>
            <DiscussTitle>
              <span dangerouslySetInnerHTML={{ 
                __html: localeContent?.discuss?.title || "Let's <span>discuss</span> your project" 
              }} />
            </DiscussTitle>
            <DiscussSubtitle>
              {localeContent?.discuss?.subtitle || "Share your ideas with our experts and get a free consultation on your digital solution"}
            </DiscussSubtitle>
          </TextWrapper>
        </DiscussTextContainer>
        <DiscussForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              type="text"
              name="name"
              placeholder={localeContent?.discuss?.form?.namePlaceholder || "Your name"}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>          <FormGroup>
            <PhoneInputWrapper>
              <div style={{ position: 'relative' }}>
                <CountryCodeSelect 
                  className={countryDropdownOpen ? 'open' : ''}
                  onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                >
                  <span>{selectedCountry.flag}</span>
                  <span>{selectedCountry.code}</span>
                </CountryCodeSelect>
                {countryDropdownOpen && (
                  <CountryDropdown ref={dropdownRef}>
                    <CountrySearchInput
                      type="text"
                      placeholder={localeContent?.discuss?.form?.countrySearchPlaceholder || "Search Country Name"}
                      value={countrySearchTerm}
                      onChange={(e) => setCountrySearchTerm(e.target.value)}
                      autoFocus
                    />                    <div style={{ position: 'relative' }}>
                      <ScrollArrow className="up" onClick={() => handleScroll('up')}>
                        &#9650;
                      </ScrollArrow>
                      <CountryList ref={countryListRef}>
                        {filteredCountries.map((country) => (
                          <CountryItem 
                            key={country.code} 
                            className={country.code === selectedCountry.code ? 'selected' : ''}
                            onClick={() => handleCountrySelect(country)}
                          >
                            <span className="country-flag">{country.flag}</span>
                            <span className="country-name">{country.name}</span>
                            <span className="country-code">{country.code}</span>
                          </CountryItem>
                        ))}
                      </CountryList>
                      <ScrollArrow className="down" onClick={() => handleScroll('down')}>
                        &#9660;
                      </ScrollArrow>
                    </div>
                  </CountryDropdown>
                )}
              </div>
              <FormInput
                type="tel"
                name="phone"
                placeholder={localeContent?.discuss?.form?.phonePlaceholder || "Phone number"}
                value={formData.phone}
                onChange={handleChange}
                style={{ border: 'none', flex: 1 }}
                pattern="[0-9]*" 
                inputMode="numeric"
                aria-invalid={phoneError ? "true" : "false"}
                required
              />
              {phoneError && <div style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '5px' }}>{phoneError}</div>}
            </PhoneInputWrapper>
          </FormGroup>
          <FormGroup>
            <FormTextarea
              name="comment"
              placeholder={localeContent?.discuss?.form?.commentPlaceholder || "Your comment"}
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className={formData.services.length > 0 ? 'has-tags' : ''}>
            <ServicesDropdown ref={servicesDropdownRef}>
              <ServicesButton 
                className={servicesDropdownOpen ? 'open' : ''}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>
                  {formData.services.length === 0 ? (
                    <span className="placeholder">{localeContent?.discuss?.form?.additionalServices || "Additional services"}</span>
                  ) : (
                    <span className="selected-count">
                      {formData.services.length} {localeContent?.discuss?.form?.servicesSelected || "service"}{formData.services.length > 1 ? 's' : ''} selected
                    </span>
                  )}
                </span>
              </ServicesButton>
              
              {servicesDropdownOpen && (
                <ServicesDropdownList>
                  <ServiceOption 
                    selected={formData.services.includes('design')}
                    onClick={() => toggleService('design')}
                  >
                    <span>{localeContent?.discuss?.services?.webDesign || "Web design"}</span>
                    <span className="checkmark">✓</span>
                  </ServiceOption>
                  <ServiceOption 
                    selected={formData.services.includes('development')}
                    onClick={() => toggleService('development')}
                  >
                    <span>{localeContent?.discuss?.services?.development || "Development"}</span>
                    <span className="checkmark">✓</span>
                  </ServiceOption>
                  <ServiceOption 
                    selected={formData.services.includes('seo')}
                    onClick={() => toggleService('seo')}
                  >
                    <span>{localeContent?.discuss?.services?.seoOptimization || "SEO Optimization"}</span>
                    <span className="checkmark">✓</span>
                  </ServiceOption>
                  <ServiceOption 
                    selected={formData.services.includes('marketing')}
                    onClick={() => toggleService('marketing')}
                  >
                    <span>{localeContent?.discuss?.services?.digitalMarketing || "Digital Marketing"}</span>
                    <span className="checkmark">✓</span>
                  </ServiceOption>
                  <ServiceOption 
                    selected={formData.services.includes('support')}
                    onClick={() => toggleService('support')}
                  >
                    <span>{localeContent?.discuss?.services?.technicalSupport || "Technical Support"}</span>
                    <span className="checkmark">✓</span>
                  </ServiceOption>
                </ServicesDropdownList>
              )}
            </ServicesDropdown>
            
            {formData.services.length > 0 && (
              <SelectedTags>
                {formData.services.map((service) => (
                  <SelectedTag key={service}>
                    {getServiceLabel(service)}
                    <span className="remove" onClick={() => removeService(service)}>
                      ×
                    </span>
                  </SelectedTag>
                ))}
              </SelectedTags>
            )}
          </FormGroup>
          <FormSubmit 
            type="submit"
            onClick={(e) => {
              // Создаем эффект волны при клике на кнопку
              const button = e.currentTarget;
              const ripple = document.createElement("span");
              const rect = button.getBoundingClientRect();
              
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              ripple.className = "ripple";
              ripple.style.width = ripple.style.height = "100px";
              ripple.style.left = x + "px";
              ripple.style.top = y + "px";
              
              button.appendChild(ripple);
              
              // Удаляем элемент после завершения анимации
              setTimeout(() => {
                ripple.remove();
              }, 800);
            }}
          >
            {localeContent?.discuss?.form?.submitButton || "Send"}
          </FormSubmit>
        </DiscussForm>
      </DiscussContent>
      
      {/* Кастомный алерт */}
      {showAlert && (
        <AlertContainer isSuccess={isSuccess}>
          <AlertTextContainer>
            {alertMessage}
          </AlertTextContainer>
        </AlertContainer>
      )}
    </DiscussContainer>
  );
};

export default Discuss;