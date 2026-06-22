import type { CampsiteConfig } from "../types";

/**
 * Camping Schwarzsee (Hotel Bruggerhof) · Kitzbühel, Tirol.
 * Honest, source-grounded config aus raw/digest. Design FIX: kein theme, heroVariant "center".
 */
const IMG = "/campsites/bruggerhof-camping";

const bruggerhofCamping: CampsiteConfig = {
  name: "Camping Schwarzsee",
  shortName: "Schwarzsee",
  slug: "bruggerhof-camping",
  ort: "Kitzbühel",
  region: "Tirol",
  brandKind: "Camping am Schwarzsee",
  see: "Schwarzsee",
  regionLong: "Kitzbüheler Alpen · Tirol · Österreich",

  heroVariant: "center",

  claim: "Dein Stellplatz am Schwarzsee in Kitzbühel",
  claimEmphasis: "am Schwarzsee",
  emailDetail: "euer eigener Bioladen direkt am Campingplatz in Kitzbühel",
  intro:
    "Auf 70.000 m² direkt am Schwarzsee, mitten in den Kitzbüheler Alpen, findest du Stellplätze, gemütliche Igluhuts und eine eigene Wellnessoase — Campingurlaub mit Hotelkomfort, das ganze Jahr über.",

  logo: { src: `${IMG}/logo-b0fbe20091.png`, alt: "Camping Schwarzsee · Hotel Bruggerhof Logo" },

  statement: {
    text: "Vom Stellplatz trennt dich nur ein kleines Waldstück vom Schwarzsee.",
    emphasis: "ein kleines Waldstück",
  },

  pillars: [
    {
      title: "Direkt am Schwarzsee",
      text: "Freier Zugang zum moorhaltigen Schwarzsee — das Baden ist hier natürliches Wellness für deine Haut.",
      image: { src: `${IMG}/gallery-be7d2aec57.webp`, alt: "Schwarzsee mit Blick auf die Kitzbüheler Alpen" },
    },
    {
      title: "Eigene Wellnessoase",
      text: "Hallenbad mit Panoramablick, Whirlpool und Kinderbecken — für unsere Gäste kostenlos nutzbar.",
      image: { src: `${IMG}/amenity-6db2ac7b1d.webp`, alt: "Hallenbad der Wellnessoase mit Panoramablick" },
    },
    {
      title: "Bioladen am Platz",
      text: "Österreichs einziger Campingplatz mit eigenem Bio-Greißler — frisch und regional direkt am Platz.",
      image: { src: `${IMG}/amenity-323de3d96a.webp`, alt: "BioGreißler Bioladen am Campingplatz Schwarzsee" },
    },
  ],

  usps: [
    "Direkt am Schwarzsee",
    "Eigene Wellnessoase",
    "100% Bioladen am Platz",
    "Family Igluhuts",
    "Kostenloser Skibus",
    "Gratis WLAN",
  ],

  trust: {
    heading: "Warum Familien zum Schwarzsee zurückkommen",
    headingEmphasis: "Schwarzsee",
    intro:
      "Hier bekommst du Campingurlaub mit Hotelkomfort: eigene Wellnessoase, Restaurant und Bioladen am Platz, der Schwarzsee vor der Tür und die Kitzbüheler Alpen ringsum — Sommer wie Winter.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-fb733523a1.webp`, alt: "Luftaufnahme des Campingplatz Schwarzsee in Kitzbühel" },
  },

  breather: {
    image: { src: `${IMG}/gallery-12a2538522.webp`, alt: "Hotel Bruggerhof mit Wellnessbau und Campingareal am Schwarzsee" },
    line: "Camping mit dem Komfort eines Hotels.",
  },

  camping: {
    heading: "Camping auf 70.000 m² am Schwarzsee",
    intro:
      "Vom weitläufigen Stellplatz bis zur Wellnessoase — hier hast du alles für einen entspannten Campingtag direkt am Schwarzsee.",
    features: [
      {
        title: "Weitläufige Stellplätze",
        text: "Großzügige Stellplätze auf 70.000 m² für Wohnwagen, Wohnmobil und Zelt — mit Strom und kurzen Wegen.",
        image: { src: `${IMG}/gallery-964323bcd6.webp`, alt: "Stellplätze am Campingplatz Schwarzsee aus der Luft" },
      },
      {
        title: "Restaurant am Platz",
        text: "Im hauseigenen Restaurant genießt du internationale Küche und bodenständige Tiroler Spezialitäten.",
        image: { src: `${IMG}/amenity-497215fd11.webp`, alt: "Restaurant im Hotel Bruggerhof am Campingplatz" },
      },
      {
        title: "Saunawelt mit vier Saunen",
        text: "Von der finnischen Sauna bis zur Bio-Kräutersauna warten gleich vier verschiedene Saunen auf dich.",
        image: { src: `${IMG}/amenity-b0ba964929.webp`, alt: "Bio-Kräutersauna in der Wellnessoase am Schwarzsee" },
      },
      {
        title: "Fitnessraum mit Bergblick",
        text: "Im Fitnessraum trainierst du mit Blick auf die Berge — die Nutzung ist für Campinggäste inklusive.",
        image: { src: `${IMG}/amenity-2b384f0788.webp`, alt: "Fitnessraum mit Bergblick am Campingplatz Schwarzsee" },
      },
      {
        title: "Minigolf im Freizeitpark",
        text: "Auf der gepflegten Minigolfanlage zwischen Bäumen und Bergen spielt sich die ganze Familie warm.",
        image: { src: `${IMG}/gallery-30253061ea.webp`, alt: "Minigolfanlage im Freizeitpark am Schwarzsee" },
      },
      {
        title: "Gemütliche Bar",
        text: "An der gemütlichen Bar lässt du den Campingtag bei einem Drink in alpiner Atmosphäre ausklingen.",
        image: { src: `${IMG}/amenity-1ef53d4eef.webp`, alt: "Gemütliche Bar im Hotel Bruggerhof am Schwarzsee" },
      },
    ],
  },

  mobilheime: {
    heading: "Übernachten im Family Igluhut",
    intro:
      "Lust auf etwas Besonderes? Unsere Family Igluhuts aus Holz verbinden das Campinggefühl mit dem Komfort eines kleinen Hauses.",
    items: [
      {
        name: "Family Igluhut",
        kind: "Mobilehome aus naturbelassenem Holz",
        text: "Aus naturbelassenem Holz gefertigt, bietet der Igluhut Küche, Bad und Schlafraum für bis zu vier Personen.",
        image: { src: `${IMG}/gallery-24aae7ce47.webp`, alt: "Family Igluhut Mobilehomes am Campingplatz Schwarzsee" },
        priceFrom: 147,
        features: ["Bis 4 Personen", "Küche & eigenes Bad", "Wellness inklusive", "Strom & WLAN inkl."],
      },
    ],
  },

  kinder: {
    heading: "Damit den Kindern nie langweilig wird",
    intro: "Spielplatz, Pit-Pat und Spielzimmer — bei uns wird den jungen Gästen garantiert nicht langweilig.",
    features: [
      {
        title: "Abenteuerspielplatz",
        text: "Der große Abenteuerspielplatz mit Rutschen und Klettergerüsten lässt Kinderherzen höher schlagen.",
        image: { src: `${IMG}/kids-d500aef793.webp`, alt: "Abenteuerspielplatz am Campingplatz Schwarzsee" },
      },
      {
        title: "Pit-Pat-Anlage",
        text: "Auf der Pit-Pat-Anlage — einer Mischung aus Minigolf und Billard — spielen schon die Kleinsten mit.",
        image: { src: `${IMG}/gallery-edabc1c291.webp`, alt: "Pit-Pat-Anlage vor dem Hotel Bruggerhof" },
      },
    ],
  },

  anreise: {
    heading: "Anreise nach Kitzbühel",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A12 Inntalautobahn bis Wörgl, dann auf der B170/B161 nach Kitzbühel — der Platz liegt 1,5 km außerhalb des Zentrums an der Reither Straße.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Kitzbühel oder Kitzbühel Hahnenkamm; von dort sind es nur wenige Minuten mit Taxi oder Bus zum Campingplatz.",
      },
      {
        title: "Skibus zu den Liften",
        text: "Direkt am Platz hält der kostenlose Skibus, der dich in der Wintersaison zu den Liften der Region bringt.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Schwarzsee",
    headingEmphasis: "Schwarzsee",
    intro: "Vom Areal aus der Luft bis zur Saunawelt — ein paar Eindrücke von deinem Urlaub am Schwarzsee.",
    tag: "Sommer wie Winter",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-874f682cfc.webp`, alt: "Campingplatz Schwarzsee aus der Vogelperspektive" },
      { src: `${IMG}/gallery-2de7bc8aa4.webp`, alt: "Family Igluhuts aus Holz am Schwarzsee" },
      { src: `${IMG}/amenity-7aecefffc5.webp`, alt: "Dampfbad in der Wellnessoase am Schwarzsee" },
      { src: `${IMG}/gallery-53da9fc515.webp`, alt: "Igluhut aus Holzschindeln im Detail" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Schwarzsee",
    headingEmphasis: "am Schwarzsee",
    intro: "Wähle Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit am Schwarzsee.",
    pricesArePlaceholder: false,
    priceNote:
      "Sommer-Zwischensaison, Stellplatz inkl. 2 Personen — zzgl. Kurtaxe € 5 & Umweltbeitrag € 3,10 pro Person/Nacht, Strom € 1,60/kWh. Igluhut pro Nacht bis 4 Personen, zzgl. Endreinigung € 68.",
    highlight: {
      title: "Mitten in Kitzbühel",
      text: "Nur 1,5 km vom Zentrum Kitzbühels, in ruhiger Lage direkt am Schwarzsee.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Caravan/Wohnmobil)", perNight: 52.5, perExtraGuest: 18 },
      { id: "zelt", label: "Zeltplatz", perNight: 47, perExtraGuest: 18 },
      { id: "igluhut", label: "Family Igluhut (bis 4 Pers.)", perNight: 147 },
    ],
  },

  kontakt: {
    tel: "+43 (0) 5356 62806",
    telHref: "tel:+43535662806",
    mail: "office@bruggerhof-camping.at",
    adresse: "Reither Straße 24 · 6370 Kitzbühel · Tirol",
    coords: { lat: 47.4598703, lng: 12.3629058 },
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Wellness & Freizeit", href: "#camping" },
      ],
    },
    { label: "Igluhut", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default bruggerhofCamping;
