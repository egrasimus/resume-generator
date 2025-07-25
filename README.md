# 📝 Resume Generator

Веб-приложение для быстрого создания, редактирования и скачивания современного резюме в формате PDF.  
Проект построен на React, TypeScript, Vite и использует архитектуру Feature-Sliced Design (FSD).

![preview](./public/preview.png)

---

## 🚀 Основные возможности

- **Удобная форма** для ввода всех данных резюме: ФИО, позиция, контакты, навыки, образование, опыт работы и др.
- **Мгновенное превью** — результат виден сразу при заполнении.
- **Добавление и редактирование опыта работы** через модальное окно с валидацией.
- **Автоматический подсчёт стажа** по всем местам работы.
- **Генерация PDF** одним кликом (html2pdf.js).
- **Локальное хранение** данных (или тестовые моки для разработки).
- **Модульные SCSS-стили** и современный UI.
- **Архитектура FSD** — легко расширять и поддерживать.

---

## 🛠️ Технологии

- React + TypeScript
- Vite
- Formik
- html2pdf.js
- SCSS Modules
- Feature-Sliced Design (FSD)
- React-Datepicker

---

## 📁 Структура проекта (FSD)

```
src/
├── app/               # Точка входа и инициализация
├── pages/             # Страницы (например, /resume)
├── widgets/           # Крупные интерфейсные блоки (ResumeBuilder)
├── features/          # Независимые фичи (download-pdf, work-experience-modal)
├── entities/          # Сущности (resume: модель, форма, превью)
├── shared/            # Общие компоненты, утилиты, типы, стили
```

---

## ⚙️ Установка и запуск

```bash
git clone https://github.com/egrasimus/resume-generator.git
cd resume-generator
npm install
npm run dev
```

---

## 🧪 Тестовые данные

Для локальной разработки можно использовать моковые данные:

- Включите переменную `VITE_USE_MOCK=true` в `.env`
- Редактируйте файл `src/entities/resume/model/mockResumeData.ts` (не попадёт в git)

---

## 📄 Генерация PDF

Используется html2pdf.js:  
Блок с id="resume-preview" преобразуется в PDF по нажатию кнопки "Скачать PDF".

---

## 🖼️ Превью

![preview](./public/preview.png)

---

## 📜 Лицензия

MIT License — свободное использование с указанием авторства.

---

## 👨‍💻 Автор

**Егор Шестаков**  
Telegram: [@egrasimus](https://t.me/egrasimus)  
Резюме на хабре: [Habr Career](https://career.habr.com/egrasimus)
