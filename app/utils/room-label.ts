import { seededRandom } from "./seed-random";

const rooms = [
  "Al-Khwarizmi", // Father of Algebra (Algorithms)
  "Ibn-Sina",      // Avicenna (Medicine/Philosophy)
  "Al-Jazari",    // Father of Robotics/Engineering
  "Ibn-Haytham",  // Alhazen (Father of Optics)
  "Al-Biruni",    // Polymath (Astronomy/Physics)
  "Al-Razi",      // Rhazes (Chemistry/Medicine)
  "Ibn-Khaldun",  // Father of Sociology
  "Ibn-Rushd",    // Averroes (Logic/Philosophy)
  "Al-Kindi",     // Philosopher of the Arabs
  "Ibn-Battuta",  // Famous Explorer
  "Al-Ghazali",   // Great Thinker/Theologian
  "Al-Farabi",    // Second Teacher (Logic/Music)
  "Umar-Khayyam", // Mathematician/Poet
  "Al-Zahrawi",   // Father of Modern Surgery
  "Ibn-Tufail",   // Philosopher/Novelist
  "Al-Idrisi",    // Great Cartographer (Maps)
  "Ibn-Bajjah",   // Avempace (Physics/Psychology)
  "Al-Majriti",   // Astronomer/Chemist
  "Ibn-Nafis",    // Discovery of Blood Circulation
  "Hikmah",       // Meaning: Wisdom
  "Noor",         // Meaning: Light
  "Qalam",        // Meaning: Pen/Knowledge
  "Mizan",        // Meaning: Balance/Scale
  "Fikr",         // Meaning: Deep Thought
  "Ufuq",         // Meaning: Horizon
  "Siraat",       // Meaning: Path
  "Adal",         // Meaning: Justice
  "Ihsan",        // Meaning: Excellence
  "Yaqeen",       // Meaning: Certainty
  "Sabr",         // Meaning: Patience
  "Shukr",        // Meaning: Gratitude
  "Baitul-Hikmah",// House of Wisdom
  "Cordoba",      // Historical Center of Learning
  "Baghdad",      // City of Science
  "Andalus",      // Symbol of Culture
  "Samarkand",    // Historic Science Hub
  "Zaituna",      // Growth/Knowledge
];

export const getRoomLabel = (id: string) => seededRandom(id, rooms);

export const isRoomLabel = (name: string) => rooms.includes(name);
