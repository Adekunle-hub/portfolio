
"use client";

import React, { useState, useEffect } from "react";
import PreLoader from "./PreLoader";
import useLoadProgress from "./hooks/UseLoadProgress";

type Props = {
  children: React.ReactNode;
};

const PreloaderWrapper: React.FC<Props> = ({ children }) => {
  const imageUrls = [
    "/check2.jpg",
    "/IMG1.png",
    "/IMG2.png",
    "/IMG3.png",
    
  ];

  const progress = useLoadProgress(imageUrls);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setIsReady(true), 300); 
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!isReady) return <PreLoader progress={progress} />;
  return <>{children}</>;
};

export default PreloaderWrapper;
