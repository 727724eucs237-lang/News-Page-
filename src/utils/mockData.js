const BASE = 'https://picsum.photos/seed';

export const categories = [
  { id: 'politics', image: '/categories/politics.png', color: 'bg-red-100 text-red-700', key: 'cat_politics' },
  { id: 'sports', image: '/categories/sports.png', color: 'bg-green-100 text-green-700', key: 'cat_sports' },
  { id: 'business', image: '/categories/business.png', color: 'bg-blue-100 text-blue-700', key: 'cat_business' },
  { id: 'entertainment', image: '/categories/entertainment.png', color: 'bg-purple-100 text-purple-700', key: 'cat_entertainment' },
  { id: 'health', image: '/categories/health.png', color: 'bg-pink-100 text-pink-700', key: 'cat_health' },
  { id: 'technology', image: '/categories/technology.png', color: 'bg-cyan-100 text-cyan-700', key: 'cat_technology' },
  { id: 'education', image: '/categories/education.png', color: 'bg-yellow-100 text-yellow-700', key: 'cat_education' },
  { id: 'crime', image: '/categories/crime.png', color: 'bg-gray-100 text-gray-700', key: 'cat_crime' },
  { id: 'international', image: '/categories/international.png', color: 'bg-indigo-100 text-indigo-700', key: 'cat_international' },
  { id: 'agriculture', image: '/categories/agriculture.png', color: 'bg-lime-100 text-lime-700', key: 'cat_agriculture' },
];

export const districts = [
  { id: 'ariyalur', key: 'dist_ariyalur' },
  { id: 'chengalpattu', key: 'dist_chengalpattu' },
  { id: 'chennai', key: 'dist_chennai' },
  { id: 'coimbatore', key: 'dist_coimbatore' },
  { id: 'cuddalore', key: 'dist_cuddalore' },
  { id: 'dharmapuri', key: 'dist_dharmapuri' },
  { id: 'dindigul', key: 'dist_dindigul' },
  { id: 'erode', key: 'dist_erode' },
  { id: 'kallakurichi', key: 'dist_kallakurichi' },
  { id: 'kanchipuram', key: 'dist_kanchipuram' },
  { id: 'kanyakumari', key: 'dist_kanyakumari' },
  { id: 'karur', key: 'dist_karur' },
  { id: 'krishnagiri', key: 'dist_krishnagiri' },
  { id: 'madurai', key: 'dist_madurai' },
  { id: 'mayiladuthurai', key: 'dist_mayiladuthurai' },
  { id: 'nagapattinam', key: 'dist_nagapattinam' },
  { id: 'namakkal', key: 'dist_namakkal' },
  { id: 'nilgiris', key: 'dist_nilgiris' },
  { id: 'perambalur', key: 'dist_perambalur' },
  { id: 'pudukkottai', key: 'dist_pudukkottai' },
  { id: 'ramanathapuram', key: 'dist_ramanathapuram' },
  { id: 'ranipet', key: 'dist_ranipet' },
  { id: 'salem', key: 'dist_salem' },
  { id: 'sivaganga', key: 'dist_sivaganga' },
  { id: 'tenkasi', key: 'dist_tenkasi' },
  { id: 'thanjavur', key: 'dist_thanjavur' },
  { id: 'theni', key: 'dist_theni' },
  { id: 'thoothukudi', key: 'dist_thoothukudi' },
  { id: 'tiruchirappalli', key: 'dist_tiruchirappalli' },
  { id: 'tirunelveli', key: 'dist_tirunelveli' },
  { id: 'tirupattur', key: 'dist_tirupattur' },
  { id: 'tiruppur', key: 'dist_tiruppur' },
  { id: 'tiruvallur', key: 'dist_tiruvallur' },
  { id: 'tiruvannamalai', key: 'dist_tiruvannamalai' },
  { id: 'tiruvarur', key: 'dist_tiruvarur' },
  { id: 'vellore', key: 'dist_vellore' },
  { id: 'viluppuram', key: 'dist_viluppuram' },
  { id: 'virudhunagar', key: 'dist_virudhunagar' },
];

