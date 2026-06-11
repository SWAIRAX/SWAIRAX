import { useEffect, useRef } from "react";

interface HubSpotMeetingsProps {
  /** HubSpot meetings embed URL, e.g. https://meetings-eu1.hubspot.com/swairax?embed=true */
  url: string;
  className?: string;
}

const SCRIPT_ID = "hs-meetings-embed-script";
const SCRIPT_SRC = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

/**
 * HubSpot Meetings inline scheduler. HubSpot's embed script auto-scans for
 * `.meetings-iframe-container` elements only when it first loads, so for an
 * SPA we clear the container and (re)inject the script on mount to force it to
 * render the iframe again after client-side navigation. HubSpot then
 * auto-resizes the iframe height to fit its content.
 */
const HubSpotMeetings = ({ url, className = "" }: HubSpotMeetingsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = "";

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "text/javascript";
    script.src = SCRIPT_SRC;
    document.body.appendChild(script);
  }, [url]);

  return (
    <div
      ref={ref}
      className={`meetings-iframe-container w-full ${className}`}
      data-src={url}
    />
  );
};

export default HubSpotMeetings;
