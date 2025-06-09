"use client";
import React from "react";
import Container from "./Container";

type PreLoaderProps = {
  progress: number;
};

const PreLoader: React.FC<PreLoaderProps> = ({ progress }) => {
  return (
    <Container>
      <section className="fixed inset-0 z-500 flex items-center justify-center bg-white transition-opacity">
        <div>
          <div className="text-2xl font-semibold text-gray-800 mb-4">
            Loading... {progress}%
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PreLoader;
