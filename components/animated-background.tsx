"use client"

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute inset-0 bg-[size:400%_400%] bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent blur-xl"></div>
        </div>
      </div>
    </div>
  )
}
