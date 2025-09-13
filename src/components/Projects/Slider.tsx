import { useRef, useEffect, useState } from "react";
import type { Project } from "../../data/projectsData";

type Props = {
  project: Project;
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
};

export default function Slider({ project, currentIndex, onNext, onPrev, onDotClick }: Props) {
  const slides = [
    ...(project.images || []),
    ...(project.videos || []),
  ];

  const isImage = currentIndex < (project.images?.length || 0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!isImage && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex, isImage]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = parseFloat(e.target.value);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-main">
        {isImage ? (
          <img
            src={slides[currentIndex]}
            alt={`${project.title} ${currentIndex + 1}`}
            className="modal-image"
          />
        ) : (
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src={slides[currentIndex]}
              className="modal-video"
              autoPlay
              loop
              muted
              playsInline
              onClick={handleVideoClick}
              onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
              onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
            />

            {/* Progress bar only */}
            <div className="video-controls">
              <input
                type="range"
                min="0"
                max={duration}
                step="0.1"
                value={currentTime}
                onChange={handleProgressChange}
                className="video-progress"
              />
            </div>
          </div>
        )}

        <button className="slider-btn left" onClick={onPrev}>‹</button>
        <button className="slider-btn right" onClick={onNext}>›</button>
      </div>

      {/* Dots Pagination */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => onDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
