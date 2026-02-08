import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import "./ServiceBusinessesSection.css";

interface ServiceBusiness {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
}

const industries: ServiceBusiness[] = [
  {
    id: "coaches",
    title: "Coaches",
    description: "Leads, bookings & WhatsApp automation",
    icon: "🏆",
    link: "/solutions/coaches",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Inquiries, site visits & follow-ups",
    icon: "🏠",
    link: "/solutions/real-estate",
  },
  {
    id: "fitness",
    title: "Fitness Clubs",
    description: "Trials, renewals & reminders",
    icon: "💪",
    link: "/solutions/fitness",
  },
  {
    id: "consultants",
    title: "Consultants",
    description: "Qualified leads & call scheduling",
    icon: "👔",
    link: "/solutions/consultants",
  },
  {
    id: "agencies",
    title: "Agencies",
    description: "Clients, campaigns & reporting",
    icon: "🎨",
    link: "/solutions/agencies",
  },
  {
    id: "clinics",
    title: "Health Clinics",
    description: "Appointments & patient reminders",
    icon: "⚕️",
    link: "/solutions/clinics",
  },
  {
    id: "freelancers",
    title: "Freelancers",
    description: "Proposals, payments & follow-ups",
    icon: "💼",
    link: "/solutions/freelancers",
  },
];

export function ServiceBusinessesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Determine cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay || isPaused) {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 4000);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlay, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Calculate visible indices for infinite carousel
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < cardsPerView; i++) {
      indices.push((currentIndex + i) % industries.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section 
      className="service-businesses-section"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <div className="service-businesses-container">
        {/* Header */}
        <div className="service-businesses-header">
          <h2 className="service-businesses-title">Built for Service Businesses</h2>
          <p className="service-businesses-subtitle">Lead → Booking → Payment automation</p>
        </div>

        {/* Slider Container */}
        <div className="service-businesses-slider-wrapper">
          <div 
            ref={sliderRef}
            className="service-businesses-slider"
          >
            {visibleIndices.map((index) => {
              const industry = industries[index];
              return (
                <a
                  key={`${index}-${currentIndex}`}
                  href={industry.link || "#"}
                  className="service-business-card"
                  onClick={(e) => {
                    if (!industry.link) {
                      e.preventDefault();
                    }
                  }}
                  role="article"
                  tabIndex={0}
                >
                  <div className="service-business-card-icon">
                    <span className="service-business-icon-emoji">{industry.icon}</span>
                  </div>
                  <div className="service-business-card-content">
                    <h3 className="service-business-card-title">{industry.title}</h3>
                    <p className="service-business-card-description">
                      {industry.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Navigation Arrows (visible on desktop) */}
          <button
            className="service-businesses-nav-button service-businesses-nav-prev"
            onClick={handlePrev}
            aria-label="Previous industry"
            title="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button
            className="service-businesses-nav-button service-businesses-nav-next"
            onClick={handleNext}
            aria-label="Next industry"
            title="Next"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="service-businesses-dots" role="tablist">
          {industries.map((_, index) => (
            <button
              key={index}
              className={`service-businesses-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to industry ${index + 1}`}
              role="tab"
              aria-selected={currentIndex === index}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="service-businesses-footer">
          <a href="/solutions" className="service-businesses-view-all">
            View all industries
            <ChevronDown className="service-businesses-arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
