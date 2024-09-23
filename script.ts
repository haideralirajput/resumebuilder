// Updated script.ts

// Get the toggle button and the skills section
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Event listener to toggle the visibility of the skills section
toggleButton.addEventListener('click', () => {
  // Get the current computed display style of the section
  const currentDisplay = window.getComputedStyle(skillsSection).display;
  
  // Toggle between 'block' and 'none'
  if (currentDisplay === 'none') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none';
  }
});
