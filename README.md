# 📇 Contacts App

## Project Overview

This is a **React frontend application** for managing contacts. The app demonstrates **CRUD (Create, Read, Update, Delete) functionality** entirely on the client-side.  

**Key Features:**
- **Add Contacts:** Users can add new contacts with basic information.  
- **View Contacts:** See a list of all contacts in a clean, organized layout.  
- **Edit Contacts:** Modify existing contact information.  
- **Delete Contacts:** Remove unwanted contacts from the list.  
- **Delete all Contacts:** Remove all contacts from the list.  

**Note:** This app is **frontend-only**, meaning there is **no backend or database** connected. All contact data is stored in the browser memory (state) and will be lost on page refresh.  

**Technologies Used:**
- React.js (Functional Components & Hooks)  
- Redux for state management  
- CSS for styling  
- React Router for navigation  

---

## 🖥️ Project Structure

Contacts_Management/  
├── public/   
├── src/   
│ ├── action/  
│ │ └── contactAction.jsx # Defines Redux actions for managing contacts (e.g., add, edit, delete)  
│ ├── components/  
│ │ ├── contacts/  
│ │ │ ├── AddContact.jsx # Form component to add a new contact  
│ │ │ ├── Contact.jsx # Single contact item component  
│ │ │ ├── Contacts.jsx # List of all contacts  
│ │ │ └── EditContact.jsx # Form component to edit an existing contact  
│ │ └── elements/  
│ │ └── Navbar.jsx # Navigation bar component  
│ ├── constant/  
│ │ └── type.jsx # Defines action type constants for Redux  
│ ├── reducers/   
│ │ ├── ContactReducer.jsx # Contacts CRUD operation logic  
│ │ └── Index.jsx # Combines every reducers into one    
│ ├── App.css # Global CSS for the App component  
│ ├── App.js # Main App component, root of React component tree  
│ ├── App.test.js  
│ ├── index.css # Global CSS for the entire application  
│ ├── index.js # Entry point of the React application, renders <App />  
│ ├── reportWebVitals.js  
│ ├── setupTests.js   
│ └── store.js # Redux store configuration  
├── .gitignore   
├── package-lock.json   
├── package.json   
└── README.md 
