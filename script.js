// script.js

// Helper function: adds a leading zero if number < 10
function otaAika(i) {
  return i < 10 ? "0" + i : i;
}

// Function to get greeting based on time of day
function getGreeting() {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Good Morning! ☀️";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon! 🌤️";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening! 🌆";
  } else {
    return "Good Night! 🌙";
  }
}

// Function to show greeting notification
function showGreetingNotification() {
  const notification = document.createElement("div");
  notification.className = "greeting-notification";
  notification.textContent = getGreeting();
  document.body.appendChild(notification);
  
  // Auto remove notification after 4 seconds
  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 4000);
}





// Main clock function
function aloitaKello() {
  const aika = new Date();      // current time
  const h = aika.getHours();
  const m = otaAika(aika.getMinutes());
  const s = otaAika(aika.getSeconds());
  
  // Format date
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const dateString = aika.toLocaleDateString('en-US', options);

  const clockEl = document.getElementById("txt");
  if (clockEl) {
    clockEl.innerHTML = `${dateString} | ${h}:${m}:${s}`;
  }

  setTimeout(aloitaKello, 500); // call again after 500ms
}

// Store clean HTML and filter state
let cleanHTML = null;
let filterState = {};

// Wait until DOM is fully loaded
window.addEventListener("DOMContentLoaded", function() {
  aloitaKello();
  
  // Check user login status on signin page
  if (document.getElementById('userLoggedOut') || document.getElementById('userLoggedIn')) {
    checkUserLoginStatus();
  }
  
  // Load chat messages on chat page
  if (document.getElementById('messagesContainer')) {
    loadChatMessages();
  }
  
  // Show greeting only on first page visit in the session
  if (!sessionStorage.getItem("greetingShown")) {
    showGreetingNotification();
    sessionStorage.setItem("greetingShown", "true");
  }

  // Load cards from external file (only on pages with card-grid)
  const cardGrid = document.getElementById("card-grid");
  if (cardGrid) {
    fetch("cards.html")
      .then(response => response.text())
      .then(html => {
        cardGrid.innerHTML = html;
        cleanHTML = document.querySelector("main.main").innerHTML;
        initializeLikeButtons();
        initializeFilters();
        initializeSearch();
      })
      .catch(error => console.error("Error loading cards:", error));
  } else {
    // Initialize search on other pages (recipe-detail, etc.)
    initializeSearch();
  }
});

function initializeSearch() {
  const searchInput = document.getElementById("searchBox");
  if (searchInput) {
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    const contentContainer = document.querySelector("main.main") || document.querySelector("main");
    
    // Store clean HTML on first initialization if not already stored
    if (!cleanHTML && contentContainer) {
      cleanHTML = contentContainer.innerHTML;
    }

    if (!contentContainer) return;

    searchInput.addEventListener("input", function () {
      const value = searchInput.value.trim();

      // Reset to clean HTML
      if (cleanHTML) {
        contentContainer.innerHTML = cleanHTML;
      }

      if (!value) {
        // Only apply filters if we're on the recipes page
        if (document.getElementById("card-grid")) {
          initializeLikeButtons();
          applyCurrentFilters();
        }
        return;
      }

      const safeValue = escapeRegExp(value);
      highlightText(contentContainer, safeValue);
      
      // Re-initialize like buttons after search
      initializeLikeButtons();
      
      // Only apply filters if we're on the recipes page
      if (document.getElementById("card-grid")) {
        applyCurrentFilters();
      }

      function highlightText(element, searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, "gi");
        
        for (let node of element.childNodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            if (regex.test(node.textContent)) {
              const span = document.createElement("span");
              span.innerHTML = node.textContent.replace(
                new RegExp(`(${searchTerm})`, "gi"),
                `<span class="highlight">$1</span>`
              );
              element.replaceChild(span, node);
            }
          }
          else if (node.nodeType === Node.ELEMENT_NODE && node.className !== "highlight") {
            highlightText(node, searchTerm);
          }
        }
      }
    });
  }
}

function initializeFilters() {
  const filterCheckboxes = document.querySelectorAll("input[type='checkbox'][name='filter']");

  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      // Update filter state
      filterState[this.value] = this.checked;
      applyCurrentFilters();
    });
  });
}





