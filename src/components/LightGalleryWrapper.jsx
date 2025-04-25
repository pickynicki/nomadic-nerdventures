import React, { useEffect, useRef } from 'react';
import lightGallery from 'lightgallery';
import { urlFor } from '../utils/imageUrlBuilder';

// Plugins (optional, add/remove as needed)
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

export default function LightGalleryWrapper({ images }) {
  const galleryRef = useRef(null);

  console.log(images);

  useEffect(() => {
    if (galleryRef.current && images && images.length > 0) {
      const gallery = lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        dynamic: true,
        dynamicEl: images.map(img => ({
          src: urlFor(img),
thumb: urlFor(img),
          subHtml: img.caption || '',
        })),
      });
      return () => {
        gallery.destroy();
      };
    }
  }, [images]);

  return (
    <div>
      <div ref={galleryRef} className="lightgallery">
        {images.map((img, i) => (
          <a
            key={i}
            href={urlFor(img)}
            data-lg-size="1406-1390"
            data-sub-html={img.caption || ''}
          >
            <img
              src={urlFor(img)}
              alt={img.caption || `Gallery image ${i + 1}`}
              style={{ maxWidth: '150px', margin: '0 8px 8px 0', borderRadius: '4px', cursor: 'pointer' }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
