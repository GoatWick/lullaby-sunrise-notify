
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      // Insert the email into the coming_soon_email_signups table
      const { error } = await supabase.from('coming_soon_email_signups').insert([{ email }]);
      
      if (error) {
        if (error.code === '23505') {
          // Unique violation error code
          toast({
            title: "Already subscribed!",
            description: "This email is already on our notification list."
          });
        } else {
          toast({
            title: "Something went wrong",
            description: "We couldn't save your email. Please try again later.",
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "Thank you for subscribing!",
          description: "We'll notify you when Lullaby Lounge launches."
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "We couldn't save your email. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <h3 className="font-serif text-xl text-lullaby-cream">Get notified when we launch</h3>
        <p className="text-lullaby-cream/80 text-sm">Our digital doors are opening soon — join our early list and be the first to experience Lullaby Mums.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          className="bg-white/10 border-lullaby-cream/20 text-lullaby-cream placeholder:text-lullaby-cream/50" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          aria-label="Email address" 
          required 
        />
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="bg-lullaby-cream text-lullaby-purple hover:bg-lullaby-cream/90 transition-colors"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Notify Me"}
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;
