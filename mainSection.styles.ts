import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  padding: 20px;
  background: #f7f7f7;
  color: #333;
  text-align: center;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
  position: relative;
  left: 0;
  right: 0;
    @media (min-width: 1024px) {
    padding: 40px 0;
    place-items: center;
    width: 100vw;
    left: 0;
    right: 0;
    margin: 0;
  }

  .purple-guy {
    margin-bottom: 20px;
    width: 120px;
    height: auto;
  }
  .content {
    text-align: center;
    margin: 0 auto;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;

    h1 {
      font-family: 'Arial', sans-serif;
      font-size: 2rem;
      font-weight: normal; /* Обычный текст */
      color: #000;

      span {
        font-weight: bold; /* Жирный текст для unique websites */
      }
    }

    p {
      font-family: 'Arial', sans-serif;
      font-size: 1.2rem;
      font-weight: normal;
      color: #555;
    }
  }

  .laptop-3d {
    margin-top: 20px;
    width: 120px;
    height: auto;

    @media (max-width: 768px) {
      visibility: hidden; /* Скрываем на мобильных устройствах */
      height: 0;
      width: 0;
    }
  }  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr 1fr;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 0;

    .purple-guy {
      grid-column: 1;
      margin-bottom: 0;
      width: 150px;
      justify-self: end;
      padding-right: 30px;
    }

    .content {
      grid-column: 2;
      max-width: 90%;
      margin: 0 auto;
      justify-self: center;
      text-align: center;
    }

    .laptop-3d {
      grid-column: 3;
      margin-top: 0;
      width: 150px;
      justify-self: start;
      padding-left: 30px;
    }
  }  /* Responsive padding */
  @media (min-width: 1440px) {
    padding: 60px 0;
    width: 100vw;
    margin: 0;
    
    .purple-guy {
      width: 180px;
      padding-right: 50px;
    }
    
    .content {
      max-width: 800px;
    }
    
    .laptop-3d {
      width: 180px;
      padding-left: 50px;
    }
  }
    @media (min-width: 1920px) {
    padding: 80px 0;
    width: 100vw;
    
    .purple-guy {
      width: 220px;
      padding-right: 70px;
    }
    
    .content {
      max-width: 900px;
    }
    
    .laptop-3d {
      width: 220px;
      padding-left: 70px;
    }
  }

  @media (max-width: 1024px) {
    padding: 40px 60px;
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
    grid-template-columns: 1fr; /* На маленьких экранах элементы будут в одну колонку */
    .purple-guy {
      grid-column: 1; /* Оставляем в левой части */
      justify-self: center; /* Центрируем для маленьких экранов */
      margin-right: 0; /* Убираем отступ */
      width: 150px; /* Уменьшаем размер */
      margin: 0 auto 20px auto;
    }    .content {
      grid-column: 1; /* Центрируем текстовый блок */
      text-align: center;
      margin: 0 auto;
      padding: 0;
      width: 100%;
      max-width: 90%;
      box-sizing: border-box;

      h1 {
        font-size: 1.5rem; /* Уменьшенный размер для мобильных */
        width: 100%;
        margin: 0 auto;
        padding: 0 10px;
        box-sizing: border-box;
      }

      p {
        font-size: 1rem; /* Уменьшенный размер для мобильных */
        width: 100%;
        margin: 10px auto;
        padding: 0 10px;
        box-sizing: border-box;
      }
    }

    .laptop-3d {
      justify-self: center;
      margin-left: 0;
    }
  }  @media (max-width: 430px) {
    padding: 20px 0;
    width: 100vw;
    overflow: hidden;
    
    .content {
      margin: 0 auto;
      padding: 0 15px;
      max-width: 100%; /* Используем полную ширину контейнера */
      text-align: center; /* Убедимся, что текст строго по центру */
      width: 100%;
      
      h1, p {
        padding: 0;
        width: 100%;
      }
    }

    .purple-guy {
      margin: 0 auto 15px auto; /* Центрируем горизонтально и добавляем отступ снизу */
      width: 120px;
    }
  }  @media (max-width: 425px) {
    padding: 20px 0;
    width: 100vw;
    overflow: hidden;
    
    .purple-guy {
      width: 110px; /* Ещё меньше для очень маленьких экранов */
    }

    .content {
      max-width: 100%; /* Используем полную ширину */
      padding: 0 15px;
      width: 100%;
    }
  }
  @media (max-width: 390px) {
    /* iPhone 12/13/14 Pro */
    padding: 20px 0;
    width: 100vw;
    overflow: hidden;
    
    .content {
      width: 100%;
      padding: 0 10px;
      margin: 0 auto;
      
      h1 {
        width: 100%;
        font-size: 1.4rem;
        box-sizing: border-box;
        padding: 0;
      }
      
      p {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
      }
    }
  }
  @media (max-width: 375px) {
    /* iPhone SE и другие маленькие iPhone */
    padding: 15px 0;
    width: 100vw;
    overflow: hidden;
    
    .purple-guy {
      width: 100px;
    }
    
    .content {
      padding: 0 10px;
      
      h1 {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 320px) {
    padding: 10px 0;
    width: 100vw;
    overflow: hidden;
    
    .purple-guy {
      width: 90px;
    }
    
    .content {
      padding: 0 5px;
      
      h1 {
        font-size: 1.2rem;
      }
    }
  }
  
  /* Специфические стили для iPhone 14 Pro Max */
  @media only screen and (device-width: 430px) and (device-height: 932px),
         only screen and (width: 430px) and (height: 932px),
         only screen and (width: 428px) and (height: 926px) {
    .content {
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
      
      h1, p {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        text-align: center;
      }
    }
  }

  .main-section {
    display: grid;
    grid-template-columns: 1.5fr 2fr 1fr;
    gap: 20px;
    align-items: center;
    padding: 20px;
  }

  .purple-guy {
    grid-column: 1;
  }

  .text-block {
    grid-column: 2;
    text-align: center;
  }

  .laptop-3d {
    grid-column: 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 768px) {
    .main-section {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
    }

    .purple-guy,
    .text-block,
    .laptop-3d {
      grid-column: 1;
      margin-bottom: 20px;
    }

    .text-block {
      text-align: center;
    }
  }
`;

export const MainHeading = styled.h1`
  font-size: 2.8rem; /* Увеличиваем размер заголовка */
  font-weight: 700; /* Делаем заголовок более выразительным */
  line-height: 1.4; /* Увеличиваем межстрочный интервал */
  color: #000; /* Чёрный цвет текста */
  text-align: center; /* Центрируем текст */
  margin-bottom: 15px; /* Добавляем отступ снизу */
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 1024px) {
    font-size: 3rem;
    margin: 0 auto 20px;
  }
  
  @media (min-width: 1440px) {
    font-size: 3.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem; /* Уменьшаем размер для планшетов */
    line-height: 1.4;
    padding: 0 10px;
  }

  @media (max-width: 430px) {
    font-size: 2rem; /* Ещё меньше для телефонов */
    line-height: 1.3;
    padding: 0 5px;
  }
  
  @media (max-width: 375px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }
  
  /* iPhone 14 Pro Max и другие большие iPhone */
  @media only screen and (device-width: 430px) and (device-height: 932px),
         only screen and (width: 430px) and (height: 932px),
         only screen and (width: 428px) and (height: 926px) {
    width: 100%;
    font-size: 2rem;
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }
`;

export const MainSubheading = styled.p`
  font-size: 1.4rem; /* Уменьшаем размер подзаголовка для баланса */
  font-weight: 400; /* Обычный текст */
  line-height: 1.4; /* Межстрочный интервал для читаемости */
  color: #555; /* Серый цвет текста */
  text-align: center; /* Центрируем текст */
  margin-top: 10px; /* Уменьшаем отступ сверху */
  margin-bottom: 20px; /* Добавляем отступ снизу для кнопки */
  width: 100%;
  box-sizing: border-box;
  
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    margin: 10px auto 25px;
  }
  
  @media (min-width: 1440px) {
    font-size: 1.6rem;
    margin: 15px auto 30px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Уменьшаем размер для планшетов */
    line-height: 1.5;
    padding: 0 10px;
  }

  @media (max-width: 430px) {
    font-size: 1rem; /* Ещё меньше для телефонов */
    line-height: 1.4;
    padding: 0 5px;
  }
  
  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
  
  /* iPhone 14 Pro Max и другие большие iPhone */
  @media only screen and (device-width: 430px) and (device-height: 932px),
         only screen and (width: 430px) and (height: 932px),
         only screen and (width: 428px) and (height: 926px) {
    width: 100%;
    margin: 10px auto 20px;
    padding: 0;
    text-align: center;
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: inline-block; /* Убираем flex, чтобы не влиять на другие элементы */
  margin-right: 20px; /* Отступ справа */
  vertical-align: middle; /* Выравнивание по вертикали */
  width: auto;
  height: auto;
  background: none; /* Удаление заливки */

  img {
    max-width: 150px; /* Увеличиваем максимальную ширину */
    height: auto; /* Сохраняем пропорции */
    animation: float 3s ease-in-out infinite;
    pointer-events: none;
    user-select: none;
    background: none; /* Удаление заливки у изображения */
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;