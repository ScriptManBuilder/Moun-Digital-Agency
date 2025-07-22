import styled from 'styled-components';

// Контейнер для десктопной версии стрелки (направлена вправо)
export const DesktopArrowContainer = styled.div`
  display: block;
  margin: 0 5px 0 15px; /* Уменьшаем отступ слева для общего сдвига влево */
  transition: all 0.3s ease; /* Плавные переходы */
  
  /* Скрываем на мобильных устройствах и планшетах */
  @media (max-width: 991px) {
    display: none;
  }
  
  /* Дополнительные настройки для разных размеров десктопа */
  @media (min-width: 1200px) {
    margin: 0 5px 0 20px; /* Небольшое увеличение отступа на больших экранах */
  }
`;

// Контейнер для мобильной версии стрелки (повернута вниз)
export const MobileArrowContainer = styled.div`
  display: none;
  transform: rotate(90deg); /* Поворот стрелки вниз */
  margin: 15px auto 0; /* Центрирование и отступ сверху */
  text-align: center; /* Центрируем содержимое */
  transition: all 0.3s ease; /* Плавные переходы */
  max-width: 150px; /* Ограничение ширины для лучшего контроля */
  
  /* Показываем на мобильных устройствах и планшетах */
  @media (max-width: 991px) {
    display: block;
  }
  
  /* Корректировки для разных размеров экранов */
  @media (max-width: 480px) {
    transform: rotate(272deg); /* Стандартный поворот вниз */
    margin-top: 12px;
  }
  
  @media (min-width: 481px) and (max-width: 767px) {
    transform: rotate(272deg); /* Стандартный поворот вниз */
    margin-top: 15px;
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    transform: rotate(272deg); /* Стандартный поворот вниз */
    margin-top: 18px;
  }
`;

// Общий контейнер для стрелки
export const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* Занимаем всю доступную ширину */
  text-align: center; /* Центрируем содержимое */
  
  @media (min-width: 992px) {
    justify-content: center; /* Центрируем стрелку внутри контейнера */
    padding-right: 0; /* Убираем отступ */
    flex: 0.8; /* Уменьшаем относительный размер контейнера для стрелки */
  }
`;

// Контейнер для кнопки
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* Занимаем всю доступную ширину */
  text-align: center; /* Центрируем содержимое */
  
  @media (min-width: 992px) {
    justify-content: flex-start; /* На десктопе прижимаем кнопку влево внутри своей зоны */
    padding-left: 0; /* Убираем отступ */
    flex: 1.2; /* Увеличиваем относительный размер контейнера для кнопки */
  }
`;

// Адаптивный контейнер для кнопки и стрелки
export const ResponsiveButtonArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0 30px;
  position: relative;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  transform: translateX(-10%); /* Значительно сдвигаем весь контейнер влево */
  
  /* На мобильных: вертикальное расположение (колонка) */
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0; /* Убираем отступ, он будет в MobileArrowContainer */
    transform: translateX(0); /* На мобильных центрируем */
    max-width: 100%; /* Используем полную ширину на мобильных */
    margin-left: auto;
    margin-right: auto;
  }
  
  /* На десктопах: горизонтальное расположение (строка) */
  @media (min-width: 992px) {
    flex-direction: row;
    gap: 0; /* Убираем отступ между элементами */
    width: 80%; /* Значительно уменьшаем ширину для лучшего контроля */
  }
  
  /* Более точная настройка для разных размеров экрана */
  @media (min-width: 992px) and (max-width: 1199px) {
    transform: translateX(-12%); /* Значительно сдвигаем на средних десктопах */
    width: 88%; /* Сужаем для лучшего контроля */
  }
  
  @media (min-width: 1200px) and (max-width: 1399px) {
    transform: translateX(-15%); /* Еще сильнее сдвигаем на больших десктопах */
    width: 85%; /* Сужаем для лучшего контроля */
  }
  
  @media (min-width: 1400px) {
    transform: translateX(-18%); /* Максимальный сдвиг на очень больших десктопах */
    width: 80%; /* Еще больше контроль над шириной */
  }
`;
