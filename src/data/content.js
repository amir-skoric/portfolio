// ================================================
// CONTENT - change your words HERE only.
// Every text has a "da" (Danish) and "en" (English) version.
// ================================================

export const content = {
  // Words for the menu (sidebar, and the top bar on phones)
  pages: {
    da: { menu: 'Menu', close: 'Luk', top: 'Til toppen' },
    en: { menu: 'Menu', close: 'Close', top: 'Back to the top' },
  },

  // The top of the sidebar
  hero: {
    name: 'Amir Skoric',
    da: {
      role: 'Webudvikler',
      place: 'Kolding, Danmark',
      now: 'Læser Cand.it på SDU',
      intro: 'Jeg bygger brugervenlige hjemmesider med fokus på god UX og et skarpt visuelt udtryk.',
    },
    en: {
      role: 'Web developer',
      place: 'Kolding, Denmark',
      now: 'Studying Cand.it at SDU',
      intro: 'I build user-friendly websites with a focus on good UX and a sharp visual style.',
    },
  },

  about: {
    da: {
      title: 'Om mig',
      more: 'Læs mere',
      less: 'Vis mindre',
      paragraphs: [
        'Jeg hedder Amir, er 26 år og bor i Kolding. Jeg er uddannet webudvikler og multimediedesigner, og lige nu læser jeg Cand.it i Web Communication & Design på SDU.',
        'Jeg kan lide at bygge løsninger, der er nemme og rare at bruge. Jeg arbejder med HTML, CSS og JavaScript og kender frameworks som React og Vue godt. Med min baggrund i design går jeg lige så meget op i, hvordan tingene ser ud, som hvordan de virker – en baggrund, jeg har designet i Photoshop, er endda blevet brugt af YouTuberen "danooct1".',
        'Mine forældre er fra Bosnien, men jeg er født og opvokset i Danmark. Jeg er meget teknisk anlagt og føler mig hjemme bag en computer, og når en kollega støder på et teknisk problem, hjælper jeg gerne med at finde en løsning. Mit mål er at arbejde som frontend-udvikler.',
        'Chiptune er en af mine største hobbyer: musik lavet med lydchippene fra gamle konsoller som NES og Game Boy. Jeg laver mine egne 8-bit numre, og du kan høre dem i afspilleren her på siden – det er også derfor, hele siden har et 8-bit look. For nylig fik jeg endelig fat i en rigtig NES. Nu mangler jeg bare nogle spil til den, så indtil videre ser den mest godt ud på hylden.',
        'Jeg elsker også gaming, især konkurrenceprægede spil. Jeg går altid efter at være den bedste spiller på serveren. Det lykkes ikke hver gang, men jeg giver den alt, hvad jeg har – og den samme gejst tager jeg med ind i mit arbejde.',
      ],
      stats: [
        ['Alder', '26'],
        ['Uddannelse', 'PBA i webudvikling'],
        ['Studerer', 'Cand.it, SDU'],
        ['Mål', 'Frontend'],
      ],
    },
    en: {
      title: 'About me',
      more: 'Read more',
      less: 'Show less',
      paragraphs: [
        'I’m Amir, I’m 26 and I live in Kolding. I’m a trained web developer and multimedia designer, and right now I’m studying for a master’s (Cand.it) in Web Communication & Design at SDU.',
        'I like building things that are easy and pleasant to use. I work with HTML, CSS and JavaScript and know my way around frameworks like React and Vue. With my background in design, I care just as much about how things look as how they work – a background I designed in Photoshop was even used by the YouTuber "danooct1".',
        'My parents are from Bosnia, but I was born and raised in Denmark. I’m very tech-savvy and feel right at home behind a computer, and when a colleague runs into a technical problem, I’m always happy to help find a solution. My goal is to work as a frontend developer.',
        'Chiptune is one of my biggest hobbies: music made with the sound chips of old consoles like the NES and the Game Boy. I make my own 8-bit tracks, and you can listen to them in the player on this page – that’s also why the whole site has an 8-bit look. I recently got my hands on a real NES. Now I just need some games for it, so for now it mostly looks great on the shelf.',
        'I also love gaming, especially competitive games. I always aim to be the best player on the server. It doesn’t happen every time, but I give it everything I’ve got – and I bring that same drive to my work.',
      ],
      stats: [
        ['Age', '26'],
        ['Degree', 'BA in web development'],
        ['Studying', 'Cand.it, SDU'],
        ['Goal', 'Frontend'],
      ],
    },
  },

  // Skills, based on your GitHub repos + internships. Shown as logos under the experience timeline.
  // Each word is a logo from src/data/logos.js (name + Font Awesome icon).
  skills: {
    da: { title: 'Kompetencer & værktøjer' },
    en: { title: 'Skills & tools' },
    groups: [
      { title: 'Frontend', items: ['html', 'css', 'sass', 'js', 'react', 'vue', 'tailwind'] },
      { title: { da: 'Backend & data', en: 'Backend & data' }, items: ['node', 'mongodb', 'firebase'] },
      { title: 'WordPress', items: ['wordpress', 'php', 'gutenberg', 'acf', 'woocommerce'] },
      { title: { da: 'Design & medier', en: 'Design & media' }, items: ['photoshop', 'illustrator', 'xd', 'blender', 'davinci', 'music'] },
      { title: { da: 'Værktøjer', en: 'Tools' }, items: ['git', 'github', 'vite', 'eslint', 'vercel', 'cloudinary', 'axios', 'router', 'handlebars', 'seo'] },
    ],
  },

  // "Skills & experience" section: job timeline on the left, skills panel on the right.
  experience: {
    da: { title: 'Kompetencer & erfaring' },
    en: { title: 'Skills & experience' },
    // Shown as a timeline, newest first.
    items: [
      {
        company: 'BestofOnline / LokalNyt',
        period: { da: 'Okt – Dec 2024', en: 'Oct – Dec 2024' },
        role: { da: 'Praktikant', en: 'Intern' },
        place: 'Middelfart',
        points: ['Gutenberg React blocks', { da: 'Grafisk design (ad hoc)', en: 'Graphic design (ad hoc)' }, 'WordPress, Divi, Elementor'],
        skills: ['React', 'Gutenberg blocks', 'WordPress / PHP', 'Photoshop'], // shown as tags under the job
      },
      {
        company: 'StepUp Media',
        period: { da: 'Maj – Jun 2024', en: 'May – Jun 2024' },
        role: { da: 'Praktikant', en: 'Intern' },
        place: 'Kolding',
        points: ['PHP WordPress', 'Advanced Custom Fields', 'Formidable', 'Gutenberg Blocks', 'HTML, CSS (SASS), JavaScript'],
        skills: ['HTML', 'CSS / SASS', 'JavaScript', 'WordPress / PHP', 'Gutenberg blocks', 'ACF / Formidable'], // shown as tags under the job
      },
      {
        company: 'Wetap',
        period: 'Aug – Nov 2023',
        role: { da: 'Praktikant', en: 'Intern' },
        place: 'Kolding',
        points: ['SEO (Mangools)', 'WooCommerce', 'Photoshop, Blender, DaVinci Resolve', { da: 'Vedligeholdelse af WordPress webshop', en: 'Maintaining a WordPress webshop' }],
        skills: ['WordPress / PHP', 'WooCommerce', 'Photoshop', 'Blender / DaVinci Resolve'], // shown as tags under the job
      },
      {
        company: 'GoHosting',
        period: { da: 'Feb – Maj 2022', en: 'Feb – May 2022' },
        role: { da: 'Praktikant', en: 'Intern' },
        place: 'Kolding',
        points: ['Adobe XD', { da: 'Salgsbrochure (grafisk design)', en: 'Sales brochure (graphic design)' }, 'Photoshop, Illustrator'],
        skills: ['Illustrator / Adobe XD', 'Photoshop'], // shown as tags under the job
      },
      {
        company: 'Netto, Salling Group',
        period: 'Mar – Nov 2017',
        role: { da: 'Butiksmedarbejder', en: 'Store assistant' },
        place: 'Rønne',
        points: [{ da: 'Kundebetjening', en: 'Customer service' }, 'Trimming', { da: 'Rengøring', en: 'Cleaning' }],
      },
    ],
  },

  education: {
    da: { title: 'Uddannelse', now: 'I gang' },
    en: { title: 'Education', now: 'In progress' },
    items: [
      { school: 'SDU Syddansk Universitet, Kolding', name: 'Cand.it Web Communication & Design', years: '2025 – 2027', current: true },
      { school: 'IBA Erhvervsakademi Kolding', name: { da: 'Webudvikling', en: 'Web development' }, years: '2022 – 2024' },
      { school: 'IBA Erhvervsakademi Kolding', name: { da: 'Multimediedesigner', en: 'Multimedia designer' }, years: '2020 – 2022' },
      { school: 'Campus Bornholm, HTX', name: 'Computer science', years: '2017 – 2020' },
    ],
  },

  projects: {
    da: { title: 'Udvalgt case', visit: 'Besøg siden', code: 'Kode' },
    en: { title: 'Featured case', visit: 'Visit site', code: 'Code' },
    items: [
      {
        name: 'Kold Festival',
        image: 'kold', // picture from src/assets (see Projects.jsx)
        award: { da: 'Vinder · bedste hjemmeside', en: 'Winner · best website' },
        meta: { da: 'IBA Erhvervsakademi Kolding · 1. semester', en: 'IBA Erhvervsakademi Kolding · 1st semester' },
        text: {
          da: 'Vores gruppe vandt prisen for bedste hjemmeside, da vores klasse lavede en ny side til Kolding Festival – bygget fra bunden i tæt samarbejde med festivalen.',
          en: 'Our group won best website when our class made a new site for Kolding Festival – built from scratch, together with the festival.',
        },
        tags: ['Vue 3', 'Vite', 'Tailwind CSS', 'Node'],
        site: 'https://www.koldfestival.dk/',
        code: 'https://github.com/andersravn32/kold-festival/',
      },
    ],
  },

  // "Projects" section: apps you can try right on the page (shown in a phone frame).
  apps: {
    da: { title: 'Projekter', open: 'Åbn appen', loading: 'Åbner…', close: 'Luk', prev: 'Forrige skærm', next: 'Næste skærm', design: 'Se designet', code: 'Kode', more: 'Flere projekter', soon: 'Kommer snart', view: 'Se projekt', readMore: 'Læs mere', readLess: 'Vis mindre', shots: 'Se skærmbilleder' },
    en: { title: 'Projects', open: 'Open the app', loading: 'Opening…', close: 'Close', prev: 'Previous screen', next: 'Next screen', design: 'See the design', code: 'Code', more: 'More projects', soon: 'Coming soon', view: 'See project', readMore: 'Read more', readLess: 'Show less', shots: 'See screenshots' },
    // One list of project cards, most impressive first (the featured case, Kold Festival, is shown above them).
    // To add a project: copy a block below and change the text. Useful fields:
    //   app: 'name'     the card picture and the live demo (see the "apps" list in Apps.jsx)
    //   image: 'name'   only a picture (the "images" list in Apps.jsx)
    //   link / code     "See project" / "Code" buttons
    //   details         the longer text under "Read more": sections with a title and a text or a list
    items: [
      {
        name: 'Webshop Builder',
        label: { da: 'Bachelorprojekt · 2023', en: 'Bachelor project · 2023' },
        meta: { da: 'IBA Erhvervsakademi Kolding · Webudvikling · nov.–dec. 2023', en: 'IBA Erhvervsakademi Kolding · Web development · Nov–Dec 2023' },
        text: {
          da: 'Mit bachelorprojekt: byg dine egne webshops med produkter, kategorier, kurv og checkout.',
          en: 'My bachelor project: build your own webshops with products, categories, a cart and a checkout.',
        },
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'REST API'],
        app: 'webshop', // card picture + demo, see Apps.jsx
        // names of the screenshots in the zoom (same order as the pictures in Apps.jsx)
        screens: [
          { da: 'Webshoppens forside med banner', en: 'The webshop’s front page with its banner' },
          { da: 'Produkter og kategorier', en: 'Products and categories' },
          { da: 'En produktside', en: 'A product page' },
          { da: 'Checkout', en: 'Checkout' },
          { da: 'Dashboard med dine webshops', en: 'Dashboard with your webshops' },
          { da: 'Redigér webshoppen', en: 'Editing the webshop' },
        ],
        code: 'https://github.com/amir-skoric/webshop-bachelor',
        // the longer story, shown under "Read more"
        details: [
          {
            title: { da: 'Om projektet', en: 'About the project' },
            text: {
              da: 'Mit bachelorprojekt i webudvikling: et lille CMS, hvor man opretter en konto og bygger sine egne webshops – med navn, beskrivelse, farve og bannerbillede, produkter med billeder og priser, og kategorier. Hver webshop får sin egen offentlige side med kategorifilter, sortering efter pris, produktsider, kurv og checkout.',
              en: 'My bachelor project in web development: a small CMS where you create an account and build your own webshops – with a name, description, colour and banner image, products with pictures and prices, and categories. Every webshop gets its own public page with a category filter, sorting by price, product pages, a cart and a checkout.',
            },
          },
          {
            title: { da: 'Det kan man', en: 'What you can do' },
            list: [
              { da: 'Oprette en konto og logge ind. Formularerne tjekkes med React Hook Form, kodeord gemmes som bcrypt-hash, og man bliver logget ud efter 20 minutter uden aktivitet.', en: 'Create an account and log in. The forms are checked with React Hook Form, passwords are stored as bcrypt hashes, and you are logged out after 20 minutes without activity.' },
              { da: 'Dashboard: se sine webshops (navn, beskrivelse, farve, antal produkter og dato), oprette nye, redigere og slette dem – og slette sin bruger, som også fjerner alle ens webshops og produkter.', en: 'Dashboard: see your webshops (name, description, colour, number of products and date), create new ones, edit and delete them – and delete your user, which also removes all your webshops and products.' },
              { da: 'Oprette en webshop med bannerbillede, som uploades til Cloudinary. Navnet skal være unikt, fordi det også er webshoppens adresse.', en: 'Create a webshop with a banner image that is uploaded to Cloudinary. The name must be unique, because it is also the webshop’s address.' },
              { da: 'Redigeringssiden: ændre oplysninger og banner, tilføje, redigere og slette produkter, og lave kategorier ved at sætte flueben ved produkterne.', en: 'The edit page: change the details and banner, add, edit and delete products, and make categories by ticking the products.' },
              { da: 'Den offentlige webshop: banner, "Om os", kategorier, sortering efter pris, produktsider med serienummer, "Læg i kurv" / "Køb nu" og en checkout med antal, fjern-knap og samlet pris. Ejeren ser en admin-bjælke øverst.', en: 'The public webshop: banner, "About us", categories, sorting by price, product pages with a serial number, "Add to cart" / "Buy now" and a checkout with quantities, a remove button and the total price. The owner sees an admin bar at the top.' },
            ],
          },
          {
            title: { da: 'Sådan er det bygget', en: 'How it is built' },
            list: [
              { da: 'Frontend: React 18 med Vite, React Router, Axios og React Hook Form. Hver komponent har sin egen CSS-fil.', en: 'Frontend: React 18 with Vite, React Router, Axios and React Hook Form. Every component has its own CSS file.' },
              { da: 'Backend: et REST API i Node.js og Express med 17 routes til login, webshops, kategorier og produkter, og et middleware, der tjekker om man er logget ind.', en: 'Backend: a REST API in Node.js and Express with 17 routes for login, webshops, categories and products, plus a middleware that checks that you are logged in.' },
              { da: 'Database: MongoDB med Mongoose (brugere, webshops med kategorier indeni, og produkter). Login-sessionen gemmes også i MongoDB med express-session og connect-mongo.', en: 'Database: MongoDB with Mongoose (users, webshops with their categories inside, and products). The login session is also stored in MongoDB with express-session and connect-mongo.' },
              { da: 'Billeder uploades direkte fra browseren til Cloudinary – kun linket gemmes i databasen.', en: 'Pictures are uploaded straight from the browser to Cloudinary – only the link is saved in the database.' },
              { da: 'Klient og server blev lagt online hver for sig. Login-cookien sendes mellem to domæner, og derfor skal det køre over HTTPS (det står også i README’en).', en: 'The client and the server were put online separately. The login cookie is sent between two domains, which is why it must run over HTTPS (the README says so too).' },
            ],
          },
          {
            title: { da: 'Forløbet (fra commit-historikken)', en: 'How it went (from the commit history)' },
            list: [
              { da: '14.–16. nov.: projektet sat op, fejlhåndtering, validering af formularer og en 404-side.', en: '14–16 Nov: project set up, error handling, form validation and a 404 page.' },
              { da: '18.–22. nov.: forbindelse til databasen, loading-spinnere og den første version af "opret webshop".', en: '18–22 Nov: connection to the database, loading spinners and the first version of "create a webshop".' },
              { da: '30. nov.: hver webshop får sin egen adresse.', en: '30 Nov: every webshop gets its own address.' },
              { da: '3.–5. dec.: slet webshop, upload af bannerbillede og design af webshop-siderne.', en: '3–5 Dec: deleting webshops, banner image upload and the design of the webshop pages.' },
              { da: '7.–11. dec.: produkter, kategorier, sortering, produktsiden, kurven og checkout.', en: '7–11 Dec: products, categories, sorting, the product page, the cart and the checkout.' },
              { da: '12.–14. dec.: redigering af produkter, serveren delt op i routes, models og middleware, bedre fejl for webshops og produkter, der ikke findes, README og de sidste UX-rettelser.', en: '12–14 Dec: editing products, the server split into routes, models and middleware, better errors for webshops and products that don’t exist, the README and the last UX tweaks.' },
            ],
          },
          {
            title: { da: 'Ikke færdigt', en: 'Not finished' },
            list: [
              { da: 'Siden er bygget til computer og fungerer ikke godt på mobil – det nåede jeg ikke på grund af tidspres.', en: 'The site is built for desktop and doesn’t work well on mobile – I didn’t get to it because of time constraints.' },
              { da: 'Man kan ikke redigere en kategori – knappen er der, men funktionen nåede jeg ikke.', en: 'You can’t edit a category – the button is there, but I didn’t get to the feature.' },
              { da: 'Billeder bliver ikke slettet fra Cloudinary, når en webshop eller et produkt slettes.', en: 'Pictures are not deleted from Cloudinary when a webshop or a product is deleted.' },
              { da: 'Checkout viser kurven og prisen, men der er ingen rigtig betaling.', en: 'The checkout shows the cart and the price, but there is no real payment.' },
            ],
          },
          {
            title: { da: 'Om demoen', en: 'About the demo' },
            text: {
              da: 'Demoen her bruger en mock-backend i stedet for Express, MongoDB og Cloudinary: alle forespørgsler bliver besvaret direkte i din browser med de samme routes, statuskoder og beskeder som den rigtige server, og data gemmes kun hos dig. Log ind med demo@demo.dk / demo1234, eller lav din egen konto. "Reset demo" sætter alt tilbage. Demoen har også et par små rettelser, markeret med "DEMO" i koden: slet-knappen på dashboardet virkede ikke, checkout talte samme vare med to gange, og når man gemte et produkt med nyt billede, endte man på en side, der ikke fandtes. Koden på GitHub er uændret.',
              en: 'This demo uses a mock backend instead of Express, MongoDB and Cloudinary: every request is answered right in your browser with the same routes, status codes and messages as the real server, and the data is only saved on your device. Log in with demo@demo.dk / demo1234, or make your own account. "Reset demo" puts everything back. The demo also has a few small fixes, marked "DEMO" in the code: the delete button on the dashboard didn’t work, the checkout counted the same item twice, and saving a product with a new picture took you to a page that didn’t exist. The code on GitHub is unchanged.',
            },
          },
        ],
      },
      {
        name: { da: 'Twitter-klon', en: 'Twitter clone' },
        label: { da: 'Frit valgt projekt · 2023', en: 'Free-choice project · 2023' },
        meta: { da: 'IBA Erhvervsakademi Kolding · Webudvikling · maj 2023', en: 'IBA Erhvervsakademi Kolding · Web development · May 2023' },
        text: {
          da: 'En Twitter-klon med tweets, billeder, likes og kommentarer, der opdateres live – min første app med React og Firebase.',
          en: 'A Twitter clone with tweets, pictures, likes and comments that update live – my first React + Firebase app.',
        },
        tags: ['React', 'Firebase', 'Firestore', 'Tailwind CSS', 'React Router'],
        app: 'twitter',
        // names of the screenshots in the zoom (same order as the pictures in Apps.jsx)
        screens: [
          { da: 'Feedet og nyt tweet', en: 'The feed and a new tweet' },
          { da: 'Tweets med billeder, likes og kommentarer', en: 'Tweets with pictures, likes and comments' },
          { da: 'En brugers profil', en: 'A user’s profile' },
          { da: 'Indstillinger', en: 'Settings' },
          { da: 'Log ind', en: 'Log in' },
        ],
        code: 'https://github.com/amir-skoric/twitter-clone',
        details: [
          {
            title: { da: 'Om projektet', en: 'About the project' },
            text: {
              da: 'I et projekt, hvor vi selv måtte vælge, lavede jeg en Twitter-klon for at lære React og Firebase, som jeg aldrig havde brugt før. Man kan oprette en konto, poste tweets med eller uden billede, like, kommentere, se andres profiler og skifte profilbillede – og alt opdateres live uden at genindlæse siden.',
              en: 'In a project where we could choose anything, I made a Twitter clone to learn React and Firebase, which I had never used before. You can create an account, post tweets with or without a picture, like, comment, look at other people’s profiles and change your profile picture – and everything updates live without reloading the page.',
            },
          },
          {
            title: { da: 'Problemformulering', en: 'Problem statement' },
            text: { da: '"Hvordan kan jeg udvikle en Twitter-klon med React JS og Firebase?" Vi havde helt frie hænder (så længe det handlede om webudvikling), og jeg valgte to værktøjer, jeg aldrig havde prøvet før.', en: '"How can I develop a Twitter clone using React JS and Firebase?" We had completely free hands (as long as it was about web development), and I picked two tools I had never tried before.' },
          },
          {
            title: { da: 'Det kan man', en: 'What you can do' },
            list: [
              { da: 'Oprette en konto og logge ind med e-mail og kodeord (Firebase Authentication). Siderne er beskyttet, så man kun ser feedet, når man er logget ind.', en: 'Create an account and log in with e-mail and password (Firebase Authentication). The pages are protected, so you only see the feed when you are logged in.' },
              { da: 'Poste tweets på op til 280 tegn, med eller uden billede (gemt i Firebase Storage). Datoen skrives på dansk.', en: 'Post tweets of up to 280 characters, with or without a picture (stored in Firebase Storage). The date is written in Danish.' },
              { da: 'Like og fjerne like (hjertet bliver rødt), skrive kommentarer og slette sine egne tweets – billedet slettes også fra Storage.', en: 'Like and unlike (the heart turns red), write comments and delete your own tweets – the picture is deleted from Storage too.' },
              { da: 'Klikke på et profilbillede og se alle tweets fra den bruger.', en: 'Click a profile picture to see all tweets from that user.' },
              { da: 'Indstillinger: nyt profilbillede (også på ens gamle tweets), e-mail til at nulstille kodeord, slette kontoen (med ens tweets og likes) og logge ud.', en: 'Settings: a new profile picture (also on your old tweets), an e-mail to reset your password, deleting your account (with your tweets and likes) and signing out.' },
              { da: 'Feedet opdateres live med Firestores onSnapshot, så nye tweets, likes og kommentarer dukker op med det samme.', en: 'The feed updates live with Firestore’s onSnapshot, so new tweets, likes and comments show up right away.' },
            ],
          },
          {
            title: { da: 'Sådan er det bygget', en: 'How it is built' },
            list: [
              { da: 'React 18 med Vite, React Router 6 og Tailwind CSS.', en: 'React 18 with Vite, React Router 6 and Tailwind CSS.' },
              { da: 'Context API til login (AuthContext) og til alle tweets (TweetContext), så alle komponenter kan bruge dem.', en: 'The Context API for the login (AuthContext) and for all tweets (TweetContext), so every component can use them.' },
              { da: 'Firebase: Authentication til login, Cloud Firestore til brugere og tweets (likes og kommentarer ligger som lister i tweetet) og Storage til billeder. uuid giver billederne unikke navne.', en: 'Firebase: Authentication for the login, Cloud Firestore for users and tweets (likes and comments are lists inside the tweet) and Storage for pictures. uuid gives the pictures unique names.' },
            ],
          },
          {
            title: { da: 'Forløbet (fra commit-historikken)', en: 'How it went (from the commit history)' },
            list: [
              { da: '10.–13. maj: projektet sat op, login og oprettelse virker, beskyttede sider og et standard-profilbillede.', en: '10–13 May: project set up, login and sign-up working, protected pages and a default profile picture.' },
              { da: '17. maj: man kan skifte profilbillede.', en: '17 May: you can change your profile picture.' },
              { da: '19.–22. maj: designet af et tweet, og så at poste tweets med billeder.', en: '19–22 May: the design of a tweet, and then posting tweets with pictures.' },
              { da: '23.–24. maj: kommentarer og likes (en af de commits blev lavet klokken næsten 6 om morgenen).', en: '23–24 May: comments and likes (one of those commits was made at almost 6 in the morning).' },
              { da: '25.–26. maj: brugersider, oprydning og README.', en: '25–26 May: user pages, clean-up and the README.' },
            ],
          },
          {
            title: { da: 'Det lærte jeg – og det nåede jeg ikke', en: 'What I learned – and what I didn’t finish' },
            text: { da: 'Jeg lærte grundlaget i React og Firebase. Den største lektie var at planlægge databasen først: min struktur passede ikke til en NoSQL-database som Firestore. Derfor nåede jeg ikke (det står også i README’en): at følge andre brugere, at slette kommentarer, at gøre noget, når man klikker på en kommentar, og at slette en brugers kommentarer, når kontoen slettes. Søgefeltet er kun design.', en: 'I learned the basics of React and Firebase. The biggest lesson was to plan the database first: my structure didn’t fit a NoSQL database like Firestore. Because of that I didn’t get to (the README says so too): following other users, deleting comments, doing something when you click a comment, and deleting a user’s comments when the account is deleted. The search field is only design.' },
          },
          {
            title: { da: 'Om demoen', en: 'About the demo' },
            text: {
              da: 'Demoen her bruger en mock-backend i stedet for Firebase: de samme funktioner (login, Firestore med live-opdateringer og Storage) er lavet om, så de kører i din browser, og data gemmes kun hos dig. Log ind med demo@demo.dk / demo1234, eller lav din egen konto. "Reset demo" sætter alt tilbage. Små rettelser, markeret med "DEMO" i koden: en import med forkert stort/lille bogstav (virkede kun på Windows), nyt profilbillede blev ikke sat på de gamle tweets, og sletning af en konto gik i stå ved tweets uden billede. Følg-knappen er skjult, fordi funktionen ikke blev færdig. Koden på GitHub er uændret.',
              en: 'This demo uses a mock backend instead of Firebase: the same functions (login, Firestore with live updates and Storage) are rewritten to run in your browser, and the data is only saved on your device. Log in with demo@demo.dk / demo1234, or make your own account. "Reset demo" puts everything back. Small fixes, marked "DEMO" in the code: an import with the wrong letter case (it only worked on Windows), a new profile picture wasn’t put on your old tweets, and deleting an account stopped at tweets without a picture. The Follow button is hidden, because the feature wasn’t finished. The code on GitHub is unchanged.',
            },
          },
        ],
      },
      {
        name: { da: 'Quiz-app', en: 'Quiz app' },
        label: { da: '2. semester · 2023', en: '2nd semester · 2023' },
        meta: { da: 'IBA Erhvervsakademi Kolding · Webudvikling · marts 2023', en: 'IBA Erhvervsakademi Kolding · Web development · March 2023' },
        text: {
          da: 'Lav quizzer, tag andres og få din score – en app med Express og MongoDB, lavet på fem dage.',
          en: 'Make quizzes, take other people’s and get your score – an Express + MongoDB app made in five days.',
        },
        tags: ['Node.js', 'Express', 'Handlebars', 'MongoDB', 'Pico CSS'],
        app: 'quiz',
        // names of the screenshots in the zoom (same order as the pictures in Apps.jsx)
        screens: [
          { da: 'Log ind', en: 'Log in' },
          { da: 'Forsiden med alle quizzer', en: 'The front page with all quizzes' },
          { da: 'Tag en quiz', en: 'Taking a quiz' },
          { da: 'Resultatet', en: 'The result' },
          { da: 'Lav en quiz', en: 'Making a quiz' },
          { da: 'Kontosiden', en: 'The account page' },
        ],
        code: 'https://github.com/amir-skoric/quiz-app',
        details: [
          {
            title: { da: 'Om projektet', en: 'About the project' },
            text: {
              da: 'Et projekt på 2. semester: en quiz-app, hvor man opretter en bruger, laver sine egne quizzer med tre spørgsmål og tager andres – og får sin score i procent. Alt sker på serveren: Express bygger siderne med Handlebars, og brugere og quizzer gemmes i MongoDB. Lavet på fem dage.',
              en: 'A 2nd-semester project: a quiz app where you create a user, make your own quizzes with three questions and take other people’s – and get your score in percent. Everything happens on the server: Express builds the pages with Handlebars, and users and quizzes are saved in MongoDB. Made in five days.',
            },
          },
          {
            title: { da: 'Problemformulering', en: 'Problem statement' },
            text: { da: '"Hvordan kan jeg udvikle en quiz-app med en \'reactive\' brugergrænseflade og med en NoSQL-database, der sikrer mig en sikker datastruktur og en brugervenlig brugergrænseflade?" (fra min rapport).', en: '"How can I develop a quiz app with a \'reactive\' user interface and a NoSQL database that gives me a safe data structure and a user-friendly interface?" (from my report, translated from Danish).' },
          },
          {
            title: { da: 'Det kan man', en: 'What you can do' },
            list: [
              { da: 'Oprette en bruger og logge ind. Kodeord gemmes med bcrypt (hash + salt), og en session med express-session holder dig logget ind – den udløber efter 3 minutter uden klik.', en: 'Create a user and log in. Passwords are saved with bcrypt (hash + salt), and a session with express-session keeps you logged in – it runs out after 3 minutes without clicks.' },
              { da: 'Forsiden viser alle quizzer og dine egne. Man tager en quiz ved at vælge svar i dropdowns og får resultatet i procent.', en: 'The front page shows all quizzes and your own. You take a quiz by picking answers in dropdowns and get the result in percent.' },
              { da: 'Lave en quiz: navn, kategori og tre spørgsmål. Svarene skrives adskilt med ":", og man vælger nummeret på det rigtige. Serveren tjekker, at der er mindst 4 svar, at nummeret findes, og at navnet ikke er taget.', en: 'Make a quiz: a name, a category and three questions. The answers are written separated by ":", and you pick the number of the right one. The server checks that there are at least 4 answers, that the number exists and that the name isn’t taken.' },
              { da: 'Kontosiden: skift brugernavn, e-mail og kodeord, eller slet kontoen (dine quizzer slettes også).', en: 'The account page: change your username, e-mail and password, or delete your account (your quizzes are deleted too).' },
              { da: 'Et lille JSON-API: /api/quizzes, /api/quizzes/sortByDate, /api/quizzes/category/:navn og /api/quizzes/:navn.', en: 'A small JSON API: /api/quizzes, /api/quizzes/sortByDate, /api/quizzes/category/:name and /api/quizzes/:name.' },
            ],
          },
          {
            title: { da: 'Sådan er det bygget', en: 'How it is built' },
            list: [
              { da: 'Node.js og Express med express-handlebars til siderne (et header-partial går igen på alle sider) og middleware til login-tjek.', en: 'Node.js and Express with express-handlebars for the pages (a header partial is reused on every page) and middleware for the login check.' },
              { da: 'MongoDB med Mongoose, valgt for det fleksible skema. Brugere og quizzer ligger i hver sin collection.', en: 'MongoDB with Mongoose, chosen for its flexible schema. Users and quizzes each have their own collection.' },
              { da: 'Pico CSS til designet, fordi tiden var kort. morgan logger alle forespørgsler.', en: 'Pico CSS for the design, because time was short. morgan logs every request.' },
              { da: 'Arbejdet agilt med en Trello-tavle.', en: 'Worked in an agile way with a Trello board.' },
            ],
          },
          {
            title: { da: 'Forløbet (fra commit-historikken)', en: 'How it went (from the commit history)' },
            list: [
              { da: '12. mar.: serveren sat op, sider og database.', en: '12 Mar: server set up, pages and database.' },
              { da: '13. mar.: login og database virker, Pico CSS tilføjet.', en: '13 Mar: login and database working, Pico CSS added.' },
              { da: '14. mar.: login-systemet færdigt (efter at have lavet det meste om).', en: '14 Mar: the login system done (after remaking most of it).' },
              { da: '15. mar.: quiz-maker, sletning af bruger sletter også quizzerne, og API’et.', en: '15 Mar: the quiz maker, deleting a user also deletes their quizzes, and the API.' },
              { da: '16. mar.: tag quizzen og se resultatet, oprydning og en rettelse af cookien.', en: '16 Mar: taking a quiz and seeing the result, clean-up and a fix for the cookie.' },
            ],
          },
          {
            title: { da: 'Begrænsninger', en: 'Limits' },
            text: { da: 'Fejl vises som ren JSON-tekst i stedet for en pæn fejlside, og en quiz har altid præcis tre spørgsmål. Profilbillederne kom fra Unsplash’ tilfældige-billede-tjeneste, som er lukket i dag.', en: 'Errors are shown as plain JSON text instead of a nice error page, and a quiz always has exactly three questions. The profile pictures came from Unsplash’s random image service, which has closed since.' },
          },
          {
            title: { da: 'Om demoen', en: 'About the demo' },
            text: {
              da: 'Demoen her bruger en mock-backend i stedet for Express og MongoDB: siderne er de originale Handlebars-skabeloner, og links og formularer går til en kopi af serverens routes, der kører i din browser – med de samme redirects og JSON-beskeder. Data gemmes kun hos dig. Log ind med demo / demo1234, eller lav din egen bruger. "Reset demo" sætter alt tilbage. Små rettelser, markeret med "DEMO" i koden: man kan nu skifte kun brugernavn eller e-mail (før skulle man skifte begge), dine quizzer følger med, når du skifter navn, og profilbilledet tegnes lokalt. Koden på GitHub er uændret.',
              en: 'This demo uses a mock backend instead of Express and MongoDB: the pages are the original Handlebars templates, and links and forms go to a copy of the server’s routes that runs in your browser – with the same redirects and JSON messages. The data is only saved on your device. Log in with demo / demo1234, or make your own user. "Reset demo" puts everything back. Small fixes, marked "DEMO" in the code: you can now change just your username or e-mail (before, you had to change both), your quizzes follow along when you change your name, and the profile picture is drawn locally. The code on GitHub is unchanged.',
            },
          },
        ],
      },
      {
        name: 'Vejret',
        label: { da: 'UI-design · Figma', en: 'UI design · Figma' },
        meta: { da: 'Vejr-app · UI-design i Figma', en: 'Weather app · UI design in Figma' },
        text: {
          da: 'En vejr-app, jeg har designet i Figma, gjort til en demo, du kan klikke i – med live vejrdata.',
          en: 'A weather app I designed in Figma, turned into a clickable demo with live weather data.',
        },
        tags: ['Figma', 'UI design', { da: 'Prototype', en: 'Prototype' }, { da: 'AI-demo', en: 'AI-built demo' }],
        details: [
          {
            title: { da: 'Om projektet', en: 'About the project' },
            text: {
              da: 'Et vejr-app-koncept, som jeg har designet fra bunden som prototype i Figma. For at vise designet frem er prototypen blevet gjort til en interaktiv demo ved hjælp af AI, så du selv kan klikke rundt i den – med live vejrdata fra Open-Meteo. Projektet viser først og fremmest mine evner inden for grafisk design og UI.',
              en: 'A weather app concept that I designed from scratch as a prototype in Figma. To show the design off, the prototype was turned into an interactive demo with the help of AI, so you can click around in it yourself – with live weather data from Open-Meteo. The project mainly shows my skills in graphic and UI design.',
            },
          },
        ],
        app: 'weather', // design screens + app file, see Apps.jsx
        // names of the 4 design screens (in the same order as the pictures)
        screens: [
          { da: 'Forside – find dit lokale vejr', en: 'Home – find your local weather' },
          { da: 'Vejret i en by', en: 'Weather in a city' },
          { da: 'Time for time', en: 'Hour by hour' },
          { da: 'Menu', en: 'Menu' },
        ],
        code: '', // add the GitHub repo link here when it exists (the "Code" button shows up then)
      },
    ],
  },

  contact: {
    da: {
      title: 'Kontakt',
      heading: 'Lad os lave noget sammen',
      text: 'Lyder det som noget for dig? Skriv til mig, så vender jeg tilbage hurtigst muligt.',
      mail: 'Send en e-mail',
    },
    en: {
      title: 'Contact',
      heading: "Let's build something together",
      text: 'Sounds good? Send me a message and I will get back to you as soon as I can.',
      mail: 'Send an e-mail',
    },
    links: [
      { label: 'E-mail', value: 'amirskoric@outlook.dk', href: 'mailto:amirskoric@outlook.dk' },
      { label: 'LinkedIn', value: 'amir-skoric', href: 'https://www.linkedin.com/in/amir-skoric-926119162/' },
      { label: 'GitHub', value: 'amir-skoric', href: 'https://github.com/amir-skoric/' },
    ],
  },
}
