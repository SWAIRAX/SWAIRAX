interface BrandLogoProps {
  className?: string;
  /** Tailwind size classes for the "S" mark image. */
  iconClassName?: string;
  /** Tailwind size + color classes for the WAIRAX wordmark SVG. */
  wordmarkClassName?: string;
  /** Margin classes positioning the wordmark relative to the "S" mark. Bigger
   *  logos (e.g. the footer) need a larger negative ml to sit close. */
  wordmarkOffset?: string;
}

/**
 * SWAIRAX lockup: the SWAIRAXLOGO.png "S" mark + a "WAIRAX" wordmark drawn as
 * inline SVG. The wordmark uses `fill="currentColor"`, so it inherits the
 * surrounding text colour — staying clearly visible in BOTH light and dark
 * themes (the old baked-in grey PNG text vanished on dark backgrounds).
 */
const BrandLogo = ({
  className = "",
  iconClassName = "h-12 w-auto",
  wordmarkClassName = "h-5 w-auto text-foreground",
  wordmarkOffset = "-ml-5 mt-3 sm:-ml-5 sm:mt-3",
}: BrandLogoProps) => (
  <span className={`inline-flex items-center gap-0 ${className}`} role="img" aria-label="SWAIRAX">
    <img
      src="/swairax.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      width={305}
      height={312}
      className={`${iconClassName} object-contain dark:hidden`}
    />
    <img
      src="/swairax1.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      width={1024}
      height={1024}
      className={`${iconClassName} hidden object-contain dark:block`}
    />
    <svg
      viewBox="0 0 332 72"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`${wordmarkOffset} ${wordmarkClassName}`}
    >
      <text
        x="0"
        y="57"
        fill="currentColor"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontSize="62"
        fontWeight="800"
        letterSpacing="3"
      >
        WAIRAX
      </text>
    </svg>
  </span>
);

export default BrandLogo;
