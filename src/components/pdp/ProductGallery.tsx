import { useState } from "react";
import styles from "./ProductGallery.module.css";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrap}>
      <div className={styles.thumbRail}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`.trim()}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1} of ${name}`}
            aria-current={i === active}
          >
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      <div className={styles.main}>
        <img src={images[active]} alt={name} />
      </div>
    </div>
  );
}
