// src/components/HeroSection/movieData.ts
import communityOfTheRingThumbnail from '../../assets/lord-thumbnail/la-comunidad-del-anillo.webp';
import communityOfTheRingImage from '../../assets/lord-hq/la-comunidad-del-anillo.webp';

import twoTowersThumbnail from '../../assets/lord-thumbnail/las-dos-torres.webp';
import twoTowersImage from '../../assets/lord-hq/las-dos-torres.webp';

import returnOfTheKingThumbnail from '../../assets/lord-thumbnail/el-retorno-del-rey.webp';
import returnOfTheKingImage from '../../assets/lord-hq/el-retorno-del-rey.webp';

import ringsOfPowerThumbnail from '../../assets/lord-thumbnail/los-anillos-de-poder.webp';
import ringsOfPowerImage from '../../assets/lord-hq/los-anillos-de-poder.webp';

export const movies = [
  {
    title: 'El Señor de los Anillos: La Comunidad del Anillo',
    thumbnail: communityOfTheRingThumbnail,
    image: communityOfTheRingImage,
    description: 'Un hobbit llamado Frodo Bolsón se embarca en una peligrosa misión para destruir el Anillo Único.',
    isSeries: false
  },
  {
    title: 'El Señor de los Anillos: Las Dos Torres',
    thumbnail: twoTowersThumbnail,
    image: twoTowersImage,
    description: 'Frodo y Sam continúan su viaje hacia Mordor mientras la comunidad se enfrenta a nuevas amenazas.',
    isSeries: false
  },
  {
    title: 'El Señor de los Anillos: El Retorno del Rey',
    thumbnail: returnOfTheKingThumbnail,
    image: returnOfTheKingImage,
    description: 'La batalla final por la Tierra Media se libra mientras Frodo se acerca a su destino.',
    isSeries: false
  },
  {
    title: 'El Señor de los Anillos: Los Anillos de Poder',
    thumbnail: ringsOfPowerThumbnail,
    image: ringsOfPowerImage,
    description: 'Una épica serie que explora los eventos que llevaron a la creación de los Anillos de Poder.',
    isSeries: true,
    updateFrequency: 'Actualizaciones semanales'
  }
];
