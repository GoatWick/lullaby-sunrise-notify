
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally connect to your backend or service to store the email
    // This is a simple simulation of that process with a timeout
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll notify you when Lullaby Lounge launches.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <h3 className="font-serif text-xl text-lullaby-cream">Get notified when we launch</h3>
        <p className="text-lullaby-cream/80 text-sm">
          Join our early notification list and be the first to know when Lullaby Lounge opens its digital doors.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-white/10 border-lullaby-cream/20 text-lullaby-cream placeholder:text-lullaby-cream/50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-lullaby-cream text-lullaby-purple hover:bg-lullaby-cream/90 transition-colors"
        >
          {isSubmitting ? "Submitting..." : "Notify Me"}
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;
