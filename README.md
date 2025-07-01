# 🚀 Insphere Solutions - User Management System

A React Native-based user management tool built for Insphere's internal operations. It supports secure authentication, streamlined user creation, and dynamic user listing.

---
## Demo
https://github.com/user-attachments/assets/5a2f9abf-56cb-4033-b2ef-73afabcc6425

##  Getting Started

### ✅ Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Expo CLI**
- **iOS Simulator** or **Android Emulator** (optional)

###  Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd assignment_insphere
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Add Firebase Configuration**

   Create a `FirebaseConfig.ts` file and paste your Firebase credentials:

   ```ts
   // FirebaseConfig.ts
   export const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID",
   };
   ```

4. **Start the Development Server**
   ```bash
   npx expo start
   ```

5. **Run the App**
   - Scan QR code with **Expo Go**
   - Press `i` to launch iOS simulator
   - Press `a` to launch Android emulator

---

## 🔐 Demo Credentials

Use these credentials to log in:

- **Email**: `demo@insphere.com`
- **Password**: `demo123`

---

## ✨ Features

### 1. **Authentication System**
- Secure login with email/password
- Firebase Authentication integration
- Real-time validation and feedback
- Error handling and loading indicators

### 2. **User Management**
- **Add Users**:
  - Full Name
  - Email
  - Phone Number
  - Job Role
  - Department
  - Auto-generated timestamp
- **View Users**:
  - Modern card layout with avatars
  - Search by name, email, role, or department
  - Real-time Firestore updates
  - Pull-to-refresh functionality

### 3. **Modern UI/UX**
- iOS-style theme
- Responsive and accessible design
- Navigation with Expo Router
- Integrated icons and typography

---

##  Architecture Overview

###  Tech Stack

| Layer      | Tool                          |
|------------|-------------------------------|
| Frontend   | React Native + Expo           |
| Backend    | Firebase (Auth + Firestore)   |
| Navigation | Expo Router                   |
| Styling    | React Native StyleSheet       |
| Icons      | Expo Vector Icons (Ionicons)  |

### 📁 Project Structure

```
assignment_insphere/
├── app/
│   ├── _layout.tsx         # Root layout
│   ├── index.tsx           # Home screen
│   ├── login.tsx           # Login screen
│   ├── add-user.tsx        # Add user form
│   └── show-user.tsx       # User listing
├── FirebaseConfig.ts       # Firebase credentials
├── package.json            # Project metadata
└── README.md               # Project documentation
```

---

## 🔄 Data Flow

1. **Login** → Firebase Auth → Local State → Navigation  
2. **Add User** → Form Input → Validation → Firestore  
3. **Show Users** → Firestore Query → Local State → Search Filter  

---

##  Component Details

###  `index.tsx` (Home Screen)
- Central navigation hub
- Card-based layout
- Quick access to features

###  `login.tsx` (Login Screen)
- Firebase email/password login
- Form validation and feedback
- Password visibility toggle
- Demo credentials display

###  `add-user.tsx` (Add User Screen)
- Input form with validation
- Sectioned: User Info & Work Info
- Reset form & success feedback

###  `show-user.tsx` (Show Users Screen)
- Real-time user cards from Firestore
- Pull-to-refresh updates
- Smart search functionality
---

##  Outcomes

### ✅ Functional Requirements

- [x] Firebase login system  
- [x] Firestore user data structure  
- [x] Show users for internal use
- [x] Ease of use UI

### ✅ Technical Goals

- [x] Modular, maintainable architecture  
- [x] Clean TypeScript implementation  
- [x] Loading/error state management  
- [x] Mobile-first design and UX  
  

---

