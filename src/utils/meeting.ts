// Central SWAIRAX booking link. Every "contact / book a call" CTA across the
// site opens this HubSpot meeting scheduler in a new tab instead of routing to
// the internal contact page.
export const MEETING_URL =
  "https://meetings-eu1.hubspot.com/swairax?uuid=aa05915b-0662-4efd-8980-2486214ed303";

export const openMeeting = () =>
  window.open(MEETING_URL, "_blank", "noopener,noreferrer");