export const mockArticles = [
  { id: 1, title: 'CM announces major infrastructure project for Tamil Nadu highways', titleTa: 'தமிழ்நாடு நெடுஞ்சாலைகளுக்கு முதலமைச்சர் பெரும் உள்கட்டமைப்பு திட்டம் அறிவிப்பு', excerpt: 'The Chief Minister unveiled a Rs 5,000 crore plan to upgrade 1,200 km of state highways, promising completion within 3 years.', category: 'politics', district: 'chennai', image: BASE + '/news1/800/500', author: 'Rajan Kumar', authorId: 1, date: '2024-05-18T08:00:00Z', views: 45200, readTime: 4, featured: true, breaking: true },
  { id: 2, title: 'India wins T20 series against Australia in thrilling final over', titleTa: 'அத்புதமான இறுதி ஓவரில் இந்தியா ஆஸ்திரேலியாவை வீழ்த்தி T20 தொடரை வென்றது', excerpt: 'India sealed a dramatic 3-run victory to win the 5-match T20 series 3-2, with Suryakumar Yadav scoring a stunning 78*.', category: 'sports', district: 'chennai', image: BASE + '/news2/800/500', author: 'Priya Sharma', authorId: 2, date: '2024-05-17T14:30:00Z', views: 89100, readTime: 3, featured: true, breaking: false },
  { id: 3, title: 'Sensex crosses 80,000 milestone for the first time in history', titleTa: 'சென்செக்ஸ் வரலாற்றில் முதல் முறையாக 80,000 மைல்கல்லை தாண்டியது', excerpt: 'The Bombay Stock Exchange benchmark index hit a new all-time high of 80,124 points, driven by strong FII inflows.', category: 'business', district: 'chennai', image: BASE + '/news3/800/500', author: 'Anand Krishnan', authorId: 3, date: '2024-05-17T10:00:00Z', views: 32400, readTime: 5, featured: false, breaking: true },
  { id: 4, title: 'New AIIMS hospital to open in Coimbatore district next month', titleTa: 'கோயம்புத்தூர் மாவட்டத்தில் புதிய AIIMS மருத்துவமனை அடுத்த மாதம் திறக்கப்படும்', excerpt: 'The 700-bed AIIMS facility in Coimbatore will serve western Tamil Nadu with world-class healthcare services.', category: 'health', district: 'coimbatore', image: BASE + '/news4/800/500', author: 'Dr. Meena Raj', authorId: 4, date: '2024-05-16T09:00:00Z', views: 21500, readTime: 3, featured: false, breaking: false },
  { id: 5, title: 'Madurai temple festival draws 2 lakh devotees despite heavy rain', titleTa: 'கனமழை இருந்தும் மதுரை கோயில் திருவிழாவில் 2 லட்சம் பக்தர்கள் கலந்துகொண்டனர்', excerpt: 'The annual Chithirai festival at Meenakshi Amman temple saw record attendance this year despite unexpected showers.', category: 'entertainment', district: 'madurai', image: BASE + '/news5/800/500', author: 'Sundar Vel', authorId: 5, date: '2024-05-16T18:00:00Z', views: 67300, readTime: 4, featured: true, breaking: false },
  { id: 6, title: 'IIT Madras ranks 1st in India for 9th consecutive year', titleTa: 'IIT மதராஸ் தொடர்ந்து 9வது ஆண்டாக இந்தியாவில் 1வது இடம் பெற்றது', excerpt: 'IIT Madras has topped the NIRF Rankings 2024 in the Overall and Engineering categories for the ninth year running.', category: 'education', district: 'chennai', image: BASE + '/news6/800/500', author: 'Kavitha Nair', authorId: 6, date: '2024-05-15T11:00:00Z', views: 43200, readTime: 3, featured: false, breaking: false },
  { id: 7, title: 'Salem police bust major drug trafficking ring, arrest 12', titleTa: 'சேலம் காவல்துறை பெரிய போதைப்பொருள் கடத்தல் வலையமைப்பை கண்டுபிடித்து 12 பேரை கைது செய்தது', excerpt: 'Salem District Police seized 5 kg of methamphetamine and Rs 1.2 crore cash in a coordinated operation across 4 locations.', category: 'crime', district: 'salem', image: BASE + '/news7/800/500', author: 'Inspector Vikram', authorId: 7, date: '2024-05-15T07:00:00Z', views: 54700, readTime: 4, featured: false, breaking: true },
  { id: 8, title: 'Tamil Nadu launches e-governance portal for all district services', titleTa: 'தமிழ்நாடு அனைத்து மாவட்ட சேவைகளுக்கும் மின்-ஆளுமை போர்ட்டலை தொடங்கியது', excerpt: 'Citizens can now access over 200 government services online through the new unified digital platform launched today.', category: 'technology', district: 'chennai', image: BASE + '/news8/800/500', author: 'Rajan Kumar', authorId: 1, date: '2024-05-14T13:00:00Z', views: 28900, readTime: 5, featured: false, breaking: false },
  { id: 9, title: 'Cauvery river water level rises; farmers rejoice in Trichy', titleTa: 'காவிரி நதி நீர் மட்டம் உயர்ந்தது; திருச்சியில் விவசாயிகள் மகிழ்ச்சி', excerpt: 'Heavy rainfall in Kodagu has led to a significant rise in Cauvery water levels, bringing relief to delta farmers.', category: 'agriculture', district: 'trichy', image: BASE + '/news9/800/500', author: 'Priya Sharma', authorId: 2, date: '2024-05-14T08:00:00Z', views: 19800, readTime: 3, featured: false, breaking: false },
  { id: 10, title: 'Global climate summit: India pledges net zero by 2070', titleTa: 'உலக காலநிலை உச்சிமாநாடு: இந்தியா 2070 ல் நிகர பூஜ்யம் அடைவதாக உறுதியளித்தது', excerpt: 'India reaffirmed its commitment to achieving net-zero carbon emissions by 2070 at the G20 Climate Special Session.', category: 'international', district: 'chennai', image: BASE + '/news10/800/500', author: 'Anand Krishnan', authorId: 3, date: '2024-05-13T16:00:00Z', views: 36100, readTime: 6, featured: false, breaking: false },
  { id: 11, title: 'Coimbatore textile industry to create 50,000 new jobs', titleTa: 'கோயம்புத்தூர் ஜவுளி தொழில் 50,000 புதிய வேலைகளை உருவாக்கும்', excerpt: 'A major expansion plan by the Coimbatore Textile Mills Association aims to generate employment for 50,000 workers by 2026.', category: 'business', district: 'coimbatore', image: BASE + '/news11/800/500', author: 'Kavitha Nair', authorId: 6, date: '2024-05-13T10:00:00Z', views: 24600, readTime: 4, featured: false, breaking: false },
  { id: 12, title: 'Tirunelveli police receive national excellence award 2024', titleTa: '2024 ஆம் ஆண்டு திருநெல்வேலி காவல்துறை தேசிய சிறப்பு விருது பெற்றது', excerpt: 'Tirunelveli District Police were honoured for outstanding crime prevention and community policing initiatives.', category: 'crime', district: 'tirunelveli', image: BASE + '/news12/800/500', author: 'Inspector Vikram', authorId: 7, date: '2024-05-12T12:00:00Z', views: 18300, readTime: 3, featured: false, breaking: false },
  { id: 13, title: 'Vellore fort gets UNESCO World Heritage Site nomination', titleTa: 'வேலூர் கோட்டைக்கு UNESCO உலக பாரம்பரிய தள நியமனம்', excerpt: 'The iconic 16th-century Vellore Fort has been officially nominated for UNESCO World Heritage Site status by the Indian government.', category: 'entertainment', district: 'vellore', image: BASE + '/news13/800/500', author: 'Sundar Vel', authorId: 5, date: '2024-05-12T09:00:00Z', views: 41200, readTime: 4, featured: false, breaking: false },
  { id: 14, title: 'Erode farmers protest over fertilizer price hike', titleTa: 'ஈரோடு விவசாயிகள் உரம் விலை உயர்வுக்கு எதிர்ப்பு தெரிவித்தனர்', excerpt: 'Thousands of farmers in Erode district held a massive protest demanding rollback of a 30% increase in fertilizer prices.', category: 'agriculture', district: 'erode', image: BASE + '/news14/800/500', author: 'Rajan Kumar', authorId: 1, date: '2024-05-11T15:00:00Z', views: 29400, readTime: 4, featured: false, breaking: false },
  { id: 15, title: 'Chennai metro phase 3 construction begins ahead of schedule', titleTa: 'சென்னை மெட்ரோ கட்டம் 3 கட்டுமானம் அட்டவணைக்கு முன்னதாகவே தொடங்கியது', excerpt: 'Phase 3 of Chennai Metro Rail project has broken ground, covering 47 km and 38 stations across the city.', category: 'politics', district: 'chennai', image: BASE + '/news15/800/500', author: 'Dr. Meena Raj', authorId: 4, date: '2024-05-11T11:00:00Z', views: 52800, readTime: 5, featured: true, breaking: false },
  { id: 16, title: 'Tech startup from Madurai raises Rs 200 crore in Series B', titleTa: 'மதுரை தொழில்நுட்ப நிறுவனம் Series B இல் 200 கோடி ரூபாய் திரட்டியது', excerpt: 'EdTech startup EduVerse, founded by IIT Madurai alumni, secured Rs 200 crore from Tiger Global and Sequoia Capital.', category: 'technology', district: 'madurai', image: BASE + '/news16/800/500', author: 'Anand Krishnan', authorId: 3, date: '2024-05-10T14:00:00Z', views: 33600, readTime: 4, featured: false, breaking: false },
  { id: 17, title: 'Salem steel plant expansion to boost local economy', titleTa: 'சேலம் இரும்பு ஆலை விரிவாக்கம் உள்ளூர் பொருளாதாரத்தை மேம்படுத்தும்', excerpt: 'SAIL Salem Steel Plant announced a Rs 3,500 crore expansion that will double production capacity and create 8,000 jobs.', category: 'business', district: 'salem', image: BASE + '/news17/800/500', author: 'Kavitha Nair', authorId: 6, date: '2024-05-10T09:00:00Z', views: 22100, readTime: 4, featured: false, breaking: false },
  { id: 18, title: 'Thanjavur receives record rainfall; dams reach full capacity', titleTa: 'தஞ்சாவூரில் சாதனை மழை; அணைகள் முழு கொள்ளளவை எட்டின', excerpt: 'All major dams in Thanjavur district have reached 100% capacity following 48 hours of unprecedented monsoon rainfall.', category: 'agriculture', district: 'thanjavur', image: BASE + '/news18/800/500', author: 'Priya Sharma', authorId: 2, date: '2024-05-09T17:00:00Z', views: 38900, readTime: 3, featured: false, breaking: true },
];

