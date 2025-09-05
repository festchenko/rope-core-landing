# Настройка отправки email

## 1. Настройка Gmail (рекомендуется)

### Шаг 1: Создайте пароль приложения
1. Войдите в свой аккаунт Gmail
2. Перейдите в настройки безопасности: https://myaccount.google.com/security
3. Включите двухфакторную аутентификацию (если не включена)
4. Найдите раздел "Пароли приложений"
5. Создайте новый пароль приложения для "Другое приложение"
6. Скопируйте созданный пароль

### Шаг 2: Настройте переменные окружения
Создайте файл `.env` в корне проекта:

```env
EMAIL_USER=ваш-email@gmail.com
EMAIL_PASS=ваш-пароль-приложения
```

### Шаг 3: Запустите приложение
```bash
npm install
npm run dev
```

## 2. Альтернативные email сервисы

### Mailgun
```javascript
const transporter = nodemailer.createTransporter({
  service: 'mailgun',
  auth: {
    user: 'postmaster@your-domain.mailgun.org',
    pass: 'your-mailgun-password'
  }
});
```

### SendGrid
```javascript
const transporter = nodemailer.createTransporter({
  service: 'sendgrid',
  auth: {
    user: 'apikey',
    pass: 'your-sendgrid-api-key'
  }
});
```

## 3. Тестирование

После настройки:
1. Запустите сервер: `npm run server`
2. Откройте приложение: `http://localhost:3000`
3. Заполните форму в секции "Call to Action"
4. Проверьте свою почту на наличие заявки

## 4. Развертывание на Heroku

1. Создайте приложение на Heroku
2. Добавьте переменные окружения в настройках Heroku:
   - `EMAIL_USER`
   - `EMAIL_PASS`
3. Задеплойте приложение

```bash
git add .
git commit -m "Add email functionality"
git push heroku main
```

## 5. Безопасность

- Никогда не коммитьте файл `.env` в git
- Используйте пароли приложений, а не основные пароли
- Ограничьте доступ к API endpoint'у в продакшене
