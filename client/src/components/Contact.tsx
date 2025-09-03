import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// The URL for your Google Apps Script Web App
// Make sure this is a string
const SCRIPT_URL = "https:script.google.com/macros/s/AKfycbx5Xc89fWmjC8h0Z45lMnETZC9EXiTKLoNwvjYzkc77pPKtJAlcD8KPuYdy_O8XduQq/exec";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(''); // Correctly declared state
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    // Create a new FormData object and append form data
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('subject', formData.subject);
    form.append('message', formData.message);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors'
      });

      setSubmissionStatus('Message sent successfully! 😊');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmissionStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* ... (Your existing JSX code for the contact section) ... */}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ... (Your existing JSX for the 'Let's Connect' section) ... */}
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* ... (Your existing JSX for the 'Let's Connect' section) ... */}
          
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
            {submissionStatus && (
              <p className="mt-4 text-center text-sm font-medium">{submissionStatus}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
