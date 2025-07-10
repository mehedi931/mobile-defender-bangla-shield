
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Activity, AlertTriangle, Key, Lock } from "lucide-react";

const AppModules = () => {
  const modules = [
    {
      title: "Network Security",
      titleBangla: "নেটওয়ার্ক নিরাপত্তা",
      description: "Monitor all outgoing and incoming network traffic to detect suspicious connections and data transfers.",
      descriptionBangla: "সন্দেহজনক সংযোগ এবং ডেটা স্থানান্তর সনাক্ত করতে সমস্ত আউটগোয়িং এবং ইনকামিং নেটওয়ার্ক ট্রাফিক পর্যবেক্ষণ করুন।",
      icon: Shield,
      color: "defender-blue",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Activity Monitoring",
      titleBangla: "কার্যকলাপ পর্যবেক্ষণ",
      description: "Track microphone, camera, and sensor usage to know when apps are accessing your private data.",
      descriptionBangla: "অ্যাপগুলি কখন আপনার ব্যক্তিগত ডেটা অ্যাক্সেস করছে তা জানতে মাইক্রোফোন, ক্যামেরা এবং সেন্সর ব্যবহার ট্র্যাক করুন।",
      icon: Activity,
      color: "defender-green",
      gradient: "from-green-500 to-green-700"
    },
    {
      title: "Malware Guard",
      titleBangla: "ম্যালওয়্যার গার্ড",
      description: "Identify malicious, suspicious, and potentially harmful apps before they can damage your device.",
      descriptionBangla: "ক্ষতিকর, সন্দেহজনক এবং সম্ভাব্য ক্ষতিকর অ্যাপগুলি আপনার ডিভাইসের ক্ষতি করার আগেই চিহ্নিত করুন।",
      icon: AlertTriangle,
      color: "defender-red",
      gradient: "from-red-500 to-red-700"
    },
    {
      title: "Password Manager",
      titleBangla: "পাসওয়ার্ড ম্যানেজার",
      description: "Securely store and manage all your login credentials with military-grade encryption.",
      descriptionBangla: "সামরিক-গ্রেড এনক্রিপশন সহ আপনার সমস্ত লগইন শংসাপত্র নিরাপদে সংরক্ষণ এবং পরিচালনা করুন।",
      icon: Key,
      color: "defender-blue",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "AppLock",
      titleBangla: "অ্যাপ লক",
      description: "Lock private apps and sensitive information to prevent unauthorized access by others.",
      descriptionBangla: "অন্যদের দ্বারা অননুমোদিত অ্যাক্সেস প্রতিরোধ করতে ব্যক্তিগত অ্যাপ এবং সংবেদনশীল তথ্য লক করুন।",
      icon: Lock,
      color: "defender-green",
      gradient: "from-indigo-500 to-indigo-700"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            5 Powerful Modules
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-semibold">
            Complete mobile protection with specialized tools for every security need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card 
              key={module.title}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer overflow-hidden"
            >
              <CardContent className="p-8 relative">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <module.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {module.title}
                </h3>
                <h4 className="text-lg font-bold text-blue-400 mb-4">
                  {module.titleBangla}
                </h4>
                
                <p className="text-gray-300 mb-4 leading-relaxed font-medium">
                  {module.description}
                </p>
                <div className="bg-gray-700 p-4 rounded-xl border-l-4 border-blue-500">
                  <p className="text-gray-300 italic text-sm">
                    {module.descriptionBangla}
                  </p>
                </div>
                
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${module.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppModules;