export const breakingNewsList = [
  'Major earthquake of 6.2 magnitude hits coastal regions — rescue teams deployed',
  'Tamil Nadu government announces 10% DA hike for state employees',
  'India wins gold medal in athletics at Asian Games 2024',
  'New expressway connecting Chennai to Bangalore to open this December',
  'ISRO successfully launches communication satellite GSAT-20',
];

export const breakingNewsListTa = [
  'கடலோர பகுதிகளில் 6.2 ரிக்டர் அளவிலான பூகம்பம் — மீட்பு குழுக்கள் பயணம்',
  'தமிழ்நாடு அரசு மாநில ஊழியர்களுக்கு 10% DA உயர்வு அறிவிப்பு',
  'ஆசிய விளையாட்டுப் போட்டிகள் 2024 ல் இந்தியா தடகளத்தில் தங்கப் பதக்கம்',
  'சென்னையை பெங்களூரோடு இணைக்கும் புதிய நெடுஞ்சாலை இந்த டிசம்பரில் திறப்பு',
  'ISRO வெற்றிகரமாக GSAT-20 தகவல் தொடர்பு செயற்கைக்கோளை ஏவியது',
];

export const mockVideos = [
  { id: 1, title: 'CM inspects flood relief operations in delta districts', titleTa: 'டெல்டா மாவட்டங்களில் வெள்ளப் பிரதேச நிவாரண நடவடிக்கைகளை முதலமைச்சர் ஆய்வு', thumbnail: BASE + '/vid1/640/360', duration: '4:32', views: 124500, date: '2024-05-18T10:00:00Z' },
  { id: 2, title: 'IND vs AUS T20 Final highlights', titleTa: 'IND vs AUS T20 இறுதிப் போட்டி சிறப்பு காட்சிகள்', thumbnail: BASE + '/vid2/640/360', duration: '8:15', views: 285000, date: '2024-05-17T15:00:00Z' },
  { id: 3, title: 'New expressway construction update — aerial view', titleTa: 'புதிய நெடுஞ்சாலை கட்டுமான புதுப்பிப்பு — வான்வழிப் பார்வை', thumbnail: BASE + '/vid3/640/360', duration: '3:48', views: 67800, date: '2024-05-16T12:00:00Z' },
  { id: 4, title: 'Budget 2024 analysis — what it means for Tamil Nadu', titleTa: 'பட்ஜெட் 2024 பகுப்பாய்வு — தமிழ்நாட்டிற்கு என்ன அர்த்தம்', thumbnail: BASE + '/vid4/640/360', duration: '12:20', views: 43200, date: '2024-05-15T09:00:00Z' },
  { id: 5, title: 'Chithirai festival at Meenakshi temple — full coverage', titleTa: 'மீனாட்சி கோயிலில் சித்திரை திருவிழா — முழு காட்சி', thumbnail: BASE + '/vid5/640/360', duration: '6:55', views: 198300, date: '2024-05-14T20:00:00Z' },
  { id: 6, title: 'ISRO GSAT-20 launch live — full broadcast', titleTa: 'ISRO GSAT-20 ஏவுதல் நேரடி — முழு ஒளிபரப்பு', thumbnail: BASE + '/vid6/640/360', duration: '18:40', views: 512000, date: '2024-05-13T06:00:00Z' },
];

