// Импорты из NestJS
import { NestFactory } from '@nestjs/core'; // Фабрика для создания приложения NestJS
import { ValidationPipe } from '@nestjs/common'; // Пайп для автоматической валидации данных
import { AppModule } from './app.module'; // Главный модуль приложения

/**
 * Функция bootstrap - точка входа в приложение
 * async означает, что функция асинхронная и может использовать await
 */
async function bootstrap() {
  // Создаем экземпляр NestJS приложения на основе AppModule
  const app = await NestFactory.create(AppModule);
  
  /**
   * Настройка глобальной валидации для всего приложения
   * ValidationPipe автоматически валидирует входящие данные на основе DTO классов
   */
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Удаляет свойства, которых нет в DTO (защита от лишних данных)
    forbidNonWhitelisted: true, // Выбрасывает ошибку, если приходят неописанные свойства
    transform: true, // Автоматически преобразует типы данных (например, строку в число)
  }));

  /**
   * Настройка CORS (Cross-Origin Resource Sharing)
   * Позволяет фронтенду обращаться к API с других доменов/портов
   */
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || [
      'http://localhost:3000',  // React development server
      'http://localhost:5173',  // Vite development server
    ],
    credentials: true, // Разрешает отправку cookies и заголовков авторизации
  });

  // Запускаем сервер на порту из переменной окружения PORT или 3000 по умолчанию
  await app.listen(process.env.PORT ?? 3000);
  
  // Выводим сообщение о том, что сервер запущен
  console.log(`🚀 Server running on http://localhost:${process.env.PORT ?? 3000}`);
}

// Запускаем приложение
bootstrap();
