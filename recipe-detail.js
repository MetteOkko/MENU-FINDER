
// recipe-detail.js
function getRecipeFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('recipe');
}

function otaAika(i) {
  return i < 10 ? "0" + i : i;
}

function aloitaKello() {
  const aika = new Date();
  const h = aika.getHours();
  const m = otaAika(aika.getMinutes());
  const s = otaAika(aika.getSeconds());

  const clockEl = document.getElementById("txt");
  if (clockEl) {
    clockEl.innerHTML = `${h}:${m}:${s}`;
  }

  setTimeout(aloitaKello, 500);
}

window.addEventListener("DOMContentLoaded", function() {
  aloitaKello();

  const recipeId = getRecipeFromURL();
  const recipe = recipes[recipeId];

  if (!recipe) {
    document.getElementById("recipe-content").innerHTML = "<p>Recipe not found.</p>";
    return;
  }

  // --- Set recipe name ---
  document.getElementById("recipe-name").textContent = recipe.name;

  // --- Set tags ---
  const tagsContainer = document.getElementById("recipe-tags");
  tagsContainer.innerHTML = "";
  recipe.tags.forEach(tag => {
    const tagEl = document.createElement("span");
    tagEl.className = `tag ${tag.replace(/ /g, '-')}`;
    tagEl.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
    tagsContainer.appendChild(tagEl);
  });

  // --- Mapping JS course keys to HTML IDs ---
  const courseIdMap = {
    appetizer: "appetizer",
    mainCourse: "main",
    dessert: "dessert",
    drink: "drink"
  };

  // --- Helper to populate courses ---
  function populateCourse(courseKey, sectionSelector) {
    const courseData = recipe[courseKey];
    const section = document.querySelector(sectionSelector);

    const htmlId = courseIdMap[courseKey];

    section.querySelector(`#${htmlId}-name`).textContent = courseData.name;
    section.querySelector(`#${htmlId}-description`).textContent = courseData.description;

    const buttons = section.querySelectorAll(".recipe-link");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const link = recipeLinks[courseData.id];
        if (link) {
          window.location.href = link;
        } else {
          alert("Link not found for this recipe!");
        }
      });
    });
  }

  populateCourse("appetizer", ".appetizer-section");
  populateCourse("mainCourse", ".main-course-section");
  populateCourse("dessert", ".dessert-section");
  populateCourse("drink", ".drink-section");
});