export const mockGallery = [
  { id: 1, title: 'Chithirai Festival 2024', titleTa: 'சித்திரை திருவிழா 2024', image: BASE + '/gal1/600/400', category: 'entertainment' },
  { id: 2, title: 'Chennai Metro Construction', titleTa: 'சென்னை மெட்ரோ கட்டுமானம்', image: BASE + '/gal2/600/400', category: 'politics' },
  { id: 3, title: 'Flood Relief Operations', titleTa: 'வெள்ளப் பிரதேச நிவாரண நடவடிக்கைகள்', image: BASE + '/gal3/600/400', category: 'politics' },
  { id: 4, title: 'Salem Police Award Ceremony', titleTa: 'சேலம் காவல்துறை விருது விழா', image: BASE + '/gal4/600/400', category: 'crime' },
  { id: 5, title: 'IIT Madras Convocation 2024', titleTa: 'IIT மதராஸ் பட்டமளிப்பு 2024', image: BASE + '/gal5/600/400', category: 'education' },
  { id: 6, title: 'Farmers Protest Erode', titleTa: 'ஈரோடு விவசாயிகள் போராட்டம்', image: BASE + '/gal6/600/400', category: 'agriculture' },
  { id: 7, title: 'Thanjavur Floods Aerial View', titleTa: 'தஞ்சாவூர் வெள்ளம் வான்வழிப் பார்வை', image: BASE + '/gal7/600/400', category: 'agriculture' },
  { id: 8, title: 'Vellore Fort Heritage Event', titleTa: 'வேலூர் கோட்டை பாரம்பரிய நிகழ்வு', image: BASE + '/gal8/600/400', category: 'entertainment' },
  { id: 9, title: 'Startup Expo Madurai 2024', titleTa: 'ஸ்டார்ட்அப் எக்ஸ்போ மதுரை 2024', image: BASE + '/gal9/600/400', category: 'technology' },
];

