import { ChevronLeft, ChevronRight, StarIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  description: string;
  name: string;
  company: string;
  job: string;
  image: string;
};

type Props = {
  testimonials: Testimonial[];
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="text-white h-full bg-[#040A08]/50 flex flex-col gap-4 md:gap-6 p-6 md:p-8 rounded-2xl relative bg-testimonial-card stroke-testimonial-card">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            size={16}
            className="md:w-5 md:h-5"
            fill="white"
          />
        ))}
      </div>
      <p className="text-base md:text-lg whitespace-pre-line flex-1">
        "{testimonial.description}"
      </p>
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.company}
          className="w-8 md:w-10 max-w-10"
        />
        <div>
          <p className="font-display text-sm md:text-base">{testimonial.name}</p>
          <p className="text-sm md:text-base">
            {testimonial.job}, {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsCarousel({ testimonials }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < maxScroll - 4);

    // Determine active index based on first fully-visible card
    const children = Array.from(el.children) as HTMLElement[];
    let closest = 0;
    let minDist = Infinity;
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  const scrollBy = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement | undefined;
    const cardWidth = card?.offsetWidth ?? el.clientWidth;
    const gap = 24;
    el.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-[1400px] relative px-4">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] w-full md:w-[768px] h-[768px] bg-radial from-20% from-[#BD66FE] via-40% via-[#5C3AD8] to-[57%] to-[#5C3AD800] pointer-events-none" />

      <div
        ref={scrollerRef}
        className="relative flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 -mx-4 px-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>

      <div className="relative flex items-center justify-between gap-4 mt-6 px-2">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Aller au témoignage ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                i === activeIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/50"
              )}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Témoignage précédent"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            className="size-10 md:size-11 rounded-full flex items-center justify-center bg-white/10 text-white border border-white/15 backdrop-blur-sm transition-all hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Témoignage suivant"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            className="size-10 md:size-11 rounded-full flex items-center justify-center bg-white/10 text-white border border-white/15 backdrop-blur-sm transition-all hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
