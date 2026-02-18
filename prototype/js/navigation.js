// Screen definitions for the student app prototype
// Each screen: { id, label, img, hotspots[] }
// Each hotspot: { top, left, width, height, target, label } (top/left/width/height as % strings)

const STUDENT_SCREENS = [
  // ── AUTHENTICATION ──
  {
    id: 'splash',
    label: 'Splash Screen',
    img: 'screens/app/1.0 Splash screen.png',
    hotspots: [
      { top: '72%', left: '10%', width: '80%', height: '8%', target: 'login-empty', label: 'Log In' },
    ]
  },
  {
    id: 'login-empty',
    label: 'Login',
    img: 'screens/app/1.1 login_unfilled.png',
    hotspots: [
      { top: '65%', left: '10%', width: '80%', height: '8%', target: 'login-filled', label: 'Fill credentials' },
      { top: '76%', left: '30%', width: '40%', height: '6%', target: 'forgot-password', label: 'Forgot password?' },
    ]
  },
  {
    id: 'login-filled',
    label: 'Login (filled)',
    img: 'screens/app/1.2 login_filled.png',
    hotspots: [
      { top: '72%', left: '10%', width: '80%', height: '8%', target: 'schedule', label: 'Log In' },
    ]
  },
  {
    id: 'forgot-password',
    label: 'Forgot Password',
    img: 'screens/app/1.3 login_forgot password.png',
    hotspots: [
      { top: '72%', left: '10%', width: '80%', height: '8%', target: 'reset-password', label: 'Send Reset Email' },
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'login-empty', label: 'Back' },
    ]
  },
  {
    id: 'reset-password',
    label: 'Reset Password',
    img: 'screens/app/1.4 login_reset password.png',
    hotspots: [
      { top: '72%', left: '10%', width: '80%', height: '8%', target: 'login-empty', label: 'Back to Login' },
    ]
  },

  // ── SCHEDULE ──
  {
    id: 'schedule',
    label: 'Schedule View',
    img: 'screens/app/6.0 schedule.png',
    hotspots: [
      { top: '20%', left: '5%', width: '90%', height: '12%', target: 'class-details', label: 'View AP Spanish' },
      { top: '10%', left: '80%', width: '15%', height: '8%', target: 'profile', label: 'Profile' },
    ]
  },
  {
    id: 'class-details',
    label: 'Class Details',
    img: 'screens/app/6.1 class details.png',
    hotspots: [
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'schedule', label: 'Back' },
    ]
  },

  // ── PROFILE ──
  {
    id: 'profile',
    label: 'Profile',
    img: 'screens/app/2.0 profile_default.png',
    hotspots: [
      { top: '30%', left: '5%', width: '90%', height: '8%', target: 'profile-edit', label: 'Edit Profile' },
      { top: '42%', left: '5%', width: '90%', height: '8%', target: 'change-pw', label: 'Change Password' },
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'schedule', label: 'Back' },
    ]
  },
  {
    id: 'profile-edit',
    label: 'Edit Profile',
    img: 'screens/app/2.1 profile_edit.png',
    hotspots: [
      { top: '80%', left: '10%', width: '80%', height: '8%', target: 'profile-saved', label: 'Save' },
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'profile', label: 'Back' },
    ]
  },
  {
    id: 'profile-saved',
    label: 'Profile Saved',
    img: 'screens/app/2.3 profile_changes saved notification.png',
    hotspots: [
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'profile', label: 'Back' },
    ]
  },
  {
    id: 'change-pw',
    label: 'Change Password',
    img: 'screens/app/2.2 profile_change pw.png',
    hotspots: [
      { top: '80%', left: '10%', width: '80%', height: '8%', target: 'profile-saved', label: 'Save' },
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'profile', label: 'Back' },
    ]
  },

  // ── ATTENDANCE ──
  {
    id: 'class-starting-50',
    label: 'Class Starting (50% in)',
    img: 'screens/app/3.0 attendance_class starting_50.png',
    hotspots: [
      { top: '75%', left: '10%', width: '80%', height: '10%', target: 'you-are-present', label: 'Mark Present' },
      { top: '5%', left: '75%', width: '20%', height: '8%', target: 'emergency', label: 'Emergency' },
    ]
  },
  {
    id: 'class-starting-20',
    label: 'Class Starting (80% in)',
    img: 'screens/app/3.1 attendance_class starting_20.png',
    hotspots: [
      { top: '75%', left: '10%', width: '80%', height: '10%', target: 'you-are-present', label: 'Mark Present' },
      { top: '5%', left: '75%', width: '20%', height: '8%', target: 'emergency', label: 'Emergency' },
    ]
  },
  {
    id: 'you-are-present',
    label: 'You Are Present ✓',
    img: 'screens/app/3.2 you are present.png',
    hotspots: [
      { top: '82%', left: '10%', width: '80%', height: '8%', target: 'learning-check', label: 'Continue to class' },
      { top: '5%', left: '75%', width: '20%', height: '8%', target: 'emergency', label: 'Emergency' },
    ]
  },
  {
    id: 'you-are-absent',
    label: 'You Are Absent',
    img: 'screens/app/3.3 you are absent.png',
    hotspots: [
      { top: '5%', left: '75%', width: '20%', height: '8%', target: 'emergency', label: 'Emergency' },
    ]
  },
  {
    id: 'you-are-tardy',
    label: 'You Are Tardy',
    img: 'screens/app/3.4 you are tardy.png',
    hotspots: [
      { top: '80%', left: '10%', width: '80%', height: '8%', target: 'learning-check', label: 'Continue' },
    ]
  },
  {
    id: 'emergency',
    label: '🚨 Emergency Mode',
    img: 'screens/app/3.5 emergency mode.png',
    hotspots: [
      { top: '80%', left: '10%', width: '80%', height: '8%', target: 'you-are-present', label: 'Return to Present' },
    ]
  },

  // ── LEARNING CHECKS ──
  {
    id: 'learning-check',
    label: 'Learning Check',
    img: 'screens/app/4.0 learning check.png',
    hotspots: [
      { top: '40%', left: '5%', width: '90%', height: '10%', target: 'answer-selected', label: 'Select answer A' },
      { top: '52%', left: '5%', width: '90%', height: '10%', target: 'answer-selected', label: 'Select answer B' },
      { top: '64%', left: '5%', width: '90%', height: '10%', target: 'answer-selected', label: 'Select answer C' },
      { top: '76%', left: '5%', width: '90%', height: '10%', target: 'answer-selected', label: 'Select answer D' },
    ]
  },
  {
    id: 'answer-selected',
    label: 'Answer Selected',
    img: 'screens/app/4.1 selected question.png',
    hotspots: [
      { top: '88%', left: '10%', width: '80%', height: '8%', target: 'correct-answer', label: 'Submit' },
    ]
  },
  {
    id: 'correct-answer',
    label: 'Correct! ✓',
    img: 'screens/app/4.3 correct answer.png',
    hotspots: [
      { top: '88%', left: '10%', width: '80%', height: '8%', target: 'results-view', label: 'See Results' },
    ]
  },
  {
    id: 'incorrect-answer',
    label: 'Incorrect ✗',
    img: 'screens/app/4.2 incorrect answer.png',
    hotspots: [
      { top: '88%', left: '10%', width: '80%', height: '8%', target: 'results-view', label: 'See Results' },
    ]
  },

  // ── RESULTS ──
  {
    id: 'results-view',
    label: 'Results Overview',
    img: 'screens/app/5.0 Results view.png',
    hotspots: [
      { top: '35%', left: '5%', width: '90%', height: '12%', target: 'results-correct', label: 'Correct responses' },
      { top: '50%', left: '5%', width: '90%', height: '12%', target: 'results-incorrect', label: 'Incorrect responses' },
      { top: '10%', left: '70%', width: '25%', height: '8%', target: 'results-dropdown', label: 'Filter' },
    ]
  },
  {
    id: 'results-dropdown',
    label: 'Results Filter',
    img: 'screens/app/5.3 Results class dropdown.png',
    hotspots: [
      { top: '40%', left: '5%', width: '90%', height: '8%', target: 'results-view', label: 'All' },
      { top: '50%', left: '5%', width: '90%', height: '8%', target: 'results-correct', label: 'Correct only' },
      { top: '60%', left: '5%', width: '90%', height: '8%', target: 'results-incorrect', label: 'Incorrect only' },
    ]
  },
  {
    id: 'results-correct',
    label: 'Correct Responses',
    img: 'screens/app/5.5 Results class_correct.png',
    hotspots: [
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'results-view', label: 'Back' },
    ]
  },
  {
    id: 'results-incorrect',
    label: 'Incorrect Responses',
    img: 'screens/app/5.6 Results class_incorrect.png',
    hotspots: [
      { top: '5%', left: '5%', width: '15%', height: '8%', target: 'results-view', label: 'Back' },
    ]
  },

  // ── TEMPERATURE CHECK ──
  {
    id: 'temp-check',
    label: 'Temperature Check',
    img: 'screens/app/7.0 temperature check_default.png',
    hotspots: [
      { top: '30%', left: '5%', width: '90%', height: '12%', target: 'you-are-present', label: '😊 Totally get it' },
      { top: '44%', left: '5%', width: '90%', height: '12%', target: 'you-are-present', label: '🙂 Mostly there' },
      { top: '58%', left: '5%', width: '90%', height: '12%', target: 'you-are-present', label: '😐 Kind of following' },
      { top: '72%', left: '5%', width: '90%', height: '12%', target: 'you-are-present', label: '😕 Getting lost' },
    ]
  },
];