export const mockPoliceAchievements = [
  { id: 1, title: 'Salem Police bust ₹50Cr drug ring', titleTa: 'சேலம் காவல்துறை 50 கோடி போதைப்பொருள் கடத்தல் வலையை கண்டுபிடித்தது', image: BASE + '/pol1/600/350', district: 'Salem', date: '2024-05-15T07:00:00Z' },
  { id: 2, title: 'Tirunelveli police awarded national excellence honor', titleTa: 'திருநெல்வேலி காவல்துறைக்கு தேசிய சிறப்பு விருது', image: BASE + '/pol2/600/350', district: 'Tirunelveli', date: '2024-05-12T12:00:00Z' },
  { id: 3, title: 'Chennai cyber crime unit recovers ₹2Cr fraud money', titleTa: 'சென்னை சைபர் க்ரைம் பிரிவு 2 கோடி மோசடி பணத்தை மீட்டது', image: BASE + '/pol3/600/350', district: 'Chennai', date: '2024-05-10T10:00:00Z' },
];

export const mockWelfare = [
  { id: 1, title: 'Free health camp benefits 5,000 in Trichy villages', titleTa: 'திருச்சி கிராமங்களில் 5,000 பேருக்கு இலவச சுகாதார முகாம்', image: BASE + '/wel1/600/350', date: '2024-05-17T09:00:00Z', tag: 'Health Camp' },
  { id: 2, title: 'Laptops distributed to 10,000 government school students', titleTa: '10,000 அரசு பள்ளி மாணவர்களுக்கு மடிக்கணினி வழங்கப்பட்டது', image: BASE + '/wel2/600/350', date: '2024-05-16T11:00:00Z', tag: 'Education' },
  { id: 3, title: 'Solar panels installed in 200 rural homes in Vellore', titleTa: 'வேலூரில் 200 கிராமப்புற வீடுகளில் சூரிய சக்தி பலகைகள் நிறுவல்', image: BASE + '/wel3/600/350', date: '2024-05-14T14:00:00Z', tag: 'Energy' },
];

