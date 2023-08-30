let currentInstructionStep = 0;

function showInstructionStep(step) {
  const instructions = document.querySelectorAll('.instruction');
  
  instructions.forEach(instruction => {
    instruction.classList.remove('active');
  });

  instructions[step].classList.add('active');
}

function nextInstructionStep() {
  currentInstructionStep++;

  if (currentInstructionStep >= 6) {
    const instructions = document.querySelector('.instructions');
    instructions.classList.remove('visible');
  } else {
    showInstructionStep(currentInstructionStep);
  }
}

setTimeout(function() {
  const welcomeSection = document.querySelector('.welcome-section');
  welcomeSection.style.opacity = '1';
  welcomeSection.style.transform = 'translateY(0)';
}, 1000);

function toggleInstructions() {
  const instructions = document.querySelector('.instructions');
  currentInstructionStep = 0;
  showInstructionStep(currentInstructionStep);
  instructions.classList.toggle('visible');
  if (instructions.classList.contains('visible')) {
    const nextButton = document.querySelector('.next-button');
    nextButton.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const instructionButton = document.querySelector('.instruction-button');
  instructionButton.addEventListener('click', toggleInstructions);

  const nextButton = document.querySelector('.next-button');
  nextButton.addEventListener('click', nextInstructionStep);
  showInstructionStep(currentInstructionStep);
});
