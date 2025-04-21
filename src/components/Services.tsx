
import { ShieldCheck, Search, Wrench, Network, FileLock, HardDrive, Cloud, Activity, Users } from "lucide-react";

const services = [
  {
    title: "Cybersecurity Audits",
    icon: ShieldCheck,
    description: `Comprehensive security assessments to identify vulnerabilities in your systems. Recommendations for improving security protocols and protecting sensitive data.`,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    alt: "Cybersecurity audit concept - digital code on a screen"
  },
  {
    title: "Penetration Testing (Ethical Hacking)",
    icon: Search,
    description: `Simulated attacks to identify weaknesses in your network, systems, and applications. Detailed reports on findings and mitigation strategies.`,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    alt: "Robot and coding interface symbolizing hacking"
  },
  {
    title: "IT Troubleshooting",
    icon: Wrench,
    description: `Assistance diagnosing and resolving common IT issues: hardware, software, and network connectivity. Solutions for performance issues, crashes, or malware problems.`,
    image: "/lovable-uploads/placeholder-1581091226825-a6a2a5aee158.jpg",
    alt: "Woman troubleshooting laptop computer"
  },
  {
    title: "Network Security Configuration",
    icon: Network,
    description: `Secure setup of firewalls, routers, and VPNs. Network hardening and data protection recommendations.`,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
    alt: "Group examining secure network setup"
  },
  {
    title: "Data Encryption Services",
    icon: FileLock,
    description: `Secure encryption methods for sensitive data at rest and in transit. Best practices for storage and sharing.`,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    alt: "Encrypted data on laptop"
  },
  {
    title: "Windows OS Support",
    icon: HardDrive,
    description: `Troubleshooting for Windows: system crashes, updates, performance problems. Regular updates and patch management guidance.`,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    alt: "Monitor displaying system diagnostics"
  },
  {
    title: "Cloud Security Solutions",
    icon: Cloud,
    description: `Protect cloud infrastructure and data. Secure cloud backups and disaster recovery plans.`,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    alt: "Cloud security illustration"
  },
  {
    title: "Incident Response Planning",
    icon: Activity,
    description: `Development of incident response strategies. Staff training for breaches and emergencies.`,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    alt: "Incident response training session"
  },
  {
    title: "Employee Cybersecurity Awareness Training",
    icon: Users,
    description: `Training for staff to prevent phishing, social engineering, and poor security practices. Security culture improvements.`,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    alt: "Team learning cybersecurity skills"
  }
];

const Services = () => {
  return (
    <section
      className="relative py-20 bg-gradient-to-br from-[#121212] via-[#1A1F2C] to-[#2e085f] min-h-[80vh]"
      id="services"
    >
      {/* Decorative background gradient / glass effect */}
      <div className="absolute inset-0 pointer-events-none select-none" style={{background: "linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 75%, #1A1F2C 100%)", opacity: 0.12, zIndex: 1}} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg animate-fade-in">Services Offered</h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-lg text-gray-300 animate-fade-in">
          <span className="font-semibold text-[#00d2ff]">Cybersecurity and IT Services for Small Businesses and Individuals</span>
        </p>
        <div className="grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon, image, alt }, i) => (
            <div
              key={title}
              className="bg-[#181C25]/90 rounded-3xl shadow-2xl border border-[#232336]/60 flex flex-col hover:scale-105 transition-transform duration-300 animate-fade-in group relative overflow-hidden"
              style={{ minHeight: 420, maxWidth: 430, margin: "0 auto" }}
            >
              {/* Service Image */}
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="h-48 w-full object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500 border-b-4 border-[#00d2ff]/40"
                onError={(e) => {
                  // fallback to placeholder if the Unsplash image doesn't load
                  e.currentTarget.src = "/lovable-uploads/placeholder-1581091226825-a6a2a5aee158.jpg";
                }}
              />
              {/* Icon and Content */}
              <div className="flex-1 flex flex-col items-center px-7 py-7">
                <div className="bg-gradient-to-br from-[#00d2ff] to-[#8B5CF6] text-white rounded-xl p-4 shadow-md z-10 -mt-16 mb-4 border-2 border-white/10">
                  <Icon size={38} />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white drop-shadow text-center">{title}</h3>
                <p className="text-gray-300 text-base text-center">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