// Current screen state
let currentStudentScreen = 'splash';

function renderStudentScreen(screenId) {
  const screen = STUDENT_SCREENS.find(s => s.id === screenId);
  if (!screen) {
    console.warn('Screen not found:', screenId);
    return;
  }
  currentStudentScreen = screenId;

  const phoneScreen = document.getElementById('phone-screen');
  const screenLabel = document.getElementById('screen-label');
  if (!phoneScreen) return;

  // Clear existing content
  phoneScreen.innerHTML = '';

  // Background image
  const img = document.createElement('img');
  img.src = screen.img;
  img.className = 'screen-bg';
  img.alt = screen.label;
  phoneScreen.appendChild(img);

  // Add hotspots
  screen.hotspots.forEach(h => {
    const hotspot = document.createElement('div');
    hotspot.className = 'hotspot';
    hotspot.style.top = h.top;
    hotspot.style.left = h.left;
    hotspot.style.width = h.width;
    hotspot.style.height = h.height;
    hotspot.title = h.label;
    hotspot.addEventListener('click', () => renderStudentScreen(h.target));
    phoneScreen.appendChild(hotspot);
  });

  // Update label
  if (screenLabel) screenLabel.textContent = screen.label;

  // Update URL for bookmarkability
  const url = new URL(window.location);
  url.searchParams.set('screen', screenId);
  history.replaceState(null, '', url);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const initial = params.get('screen') || 'splash';
  if (document.getElementById('phone-screen')) {
    renderStudentScreen(initial);
  }
});