function initializeLikeButtons() {
  const cards = document.querySelectorAll('.card');
  
  // Fetch liked menus from backend
  fetch('api/get-liked-menus.php')
    .then(response => response.json())
    .then(data => {
      const likedMenus = data.liked_menus || [];
      
      cards.forEach(card => {
        // Get the menu name from the card heading
        const menuName = card.querySelector('h3').textContent;
        
        // Create like button
        const likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.type = 'button';
        likeBtn.title = 'Like this menu';
        
        // Check if menu is already liked in database
        if (likedMenus.includes(menuName)) {
          likeBtn.classList.add('liked');
          likeBtn.innerHTML = '❤️';
        } else {
          likeBtn.innerHTML = '🤍';
        }
        
        likeBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleLike(menuName, likeBtn);
        };
        
        // Add like button to card
        card.appendChild(likeBtn);
      });
    })
    .catch(() => {
      // If not logged in, just show empty hearts
      cards.forEach(card => {
        const menuName = card.querySelector('h3').textContent;
        const likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.type = 'button';
        likeBtn.title = 'Like this menu';
        likeBtn.innerHTML = '🤍';
        
        likeBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleLike(menuName, likeBtn);
        };
        
        card.appendChild(likeBtn);
      });
    });
}

function toggleLike(menuName, likeBtn) {
  fetch('api/toggle-like.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ menu_name: menuName })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      if (data.action === 'added') {
        likeBtn.classList.add('liked');
        likeBtn.innerHTML = '❤️';
      } else {
        likeBtn.classList.remove('liked');
        likeBtn.innerHTML = '🤍';
      }
      checkUserLoginStatus();
    } else {
      if (data.error && data.error.includes('not logged in')) {
        alert('Please log in to like menus!');
        window.location.href = 'signin.php';
      } else {
        alert('Error: ' + (data.error || 'Unknown error'));
      }
    }
  })
  .catch(error => {
    console.error('Toggle like error:', error);
    alert('Please log in to like menus!');
    window.location.href = 'signin.php';
  });
}






function applyCurrentFilters() {
  const filterCheckboxes = document.querySelectorAll("input[type='checkbox'][name='filter']");
  const cardLinks = document.querySelectorAll(".card-link");

  const filterCategories = {
    diet: ["vegan", "vegetarian", "meat"],
    spice: ["spicy", "mild", "not spicy"],
    cuisine: ["middle eastern", "finnish", "italian", "asian", "french", "spanish", "greek", "indian"]
  };

  // Group checked filters by category
  const checkedByCategory = {};
  Array.from(filterCheckboxes)
    .filter(cb => cb.checked)
    .forEach(cb => {
      const filterValue = cb.value.toLowerCase();
      for (const [category, filters] of Object.entries(filterCategories)) {
        if (filters.includes(filterValue)) {
          if (!checkedByCategory[category]) {
            checkedByCategory[category] = [];
          }
          checkedByCategory[category].push(filterValue);
          break;
        }
      }
    });

  const hasActiveFilters = Object.keys(checkedByCategory).length > 0;

  cardLinks.forEach(cardLink => {
    const card = cardLink.querySelector(".card");
    if (!hasActiveFilters) {
      cardLink.style.display = "";
      return;
    }

    const cardTags = Array.from(card.querySelectorAll(".tag"))
      .map(tag => tag.textContent.trim().toLowerCase());

    const matchesAllCategories = Object.entries(checkedByCategory).every(
      ([category, filters]) => filters.some(filter => cardTags.includes(filter))
    );

    cardLink.style.display = matchesAllCategories ? "" : "none";
  });
  
  // Re-initialize like buttons after filtering
  initializeLikeButtons();
}






// Login and registration switching
function toggleForm(formId) {
  document.querySelectorAll(".form-box").forEach(form => { form.classList.remove("active"); });
  document.getElementById(formId).classList.add("active");
}

// Alias for toggleForm with different name
function showForm(formId) {
  toggleForm(formId);
}

// User Profile Management Functions
function checkUserLoginStatus() {
  fetch('api/check-session.php')
    .then(response => response.json())
    .then(data => {
      if (data.success && data.user) {
        displayUserProfile(data.user);
      } else {
        displayLogoutView();
      }
    })
    .catch(error => {
      console.error('Session check error:', error);
      displayLogoutView();
    });
}

function displayUserProfile(user) {
  const loggedOutDiv = document.getElementById('userLoggedOut');
  const loggedInDiv = document.getElementById('userLoggedIn');
  
  if (loggedOutDiv) loggedOutDiv.style.display = 'none';
  if (loggedInDiv) {
    loggedInDiv.style.display = 'block';
    document.getElementById('username').textContent = user.username;
    document.getElementById('joinDate').textContent = user.joinDate;
    
    // Show admin panel link if user is admin
    const adminPanelLink = document.getElementById('adminPanelLink');
    if (adminPanelLink) {
      if (user.role === 'admin') {
        adminPanelLink.style.display = 'block';
      } else {
        adminPanelLink.style.display = 'none';
      }
    }
    
    // Fetch and display liked menus from backend
    const likedMenusList = document.getElementById('likedMenusList');
    if (likedMenusList) {
      fetch('api/get-liked-menus.php')
        .then(response => response.json())
        .then(data => {
          const likedMenus = data.liked_menus || [];
          if (likedMenus.length > 0) {
            likedMenusList.innerHTML = likedMenus.map(menu => 
              `<div class="liked-menu-item">${menu}</div>`
            ).join('');
          } else {
            likedMenusList.innerHTML = '<p style="color: #999; font-size: 0.85rem; margin: 0;">No liked menus yet</p>';
          }
        })
        .catch(() => {
          likedMenusList.innerHTML = '<p style="color: #999; font-size: 0.85rem; margin: 0;">No liked menus yet</p>';
        });
    }
  }
}

