
import { useEffect, useState } from 'react';

export default function useLoadProgress(imageUrls: string[]) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let total = imageUrls.length;
    let loaded = 0;

    const updateProgress = () => {
      loaded += 1;
      setProgress(Math.round((loaded / total) * 100));
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = updateProgress;
      img.onerror = updateProgress;
    });

   
  }, [imageUrls]);

  return progress;
}