export const mockAuthors = [
  { id: 1, name: 'Rajan Kumar', avatar: BASE + '/auth1/200/200', bio: 'Senior Political Correspondent with 15 years of experience covering Tamil Nadu politics and governance.', articles: 342, twitter: '@rajankumar', location: 'Chennai' },
  { id: 2, name: 'Priya Sharma', avatar: BASE + '/auth2/200/200', bio: 'Sports journalist specializing in cricket and track athletics. Former national-level athlete.', articles: 218, twitter: '@priyasports', location: 'Mumbai' },
  { id: 3, name: 'Anand Krishnan', avatar: BASE + '/auth3/200/200', bio: 'Business and economy reporter covering markets, startups, and Tamil Nadu industrial growth.', articles: 287, twitter: '@anandkrishn', location: 'Chennai' },
  { id: 4, name: 'Dr. Meena Raj', avatar: BASE + '/auth4/200/200', bio: 'Health and science correspondent. MBBS graduate turned journalist covering medical breakthroughs.', articles: 165, twitter: '@drmeenar', location: 'Coimbatore' },
  { id: 5, name: 'Sundar Vel', avatar: BASE + '/auth5/200/200', bio: 'Culture and entertainment reporter with a passion for Tamil heritage, cinema and festivals.', articles: 401, twitter: '@sundarvel', location: 'Madurai' },
  { id: 6, name: 'Kavitha Nair', avatar: BASE + '/auth6/200/200', bio: 'Education and policy journalist tracking school reforms, university rankings and govt schemes.', articles: 193, twitter: '@kavithanair', location: 'Trichy' },
  { id: 7, name: 'Inspector Vikram', avatar: BASE + '/auth7/200/200', bio: 'Crime reporter with deep contacts in Tamil Nadu Police. 12 years covering law enforcement.', articles: 274, twitter: '@vikramcrime', location: 'Salem' },
];
