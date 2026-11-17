/* =====================================================================
   EDIT ONLY THIS FILE. The whole site is built from it.
   Photos go in /images. Use paths like "images/p1.jpg".
   Leave any image as "" and a placeholder is shown instead.
   ===================================================================== */
window.SITE = {
  name: "Your Name",
  role: "Your Role",                        // used in the page title
  description: "One sentence about your work, used for search results and link previews.",
  intro: "One short line about what you make and how it feels.",

  /* Big statement under the name. {img} becomes a small inline photo. */
  statement: "Your Name is a your role born in City, Country, {img} who has been working independently since 2022.",
  statementImg: "",                         // e.g. "images/me.jpg"

  about: {
    text: [
      "Write two or three short paragraphs about you, how you work and what you care about.",
      "A second paragraph can cover your background and who you like to work with."
    ],
    recognition: "Your work has earned recognition from publications and awards.",
    awards: ["3× Award name", "2× Another award", "1× Publication feature"],
    services: ["Service one", "Service two", "Service three"],
    portrait: ""
  },

  availableFrom: "01/2027",                 // set to "" to hide
  email: "hello@example.com",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "LinkedIn",  url: "https://www.linkedin.com/" },
    { label: "Behance",   url: "https://www.behance.net/" }
  ],
  credit: { label: "Design: Your Designer", url: "" },   // set label to "" to hide

  /* One entry per project, newest first.
     id: lowercase letters, numbers, hyphens.
     url: optional. If set, the row opens that link instead of a project page.
     cover: image shown when you hover the row. */
  projects: [
    { id: "project-one",   name: "Project One",   with: "Collaborator (Design)", year: 2026, cover: "", url: "",
      text: "A short description of the brief, your role and the result.", images: ["", "", ""] },
    { id: "project-two",   name: "Project Two",   with: "Collaborator (Design)", year: 2026, cover: "", url: "",
      text: "A short description of the brief, your role and the result.", images: ["", "", ""] },
    { id: "project-three", name: "Project Three", with: "", year: 2025, cover: "", url: "",
      text: "A short description of the brief, your role and the result.", images: ["", ""] },
    { id: "project-four",  name: "Project Four",  with: "Collaborator (Design)", year: 2025, cover: "", url: "",
      text: "A short description of the brief, your role and the result.", images: ["", ""] },
    { id: "project-five",  name: "Project Five",  with: "Collaborator (Design)", year: 2024, cover: "", url: "",
      text: "A short description of the brief, your role and the result.", images: ["", ""] }
  ]
};
