import { useEffect, useState } from "react";

export const useWatchMedia = (media: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const watchedMedia = window.matchMedia(media);
    const mediaListener = () => setMatches(watchedMedia.matches);

    mediaListener();
    watchedMedia.addEventListener("change", mediaListener);

    return () => watchedMedia.removeEventListener("change", mediaListener);
  }, [media]);

  return matches;
};
