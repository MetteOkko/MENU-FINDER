¨# 🍽️ Menu Finder

**Menu Finder** is a web application designed to help users discover menus and recipes based on different food preferences and categories. Users can browse available menus, explore individual recipes, save their favourite menus, and interact with other users through a community chat.

Live Website

[Visit Menu Finder](YOUR-LIVE-WEBSITE-LINK)

Features

Menu & Recipe Discovery

* Browse a collection of menus and recipes
* Search for specific menus
* Filter menus according to different food preferences
* Browse categories such as:

  * Vegan
  * Vegetarian
  * Meat
  * Spicy
  * Mild
  * Different cuisines
* View detailed information for individual menus
* Access external recipe sources through recipe links

User Features

* Create a user account
* Log in and log out
* User sessions
* Like/save menus
* View liked menus from the user profile

Community Chat

* Users can participate in a community chat
* Send and view messages
* Filter messages by:

  * All messages
  * Today
  * This week
  * Most recent
* Display chat statistics such as total messages and active users

Admin Panel

* Admin-only access
* View registered users
* Manage users
* Delete users
* Administrative access controlled through user roles

Technologies

* **HTML5** – Website structure
* **CSS3** – Layout, styling and responsive design
* **JavaScript** – Interactive features and dynamic content
* **PHP** – Server-side functionality and API endpoints
* **MySQL** – User, chat and liked-menu data storage
* **Git & GitHub** – Version control and project management

Project Structure

```text
MENU-FINDER/
│
├── index.html                 # Home page
├── recipes.html               # Menu/recipe browsing page
├── recipe-detail.html         # Individual recipe page
├── cards.html                 # Menu card layout
│
├── styles.css                 # Main stylesheet
├── script.js                  # Main JavaScript functionality
├── recipe-data.js              # Menu and recipe data
├── recipe-links.js             # External recipe links
├── recipe-detail.js            # Recipe detail functionality
│
├── signin.php                 # Login and registration page
├── chat.php                   # Community chat
├── admin.php                  # Admin panel
│
├── api/
│   ├── register.php
│   ├── login.php
│   ├── logout.php
│   ├── check-session.php
│   ├── get-messages.php
│   ├── send-message.php
│   ├── delete-message.php
│   ├── toggle-like.php
│   ├── get-liked-menus.php
│   ├── get-users.php
│   └── delete-user.php
│
└── jpg/                       # Images used by the website
```

Database

The application uses a **MySQL database** to store dynamic user information and community features.

The database is used for:

* User accounts
* User roles
* Login sessions
* Liked menus
* Community chat messages

Sensitive database credentials are kept outside the public repository.

Security

Passwords are stored using PHP's `password_hash()` functionality rather than storing passwords as plain text.

The application also uses PHP sessions to keep track of logged-in users and their roles.

> **Note:** Database credentials and other secrets should never be committed to a public GitHub repository.

What I Learned

This project gave me experience with:

* Building a multi-page website
* Creating responsive layouts with CSS Grid and Flexbox
* Using JavaScript to create interactive website functionality
* Working with structured recipe/menu data
* Connecting a website to a MySQL database
* Creating PHP API endpoints
* Implementing user registration and login
* Using password hashing
* Managing user sessions
* Creating role-based admin functionality
* Working with asynchronous requests between JavaScript and PHP
* Using Git and GitHub for version control

Future Improvements

Some features I would like to improve or add in the future include:

* Improve accessibility
* Add more menus and recipes
* Improve mobile responsiveness
* Add more advanced search and filtering
* Improve input validation and database security
* Add profile customization
* Add richer recipe information
* Improve the community chat experience
* Add better error handling

Running the Project Locally

Because the project uses PHP and MySQL, it requires a PHP-enabled web server and a MySQL database.

A local development environment such as **XAMPP**, **MAMP**, or another PHP/MySQL environment can be used.

1. Clone the repository:

```bash
git clone YOUR-REPOSITORY-LINK
```

2. Place the project in your local PHP server directory.

3. Create the required MySQL database.

4. Configure the database connection using environment-specific credentials.

5. Start the PHP and MySQL services.

6. Open the project through your local server.

Author

**Mette Okkonen**

This project was created as part of my web development studies and demonstrates my experience with frontend development, JavaScript, PHP, MySQL and Git/GitHub.
