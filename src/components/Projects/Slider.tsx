import { useEffect, useRef, useState, type ChangeEvent } from "react";
import type { Project } from "../../data/projectsData";

type Props = {
  project: Project;
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
};

export default function Slider({
  project,
  currentIndex,
  onNext,
  onPrev,
  onDotClick,
}: Props) {
  const slides = [...(project.images || []), ...(project.videos || [])];
  const imageCount = project.images?.length || 0;
  const isImage = currentIndex < imageCount;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(true);

    if (!isImage && videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentIndex, isImage]);

  if (slides.length === 0) {
    return <div className="empty-media">No preview media available for this project yet.</div>;
  }

  const handleVideoToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
      return;
    }

    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleProgressChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    const newTime = Number(event.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="slider-container">
      <div className="slider-main">
        {isImage ? (
          <img
            src={slides[currentIndex]}
            alt={`${project.title} preview ${currentIndex + 1}`}
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
              controls={false}
              onClick={handleVideoToggle}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
              onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
            />

            <div className="video-controls">
              <button
                type="button"
                className="video-toggle"
                onClick={handleVideoToggle}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                onChange={handleProgressChange}
                className="video-progress"
                aria-label="Video progress"
              />
            </div>
          </div>
        )}

        <button
          type="button"
          className="slider-btn left"
          onClick={onPrev}
          aria-label="Previous media"
        >
          ‹
        </button>
        <button
          type="button"
          className="slider-btn right"
          onClick={onNext}
          aria-label="Next media"
        >
          ›
        </button>
      </div>

      <div className="slider-dots" aria-label="Project media navigation">
        {slides.map((_, index) => (
          <button
            key={`${project.id}-${index}`}
            type="button"
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => onDotClick(index)}
            aria-label={`Go to media ${index + 1}`}
            aria-pressed={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