function displayLogoutView() {
  const loggedOutDiv = document.getElementById('userLoggedOut');
  const loggedInDiv = document.getElementById('userLoggedIn');
  
  if (loggedOutDiv) loggedOutDiv.style.display = 'block';
  if (loggedInDiv) loggedInDiv.style.display = 'none';
}

function logoutUser() {
  fetch('api/logout.php', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    checkUserLoginStatus();
    // Reset forms
    const loginForm = document.getElementById('loginFormElement');
    const registerForm = document.getElementById('registerFormElement');
    if (loginForm) loginForm.reset();
    if (registerForm) registerForm.reset();
    const adminCode = document.getElementById('adminCode');
    if (adminCode) adminCode.style.display = 'none';
    const loginFormDiv = document.getElementById('login-form');
    if (loginFormDiv) showForm('login-form');
    alert('Logged out successfully');
    window.location.href = 'index.html';
  })
  .catch(error => {
    console.error('Logout error:', error);
    alert('Logout error: ' + error.message);
  });
}

function addLikedMenu(menuName) {
  const userData = localStorage.getItem('menuFinderUser');
  if (userData) {
    const user = JSON.parse(userData);
    if (!user.likedMenus) {
      user.likedMenus = [];
    }
    if (!user.likedMenus.includes(menuName)) {
      user.likedMenus.push(menuName);
      localStorage.setItem('menuFinderUser', JSON.stringify(user));
      checkUserLoginStatus();
    }
  }
}

function removeLikedMenu(menuName) {
  const userData = localStorage.getItem('menuFinderUser');
  if (userData) {
    const user = JSON.parse(userData);
    user.likedMenus = user.likedMenus.filter(menu => menu !== menuName);
    localStorage.setItem('menuFinderUser', JSON.stringify(user));
    checkUserLoginStatus();
  }
}






// Form submission handlers
function handleLoginSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  
  if (!username || !password) {
    alert('Please enter both username and password');
    return;
  }

  fetch('api/login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Login successful!');
      checkUserLoginStatus();
      document.getElementById('loginFormElement').reset();
      window.location.href = 'index.html';
    } else {
      alert('Login failed: ' + (data.error || 'Unknown error'));
    }
  })
  .catch(error => {
    console.error('Login error:', error);
    alert('Login error: ' + error.message);
  });
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const role = document.getElementById('registerRole').value;
  const adminCode = document.getElementById('adminCode').value;
  
  if (!username || !email || !password || !role) {
    alert('Please fill in all fields');
    return;
  }

  if (role === 'admin' && !adminCode) {
    alert('Admin code is required for admin registration');
    return;
  }

  fetch('api/register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password, role, adminCode })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Registration successful! Welcome to MENU FINDER!');
      document.getElementById('registerFormElement').reset();
      document.getElementById('adminCode').style.display = 'none';
      showForm('login-form');
      checkUserLoginStatus();
    } else {
      alert('Registration failed: ' + (data.error || 'Unknown error'));
    }
  })
  .catch(error => {
    console.error('Registration error:', error);
    alert('Registration error: ' + error.message);
  });
}






// Chat Functions
function toggleAdminCode() {
  const role = document.getElementById('registerRole').value;
  const adminCodeInput = document.getElementById('adminCode');
  if (role === 'admin') {
    adminCodeInput.style.display = 'block';
    adminCodeInput.required = true;
  } else {
    adminCodeInput.style.display = 'none';
    adminCodeInput.required = false;
    adminCodeInput.value = '';
  }
}

