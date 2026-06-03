// Vanta ships no TypeScript types for its individual effect builds.
declare module "vanta/dist/vanta.net.min" {
  interface VantaEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: Record<string, unknown>) => void;
  }
  const NET: (options: Record<string, unknown>) => VantaEffect;
  export default NET;
}
