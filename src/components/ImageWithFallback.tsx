import React from 'react';

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackText?: string;
};

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackText = 'Image not available',
  className = '',
  width,
  height,
  ...props
}) => {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Image failed to load: ${src}. Falling back.`);

    const placeholderUrl = `https://via.placeholder.com/${width || 300}x${height || 200}?text=${encodeURIComponent(fallbackText)}`;
    event.currentTarget.src = placeholderUrl;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      width={width}
      height={height}
      {...props}
    />
  );
};

export default ImageWithFallback;

