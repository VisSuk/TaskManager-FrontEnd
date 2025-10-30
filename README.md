# Task Manager Frontend Application

This repository contains the **frontend** for the **MERN Stack Task Manager**.  
It is built using **HTML**, **Tailwind CSS**, **JavaScript**, and the **React.js** library.

---

##  Tech Stack

The technologies and libraries used in this application are:

- **React**: JavaScript framework used.
- **Tailwind CSS**: CSS framework.

- **Axios**: Client for communicating with the backend through requests and responses.
- **Chart.js-2 (React)**: Charting library with React components.
- **FontAwesome**: Icon Library.
- **HeadlessUI/React** : UI components for React and Tailwind
- **React Router**: Allows routing capabilities in React

---

##  Important Directories

- **Pages (`src/pages`)**: Components used to change the main view.  
- **Components (`src/components`)**: Reusable components that can be used anywhere.  
- **Services (`src/services`)**: Contains APIs that communicate with the backend.  
- **Functions (`src/functions`)**: Contains functions used for specific purposes (e.g., formatting dates, getting counts, etc.).

---

##  Features & Functionality

The application allows users to perform the following actions:

### **Authentication**
Register new accounts and log in to existing ones.

![Login](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/Login.jpeg?raw=true)  
![Sign Up](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/Sign%20Up.jpeg?raw=true)

---

### **Dashboard**
View a list of all tasks and **filter** by due date, priority and task status.

![Dashboard](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/Dashboard.jpeg?raw=true)

---

### **Task Creation**
Add new tasks with a title, description, priority and due date. Created tasks have pending status by default until edited to inprogress.

![Create Task](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/CreateTask.jpeg?raw=true)

---

### **Task Management**
View a specific task, edit it, and update its status (e.g., To Do, In Progress, Complete).

![View Task](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/ViewTask.jpeg?raw=true)  
![Edit Task](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/EditTask.jpeg?raw=true)

---

### **Task Deletion**
Permanently remove tasks.

---

### **Graph View**
Visually see the distribution of tasks by priority and current task status (Pending / In Progress / Completed).

![Statistics](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/Statistics.jpeg?raw=true)

---

### **Responsive Design**
The UI is responsive for smaller screens.  
The sidebar can expand and retract on mobile devices.

![Login Responsive](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/Login_Res.jpeg?raw=true)  
![Sidebar Responsive](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/SideBar_Res.jpeg?raw=true)  
![Dashboard Responsive](https://github.com/VisSuk/TaskManager-FrontEnd/blob/master/Screenshots_TM/DashBoard_Res.jpeg?raw=true)

---

##  Prerequisites

- Download and install **Node.js**: [https://nodejs.org/en/download](https://nodejs.org/en/download)  
- **npm**, the Node package manager, comes pre-installed with Node.js.

---

##  Installation and Setup

To get the frontend application running locally:

### **1. Clone the Repository**

```bash
git clone https://github.com/VisSuk/TaskManager-FrontEnd.git
cd TaskManager-FrontEnd
```
### **2. Install Dependencies**
```bash
npm i react-router-dom@5.3.4
npm i axios
npm install --save chart.js react-chartjs-2
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm install tailwindcss @tailwindcss/vite
npm i @headlessui/react
```
### **3. Run the Application**
```bash
npm run dev
```
