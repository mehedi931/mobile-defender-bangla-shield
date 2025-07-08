
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rashida Begum",
      location: "Dhaka, Bangladesh",
      role: "Teacher",
      comment: "Mobile Defender saved my phone from a dangerous app that was stealing my personal information. The Bangla notifications made it so easy to understand the problem and fix it immediately!",
      commentBangla: "মোবাইল ডিফেন্ডার আমার ফোনকে একটি বিপজ্জনক অ্যাপ থেকে রক্ষা করেছে যা আমার ব্যক্তিগত তথ্য চুরি করছিল। বাংলা বিজ্ঞপ্তি সমস্যাটি বুঝতে এবং তাৎক্ষণিক সমাধান করতে খুবই সহায়ক ছিল!",
      rating: 5,
      avatar: "👩‍🏫"
    },
    {
      name: "Mohammad Karim",
      location: "Chittagong, Bangladesh",
      role: "Business Owner",
      comment: "As a small business owner, I can't afford to lose my customer data. Mobile Defender gives me peace of mind with 24/7 protection and clear guidance in my native language.",
      commentBangla: "একজন ছোট ব্যবসায়ী হিসেবে আমি আমার গ্রাহকদের তথ্য হারাতে পারি না। মোবাইল ডিফেন্ডার ২৪/৭ সুরক্ষা এবং আমার মাতৃভাষায় স্পষ্ট নির্দেশনা দিয়ে আমাকে মানসিক শান্তি দেয়।",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Fatima Rahman",
      location: "Sylhet, Bangladesh",
      role: "Student",
      comment: "I love how Mobile Defender explains everything in simple terms. It detected malware on my phone that I never knew existed and helped me remove it safely.",
      commentBangla: "মোবাইল ডিফেন্ডার কিভাবে সব কিছু সহজ ভাষায় ব্যাখ্যা করে তা আমার ভালো লাগে। এটি আমার ফোনে ম্যালওয়্যার খুঁজে বের করেছে যার অস্তিত্ব আমি জানতামই না এবং এটি নিরাপদে অপসারণ করতে সাহায্য করেছে।",
      rating: 5,
      avatar: "👩‍🎓"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Users Across Bangladesh
          </h2>
          <p className="text-lg text-gray-600">
            See what our users have to say about Mobile Defender
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-defender-blue-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>
                
                <div className="text-sm text-defender-blue-700 bg-defender-blue-50 p-3 rounded-lg">
                  "{testimonial.commentBangla}"
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
