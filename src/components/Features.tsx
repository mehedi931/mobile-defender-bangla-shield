
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      number: "01",
      title: "Detect",
      titleBangla: "চিহ্নিত করুন",
      description: "Spot threats, risky behaviors, and suspicious network activity before they can harm your device or steal your data.",
      descriptionBangla: "আপনার ডিভাইস বা ডেটার ক্ষতি করার আগেই থ্রেট, ঝুঁকিপূর্ণ আচরণ এবং সন্দেহজনক নেটওয়ার্ক কার্যকলাপ চিহ্নিত করুন।",
      color: "defender-blue",
      icon: "🔍",
      gradient: "from-defender-blue-500 to-defender-blue-700"
    },
    {
      number: "02",
      title: "Enhance Awareness",
      titleBangla: "সচেতনতা বৃদ্ধি",
      description: "Get clear notifications and education about what's happening on your device and why it matters for your security.",
      descriptionBangla: "আপনার ডিভাইসে কী ঘটছে এবং আপনার নিরাপত্তার জন্য এটি কেন গুরুত্বপূর্ণ সে সম্পর্কে স্পষ্ট বিজ্ঞপ্তি এবং শিক্ষা পান।",
      color: "defender-green",
      icon: "🧠",
      gradient: "from-defender-green-500 to-defender-green-700"
    },
    {
      number: "03",
      title: "Fix",
      titleBangla: "সমাধান করুন",
      description: "Take meaningful action: block access, uninstall dangerous apps, and protect your family members with confidence.",
      descriptionBangla: "অর্থবহ পদক্ষেপ নিন: অ্যাক্সেস ব্লক করুন, বিপজ্জনক অ্যাপ আনইনস্টল করুন এবং আত্মবিশ্বাসের সাথে আপনার পরিবারের সদস্যদের রক্ষা করুন।",
      color: "defender-red",
      icon: "⚡",
      gradient: "from-defender-red-500 to-defender-red-700"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
            Three-Stage Protection
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Mobile Defender's comprehensive approach gives you complete control over your mobile security
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Card 
              // key={feature.number} 
              className="relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 group cursor-pointer bg-white"
            >
              <CardContent className="p-10 text-center relative z-10">
                {/* Large animated icon */}
                <div className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <span className="text-7xl animate-pulse group-hover:animate-bounce">{feature.icon}</span>
                </div>
                
                {/* Step number
                <div className={`text-${feature.color}-500 text-9xl font-black mb-6 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110 absolute top-4 right-6`}>
                  {feature.number}
                </div> */}
                
                <h3 className={`text-4xl font-black text-gray-900 mb-4 group-hover:text-${feature.color}-700 transition-colors duration-300 tracking-tight`}>
                  {feature.title}
                </h3>
                <h4 className={`text-2xl font-bold text-${feature.color}-600 mb-8`}>
                  {feature.titleBangla}
                </h4>
                
                <p className="text-xl font-semibold text-gray-700 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className={`bg-${feature.color}-50 p-6 rounded-2xl border-l-4 border-${feature.color}-500`}>
                  <p className={`text-lg font-medium text-${feature.color}-800 italic`}>
                    {feature.descriptionBangla}
                  </p>
                </div>
              </CardContent>
              
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
