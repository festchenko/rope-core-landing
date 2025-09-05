# Развертывание на Vercel

## 1. Подготовка к развертыванию

### Установите Vercel CLI
```bash
npm i -g vercel
```

### Войдите в аккаунт Vercel
```bash
vercel login
```

## 2. Развертывание

### Автоматическое развертывание
```bash
vercel
```

### Или через веб-интерфейс
1. Перейдите на https://vercel.com
2. Войдите в аккаунт
3. Нажмите "New Project"
4. Импортируйте ваш GitHub репозиторий
5. Vercel автоматически определит настройки

## 3. Настройка переменных окружения

### Через CLI
```bash
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
```

### Через веб-интерфейс
1. Откройте проект в Vercel Dashboard
2. Перейдите в Settings → Environment Variables
3. Добавьте:
   - `EMAIL_USER` = ваш-email@gmail.com
   - `EMAIL_PASS` = ваш-пароль-приложения

## 4. Настройка домена (опционально)

1. В Vercel Dashboard перейдите в Settings → Domains
2. Добавьте ваш кастомный домен
3. Настройте DNS записи

## 5. Проверка развертывания

После развертывания:
1. Откройте ваш сайт
2. Заполните форму в секции "Call to Action"
3. Проверьте, что email приходит на вашу почту

## 6. Обновление

Для обновления просто запустите:
```bash
git push origin main
```

Vercel автоматически пересоберет и развернет обновления.

## Альтернатива: Render.com

Если предпочитаете Render:

1. Создайте аккаунт на https://render.com
2. Подключите GitHub репозиторий
3. Выберите "Web Service"
4. Настройте:
   - Build Command: `npm install && npm run build`
   - Start Command: `node server.js`
   - Environment Variables: EMAIL_USER, EMAIL_PASS
