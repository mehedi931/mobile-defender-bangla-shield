
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      number: "01",
      title: "Detect",
      titleBangla: "চিহ্নিত করুন",
      description: "Advanced scanning technology identifies threats, harmful apps, and privacy risks on your device instantly.",
      descriptionBangla: "আপনার ডিভাইসে থ্রেট, ক্ষতিকর অ্যাপ এবং গোপনীয়তার ঝুঁকি তাৎক্ষণিকভাবে চিহ্নিত করে।",
      color: "defender-blue",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Enhance Awareness",
      titleBangla: "সচেতনতা বৃদ্ধি",
      description: "Get instant notifications about security issues in simple Bangla or English that everyone can understand.",
      descriptionBangla: "সহজ বাংলা বা ইংরেজিতে নিরাপত্তা সমস্যা সম্পর্কে তাৎক্ষণিক বিজ্ঞপ্তি পান।",
      color: "defender-green",
      icon: "🔔"
    },
    {
      number: "03",
      title: "Fix",
      titleBangla: "সমাধান করুন",
      description: "Step-by-step guidance helps you resolve security issues immediately and keep your phone safe.",
      descriptionBangla: "ধাপে ধাপে গাইডেন্স আপনাকে নিরাপত্তা সমস্যা তাৎক্ষণিক সমাধান করতে সাহায্য করে।",
      color: "defender-red",
      icon: "🛠️"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Complete Mobile Protection in 3 Steps
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Mobile Defender provides comprehensive cybersecurity protection designed specifically for users in Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.number} 
              className={`relative overflow-hidden border-2 border-${feature.color}-100 hover:border-${feature.color}-300 transition-all duration-500 hover:shadow-2xl hover:scale-105 group cursor-pointer`}
            >
              <CardContent className="p-8 text-center">
                {/* Large animated icon at the top */}
                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <span className="text-5xl animate-pulse group-hover:animate-bounce">{feature.icon}</span>
                </div>
                
                {/* Step number with glow effect */}
                <div className={`text-${feature.color}-500 text-8xl font-black mb-4 opacity-15 group-hover:opacity-25 transition-all duration-500 transform group-hover:scale-110`}>
                  {feature.number}
                </div>
                
                <h3 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-${feature.color}-700 transition-colors duration-300 tracking-tight">
                  {feature.title}
                </h3>
                <h4 className={`text-xl font-bold text-${feature.color}-600 mb-6`}>
                  {feature.titleBangla}
                </h4>
                
                <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <p className={`text-base font-medium text-${feature.color}-700 italic bg-${feature.color}-50 p-3 rounded-lg`}>
                  {feature.descriptionBangla}
                </p>

                {/* Decorative elements */}
                <div className={`absolute -top-2 -right-2 w-16 h-16 bg-${feature.color}-100 rounded-full opacity-50 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500`}></div>
                <div className={`absolute -bottom-4 -left-4 w-20 h-20 bg-${feature.color}-50 rounded-full opacity-30 group-hover:scale-125 group-hover:opacity-50 transition-all duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
