export type GalleryItem = {
  src: string;
  alt: string;
  group: 'kenya' | 'rome' | 'juneteenth' | 'other';
};

const GALLERY_ITEMS: GalleryItem[] = [
  // Kenya delegation
  { src: '/images/gallery/kenya-IMG_9051.jpg', alt: 'SSR Kenya delegation', group: 'kenya' },
  { src: '/images/gallery/kenya-IMG_9055.jpg', alt: 'SSR Kenya delegation', group: 'kenya' },
  { src: '/images/gallery/kenya-IMG_9057.jpg', alt: 'SSR Kenya delegation', group: 'kenya' },
  { src: '/images/gallery/kenya-IMG_9060.jpg', alt: 'SSR Kenya delegation', group: 'kenya' },
  { src: '/images/gallery/kenya-IMG_9061.jpg', alt: 'Taproot Earth climate justice convening — Kenya', group: 'kenya' },
  { src: '/images/gallery/kenya-IMG_9070.jpg', alt: 'SSR Kenya delegation', group: 'kenya' },
  { src: '/images/gallery/kenya-IMG_9073.jpg', alt: 'SSR Kenya delegation', group: 'kenya' },
  { src: '/images/gallery/kenya-IMG_9080.jpg', alt: 'SSR Kenya delegation', group: 'kenya' },
  { src: '/images/gallery/kenya-IMG_9081.jpg', alt: 'SSR Kenya delegation', group: 'kenya' },
  { src: '/images/gallery/kenya-IMG_9082.jpg', alt: 'SSR Kenya delegation', group: 'kenya' },
  // Floral Farms / Shingle Mountain
  { src: '/images/gallery/floral-farms-shingle-mountain.jpg', alt: 'Shingle Mountain — officials and community members atop the toxic shingle pile, Floral Farms', group: 'other' },
  { src: '/images/gallery/floral-farms-shingle-homes.jpg', alt: 'Shingle Mountain looming over Floral Farms homes, 2018', group: 'other' },
  // Juneteenth 2025
  { src: '/images/gallery/juneteenth-DSC09730.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09732.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09733.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09737.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09739.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09740.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09743.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09766.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09767.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09768.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09769.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09771.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09773.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09774.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09789.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09790.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09796.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09799.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09823.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09826.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09856.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09869.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09871.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09888.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  { src: '/images/gallery/juneteenth-DSC09891.jpg', alt: 'Juneteenth 2025 — Southern Sector Rising', group: 'juneteenth' },
  // Rome delegation
  { src: '/images/gallery/rome-IMG_1473.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1475.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1476.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1479.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1482.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1491.jpg', alt: 'SSR Rome, Italy — community gathering', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1496.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1507.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1508.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1509.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1511.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1513.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1516.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1518.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1520.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1529.jpg', alt: 'SSR Rome delegation', group: 'rome' },
  { src: '/images/gallery/rome-IMG_1530.jpg', alt: 'SSR Rome delegation', group: 'rome' },
];

export default GALLERY_ITEMS;
