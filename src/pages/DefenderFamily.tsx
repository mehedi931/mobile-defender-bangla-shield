
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Bell, Shield, Heart, Eye, Lock } from "lucide-react";

const DefenderFamily = () => {
  const familyFeatures = [
    {
      title: "Monitor Loved Ones",
      titleBangla: "প্রিয়জনদের পর্যবেক্ষণ",
      description: "Keep track of your family members' mobile activity with comprehensive monitoring tools that respect privacy while ensuring safety.",
      icon: Eye,
      color: "defender-blue"
    },
    {
      title: "Real-time Alerts",
      titleBangla: "রিয়েল-টাইম সতর্কতা",
      description: "Get instant notifications when potential threats or unsafe activities are detected on any family member's device.",
      icon: Bell,
      color: "defender-red"
    },
    {
      title: "Block Harmful Content",
      titleBangla: "ক্ষতিকর কন্টেন্ট ব্লক",
      description: "Automatically block harmful websites, apps, and content that could put your family members at risk.",
      icon: Shield,
      color: "defender-green"
    },
    {
      title: "Safe Online Habits",
      titleBangla: "নিরাপদ অনলাইন অভ্যাস",
      description: "Encourage and guide family members toward safer online practices with educational tools and gentle reminders.",
      icon: Heart,
      color: "defender-blue"
    }
  ];

  const testimonials = [
    {
      name: "Rashida Khatun",
      role: "Mother of 2",
      location: "Dhaka",
      comment: "Mobile Defender Family gives me peace of mind knowing my children are safe online. The alerts help me guide them without being too restrictive.",
      commentBangla: "মোবাইল ডিফেন্ডার ফ্যামিলি আমাক মানসিক শান্তি দেয় কারণ আমি জানি আমার সন্তানরা অনলাইনে নিরাপদ। সতর্কবার্তাগুলি আমাকে খুব বেশি নিষেধাজ্ঞা ছাড়াই তাদের গাইড করতে সাহায্য করে।",
      avatar: "👩‍🏫"
    },
    {
      name: "Abdul Rahman",
      role: "Father of 3",
      location: "Chittagong",
      comment: "The family protection features are amazing. I can protect my elderly parents and teenage kids with the same app. It's like having a digital guardian for the whole family.",
      commentBangla: "পারিবারিক সুরক্ষা বৈশিষ্ট্যগুলি অসাধারণ। আমি একই অ্যাপ দিয়ে আমার বয়স্ক বাবা-মা এবং কিশোর সন্তানদের রক্ষা করতে পারি। এটি পুরো পরিবারের জন্য একটি ডিজিটাল অভিভাবক থাকার মতো।",
      avatar: "👨‍💼"
    }
  ];

  return (
    <div className="min-h-screen font-inter bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-defender-blue-900 via-defender-blue-800 to-defender-green-800 py-24 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Defender
              <span className="block text-defender-green-400">Family</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-defender-blue-100 mb-4 font-semibold">
              পরিবারের নিরাপত্তা, আপনার হাতের মুঠোয়
            </p>
            <p className="text-xl md:text-2xl text-defender-blue-200 mb-12 leading-relaxed max-w-4xl mx-auto">
              Comprehensive family protection that monitors, alerts, blocks harmful content, and encourages safe online habits for all your loved ones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-defender-green-500 hover:bg-defender-green-600 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold"
              >
                Protect Your Family Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-defender-blue-900 px-10 py-6 text-xl rounded-2xl transition-all duration-300 font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Family Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              Complete Family Protection
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-semibold">
              Advanced tools designed specifically for parents and guardians to keep their loved ones safe in the digital world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {familyFeatures.map((feature, index) => (
              <Card key={feature.title} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg">
                <CardContent className="p-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-700 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <h4 className={`text-xl font-bold text-${feature.color}-600 mb-6`}>
                    {feature.titleBangla}
                  </h4>
                  
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Family Testimonials */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Trusted by Families Across Bangladesh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Mobile Defender Family is helping parents protect their loved ones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0">
                <CardContent className="p-10">
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-6">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-lg text-gray-600 font-medium">{testimonial.role}</p>
                      <p className="text-defender-blue-600 font-semibold">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed font-medium">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="bg-defender-blue-50 p-6 rounded-2xl border-l-4 border-defender-blue-500">
                    <p className="text-defender-blue-800 italic font-medium">
                      "{testimonial.commentBangla}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-defender-blue-900 to-defender-green-800">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Protect Your Family?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join thousands of families in Bangladesh who trust Mobile Defender to keep their loved ones safe online.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-defender-blue-900 hover:bg-gray-100 px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold"
          >
            Download Defender Family
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DefenderFamily;
