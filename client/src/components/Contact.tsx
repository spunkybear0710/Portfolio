import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I will get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Deep Space Background */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Deep space" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title fade-in">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-primary text-xl mr-4" />
                <a 
                  href="mailto:tanujgautam12@gmail.com" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  tanujgautam12@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary text-xl mr-4" />
                <span className="text-gray-300">+91 7763859191</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary text-xl mr-4" />
                <span className="text-gray-300">Jabalpur, Madhya Pradesh</span>
              </div>
            </div>
            
            <div className="flex space-x-6 mt-8">
              <a 
                href="https://linkedin.com/in/tanuj-kumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary/30 transition-all duration-300"
              >
                <Linkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/tanuj-kumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary/30 transition-all duration-300"
              >
                <Github className="text-xl" />
              </a>
            </div>
          </div>
          
          <div className="glass-card p-8 fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input-field resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
