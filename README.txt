Task Manager App
This is a simple Task Manager Application built using Node.js, Express, PostgreSQL, and EJS. It allows users to manage a to-do list with the ability to add, edit, and delete tasks. The app demonstrates basic CRUD (Create, Read, Update, Delete) operations and uses a PostgreSQL database for data storage.

Features
Add tasks to the list.
Edit existing tasks.
Delete tasks.
Tasks are stored persistently in a PostgreSQL database.
Technologies Used
Node.js: JavaScript runtime for backend logic.
Express.js: Web framework for handling routing and HTTP requests.
PostgreSQL: Relational database for storing tasks.
EJS (Embedded JavaScript): Templating engine for rendering dynamic HTML.
dotenv: For managing environment variables.
pg: PostgreSQL client for Node.js.
Installation and Setup
Prerequisites
Make sure you have the following installed on your machine:

Node.js (v12+)
PostgreSQL (set up locally or via a cloud service like Heroku)
Git (to clone the repository)
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
2. Install Dependencies
Once inside the project directory, run:

bash
Copy code
npm install
This will install all the required packages listed in the package.json file.

3. Create a PostgreSQL Database
Open your PostgreSQL CLI or pgAdmin and create a new database (e.g., task_manager).
Inside your database, create a table items:
sql
Copy code
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);
4. Set up Environment Variables
Create a .env file in the root of the project and add the following variables with your PostgreSQL credentials:

plaintext
Copy code
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=task_manager  # Or the name of your database
DB_PASSWORD=your_postgres_password
5. Running the App
To start the server, run:

bash
Copy code
npm start
This will start the app on http://localhost:3000. Open your browser and navigate to that address to use the app.

6. Using the App
Homepage (/): Displays the list of current tasks and a form to add new tasks.
Add Task: Use the form to enter a new task and click "Add." The task will be added to the database and appear on the list.
Edit Task: You can edit an existing task by submitting the new title.
Delete Task: You can delete a task from the list, and it will be removed from the database.
Project Structure
plaintext
Copy code
.
├── views/
│   ├── header.ejs            # Header template for all pages
│   ├── footer.ejs            # Footer template for all pages
│   ├── index.ejs             # Main template for rendering tasks
├── public/
│   └── css/                  # Folder for static assets (e.g., CSS)
├── index.js                  # Main server file with all routes
├── queries.sql               # SQL queries used for database setup (optional)
├── .env                      # Environment variables file (not committed)
├── .gitignore                # Files to be ignored by Git (e.g., node_modules, .env)
├── package.json              # Project metadata and dependencies
└── README.md                 # Documentation for the project
Future Improvements
Add user authentication to allow users to manage their own task lists.
Implement due dates and task prioritization.
Add categories or tags for tasks.
Implement drag-and-drop sorting for tasks.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Author
Developed by Giovanni Toledo.