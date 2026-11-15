/* Year 2 course routes transcribed from the supplied September 2026 progression sheets. Section counts were not supplied. */
const courseCatalog = [
  {
    "id": "NMM 2270A",
    "name": "Applied Mathematics for Engineering II",
    "term": "A",
    "color": "#a86316",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "CS 1027A",
    "name": "Computer Science Fundamentals II",
    "term": "A",
    "color": "#c25e23",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "ECE 2205A",
    "name": "Electric Circuits I",
    "term": "A",
    "color": "#197c92",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "ECE 2277A",
    "name": "Digital Logic Systems",
    "term": "A",
    "color": "#ac4936",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "ECE 2240A",
    "name": "Electrical Laboratory",
    "term": "A",
    "color": "#417b4b",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "WRIT 2130F",
    "name": "Building Better (Communication) Bridges: Rhetoric & Professional Communication for Engineers",
    "term": "A",
    "color": "#a86316",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "WRIT 2130G",
    "name": "Building Better (Communication) Bridges: Rhetoric & Professional Communication for Engineers",
    "term": "B",
    "color": "#417b4b",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "NMM 2276B",
    "name": "Applied Mathematics for Electrical & Mechanical Engineering III",
    "term": "B",
    "color": "#c25e23",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "ECE 2231B",
    "name": "Introduction to Electronics",
    "term": "B",
    "color": "#197c92",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "ECE 2233B",
    "name": "Circuits and Systems",
    "term": "B",
    "color": "#ac4936",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "ECE 2236B",
    "name": "Magnetic Circuits and Transmission Lines",
    "term": "B",
    "color": "#417b4b",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "ECE 2242B",
    "name": "Principles of Design in Electrical Engineering",
    "term": "B",
    "color": "#a86316",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "AISE 2205A",
    "name": "Algorithms and Data Structures",
    "term": "A",
    "color": "#c25e23",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "SS 2143B",
    "name": "Applied Probability and Statistics",
    "term": "B",
    "color": "#197c92",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "AISE 2251B",
    "name": "Software Design for Systems Engineering",
    "term": "B",
    "color": "#ac4936",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "BME 3201A",
    "name": "Fundamentals of Biomedical Engineering Design",
    "term": "A",
    "color": "#a86316",
    "sectionCount": null,
    "year": 2
  },
  {
    "id": "BUS 2257",
    "name": "Accounting & Business Analysis",
    "term": "AB",
    "color": "#c25e23",
    "sectionCount": null,
    "year": 2
  }
];
const routeCatalog = {
  "base": {
    "label": "Electrical Engineering",
    "courses": [
      "NMM 2270A",
      "CS 1027A",
      "ECE 2205A",
      "ECE 2277A",
      "ECE 2240A",
      "WRIT 2130F",
      "NMM 2276B",
      "ECE 2231B",
      "ECE 2233B",
      "ECE 2236B",
      "ECE 2242B"
    ],
    "note": "Option A \u00b7 Year 2. Use the Writing checkboxes to show the semester you are taking."
  },
  "aise": {
    "label": "Electrical + AISE",
    "courses": [
      "NMM 2270A",
      "AISE 2205A",
      "ECE 2277A",
      "ECE 2240A",
      "ECE 2205A",
      "NMM 2276B",
      "SS 2143B",
      "AISE 2251B",
      "ECE 2236B",
      "ECE 2233B",
      "WRIT 2130G"
    ],
    "note": "Option M \u00b7 Year 2. Writing is listed under Term B; use the Writing checkboxes for your registered semester."
  },
  "bme": {
    "label": "Electrical + BME",
    "courses": [
      "NMM 2270A",
      "CS 1027A",
      "ECE 2205A",
      "ECE 2277A",
      "ECE 2240A",
      "NMM 2276B",
      "ECE 2231B",
      "ECE 2233B",
      "ECE 2236B",
      "ECE 2242B",
      "BME 3201A"
    ],
    "note": "Electrical + Biomedical Engineering \u00b7 Year 2. Also choose one 0.5-credit non-technical elective in Term B using Add course."
  },
  "ivey": {
    "label": "Electrical + Business",
    "courses": [
      "NMM 2270A",
      "CS 1027A",
      "ECE 2205A",
      "ECE 2277A",
      "ECE 2240A",
      "NMM 2276B",
      "ECE 2231B",
      "ECE 2233B",
      "ECE 2236B",
      "ECE 2242B",
      "BUS 2257"
    ],
    "note": "Option B \u00b7 Year 2. BUS 2257 runs through Terms A and B. This preset follows the Business progression sheet; it does not determine AEO or HBA admission status."
  }
};