function loadChatMessages() {
  const messagesContainer = document.getElementById('messagesContainer');
  if (!messagesContainer) return;

  const filter = currentFilter || 'all';

  fetch(`api/get-messages.php?filter=${filter}`)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const messages = data.messages || [];
        updateChatStats(messages);
        
        // Check if user is admin
        isUserAdmin().then(isAdmin => {
          if (messages.length === 0) {
            messagesContainer.innerHTML = '<div class="empty-messages">No messages yet. Be the first to start the conversation!</div>';
            return;
          }

          messagesContainer.innerHTML = messages.map((msg) => {
            let deleteButton = '';
            if (isAdmin) {
              deleteButton = `<button class="delete-btn" onclick="deleteMessage(${msg.id})" title="Delete message">🗑️</button>`;
            }
            
            return `
            <div class="message">
              <div class="message-header">
                <span class="message-username">${escapeHtml(msg.username)}</span>
                <span class="message-timestamp">${msg.timestamp}</span>
                ${deleteButton}
              </div>
              <div class="message-content">${escapeHtml(msg.content)}</div>
            </div>
          `}).join('');

          // Scroll to bottom
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
      }
    })
    .catch(error => console.error('Error loading messages:', error));
}

function sendMessage(event) {
  event.preventDefault();
  const messageInput = document.getElementById('messageInput');
  const messagesContainer = document.getElementById('messagesContainer');
  
  if (!messageInput || !messagesContainer) return;

  const content = messageInput.value.trim();
  if (!content) return;

  fetch('api/send-message.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      messageInput.value = '';
      loadChatMessages();
    } else {
      alert('Error sending message: ' + (data.error || 'Unknown error'));
    }
  })
  .catch(error => {
    console.error('Send message error:', error);
    alert('Error: ' + error.message);
  });
}

function deleteMessage(messageId) {
  if (confirm('Are you sure you want to delete this message?')) {
    fetch('api/delete-message.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message_id: messageId })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        loadChatMessages();
      } else {
        alert('Error deleting message: ' + (data.error || 'Unknown error'));
      }
    })
    .catch(error => {
      console.error('Delete message error:', error);
      alert('Error: ' + error.message);
    });
  }
}

let currentFilter = 'all';

function filterMessages(filterType) {
  currentFilter = filterType;
  
  // Update button states
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  loadChatMessages();
}

function getFilteredMessages() {
  // Messages are now filtered server-side via the filter parameter
  // This function is kept for compatibility but the filtering is done in get-messages.php
  return [];
}

function updateChatStats(messages = []) {
  const uniqueUsers = new Set(messages.map(msg => msg.username)).size;
  
  const totalMessagesEl = document.getElementById('totalMessages');
  const activeUsersEl = document.getElementById('activeUsers');
  
  if (totalMessagesEl) totalMessagesEl.textContent = messages.length;
  if (activeUsersEl) activeUsersEl.textContent = uniqueUsers;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}






// Admin User Management Functions
function isCurrentUserAdmin() {
  // Check if user is admin by trying to fetch users endpoint
  return isUserAdmin();
}

function isUserAdmin() {
  return fetch('api/get-users.php')
    .then(response => response.json())
    .then(data => data.success === true)
    .catch(() => false);
}

function getAllUsers() {
  return fetch('api/get-users.php')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        return data.users || [];
      }
      return [];
    })
    .catch(error => {
      console.error('Error fetching users:', error);
      return [];
    });
}

function deleteUser(userId) {
  isUserAdmin().then(isAdmin => {
    if (!isAdmin) {
      alert('You do not have permission to delete users.');
      return;
    }
    
    if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      fetch('api/delete-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('User deleted successfully');
          loadAdminPanel();
        } else {
          alert('Error deleting user: ' + (data.error || 'Unknown error'));
        }
      })
      .catch(error => {
        console.error('Delete user error:', error);
        alert('Error: ' + error.message);
      });
    }
  });
}

function loadAdminPanel() {
  const adminUsersList = document.getElementById('adminUsersList');
  if (!adminUsersList) return;
  
  // Check if user is admin
  isUserAdmin().then(isAdmin => {
    if (!isAdmin) {
      window.location.href = 'index.html';
      return;
    }
    
    getAllUsers().then(users => {
      if (users.length === 0) {
        adminUsersList.innerHTML = '<div class="empty-users">No users registered yet.</div>';
        return;
      }
      
      adminUsersList.innerHTML = users.map(user => `
        <div class="admin-user-card">
          <div class="user-info">
            <h3>${escapeHtml(user.username)}</h3>
            <p><strong>Email:</strong> ${escapeHtml(user.email)}</p>
            <p><strong>Role:</strong> <span class="role-badge ${user.role}">${user.role.toUpperCase()}</span></p>
            <p><strong>Joined:</strong> ${user.joinDate}</p>
            <p><strong>Liked Menus:</strong> ${user.likedMenusCount || 0}</p>
          </div>
          <button class="delete-user-btn" onclick="deleteUser(${user.id})">Delete User</button>
        </div>
      `).join('');
    });
  });
}