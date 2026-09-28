import { AdvancedImage } from '@cloudinary/react';
import { cloudinary } from '~/cloudinary';

export const CloudImage = ({ id }: { id: string }) => {
  return <AdvancedImage cldImg={cloudinary.image(id)} />;
};
