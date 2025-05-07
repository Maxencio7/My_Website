
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    alt: "Cloud security illustration"
  },
  {
    title: "Incident Response Planning",
    icon: Activity,
    description: `Development of incident response strategies. Staff training for breaches and emergencies.`,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    alt: "Incident response training session"
  },
  {
    title: "Employee Cybersecurity Awareness Training",
    icon: Users,
    description: `Training for staff to prevent phishing, social engineering, and poor security practices. Security culture improvements.`,
    image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=600&q=80",
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
        {/* F-pattern: Strong first horizontal line */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left md:text-center drop-shadow-lg">Services Offered</h2>
        <p className="max-w-2xl mx-auto mb-8 text-left md:text-center text-lg text-gray-300">
          <span className="font-semibold text-[#00d2ff]">Cybersecurity and IT Services for Small Businesses and Individuals</span>
        </p>
        
        {/* Featured services (top 3) - second horizontal scan line */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#00d2ff] pl-4">Featured Services</h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {services.slice(0, 3).map(({ title, description, icon: Icon, image, alt }, i) => (
              <div
                key={title}
                className="bg-[#181C25]/90 rounded-3xl shadow-2xl border border-[#232336]/60 flex flex-col hover:scale-105 transition-transform duration-300 group relative overflow-hidden"
                style={{ minHeight: 400, maxWidth: 430, margin: "0 auto" }}
              >
                {/* Service Image with robust error handling */}
                <div className="h-48 w-full overflow-hidden rounded-t-3xl border-b-4 border-[#00d2ff]/40">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      console.error(`Failed to load image for ${title}`);
                      e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20fill%3D%22%23232336%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%23ffffff%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20dy%3D%220.35em%22%20text-anchor%3D%22middle%22%20x%3D%22300%22%20y%3D%22200%22%3E" + title + "%3C%2Ftext%3E%3C%2Fsvg%3E";
                    }}
                  />
                </div>
                
                {/* Icon and Content */}
                <div className="flex-1 flex flex-col items-start px-7 py-7">
                  <div className="bg-gradient-to-br from-[#00d2ff] to-[#8B5CF6] text-white rounded-xl p-3 shadow-md z-10 -mt-16 mb-4 border-2 border-white/10 self-start">
                    <Icon size={32} aria-hidden="true" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-2 text-white drop-shadow">{title}</h4>
                  <p className="text-gray-300 text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional services - vertical scan area */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#00d2ff] pl-4">Additional Services</h3>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(3).map(({ title, description, icon: Icon }, i) => (
              <div
                key={title}
                className="bg-[#181C25]/90 rounded-xl shadow-lg border border-[#232336]/60 flex p-5 hover:bg-[#1d2231]/90 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#00d2ff] to-[#8B5CF6] text-white rounded-lg p-3 mr-4 self-start">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
