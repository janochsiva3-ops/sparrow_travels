'use client';

import { useState } from 'react';
import Link from 'next/link';

export const SRI_LANKA_DISTRICTS = [
  {
    id: "jaffna",
    name: "Jaffna",
    province: "Northern",
    tagline: "Tamil Cultural Heritage, Golden Kovils & Island Lagoons",
    highlights: ["Nallur Kovil", "Jaffna Fort", "Casuarina Beach", "Nainativu Island"],
    overview: "Jaffna is the cultural heart of Northern Sri Lanka, famed for Dravidian Kovil architecture, historic colonial Dutch fort, delicious mangoes, Palmyra palm landscapes, and tranquil lagoon islands.",
    places: [
      { name: "Nallur Kandaswamy Kovil", icon: "🛕", description: "Iconic golden-hued Hindu temple renowned for its grand Dravidian architecture, sacred holy water tank, and vibrant 25-day annual festival." },
      { name: "Jaffna Dutch Fort", icon: "🏰", description: "Historic 17th-century star-shaped coastal fortress built by the Portuguese and expanded by the Dutch, overlooking the Jaffna Lagoon." },
      { name: "Casuarina Beach (Karainagar)", icon: "🏖️", description: "Pristine white sand beach with shallow, calm turquoise waters surrounded by shady casuarina trees — ideal for family swimming." },
      { name: "Nainativu (Nagadeepa) Island", icon: "🚤", description: "Sacred island reached by scenic ferry boat, home to Nagapooshani Amman Kovil and Nagadeepa Purana Vihara." },
      { name: "Keerimalai Sacred Water Spring", icon: "🌊", description: "Natural freshwater spring adjoining the ocean, famous for its therapeutic mineral-rich bathing ponds." }
    ]
  },
  {
    id: "kilinochchi",
    name: "Kilinochchi",
    province: "Northern",
    tagline: "Agricultural Heartland, Iranamadu Reservoir & Historic Pass",
    highlights: ["Iranamadu Tank", "Elephant Pass", "Murikandy Temple", "Water Tower"],
    overview: "Kilinochchi is the agricultural heartland of the Northern Province, famous for vast freshwater reservoirs, paddy fields, and historic monuments.",
    places: [
      { name: "Iranamadu Tank (Reservoir)", icon: "🌊", description: "Largest freshwater reservoir in Northern Sri Lanka, surrounded by scenic green wetlands, wild birds, and fishing spots." },
      { name: "Elephant Pass War Memorial", icon: "🐘", description: "Strategic narrow causeway connecting Jaffna peninsula to mainland Sri Lanka, filled with modern historical significance." },
      { name: "Murikandy Pillayar Temple", icon: "🛕", description: "Famous roadside Hindu shrine where virtually all northbound travellers stop to receive blessings for a safe journey." },
      { name: "Kilinochchi Water Tower Monument", icon: "🗼", description: "Historic water tower preserved as a symbol of peace, resilience, and northern rebuilding." }
    ]
  },
  {
    id: "vavuniya",
    name: "Vavuniya",
    province: "Northern",
    tagline: "Northern Gateway Town, Ancient Ruins & Scenic Lakes",
    highlights: ["Kandarodai Ruins", "Vavuniya Tank", "Madukanda Vihara", "Archaeological Museum"],
    overview: "Vavuniya serves as the historical gateway between southern and northern Sri Lanka, featuring ancient Buddhist and Hindu heritage sites amidst tranquil lakes.",
    places: [
      { name: "Kandarodai Ancient Ruins", icon: "🏛️", description: "Mysterious archaeological site containing dozens of miniature stone stupas dating back over 2,000 years." },
      { name: "Vavuniya Tank & Clock Tower", icon: "🌅", description: "Central city landmark surrounded by a scenic lake promenade, popular for evening strolls and local street food." },
      { name: "Madukanda Sri Dalada Vihara", icon: "🛕", description: "Historic temple where the Sacred Tooth Relic was temporarily sheltered during its ancient journey across Sri Lanka." },
      { name: "Vavuniya Archaeological Museum", icon: "🏺", description: "Displays rare ancient stone statues, inscriptions, and artifacts discovered across the Northern Province." }
    ]
  },
  {
    id: "mullaitivu",
    name: "Mullaitivu",
    province: "Northern",
    tagline: "Untouched White Beaches, Lagoons & Fresh Seafood",
    highlights: ["Mullaitivu Beach", "Nayaru Lagoon", "Vadduvakal Bridge", "Seafood Belt"],
    overview: "Mullaitivu is a peaceful coastal district famous for untouched powdery white sand beaches, tranquil lagoons, and rich catches of fresh crab and prawns.",
    places: [
      { name: "Mullaitivu Coastal Beach", icon: "🏖️", description: "Uncrowded, pristine sandy beach offering spectacular sunrise views over the Bay of Bengal." },
      { name: "Nayaru Lagoon & Estuary", icon: "🛶", description: "Scenic coastal estuary where lagoon waters merge into the ocean, offering birdwatching and coastal photography." },
      { name: "Vadduvakal Bridge", icon: "🌉", description: "Expansive bridge spanning the Nanthikadal Lagoon with panoramic views of Northern coastal wetlands." },
      { name: "Maritimepattu Seafood Belt", icon: "🦀", description: "Quaint fishing villages famous for fresh crab, prawn, and traditional Tamil seafood curries." }
    ]
  },
  {
    id: "mannar",
    name: "Mannar",
    province: "Northern",
    tagline: "Wild Donkeys, Ancient Baobab Tree, Dutch Fort & Adam's Bridge",
    highlights: ["Mannar Fort", "Baobab Tree", "Thiruketheeswaram", "Adam's Bridge"],
    overview: "Mannar is a unique island-peninsula district famous for wild donkeys, 700-year-old Baobab trees, historic coastal fortresses, and sacred shrines.",
    places: [
      { name: "Ancient Baobab Tree", icon: "🌳", description: "Unique 700+ year old giant tree with a trunk circumference over 19 meters, planted by ancient Arab traders." },
      { name: "Mannar Dutch Fort", icon: "🏰", description: "Coastal fortress built by Portuguese in 1560 and rebuilt by the Dutch, overlooking the Mannar Gulf." },
      { name: "Thiruketheeswaram Kovil", icon: "🛕", description: "One of the 5 sacred Pancha Ishwarams dedicated to Lord Shiva, attracting pilgrims from across Asia." },
      { name: "Adam's Bridge & Talaimannar Lighthouse", icon: "⚓", description: "Chain of natural limestone shoals stretching toward India, alongside the historic Talaimannar pier and lighthouse." }
    ]
  },
  {
    id: "kandy",
    name: "Kandy",
    province: "Central",
    tagline: "Sacred Temple of the Tooth, Kandyan Culture & Royal Gardens",
    highlights: ["Temple of the Tooth", "Peradeniya Gardens", "Kandy Lake", "Bahirawakanda Buddha"],
    overview: "Kandy is the sacred cultural capital of Sri Lanka, surrounded by misty green hills and home to the revered Temple of the Tooth Relic.",
    places: [
      { name: "Temple of the Tooth Relic (Sri Dalada Maligawa)", icon: "🛕", description: "The most sacred Buddhist shrine in Sri Lanka, housing the relic of the tooth of the Buddha." },
      { name: "Royal Botanical Gardens (Peradeniya)", icon: "🌺", description: "World-famous 147-acre garden boasting over 4,000 plant species, giant bamboo, and orchid house." },
      { name: "Kandy Lake & Promenade", icon: "🌊", description: "Picturesque artificial lake built in 1807, perfect for scenic evening strolls in the city heart." },
      { name: "Bahirawakanda Giant Buddha", icon: "🧘‍♂️", description: "Majestic 88-foot white Buddha statue towering atop a hill with 360-degree views of Kandy." }
    ]
  },
  {
    id: "matale",
    name: "Matale",
    province: "Central",
    tagline: "Sigiriya Rock Fortress, Dambulla Cave Temple & Spice Gardens",
    highlights: ["Sigiriya Fortress", "Pidurangala Rock", "Dambulla Caves", "Riverston Peak"],
    overview: "Matale is world-famous for Sigiriya Rock Fortress (8th Wonder of the World), Dambulla Cave Temple, spice gardens, and Riverston hiking trails.",
    places: [
      { name: "Sigiriya Rock Fortress", icon: "🏔️", description: "UNESCO World Heritage site featuring a 200m granite rock peak with ancient palace ruins, water gardens, and famous frescoes." },
      { name: "Pidurangala Rock", icon: "🌄", description: "Neighboring peak offering the single best sunrise view of Sigiriya Rock across lush forest canopy." },
      { name: "Dambulla Golden Cave Temple", icon: "🛕", description: "Largest and best-preserved cave temple complex in Sri Lanka, housing 153 Buddha statues and ancient murals." },
      { name: "Riverston & Knuckles Range", icon: "⛰️", description: "'Mini World's End' sheer cliff, windy gaps, cloud forests, and breathtaking hiking trails." }
    ]
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    province: "Central",
    tagline: "'Little England', Ceylon Tea Estates, Cool Mist & Horton Plains",
    highlights: ["Gregory Lake", "Horton Plains", "Pedro Tea Estate", "Lover's Leap Waterfall"],
    overview: "Nuwara Eliya is Sri Lanka's cool mountain sanctuary, famous for Tudor-style colonial architecture, rolling tea plantations, and World's End cliff.",
    places: [
      { name: "Gregory Lake & Park", icon: "⛵", description: "Picturesque highland lake offering speed boating, pony rides, jet skis, and lakeside cafes." },
      { name: "Horton Plains & World's End", icon: "🏞️", description: "High-altitude plateau ending abruptly at a terrifying 880m sheer drop with misty valley views." },
      { name: "Pedro Tea Estate & Factory", icon: "🍃", description: "Historic 1885 tea plantation where visitors tour processing steps and sample fresh Ceylon tea." },
      { name: "Lover's Leap & Devon Waterfalls", icon: "🌊", description: "Cascading mountain waterfalls surrounded by emerald green tea bushes and pine forests." }
    ]
  },
  {
    id: "colombo",
    name: "Colombo",
    province: "Western",
    tagline: "Vibrant Commercial Hub, Lotus Tower, Ocean Promenade & Shopping",
    highlights: ["Lotus Tower", "Gangaramaya Temple", "Galle Face Green", "Pettah Market"],
    overview: "Colombo is Sri Lanka's energetic capital blending modern skyscrapers, colonial heritage, vibrant street markets, and seaside dining.",
    places: [
      { name: "Lotus Tower (Nelum Kuluna)", icon: "🗼", description: "South Asia's tallest self-supported tower (350m) featuring a revolving restaurant and observation deck." },
      { name: "Gangaramaya Temple & Seema Malaka", icon: "🛕", description: "Stunning lakeside Buddhist temple complex displaying eclectic art, antiques, and sacred relics." },
      { name: "Galle Face Green", icon: "🌅", description: "Iconic oceanfront urban park famous for sunset walks, flying kites, and savory street food like Isso Wade." },
      { name: "Pettah Floating Market & Bazaar", icon: "🛍️", description: "Vibrant open-air trading district packed with colorful shops, spices, textiles, and street life." }
    ]
  },
  {
    id: "gampaha",
    name: "Gampaha",
    province: "Western",
    tagline: "BIA Airport Gateway, Negombo Beach & Historic Kelaniya Temple",
    highlights: ["Negombo Beach", "BIA Katunayake", "Kelaniya Raja Maha Vihara", "Henarathgoda Gardens"],
    overview: "Gampaha hosts the main international airport, Negombo's vibrant fish markets and beaches, and the historic Kelaniya Raja Maha Vihara.",
    places: [
      { name: "Negombo Beach & Dutch Canal", icon: "🏖️", description: "Lively coastal resort town famous for golden beaches, seafood, lagoon boat tours, and kite surfing." },
      { name: "Kelaniya Raja Maha Vihara", icon: "🛕", description: "Sacred Buddhist temple visited by Lord Buddha on his third trip to Sri Lanka, famous for exquisite murals." },
      { name: "Henarathgoda Botanical Garden", icon: "🌴", description: "Historic garden established in 1876 where the first Para rubber tree in Sri Lanka was planted." },
      { name: "Negombo Fish Auction (Lellama)", icon: "🐟", description: "Bustling open-air fish market where traditional catamaran boats bring in fresh morning catches." }
    ]
  },
  {
    id: "kalutara",
    name: "Kalutara",
    province: "Western",
    tagline: "Hollow Buddhist Stupa, Richmond Castle & Bentota Beach Resort",
    highlights: ["Kalutara Bodhiya", "Bentota Beach", "Richmond Castle", "Brief Garden"],
    overview: "Kalutara is famous for the world's only hollow Buddhist stupa, luxury Bentota beach resorts, water sports, and historic grand mansions.",
    places: [
      { name: "Kalutara Bodhiya & Stupa", icon: "🛕", description: "Famous roadside shrine with a unique hollow stupa painted inside with 74 murals of Buddha's life." },
      { name: "Bentota Beach & Water Sports", icon: "🏄‍♂️", description: "Premier beach destination famous for jet skiing, banana boating, windsurfing, and luxury resorts." },
      { name: "Richmond Castle", icon: "🏰", description: "Grand 1900s Edwardian mansion featuring 99 doors, 34 windows, imported stained glass, and gardens." },
      { name: "Brief Garden by Bevis Bawa", icon: "🌿", description: "Enchanting 5-acre tropical landscape garden filled with sculptures, exotic trees, and artistic nooks." }
    ]
  },
  {
    id: "galle",
    name: "Galle",
    province: "Southern",
    tagline: "UNESCO Dutch Fort, Coral Reefs, Stilt Fishing & Surfing Beaches",
    highlights: ["Galle Dutch Fort", "Unawatuna Beach", "Hikkaduwa Reef", "Madu River Safari"],
    overview: "Galle is Sri Lanka's southern jewel, renowned for its 17th-century UNESCO Dutch Fort, chic cafes, sea turtle sanctuaries, and surfing bays.",
    places: [
      { name: "Galle Dutch Fort & Lighthouse", icon: "🏰", description: "17th-century fortified citadel built by Portuguese and Dutch, packed with chic cafes, boutiques, and ramparts." },
      { name: "Unawatuna & Jungle Beach", icon: "🏖️", description: "Horseshoe bay with golden sand, turquoise calm waters, beach bars, and coral diving." },
      { name: "Hikkaduwa Coral Sanctuary", icon: "🐢", description: "Famous reef spot where visitors swim alongside giant sea turtles and colorful coral fish." },
      { name: "Madu River Safari (Balapitiya)", icon: "🛶", description: "Scenic boat cruise through 64 islands, mangrove tunnels, fish therapy spas, and cinnamon harvesting." }
    ]
  },
  {
    id: "matara",
    name: "Matara",
    province: "Southern",
    tagline: "Whale Watching in Mirissa, Coconut Tree Hill & Dondra Lighthouse",
    highlights: ["Mirissa Whales", "Coconut Tree Hill", "Dondra Lighthouse", "Paravi Duwa Temple"],
    overview: "Matara is famous for Mirissa blue whale watching tours, surfing points, iconic Coconut Tree Hill, and Dondra Head lighthouse.",
    places: [
      { name: "Mirissa Beach & Whale Watching", icon: "🐋", description: "World-famous spot for spotting blue whales, sperm whales, and dolphins on morning boat excursions." },
      { name: "Coconut Tree Hill", icon: "🌴", description: "Iconic private coconut palm dome overlooking the ocean, famous for Instagram photography." },
      { name: "Dondra Head Lighthouse", icon: "🚨", description: "Tallest lighthouse in Sri Lanka (49m), standing at the extreme southernmost tip of Sri Lanka." },
      { name: "Paravi Duwa Island Temple", icon: "🛕", description: "Sacred temple built on an offshore island, accessed by a wooden pedestrian cable bridge over the sea." }
    ]
  },
  {
    id: "hambantota",
    name: "Hambantota",
    province: "Southern",
    tagline: "Yala Leopard Safaris, Bundala Bird Reserve & Open Air Safari Park",
    highlights: ["Yala Safari", "Bundala National Park", "Ridiyagama Safari", "Kirinda Temple"],
    overview: "Hambantota is Sri Lanka's safari hotspot, home to Yala National Park's leopards, wild elephants, flamingos, and coastal reserves.",
    places: [
      { name: "Yala National Park (Block 1)", icon: "🐆", description: "World's highest density habitat for leopards, plus wild elephants, sloth bears, and crocodiles." },
      { name: "Bundala Bird Sanctuary", icon: "🦩", description: "UNESCO Biosphere Reserve famous as a wintering destination for thousands of migratory flamingos." },
      { name: "Ridiyagama Open Safari Park", icon: "🦁", description: "Sri Lanka's first open-air drive-through safari park where animals roam in large natural zones." },
      { name: "Kirinda Beach & Rock Shrine", icon: "🌊", description: "Historic coastal shrine atop sea rocks with dramatic crashing waves and legends of Queen Viharamahadevi." }
    ]
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    province: "North Central",
    tagline: "1st Ancient Royal Capital, Sacred Jaya Sri Maha Bodhi & Ruwanwelisaya",
    highlights: ["Jaya Sri Maha Bodhi", "Ruwanwelisaya Stupa", "Jetavanaramaya", "Mihintale Peak"],
    overview: "Anuradhapura is Sri Lanka's 1st ancient royal capital, housing 2,500-year-old sacred stupas, monasteries, and Mihintale.",
    places: [
      { name: "Jaya Sri Maha Bodhi", icon: "🌳", description: "Sacred Bo tree grown from a cutting brought from Bodh Gaya in 288 BC — oldest human-planted tree." },
      { name: "Ruwanwelisaya Stupa", icon: "⚪", description: "Majestic white bubble-shaped stupa built by King Dutugemunu in 140 BC, surrounded by stone elephants." },
      { name: "Jetavanaramaya Stupa", icon: "🏛️", description: "Ancient brick stupa that was once the 3rd tallest structure in the ancient world after Egyptian pyramids." },
      { name: "Mihintale Sacred Peak", icon: "⛰️", description: "Mountain peak revered as the birthplace of Buddhism in Sri Lanka, featuring 1,840 stone steps." }
    ]
  },
  {
    id: "polonnaruwa",
    name: "Polonnaruwa",
    province: "North Central",
    tagline: "2nd Medieval Capital, Gal Vihara Rock Statues & Sea of Parakrama",
    highlights: ["Gal Vihara Statues", "Polonnaruwa Quadrangle", "Parakrama Samudra", "Royal Palace"],
    overview: "Polonnaruwa is the 2nd ancient royal capital, famous for colossal granite Buddha statues at Gal Vihara and vast ancient lakes.",
    places: [
      { name: "Gal Vihara (Rock Temple)", icon: "🧘‍♂️", description: "Breathtaking 12th-century shrine with four colossal Buddha statues carved directly into a single granite cliff." },
      { name: "Polonnaruwa Quadrangle (Dalada Maluwa)", icon: "🏛️", description: "Compact royal precinct housing the Vatadage, Thuparama, and Hatadage ancient shrines." },
      { name: "Parakrama Samudra", icon: "🌊", description: "Massive 2,400-hectare reservoir built by King Parakramabahu I, known as the 'Sea of Parakrama'." },
      { name: "Royal Palace of King Parakramabahu", icon: "🏰", description: "Ruins of a 7-story ancient royal palace with thick brick walls and impressive audience hall." }
    ]
  },
  {
    id: "badulla",
    name: "Badulla",
    province: "Uva",
    tagline: "Ella Nine Arch Bridge, Little Adam's Peak & Diyaluma Waterfalls",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Dunhinda Falls", "Diyaluma Pools"],
    overview: "Badulla district contains Ella, the crowning jewel of Sri Lanka's tea highlands with scenic train rides and dramatic waterfalls.",
    places: [
      { name: "Nine Arch Bridge (Demodara)", icon: "🌉", description: "World-famous colonial railway viaduct bridge built entirely of stone and brick without steel reinforcement." },
      { name: "Little Adam's Peak", icon: "🌄", description: "Easy scenic mountain trek rewarding hikers with panoramic 360-degree views of Ella Gap." },
      { name: "Dunhinda & Rawana Waterfalls", icon: "💦", description: "Majestic cascading waterfalls steeped in ancient Ravana folklore and refreshing mist." },
      { name: "Diyaluma Falls Infinity Pools", icon: "🌊", description: "Sri Lanka's 2nd highest waterfall (220m) featuring natural rock infinity pools at the upper summit." }
    ]
  },
  {
    id: "monaragala",
    name: "Monaragala",
    province: "Uva",
    tagline: "Sacred Kataragama Shrine, Gal Oya Swimming Elephants & Ancient Stone Buddhas",
    highlights: ["Kataragama Sacred City", "Maligawila Buddha", "Gal Oya Boat Safari", "Buduruwagala"],
    overview: "Monaragala is famous for the multi-faith holy city of Kataragama, giant ancient rock carvings, and wild boat safaris.",
    places: [
      { name: "Kataragama Sacred City", icon: "🛕", description: "Multi-faith holy city visited by Buddhists, Hindus, Muslims, and Indigenous Vedda people alike." },
      { name: "Maligawila Free-Standing Buddha", icon: "🗿", description: "World's tallest free-standing ancient stone Buddha statue (11.5m), carved in the 7th century." },
      { name: "Gal Oya National Park Boat Safari", icon: "🐘", description: "National park famous for boat safaris where wild elephants can be seen swimming between islands." },
      { name: "Buduruwagala Rock Carvings", icon: "⛰️", description: "Ancient rock carving site featuring seven colossal Mahayana Buddhist statues carved into a cliff." }
    ]
  },
  {
    id: "ratnapura",
    name: "Ratnapura",
    province: "Sabaragamuwa",
    tagline: "'City of Gems', Sacred Adam's Peak (Sri Pada) & Sinharaja Rainforest",
    highlights: ["Adam's Peak (Sri Pada)", "Sinharaja Rainforest", "Gem Mines", "Bopath Ella"],
    overview: "Ratnapura is Sri Lanka's 'City of Gems', famous for sapphire mining, UNESCO Sinharaja rainforest, and overnight hikes up Adam's Peak.",
    places: [
      { name: "Adam's Peak (Sri Pada)", icon: "⛰️", description: "Sacred 2,243m mountain peak featuring a sacred footprint, hiked overnight by thousands for sunrise above clouds." },
      { name: "Sinharaja Rainforest Reserve", icon: "🌳", description: "UNESCO World Heritage primary tropical rainforest, home to 95% of Sri Lanka's endemic bird species." },
      { name: "Ratnapura Gem Mines & Museum", icon: "💎", description: "Open-pit gem mines where traditional miners dig for famous Ceylon Blue Sapphires and precious gems." },
      { name: "Bopath Ella Waterfall", icon: "🌊", description: "Unique waterfall shaped like a sacred Bo leaf, popular for family picnics and natural baths." }
    ]
  },
  {
    id: "kegalle",
    name: "Kegalle",
    province: "Sabaragamuwa",
    tagline: "Pinnawala Elephant Orphanage, Rubber Estates & Bible Rock Fortress",
    highlights: ["Pinnawala Elephants", "Millennium Elephant Foundation", "Bible Rock", "Saradiel Village"],
    overview: "Kegalle is famous for Pinnawala Elephant Orphanage where herds of elephants bathe in the river daily, spice gardens, and Bible Rock.",
    places: [
      { name: "Pinnawala Elephant Orphanage", icon: "🐘", description: "World-famous sanctuary established in 1975 where visitors watch dozens of elephants bathe in the river." },
      { name: "Millennium Elephant Foundation", icon: "🌿", description: "Ethical elephant sanctuary offering hands-on elephant care, walks, and educational tours." },
      { name: "Bible Rock (Batalegala)", icon: "🏔️", description: "Striking flat-topped mountain fortress landmark resembling an open book, offering hiking trails." },
      { name: "Saradiel Village (Uduwela)", icon: "🏡", description: "Theme village recreating the life and era of Utuwankande Sura Saradiel — Sri Lanka's 'Robin Hood'." }
    ]
  },
  {
    id: "trincomalee",
    name: "Trincomalee",
    province: "Eastern",
    tagline: "Koneswaram Cliff Temple, Pigeon Island Coral Reefs & Nilaveli Beach",
    highlights: ["Koneswaram Temple", "Pigeon Island", "Nilaveli Beach", "Kanniya Hot Springs"],
    overview: "Trincomalee is Sri Lanka's eastern coastal paradise, famous for Koneswaram Kovil atop Swami Rock cliff, shark snorkeling, and Nilaveli sand.",
    places: [
      { name: "Koneswaram Temple (Swami Rock)", icon: "🛕", description: "Ancient Hindu temple built high on a cliff edge dropping into the Indian Ocean, dedicated to Lord Shiva." },
      { name: "Pigeon Island Marine National Park", icon: "🐠", description: "Premier snorkeling marine park with coral reefs, blacktip reef sharks, sea turtles, and marine life." },
      { name: "Nilaveli & Uppuveli Beaches", icon: "🏖️", description: "Serene long stretches of powdery white sand and clear shallow waters ideal for swimming and diving." },
      { name: "Kanniya Hot Water Springs", icon: "♨️", description: "Seven natural square hot water wells with varying temperatures, steeped in King Ravana legends." }
    ]
  },
  {
    id: "batticaloa",
    name: "Batticaloa",
    province: "Eastern",
    tagline: "Pasikudah Shallow Blue Bay, Dutch Fort & Singing Fish Lagoon",
    highlights: ["Pasikudah Bay", "Batticaloa Fort", "Singing Fish Lagoon", "Batticaloa Lighthouse"],
    overview: "Batticaloa is famed for Pasikudah's waist-deep shallow calm ocean bay, historic Dutch Fort, and the famous 'singing fish' lagoon.",
    places: [
      { name: "Pasikudah & Kalkudah Bay", icon: "🏖️", description: "World-famous shallow bay where you can walk hundreds of meters into the warm ocean with waist-deep water." },
      { name: "Batticaloa Dutch Fort", icon: "🏰", description: "Historic 1628 coastal fort surrounded by lagoon waters, housing government archives and museum exhibits." },
      { name: "Kallady Bridge & Singing Fish Lagoon", icon: "🎶", description: "Famous lagoon spot where mysterious musical sounds are heard underwater on full moon nights." },
      { name: "Batticaloa Lighthouse", icon: "🚨", description: "Historic 1863 brick lighthouse standing at the entrance to the Batticaloa estuary." }
    ]
  },
  {
    id: "ampara",
    name: "Ampara",
    province: "Eastern",
    tagline: "Arugam Bay Surfing Mecca, Kumana Birding & Wild Elephant Sanctuaries",
    highlights: ["Arugam Bay", "Elephant Rock", "Kumana Bird Park", "Magul Maha Viharaya"],
    overview: "Ampara holds Arugam Bay (a global top-10 surfing break), wild elephant reserves, and Kumana National Park's bird sanctuaries.",
    places: [
      { name: "Arugam Bay Surfing Point", icon: "🏄‍♂️", description: "World-renowned right-point break attracting international surfers, beach parties, and vibrant chilled vibes." },
      { name: "Elephant Rock & Main Point", icon: "🌄", description: "Scenic rocky headlands offering breathtaking sunset views and beginner surfing waves." },
      { name: "Kumana National Park", icon: "🦅", description: "Famous bird sanctuary holding massive nesting colonies of pelicans, painted storks, and rare birds." },
      { name: "Magul Maha Viharaya", icon: "🏛️", description: "Ancient 2nd century BC temple complex featuring a beautifully preserved stone moonstone." }
    ]
  },
  {
    id: "kurunegala",
    name: "Kurunegala",
    province: "North Western",
    tagline: "Elephant Rock Buddha Statue, Yapahuwa Rock Citadel & Silver Temple",
    highlights: ["Ethagala Buddha", "Yapahuwa Citadel", "Ridi Viharaya", "Kurunegala Lake"],
    overview: "Kurunegala is surrounded by 8 giant rock mountains, crowned by Ethagala Buddha statue and the historic Yapahuwa Rock Citadel.",
    places: [
      { name: "Ethagala (Elephant Rock) & Giant Buddha", icon: "🧘‍♂️", description: "325m rock mountain topped by an 88ft giant white Buddha statue overlooking Kurunegala town & lake." },
      { name: "Yapahuwa Rock Citadel", icon: "🏰", description: "13th-century royal capital built on a 90m high granite rock, famous for its ornate stone staircase." },
      { name: "Ridi Viharaya (Silver Temple)", icon: "🛕", description: "Ancient cave temple built by King Dutugemunu in 2nd century BC where silver ore was discovered." },
      { name: "Kurunegala Lake Promenade", icon: "🌊", description: "Scenic urban lake surrounded by walking paths, parks, and mountain views." }
    ]
  },
  {
    id: "puttalam",
    name: "Puttalam",
    province: "North Western",
    tagline: "Kalpitiya Dolphin & Kitesurfing Hub, Wilpattu Leopards & Salt Pans",
    highlights: ["Kalpitiya Kitesurfing", "Wilpattu Safari", "St. Anne's Church", "Spinner Dolphins"],
    overview: "Puttalam is Sri Lanka's adventure capital for Kalpitiya kitesurfing, spinner dolphin watching, and Wilpattu's leopard safaris.",
    places: [
      { name: "Kalpitiya Lagoon & Kitesurfing", icon: "🪁", description: "Sri Lanka's premier kitesurfing hub and top spot for boat trips to spot pods of hundreds of spinner dolphins." },
      { name: "Wilpattu National Park Safari", icon: "🐆", description: "Sri Lanka's largest national park, famous for natural sand-rimmed water basins ('Villus') and leopards." },
      { name: "St. Anne's Church (Thalawila)", icon: "⛪", description: "Historic 18th-century Catholic shrine on the beach attracting hundreds of thousands during feast days." },
      { name: "Munneswaram Kovil (Chilaw)", icon: "🛕", description: "Ancient Hindu temple complex dedicated to Lord Shiva, visited by Lord Rama in Ramayana legends." }
    ]
  }
];

