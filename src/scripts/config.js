const images = [
  'https://www.lucchese.com/cdn/shop/files/L_AZ67104-6004_Front_{{size}}x.jpg',
  'https://www.lucchese.com/cdn/shop/files/L_AZ67104-6004_Back_{{size}}x.jpg',
  'https://www.lucchese.com/cdn/shop/files/L_AZ67104-6004_FrontFullBody_{{size}}x.jpg',
  'https://www.lucchese.com/cdn/shop/files/L_AZ67104-6004_CollarDetail_{{size}}x.jpg',
  'https://www.lucchese.com/cdn/shop/files/L_AZ67104-6004_ShoulderDetail_{{size}}x.jpg',
  'https://www.lucchese.com/cdn/shop/files/L_AZ67104-6004_CuffDetail_{{size}}x.jpg',
  'https://www.lucchese.com/cdn/shop/files/L_AZ67104-6004_WaistDetail_{{size}}x.jpg',
  'https://www.lucchese.com/cdn/shop/files/L_AZ67104-6004_HemDetail_{{size}}x.jpg',
  'https://www.lucchese.com/cdn/shop/files/L_AZ67104-6004_Swatch_{{size}}x.jpg'
];

export default {
  sizes: {
    avaliable: ['xs','s', 'm', 'l', 'xl'],
    initial: 'm'
  },
  images: {
    main: images.map((img) => img.replace('{{size}}', '1200')),
    thumbnails: images.map((img) => img.replace('{{size}}', '600'))
  }
};