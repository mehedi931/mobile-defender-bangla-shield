
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Mobile Protection in 3 Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mobile Defender provides comprehensive cybersecurity protection designed specifically for users in Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.number} 
              className={`relative overflow-hidden border-2 border-${feature.color}-100 hover:border-${feature.color}-300 transition-all duration-300 hover:shadow-xl group`}
            >
              <CardContent className="p-8">
                <div className={`absolute top-0 right-0 w-16 h-16 bg-${feature.color}-500 text-white flex items-center justify-center text-2xl transform rotate-12 translate-x-4 -translate-y-4`}>
                  {feature.icon}
                </div>
                
                <div className={`text-${feature.color}-500 text-6xl font-bold mb-4 opacity-20 group-hover:opacity-30 transition-opacity`}>
                  {feature.number}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <h4 className={`text-lg font-medium text-${feature.color}-600 mb-4`}>
                  {feature.titleBangla}
                </h4>
                
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {feature.description}
                </p>
                <p className={`text-sm text-${feature.color}-700 italic`}>
                  {feature.descriptionBangla}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
