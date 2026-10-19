// ================================================
// CV - the downloadable CV (Danish site -> Danish CV, English site -> English CV).
// The PDFs are made from the HTML files in the "cv" folder next to the sites:
//   1. change cv/cv-da.html or cv/cv-en.html
//   2. run:  node --experimental-websocket make-pdf.mjs   (inside the cv folder)
//   3. copy cv-da.pdf + cv-en.pdf into src/assets/cv/ of both sites
// ================================================
import cvDa from '../assets/cv/cv-da.pdf?url'
import cvEn from '../assets/cv/cv-en.pdf?url'

export const cv = {
  da: { file: cvDa, name: 'Amir-Skoric-CV-DA.pdf', label: 'Download CV' },
  en: { file: cvEn, name: 'Amir-Skoric-CV-EN.pdf', label: 'Download CV' },
}
