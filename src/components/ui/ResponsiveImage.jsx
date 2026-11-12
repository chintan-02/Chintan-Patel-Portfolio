import { imageVariants } from '../../data/imageVariants.js';

export function ResponsiveImage({ src, alt, loading = 'lazy', fetchPriority, className, sizes = '(min-width: 1024px) 550px, 100vw' }) {
  const variant = imageVariants[src];
  if (!variant) return <img src={src} alt={alt} loading={loading} fetchPriority={fetchPriority} decoding="async" className={className} />;
  const sourceSet = (format) => [640, 960, 1280].map((width) => `${variant.base}-${width}.${format} ${width}w`).join(', ');
  return <picture>
    <source type="image/avif" srcSet={sourceSet('avif')} sizes={sizes} />
    <source type="image/webp" srcSet={sourceSet('webp')} sizes={sizes} />
    <img src={src} alt={alt} width={variant.width} height={variant.height} loading={loading} fetchPriority={fetchPriority} decoding="async" className={className} />
  </picture>;
}
