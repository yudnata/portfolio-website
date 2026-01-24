export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-pixel-bg-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-white/20 border-t-primary rounded-full animate-spin" />
        <p className="font-pixel text-primary text-sm animate-pulse tracking-widest">LOADING...</p>
      </div>
    </div>
  );
}
