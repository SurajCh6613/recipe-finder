# 🍳 Recipe Finder App

A simple **React + Tailwind CSS** application that helps users (like Taylor, a busy professional 👨‍💻) discover recipes based on:
- Ingredients they already have
- Detailed recipe instructions & YouTube tutorials
- Saving favorite recipes (stored in LocalStorage)

---

## 🚀 Features
- 🔍 **Search by Ingredient** → Find meals by entering an ingredient (e.g., "chicken").
- 🎲 **Random Recipe** → Get a surprise meal suggestion.
- 📖 **Recipe Details Page** → View cooking instructions, ingredients, and video tutorials.
- ❤️ **Favorites** → Save favorite recipes locally for easy access.
- 📱 **Responsive UI** built with Tailwind CSS.

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS
- **API:** [TheMealDB API](https://www.themealdb.com/api.php)
- **State Management:** React Hooks
- **Storage:** LocalStorage (for favorites)

---

## 📂 Project Structure
```
src/
├─ components/
│ ├─ MainNavigation.jsx
| ├─ Navbar.jsx
│ ├─ SearchBar.jsx
│ ├─ RecipeCard.jsx
│ └─ RecipeDetails.jsx
├─ pages/
│ ├─ Home.jsx
│ ├─ Favorites.jsx
|
├─ App.jsx
└─ main.jsx
```


---

## ⚡ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/SurajCh6613/recipe-finder.git
cd recipe-finder
```

2. Install dependencies
```
npm install
```
3. Run the app
```
npm run dev
```


The app will be running at http://localhost:5173

##📸 Screenshots

Home Page (Search by ingredient)

<img width="1920" height="1080" alt="Screenshot (40)" src="https://github.com/user-attachments/assets/154a3839-7de2-4b8c-818a-81de6fb12bd0" />

Recipe Details Page (Instructions + Ingredients)

<img width="550" height="770" alt="Screenshot 2025-08-29 155219" src="https://github.com/user-attachments/assets/a7cb4f63-eabd-4026-8deb-e248dd347030" />


##🔮 Future Improvements

🍽️ Add filters (category, cuisine, vegetarian, etc.)

📅 Meal planner (breakfast/lunch/dinner suggestions)

🔗 Backend integration (save favorites for multiple users)