export default function DistrictExplorer() {
  const [currentProvince, setCurrentProvince] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDistrict, setActiveModalDistrict] = useState(null);

  const provinces = [
    'all',
    'Northern',
    'Central',
    'Southern',
    'Western',
    'Eastern',
    'North Central',
    'Uva',
    'Sabaragamuwa',
    'North Western',
  ];

  const filteredDistricts = SRI_LANKA_DISTRICTS.filter((d) => {
    const matchProv = currentProvince === 'all' || d.province === currentProvince;
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.province.toLowerCase().includes(q) ||
      d.tagline.toLowerCase().includes(q) ||
      d.highlights.some((h) => h.toLowerCase().includes(q)) ||
      d.places.some((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    return matchProv && matchQuery;
  });

  return (
    <section className="section section-alt" id="district-explorer">
      <div className="container">
        <div className="text-center mb-4">
          <p className="section-label">Island-Wide Travel Guide</p>
          <h2 className="section-title">Explore Sri Lanka by District (25 Districts)</h2>
          <div className="divider"></div>
          <p className="section-sub">
            Select any district to discover its most visited attractions, famous landmarks, and what makes it special.
          </p>
        </div>

        {/* Search & Province Filter Bar */}
        <div className="district-controls-wrap">
          <div className="district-search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search district name or famous place (e.g. Jaffna, Kandy, Sigiriya, Mirissa, Ella)..."
            />
          </div>

          <div className="province-filter-tabs">
            {provinces.map((prov) => (
              <button
                key={prov}
                type="button"
                className={`province-tab-btn ${currentProvince === prov ? 'active' : ''}`}
                onClick={() => setCurrentProvince(prov)}
              >
                {prov === 'all' ? 'All (25)' : prov}
              </button>
            ))}
          </div>
        </div>

        {/* District Cards Grid */}
        <div className="grid-3 mt-4" id="districtGrid">
          {filteredDistricts.length === 0 ? (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '3rem 1rem',
                background: 'var(--white)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔍</div>
              <h4 style={{ color: 'var(--primary)' }}>No Districts Found</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Try searching for a different district name like &quot;Jaffna&quot;, &quot;Kandy&quot;, or &quot;Sigiriya&quot;.
              </p>
            </div>
          ) : (
            filteredDistricts.map((d) => (
              <div
                key={d.id}
                className="district-card"
                onClick={() => setActiveModalDistrict(d)}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <div className="district-card-header">
                    <h3 className="district-name">📍 {d.name}</h3>
                    <span className="province-badge">{d.province}</span>
                  </div>
                  <p className="district-tagline">{d.tagline}</p>
                  <div className="district-places-teaser">
                    {d.highlights.map((h, i) => (
                      <span key={i} className="place-tag">
                        ✨ {h}
                      </span>
                    ))}
                  </div>
                </div>
                <button type="button" className="district-btn-explore">
                  <i className="fa-solid fa-compass"></i> Explore {d.places.length} Visited Places &rarr;
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* District Places Modal Overlay */}
      {activeModalDistrict && (
        <div className="district-modal-overlay active" onClick={() => setActiveModalDistrict(null)}>
          <div className="district-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="district-modal-close"
              onClick={() => setActiveModalDistrict(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="district-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                <h3>📍 {activeModalDistrict.name} District</h3>
                <span className="province-badge" style={{ background: 'var(--accent)', color: 'var(--primary-dk)', fontSize: '0.75rem' }}>
                  {activeModalDistrict.province} Province
                </span>
              </div>
              <p>{activeModalDistrict.tagline}</p>
            </div>

            <div className="district-modal-body">
              <div className="district-overview-box">
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--primary)', marginBottom: '0.35rem' }}>
                  🌟 Why {activeModalDistrict.name} is Famous:
                </p>
                <p style={{ margin: 0 }}>{activeModalDistrict.overview}</p>
              </div>

              <h4 className="places-section-title">
                <i className="fa-solid fa-map-pin" style={{ color: 'var(--accent)' }}></i> Most Visited Places & Famous Attractions
              </h4>

              <div className="district-places-grid">
                {activeModalDistrict.places.map((p, idx) => (
                  <div key={idx} className="place-item-card">
                    <div className="place-item-icon">{p.icon}</div>
                    <div className="place-item-details">
                      <h5>{p.name}</h5>
                      <p>{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="district-modal-footer">
              <Link
                href={`/booking?to=${encodeURIComponent(activeModalDistrict.name)}`}
                className="btn btn-accent btn-full btn-lg"
                onClick={() => setActiveModalDistrict(null)}
              >
                <i className="fa-solid fa-van-shuttle"></i> &nbsp;BOOK TRIP TO THIS DISTRICT
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
