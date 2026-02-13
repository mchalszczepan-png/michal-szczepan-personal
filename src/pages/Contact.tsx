import { useState } from "react";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().max(200, "Subject must be under 200 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be under 5000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    setSending(true);
    try {
      const { data: result, error } = await supabase.functions.invoke("send-contact-email", {
        body: { ...data, honeypot: "" },
      });

      if (error) throw error;
      if (result?.error) throw new Error(result.error);

      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      form.reset();
      setOpen(false);
    } catch (err: any) {
      toast({ title: "Failed to send", description: err.message || "Something went wrong.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="text-muted-foreground mb-8">
            Let's discuss your next project or just say hello
          </p>

          <hr className="border-border mb-8" />

          <div className="max-w-xl">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out through any of these channels. I'm always open to 
              discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-4 p-4 border border-border bg-card hover:bg-muted w-full text-left"
              >
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">Send me a message</p>
                </div>
              </button>

              <a 
                href="https://github.com/mchalszczepan-png"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border bg-card hover:bg-muted no-underline"
              >
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <Github className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/mchalszczepan-png</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/michal-szczepan-728189370"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-border bg-card hover:bg-muted no-underline"
              >
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/michal-szczepan-728189370</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground text-sm">© 2025 Michal Szczepan. All rights reserved.</p>
        </div>
      </footer>

      {/* Contact Form Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Send a Message</DialogTitle>
            <DialogDescription>Fill out the form below and I'll get back to you.</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot - hidden from users */}
              <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="subject" render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject <span className="text-muted-foreground text-xs">(optional)</span></FormLabel>
                  <FormControl><Input placeholder="What's this about?" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl><Textarea placeholder="Your message..." className="min-h-[120px]" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" className="w-full" disabled={sending}>
                {sending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
