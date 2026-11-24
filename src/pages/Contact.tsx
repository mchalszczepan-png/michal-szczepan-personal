import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SiteHud from "@/components/SiteHud";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import "@/styles/contact.css";

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

  useEffect(() => {
    document.title = "Contact — Michal Szczepan";
  }, []);

  return (
    <div className="pg-contact">
      <SiteHud world="home" />

      <main className="stage" id="stage">
        <div className="console">
          <div className="console-top">
            <span className="brand">MS-1 HANDHELD <i>P1</i></span>
            <span className="pw">POWER <span className="led" /></span>
          </div>
          <div className="screen">
            <div className="scr-bar"><span>P1 · Michal</span><span className="blink">Contact</span><span>Cork, Ireland</span></div>
            <div className="scr-body">
              <p className="kicker">Player 1</p>
              <h1>Get in Touch</h1>
              <p className="pitch">Let's discuss your next project or just say hello</p>

              <h2><span>Contact Information</span></h2>
              <p className="pitch">
                Feel free to reach out through any of these channels. I'm always open to
                discussing new projects, creative ideas, or opportunities.
              </p>

              <ul className="channels">
                <li>
                  <button type="button" onClick={() => setOpen(true)} className="channel">
                    <span className="ico"><Mail aria-hidden="true" /></span>
                    <span><b>Email</b><small>Send me a message</small></span>
                  </button>
                </li>
                <li>
                  <a href="https://github.com/mchalszczepan-png" target="_blank" rel="noopener noreferrer" className="channel">
                    <span className="ico"><Github aria-hidden="true" /></span>
                    <span><b>GitHub</b><small>github.com/mchalszczepan-png</small></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/michal-szczepan-728189370" target="_blank" rel="noopener noreferrer" className="channel">
                    <span className="ico"><Linkedin aria-hidden="true" /></span>
                    <span><b>LinkedIn</b><small>linkedin.com/in/michal-szczepan-728189370</small></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="foot-note">© {new Date().getFullYear()} Michal Szczepan. All rights reserved.</p>
      </main>

      {/* Contact Form Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md border-4 border-[#1d1b16] bg-[#efe8d6] text-[#1d1b16] rounded-2xl shadow-[6px_6px_0_#1d1b16]">
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
