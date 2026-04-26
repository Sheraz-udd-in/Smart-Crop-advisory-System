import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    dashboard: 'Dashboard',
    cropRecommendation: 'Crop Recommendation',
    fertilizerGuide: 'Fertilizer Guide',
    weather: 'Weather Insights',
    askExpert: 'Expert Consultation',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    welcomeMessage: 'Welcome to Smart Crop Advisory System',
    heroTitle: 'Empowering Farmers with Smart Agricultural Solutions',
    heroSubtitle: 'Get personalized crop recommendations, weather insights, and expert guidance',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    features: 'Features',
    aboutUs: 'About Us',
    contact: 'Contact',
    allRightsReserved: 'All rights reserved',

    // Footer
    brandName: 'Smart Crop Advisory',
    brandDesc: 'Empowering farmers with technology-driven agricultural solutions for sustainable farming.',
    quickLinks: 'Quick Links',
    adminLogin: 'Admin Login',
    servicesTitle: 'Services',

    // Dashboard
    advisoryTools: 'Your Advisory Tools',
    todaysTips: "Today's Farming Tips",
    tip1: 'Check soil moisture before irrigation to save water and improve crop yield',
    tip2: 'Monitor weather forecasts regularly to plan your agricultural activities',
    tip3: 'Use organic fertilizers to improve soil health and reduce chemical dependency',
    farmAnalytics: 'Farm Analytics',
    cropCalendar: 'Crop Calendar',
    comingSoon: 'Coming Soon',
    stateLabel: 'State',
    districtLabel: 'District',
    statusLabel: 'Status',
    statusActive: '✅ Active',

    // Card descriptions
    cropRecommendationDesc: 'Get AI-powered crop suggestions based on your soil and location',
    fertilizerGuideDesc: 'Optimal NPK ratios and organic fertilizer recommendations',
    weatherDesc: 'Real-time weather updates and 7-day forecasts',
    askExpertDesc: 'Get answers from agricultural experts',
    farmAnalyticsDesc: 'Track your farm performance and insights',
    cropCalendarDesc: 'Plan your agricultural activities',

    // Home page
    empoweringTitle: "Empowering India's Farmers 🇮🇳",
    empoweringDesc1: 'Agriculture is the backbone of our nation, yet farmers often lack access to timely information about crop selection, weather patterns, and fertilizer usage.',
    empoweringDesc2: 'Our mission is to bridge this gap with technology, providing farmers with data-driven insights that increase yield, reduce costs, and promote sustainable farming practices.',
    featuresSubtitle: 'Comprehensive tools designed specifically for Indian farmers',
    ctaTitle: 'Ready to Transform Your Farming? 🌾',
    ctaSubtitle: 'Join thousands of farmers already benefiting from smart agricultural solutions',
    ctaButton: 'Start Your Journey Today',

    // Home feature descriptions
    cropRecommendationHomeDesc: 'Get AI-powered crop suggestions based on your soil type and location',
    fertilizerGuideHomeDesc: 'Optimal NPK ratios and organic fertilizer recommendations',
    weatherHomeDesc: 'Real-time weather updates and 7-day forecasts for your region',
    askExpertHomeDesc: 'Get answers from agricultural experts for your farming queries',
    communitySupport: 'Community Support',
    communitySupportDesc: 'Connect with fellow farmers and share best practices',
    dataSecurity: 'Data Security',
    dataSecurityDesc: 'Your farming data is secure and protected with us',

    // CropRecommendation page
    cropPageTitle: 'Crop Recommendation System 🌱',
    cropPageSubtitle: 'Get AI-powered crop suggestions based on your soil and location',
    enterFarmDetails: 'Enter Your Farm Details',
    soilTypeLabel: 'Soil Type',
    selectSoilType: 'Select your soil type',
    selectState: 'Select your state',
    getCropRec: 'Get Crop Recommendations',
    gettingRec: 'Getting Recommendations...',
    recommendedCrops: 'Recommended Crops 🌾',
    cropsFound: 'crops found',
    cropName: 'Crop Name',
    season: 'Season',
    waterReq: 'Water Requirement',
    duration: 'Duration',
    expectedYield: 'Expected Yield',
    cropRotationTip: 'Tip: Consider crop rotation to maintain soil health and prevent pest buildup. Diversifying crops also helps in managing market risks.',

    // FertilizerGuide page
    fertPageTitle: 'Fertilizer Guide 💧',
    fertPageSubtitle: 'Get optimal NPK ratios and organic fertilizer recommendations',
    selectYourCrop: 'Select Your Crop',
    cropType: 'Crop Type',
    selectCropPlaceholder: 'Select crop for fertilizer recommendation',
    getFertGuide: 'Get Fertilizer Guide',
    gettingFertRec: 'Getting Recommendations...',
    npkRequirements: 'NPK Requirements for',
    nitrogen: 'Nitrogen',
    phosphorus: 'Phosphorus',
    potassium: 'Potassium',
    organicFertRec: 'Organic Fertilizer Recommendation',
    organicManureTip: 'Apply organic manure to improve soil structure and microbial activity',
    applicationTips: '🌱 Application Tips:',
    fertTip1: 'Apply fertilizers in split doses for better nutrient uptake',
    fertTip2: 'Ensure soil moisture is adequate before fertilizer application',
    fertTip3: 'Mix organic and chemical fertilizers for balanced nutrition',
    fertTip4: 'Apply fertilizers 5-7 cm away from plant base to avoid root burn',
    importantPrecautions: '⚠️ Important Precautions:',
    precaution1: 'Always conduct soil testing before fertilizer application',
    precaution2: 'Avoid over-fertilization as it can harm crops and soil',
    precaution3: 'Use protective gear when handling chemical fertilizers',
    precaution4: 'Store fertilizers in a cool, dry place away from moisture',

    // Weather page
    weatherPageTitle: 'Weather Information 🌦️',
    weatherPageSubtitle: 'Get real-time weather updates and forecasts for your region',
    enterLocation: 'Enter Your Location',
    districtName: 'District Name',
    enterDistrict: 'Enter your district name',
    getWeather: 'Get Weather Information',
    gettingWeather: 'Getting Weather Data...',
    currentWeather: 'Current Weather',
    temperature: 'Temperature',
    humidity: 'Humidity',
    rainfall: 'Rainfall',
    forecast: '3-Day Forecast',
    weatherFarmTip: 'Farming Tip: Plan your irrigation and spraying activities based on the weather forecast. Avoid applying pesticides before expected rainfall.',

    // AskExpert page
    askPageTitle: 'Ask an Expert 🎤',
    askPageSubtitle: 'Get answers from agricultural experts for your farming queries',
    submitQuery: 'Submit Your Query',
    expertResponseTime: 'Our agricultural experts will review and respond to your question within 24-48 hours',
    yourName: 'Your Name',
    yourDistrict: 'District',
    yourQuestion: 'Your Question',
    questionPlaceholder: 'Describe your agricultural query in detail. For example: What is the best irrigation method for wheat in clay soil?',
    questionRequired: 'Please enter your question',
    questionMinLength: 'Question must be at least 20 characters',
    questionMaxLength: 'Question must not exceed 1000 characters',
    submittingQuery: 'Submitting Query...',
    submitToExpert: 'Submit Query to Expert',
    betterResponsesTips: '💡 Tips for Better Responses:',
    queryTip1: 'Be specific about your crop, soil type, and region',
    queryTip2: "Include details about the problem or issue you're facing",
    queryTip3: "Mention any practices you've already tried",
    queryTip4: 'Ask one main question at a time for clearer answers',
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'How long does it take to get a response?',
    faq1A: 'Typically within 24-48 hours. Urgent queries are prioritized.',
    faq2Q: 'Can I ask multiple questions?',
    faq2A: 'Yes, but we recommend asking one main question per submission for better clarity.',
    faq3Q: 'What types of questions can I ask?',
    faq3A: 'Any agriculture-related queries: crop selection, pest control, soil management, irrigation, etc.',
    querySuccessTitle: 'Query Submitted Successfully! 🎉',
    querySuccessDesc: 'Your query has been submitted to our agricultural experts. You will receive a detailed response within 24-48 hours at your registered contact details.',
    gotIt: 'Got it!',
    
    // My Queries
    myQueriesTitle: 'Your Past Queries',
    statusPending: 'Pending',
    statusAnswered: 'Answered',
    adminResponse: 'Expert Response:',
    noQueriesFound: "You haven't submitted any queries yet.",

    // Crop Calendar
    calendarPageTitle: 'Crop Calendar',
    calendarPageSubtitle: 'Plan your agricultural activities month by month',
    selectCropCalendar: 'Select Crop',
    cropCalendarPlaceholder: 'Select a crop to view calendar',
    viewCalendar: 'View Calendar',
    sowingPhase: 'Sowing Phase',
    growingPhase: 'Growing Phase',
    harvestingPhase: 'Harvesting Phase',
    activities: 'Key Activities',
    noCalendarData: 'No calendar data available for this crop.',
  },
  hi: {
    home: 'होम',
    dashboard: 'डैशबोर्ड',
    cropRecommendation: 'फसल सिफारिश',
    fertilizerGuide: 'उर्वरक गाइड',
    weather: 'मौसम जानकारी',
    askExpert: 'विशेषज्ञ से पूछें',
    login: 'लॉगिन',
    signup: 'साइन अप',
    logout: 'लॉगआउट',
    welcomeMessage: 'स्मार्ट फसल सलाहकार प्रणाली में आपका स्वागत है',
    heroTitle: 'स्मार्ट कृषि समाधानों के साथ किसानों को सशक्त बनाना',
    heroSubtitle: 'व्यक्तिगत फसल सिफारिशें, मौसम की जानकारी और विशेषज्ञ मार्गदर्शन प्राप्त करें',
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    features: 'विशेषताएं',
    aboutUs: 'हमारे बारे में',
    contact: 'संपर्क',
    allRightsReserved: 'सर्वाधिकार सुरक्षित',

    // Footer
    brandName: 'स्मार्ट फसल सलाहकार',
    brandDesc: 'टिकाऊ खेती के लिए प्रौद्योगिकी-संचालित कृषि समाधानों के साथ किसानों को सशक्त बनाना।',
    quickLinks: 'त्वरित लिंक',
    adminLogin: 'एडमिन लॉगिन',
    servicesTitle: 'सेवाएं',

    // Dashboard
    advisoryTools: 'आपके सलाहकार उपकरण 🛠️',
    todaysTips: 'आज की खेती की सलाह 💡',
    tip1: 'पानी बचाने और फसल की पैदावार बढ़ाने के लिए सिंचाई से पहले मिट्टी की नमी जांचें',
    tip2: 'अपनी कृषि गतिविधियों की योजना बनाने के लिए नियमित रूप से मौसम पूर्वानुमान देखें',
    tip3: 'मिट्टी के स्वास्थ्य में सुधार और रासायनिक निर्भरता कम करने के लिए जैविक खाद का उपयोग करें',
    farmAnalytics: 'फार्म विश्लेषण',
    cropCalendar: 'फसल कैलेंडर',
    comingSoon: 'जल्द आ रहा है',
    stateLabel: 'राज्य',
    districtLabel: 'जिला',
    statusLabel: 'स्थिति',
    statusActive: '✅ सक्रिय',

    // Card descriptions
    cropRecommendationDesc: 'अपनी मिट्टी और स्थान के आधार पर AI-संचालित फसल सुझाव प्राप्त करें',
    fertilizerGuideDesc: 'इष्टतम NPK अनुपात और जैविक उर्वरक सिफारिशें',
    weatherDesc: 'वास्तविक समय मौसम अपडेट और 7-दिन का पूर्वानुमान',
    askExpertDesc: 'कृषि विशेषज्ञों से उत्तर प्राप्त करें',
    farmAnalyticsDesc: 'अपने खेत के प्रदर्शन और जानकारी को ट्रैक करें',
    cropCalendarDesc: 'अपनी कृषि गतिविधियों की योजना बनाएं',

    // Home page
    empoweringTitle: 'भारत के किसानों को सशक्त बनाना 🇮🇳',
    empoweringDesc1: 'कृषि हमारे राष्ट्र की रीढ़ है, फिर भी किसानों को अक्सर फसल चयन, मौसम पैटर्न और उर्वरक उपयोग की समय पर जानकारी का अभाव है।',
    empoweringDesc2: 'हमारा मिशन प्रौद्योगिकी के साथ इस अंतर को पाटना है, किसानों को डेटा-आधारित अंतर्दृष्टि प्रदान करना जो उपज बढ़ाए, लागत कम करे और टिकाऊ खेती प्रथाओं को बढ़ावा दे।',
    featuresSubtitle: 'भारतीय किसानों के लिए विशेष रूप से डिज़ाइन किए गए उपकरण',
    ctaTitle: 'क्या आप अपनी खेती को बदलने के लिए तैयार हैं? 🌾',
    ctaSubtitle: 'हजारों किसानों के साथ जुड़ें जो पहले से स्मार्ट कृषि समाधानों से लाभ उठा रहे हैं',
    ctaButton: 'आज अपनी यात्रा शुरू करें',

    // Home feature descriptions
    cropRecommendationHomeDesc: 'अपनी मिट्टी के प्रकार और स्थान के आधार पर AI-संचालित फसल सुझाव प्राप्त करें',
    fertilizerGuideHomeDesc: 'इष्टतम NPK अनुपात और जैविक उर्वरक सिफारिशें',
    weatherHomeDesc: 'आपके क्षेत्र के लिए वास्तविक समय मौसम अपडेट और 7-दिन का पूर्वानुमान',
    askExpertHomeDesc: 'अपनी खेती के सवालों के लिए कृषि विशेषज्ञों से उत्तर प्राप्त करें',
    communitySupport: 'सामुदायिक समर्थन',
    communitySupportDesc: 'साथी किसानों से जुड़ें और सर्वोत्तम प्रथाओं को साझा करें',
    dataSecurity: 'डेटा सुरक्षा',
    dataSecurityDesc: 'आपका खेती डेटा हमारे साथ सुरक्षित और संरक्षित है',

    // CropRecommendation page
    cropPageTitle: 'फसल सिफारिश प्रणाली 🌱',
    cropPageSubtitle: 'अपनी मिट्टी और स्थान के आधार पर AI-संचालित फसल सुझाव प्राप्त करें',
    enterFarmDetails: 'अपनी खेत की जानकारी दर्ज करें',
    soilTypeLabel: 'मिट्टी का प्रकार',
    selectSoilType: 'अपनी मिट्टी का प्रकार चुनें',
    selectState: 'अपना राज्य चुनें',
    getCropRec: 'फसल सिफारिश प्राप्त करें',
    gettingRec: 'सिफारिशें प्राप्त हो रही हैं...',
    recommendedCrops: 'अनुशंसित फसलें 🌾',
    cropsFound: 'फसलें मिलीं',
    cropName: 'फसल का नाम',
    season: 'मौसम',
    waterReq: 'पानी की आवश्यकता',
    duration: 'अवधि',
    expectedYield: 'अपेक्षित उपज',
    cropRotationTip: 'सुझाव: मिट्टी के स्वास्थ्य को बनाए रखने और कीट प्रकोप को रोकने के लिए फसल चक्र अपनाएं। फसलों में विविधता बाजार के जोखिम को कम करने में भी मदद करती है।',

    // FertilizerGuide page
    fertPageTitle: 'उर्वरक गाइड 💧',
    fertPageSubtitle: 'इष्टतम NPK अनुपात और जैविक उर्वरक सिफारिशें प्राप्त करें',
    selectYourCrop: 'अपनी फसल चुनें',
    cropType: 'फसल का प्रकार',
    selectCropPlaceholder: 'उर्वरक सिफारिश के लिए फसल चुनें',
    getFertGuide: 'उर्वरक गाइड प्राप्त करें',
    gettingFertRec: 'सिफारिशें प्राप्त हो रही हैं...',
    npkRequirements: 'के लिए NPK आवश्यकताएं',
    nitrogen: 'नाइट्रोजन',
    phosphorus: 'फॉस्फोरस',
    potassium: 'पोटेशियम',
    organicFertRec: 'जैविक उर्वरक सिफारिश',
    organicManureTip: 'मिट्टी की संरचना और सूक्ष्मजीव गतिविधि में सुधार के लिए जैविक खाद डालें',
    applicationTips: '🌱 उपयोग के सुझाव:',
    fertTip1: 'बेहतर पोषक तत्व अवशोषण के लिए उर्वरक को विभाजित मात्रा में डालें',
    fertTip2: 'उर्वरक डालने से पहले मिट्टी में पर्याप्त नमी सुनिश्चित करें',
    fertTip3: 'संतुलित पोषण के लिए जैविक और रासायनिक उर्वरकों को मिलाएं',
    fertTip4: 'जड़ जलने से बचाने के लिए पौधे की जड़ से 5-7 सेमी दूर उर्वरक डालें',
    importantPrecautions: '⚠️ महत्वपूर्ण सावधानियां:',
    precaution1: 'उर्वरक डालने से पहले हमेशा मिट्टी की जांच करें',
    precaution2: 'अत्यधिक उर्वरक से बचें क्योंकि यह फसल और मिट्टी को नुकसान पहुंचा सकता है',
    precaution3: 'रासायनिक उर्वरक संभालते समय सुरक्षात्मक उपकरण पहनें',
    precaution4: 'उर्वरक को ठंडी, सूखी जगह पर नमी से दूर रखें',

    // Weather page
    weatherPageTitle: 'मौसम जानकारी 🌦️',
    weatherPageSubtitle: 'अपने क्षेत्र के लिए वास्तविक समय मौसम अपडेट और पूर्वानुमान प्राप्त करें',
    enterLocation: 'अपना स्थान दर्ज करें',
    districtName: 'जिले का नाम',
    enterDistrict: 'अपने जिले का नाम दर्ज करें',
    getWeather: 'मौसम जानकारी प्राप्त करें',
    gettingWeather: 'मौसम डेटा प्राप्त हो रहा है...',
    currentWeather: 'वर्तमान मौसम',
    temperature: 'तापमान',
    humidity: 'आर्द्रता',
    rainfall: 'वर्षा',
    forecast: '3-दिन का पूर्वानुमान',
    weatherFarmTip: 'खेती सलाह: मौसम पूर्वानुमान के आधार पर सिंचाई और छिड़काव की योजना बनाएं। बारिश से पहले कीटनाशकों का छिड़काव न करें।',

    // AskExpert page
    askPageTitle: 'विशेषज्ञ से पूछें 🎤',
    askPageSubtitle: 'अपनी खेती के सवालों के लिए कृषि विशेषज्ञों से उत्तर प्राप्त करें',
    submitQuery: 'अपना सवाल भेजें',
    expertResponseTime: 'हमारे कृषि विशेषज्ञ आपके सवाल की समीक्षा करेंगे और 24-48 घंटों में जवाब देंगे',
    yourName: 'आपका नाम',
    yourDistrict: 'जिला',
    yourQuestion: 'आपका सवाल',
    questionPlaceholder: 'अपनी कृषि समस्या विस्तार से बताएं। उदाहरण: मिट्टी की मिट्टी में गेहूं के लिए सबसे अच्छी सिंचाई विधि क्या है?',
    questionRequired: 'कृपया अपना सवाल दर्ज करें',
    questionMinLength: 'सवाल कम से कम 20 अक्षर का होना चाहिए',
    questionMaxLength: 'सवाल 1000 अक्षर से अधिक नहीं होना चाहिए',
    submittingQuery: 'सवाल भेजा जा रहा है...',
    submitToExpert: 'विशेषज्ञ को सवाल भेजें',
    betterResponsesTips: '💡 बेहतर जवाब के लिए सुझाव:',
    queryTip1: 'अपनी फसल, मिट्टी के प्रकार और क्षेत्र के बारे में विशिष्ट रहें',
    queryTip2: 'जो समस्या आ रही है उसका विवरण शामिल करें',
    queryTip3: 'जो तरीके आप पहले से आज़मा चुके हैं उनका उल्लेख करें',
    queryTip4: 'स्पष्ट उत्तर के लिए एक बार में एक मुख्य सवाल पूछें',
    faqTitle: 'अक्सर पूछे जाने वाले सवाल',
    faq1Q: 'जवाब मिलने में कितना समय लगता है?',
    faq1A: 'आमतौर पर 24-48 घंटों के भीतर। जरूरी सवालों को प्राथमिकता दी जाती है।',
    faq2Q: 'क्या मैं कई सवाल पूछ सकता हूं?',
    faq2A: 'हां, लेकिन हम बेहतर स्पष्टता के लिए प्रत्येक बार एक मुख्य सवाल पूछने की सलाह देते हैं।',
    faq3Q: 'मैं किस प्रकार के सवाल पूछ सकता हूं?',
    faq3A: 'कोई भी कृषि संबंधी सवाल: फसल चयन, कीट नियंत्रण, मिट्टी प्रबंधन, सिंचाई आदि।',
    querySuccessTitle: 'सवाल सफलतापूर्वक भेजा गया! 🎉',
    querySuccessDesc: 'आपका सवाल हमारे कृषि विशेषज्ञों को भेज दिया गया है। आपको 24-48 घंटों के भीतर आपके पंजीकृत संपर्क विवरण पर विस्तृत उत्तर मिलेगा।',
    gotIt: 'समझ गया!',
    
    // My Queries
    myQueriesTitle: 'आपके पिछले सवाल',
    statusPending: 'लंबित',
    statusAnswered: 'उत्तर दिया गया',
    adminResponse: 'विशेषज्ञ का उत्तर:',
    noQueriesFound: "आपने अभी तक कोई सवाल दर्ज नहीं किया है।",

    // Crop Calendar
    calendarPageTitle: 'फसल कैलेंडर',
    calendarPageSubtitle: 'महीने दर महीने अपनी कृषि गतिविधियों की योजना बनाएं',
    selectCropCalendar: 'फसल चुनें',
    cropCalendarPlaceholder: 'कैलेंडर देखने के लिए फसल चुनें',
    viewCalendar: 'कैलेंडर देखें',
    sowingPhase: 'बुवाई का चरण',
    growingPhase: 'बढ़ने का चरण',
    harvestingPhase: 'कटाई का चरण',
    activities: 'मुख्य गतिविधियां',
    noCalendarData: 'इस फसल के लिए कोई कैलेंडर डेटा उपलब्ध नहीं है।',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
