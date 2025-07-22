// Импорты из NestJS для создания REST API
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service'; // Наш сервис
import { ContactDto } from './dto/contact.dto'; // DTO для валидации

/**
 * @Controller() - декоратор, который определяет базовый маршрут для всех эндпоинтов в этом контроллере
 * 'api/contact' означает, что все маршруты будут начинаться с /api/contact
 * 
 * Контроллер отвечает за обработку HTTP запросов и возврат ответов
 */
@Controller('api/contact')
export class ContactController {
  /**
   * Конструктор - NestJS автоматически внедряет ContactService
   * readonly означает, что свойство нельзя изменить после инициализации
   */
  constructor(private readonly contactService: ContactService) {}

  /**
   * @Post() - декоратор для обработки POST запросов
   * 'submit' - путь эндпоинта, полный URL будет: POST /api/contact/submit
   * 
   * @HttpCode() - устанавливает HTTP статус код ответа (200 OK)
   * @Body() - декоратор для извлечения тела запроса и автоматической валидации через ContactDto
   */
  @Post('submit')
  @HttpCode(HttpStatus.OK) // Возвращает статус 200 вместо стандартного 201 для POST
  async submitContactForm(@Body() contactDto: ContactDto) {
    // Передаем данные в сервис для обработки
    // await ожидает завершения асинхронной операции
    return this.contactService.processContactForm(contactDto);
  }
}
