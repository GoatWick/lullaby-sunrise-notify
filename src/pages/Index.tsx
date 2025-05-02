import StarBackground from "@/components/StarBackground";
import EmailForm from "@/components/EmailForm";
import MoonLogo from "@/components/MoonLogo";
const Index = () => {
  return <div className="min-h-screen w-full relative flex flex-col items-center justify-center bg-lullaby-purple overflow-hidden px-4">
      <StarBackground />
      
      <main className="z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-16 text-center">
        <MoonLogo />
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mt-8 mb-4 text-lullaby-cream">Lullaby Mums</h1>
        
        <p className="text-lullaby-cream/90 text-lg sm:text-xl max-w-xl mb-8">
          A peaceful digital space for mothers awake with their little ones in the early hours.
          Connect, share stories, and find comfort knowing you're not alone.
        </p>
        
        <div className="w-20 h-0.5 bg-lullaby-cream/30 my-8"></div>
        
        <EmailForm />
        
        <div className="mt-16 flex flex-col gap-2">
          <p className="text-lullaby-cream/70 text-sm">Coming Soon</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-lullaby-cream rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-lullaby-cream rounded-full animate-pulse" style={{
            animationDelay: "0.3s"
          }}></div>
            <div className="w-2 h-2 bg-lullaby-cream rounded-full animate-pulse" style={{
            animationDelay: "0.6s"
          }}></div>
          </div>
        </div>
      </main>
      
      <footer className="z-10 w-full max-w-4xl mx-auto p-4 text-center text-lullaby-cream/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Lullaby Lounge. All rights reserved.</p>
      </footer>
    </div>;
};
export default Index;