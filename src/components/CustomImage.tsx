import Image, { ImageProps } from "next/image";

const CustomImage = ({ src, alt, ...props }: ImageProps) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return <Image src={`${basePath}${src}`} alt={alt} {...props} />;
};

export default CustomImage;
