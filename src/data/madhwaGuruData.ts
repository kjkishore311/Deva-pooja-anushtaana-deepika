export type GuruTextLanguage = 'kn' | 'en' | 'sa';

export interface MadhwaGuru {
  id: string;
  order: number;
  name: string;
  source: string;
  image: string;
  imageSource: string;
  stuti: Record<GuruTextLanguage, string> | null;
  audioUrl: string | null;
}

export const guruSourceVerifiedAt = '2026-10-12';

export const madhwaGurus: MadhwaGuru[] = [
  {
    "id": "sri-madhwacharya",
    "order": 1,
    "name": "Sri Madhwacharya",
    "source": "https://uttaradimath.org/parampara/sri-madhwacharya",
    "image": "/images/gurus/sri-madhwacharya.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/0.jpg",
    "stuti": {
      "sa": "ब्रह्मांता गुरवः साक्षादिष्टं दैवं श्रियः पतिः ।\nआचार्याः श्रीमदाचार्याः संतु मे जन्मजन्मनि ॥",
      "kn": "ಬ್ರಹ್ಮಾಂತಾ ಗುರವಃ ಸಾಕ್ಷಾದಿಷ್ಟಂ ದೈವಂ ಶ್ರಿಯಃ ಪತಿಃ ।\nಆಚಾರ್ಯಾಃ ಶ್ರೀಮದಾಚಾರ್ಯಾಃ ಸಂತು ಮೇ ಜನ್ಮಜನ್ಮನಿ ॥",
      "en": "brahmāṃtā guravaḥ sākṣādiṣṭaṃ daivaṃ śriyaḥ patiḥ |\nācāryāḥ śrīmadācāryāḥ saṃtu me janmajanmani ||"
    },
    "audioUrl": "/audio/guru-stuti/001-shlokas-1-3.m4a"
  },
  {
    "id": "sri-padmanabha-tirtha",
    "order": 2,
    "name": "Sri Padmanabha Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-padmanabha-tirtha",
    "image": "/images/gurus/sri-padmanabha-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/1.jpg",
    "stuti": {
      "sa": "पूर्णप्रज्ञकृतं भाष्यमादौ तद्भावपूर्वकम् ।\nयो व्याकरोन्नमस्तस्मै पद्मनाभाख्ययोगिने॥",
      "kn": "ಪೂರ್ಣಪ್ರಜ್ಞಕೃತಂ ಭಾಷ್ಯಮಾದೌ ತದ್ಭಾವಪೂರ್ವಕಮ್ ।\nಯೋ ವ್ಯಾಕರೋನ್ನಮಸ್ತಸ್ಮೈ ಪದ್ಮನಾಭಾಖ್ಯಯೋಗಿನೇ॥",
      "en": "pūrṇaprajñakṛtaṃ bhāṣyamādau tadbhāvapūrvakam |\nyo vyākaronnamastasmai padmanābhākhyayogine||"
    },
    "audioUrl": "/audio/guru-stuti/001-shlokas-1-3.m4a"
  },
  {
    "id": "sri-narahari-tirtha",
    "order": 3,
    "name": "Sri Narahari Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-narahari-tirtha",
    "image": "/images/gurus/sri-narahari-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/2.jpg",
    "stuti": {
      "sa": "॥ ससीतामूलरामार्चा कोशे गजपतेः स्थिता।\nयेनानीता नमस्तस्मै श्रीमन्नृहरिभिक्षवे॥",
      "kn": "॥ ಸಸೀತಾಮೂಲರಾಮಾರ್ಚಾ ಕೋಶೇ ಗಜಪತೇಃ ಸ್ಥಿತಾ।\nಯೇನಾನೀತಾ ನಮಸ್ತಸ್ಮೈ ಶ್ರೀಮನ್ನೃಹರಿಭಿಕ್ಷವೇ॥",
      "en": "|| sasītāmūlarāmārcā kośe gajapateḥ sthitā|\nyenānītā namastasmai śrīmannṛharibhikṣave||"
    },
    "audioUrl": "/audio/guru-stuti/001-shlokas-1-3.m4a"
  },
  {
    "id": "sri-madhava-tirtha",
    "order": 4,
    "name": "Sri Madhava Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-madhava-tirtha",
    "image": "/images/gurus/sri-madhava-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/3.jpg",
    "stuti": {
      "sa": "॥ साधिताखिलसत्तत्वम् बाधिताखिलदुर्मतम्।\nबोधिताखिलसन्मार्गं माधवाख्ययतिं भजे॥",
      "kn": "॥ ಸಾಧಿತಾಖಿಲಸತ್ತತ್ವಮ್ ಬಾಧಿತಾಖಿಲದುರ್ಮತಮ್।\nಬೋಧಿತಾಖಿಲಸನ್ಮಾರ್ಗಂ ಮಾಧವಾಖ್ಯಯತಿಂ ಭಜೇ॥",
      "en": "|| sādhitākhilasattatvam bādhitākhiladurmatam|\nbodhitākhilasanmārgaṃ mādhavākhyayatiṃ bhaje||"
    },
    "audioUrl": "/audio/guru-stuti/002-shlokas-4-5.m4a"
  },
  {
    "id": "sri-akshobhya-tirtha",
    "order": 5,
    "name": "Sri Akshobhya Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-akshobhya-tirtha",
    "image": "/images/gurus/sri-akshobhya-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/4.jpg",
    "stuti": {
      "sa": "॥ यो विद्यारण्यविपिनं तत्त्वमस्यसिनाच्छिनत्।\nश्रीमदक्षोभ्यतीर्थार्यहंसिनं तं नमाम्यहम्॥",
      "kn": "॥ ಯೋ ವಿದ್ಯಾರಣ್ಯವಿಪಿನಂ ತತ್ತ್ವಮಸ್ಯಸಿನಾಚ್ಛಿನತ್।\nಶ್ರೀಮದಕ್ಷೋಭ್ಯತೀರ್ಥಾರ್ಯಹಂಸಿನಂ ತಂ ನಮಾಮ್ಯಹಮ್॥",
      "en": "|| yo vidyāraṇyavipinaṃ tattvamasyasinācchinat|\nśrīmadakṣobhyatīrthāryahaṃsinaṃ taṃ namāmyaham||"
    },
    "audioUrl": "/audio/guru-stuti/002-shlokas-4-5.m4a"
  },
  {
    "id": "sri-jayateertha",
    "order": 6,
    "name": "Sri Jayateertha",
    "source": "https://uttaradimath.org/parampara/sri-jayateertha",
    "image": "/images/gurus/sri-jayateertha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/5.jpg",
    "stuti": {
      "sa": "यस्य वाक्कामधेनुर्नः कामितार्थान् प्रयच्छति ।\nसेवे तं जययोगीन्द्रं कामबाणच्छिदं सदा ॥",
      "kn": "ಯಸ್ಯ ವಾಕ್ಕಾಮಧೇನುರ್ನಃ ಕಾಮಿತಾರ್ಥಾನ್ ಪ್ರಯಚ್ಛತಿ ।\nಸೇವೇ ತಂ ಜಯಯೋಗೀನ್ದ್ರಂ ಕಾಮಬಾಣಚ್ಛಿದಂ ಸದಾ ॥",
      "en": "yasya vākkāmadhenurnaḥ kāmitārthān prayacchati |\nseve taṃ jayayogīndraṃ kāmabāṇacchidaṃ sadā ||"
    },
    "audioUrl": "/audio/guru-stuti/sri-jayateertha.m4a"
  },
  {
    "id": "sri-vidyadhiraja-tirtha",
    "order": 7,
    "name": "Sri Vidyadhiraja Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-vidyadhiraja-tirtha",
    "image": "/images/gurus/sri-vidyadhiraja-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/6.jpg",
    "stuti": {
      "sa": "माद्यदद्वैत्यन्धकारप्रद्योतनमहर्निशम्।\nविद्याधिराजं स्वगुरुं ध्यायामि करुणाकरम्॥",
      "kn": "ಮಾದ್ಯದದ್ವೈತ್ಯನ್ಧಕಾರಪ್ರದ್ಯೋತನಮಹರ್ನಿಶಮ್।\nವಿದ್ಯಾಧಿರಾಜಂ ಸ್ವಗುರುಂ ಧ್ಯಾಯಾಮಿ ಕರುಣಾಕರಮ್॥",
      "en": "mādyadadvaityandhakārapradyotanamaharniśam|\nvidyādhirājaṃ svaguruṃ dhyāyāmi karuṇākaram||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-kavindra-tirtha",
    "order": 8,
    "name": "Sri Kavindra Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-kavindra-tirtha",
    "image": "/images/gurus/sri-kavindra-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/7.jpg",
    "stuti": {
      "sa": "वीन्द्रारूढपदासक्तं  राजेन्द्रमुनिसेवितम् ।\nश्रीकवीन्द्रमुनिं वन्दे भजतां चन्द्रसन्निभम् ॥",
      "kn": "ವೀನ್ದ್ರಾರೂಢಪದಾಸಕ್ತಂ  ರಾಜೇನ್ದ್ರಮುನಿಸೇವಿತಮ್ ।\nಶ್ರೀಕವೀನ್ದ್ರಮುನಿಂ ವನ್ದೇ ಭಜತಾಂ ಚನ್ದ್ರಸನ್ನಿಭಮ್ ॥",
      "en": "vīndrārūḍhapadāsaktaṃ  rājendramunisevitam |\nśrīkavīndramuniṃ vande bhajatāṃ candrasannibham ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-vagisha-tirtha",
    "order": 9,
    "name": "Sri Vagisha Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-vagisha-tirtha",
    "image": "/images/gurus/sri-vagisha-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/8.jpg",
    "stuti": {
      "sa": "वासुदेवपदद्वन्द्ववारिजासक्तमानसम्।\nपदव्याख्यानकुशलं वागीशयतिमाश्रये॥",
      "kn": "ವಾಸುದೇವಪದದ್ವನ್ದ್ವವಾರಿಜಾಸಕ್ತಮಾನಸಮ್।\nಪದವ್ಯಾಖ್ಯಾನಕುಶಲಂ ವಾಗೀಶಯತಿಮಾಶ್ರಯೇ॥",
      "en": "vāsudevapadadvandvavārijāsaktamānasam|\npadavyākhyānakuśalaṃ vāgīśayatimāśraye||"
    },
    "audioUrl": "/audio/guru-stuti/sri-vagisha-tirtha.mp3"
  },
  {
    "id": "sri-ramachandra-tirtha",
    "order": 10,
    "name": "Sri Ramachandra Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-ramachandra-tirtha",
    "image": "/images/gurus/sri-ramachandra-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/9.jpg",
    "stuti": {
      "sa": "द्युमण्यभिजनाब्जेन्दूरामव्यासपदार्चकः।\nरामचन्द्रगुरुर्भूयात् कामितार्थप्रदायकः॥",
      "kn": "ದ್ಯುಮಣ್ಯಭಿಜನಾಬ್ಜೇನ್ದೂರಾಮವ್ಯಾಸಪದಾರ್ಚಕಃ।\nರಾಮಚನ್ದ್ರಗುರುರ್ಭೂಯಾತ್ ಕಾಮಿತಾರ್ಥಪ್ರದಾಯಕಃ॥",
      "en": "dyumaṇyabhijanābjendūrāmavyāsapadārcakaḥ|\nrāmacandragururbhūyāt kāmitārthapradāyakaḥ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-vidyanidhi-tirtha",
    "order": 11,
    "name": "Sri Vidyanidhi Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-vidyanidhi-tirtha",
    "image": "/images/gurus/sri-vidyanidhi-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/10.jpg",
    "stuti": {
      "sa": "यद्भक्त्या मूलरामस्य पेटिका त्यक्तभूमिका।\nविद्यानिधिर्धियं दद्यात् अष्टषष्ट्यब्दपूजकः॥",
      "kn": "ಯದ್ಭಕ್ತ್ಯಾ ಮೂಲರಾಮಸ್ಯ ಪೇಟಿಕಾ ತ್ಯಕ್ತಭೂಮಿಕಾ।\nವಿದ್ಯಾನಿಧಿರ್ಧಿಯಂ ದದ್ಯಾತ್ ಅಷ್ಟಷಷ್ಟ್ಯಬ್ದಪೂಜಕಃ॥",
      "en": "yadbhaktyā mūlarāmasya peṭikā tyaktabhūmikā|\nvidyānidhirdhiyaṃ dadyāt aṣṭaṣaṣṭyabdapūjakaḥ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-raghunatha-tirtha",
    "order": 12,
    "name": "Sri Raghunatha Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-raghunatha-tirtha",
    "image": "/images/gurus/sri-raghunatha-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/11.jpg",
    "stuti": {
      "sa": "रघुनाथगुरुं नौमि विद्यानिधिकरोद्भवम्।\nकूर्मो वरुणगङ्गे च यस्य प्रत्यक्षतां गताः॥",
      "kn": "ರಘುನಾಥಗುರುಂ ನೌಮಿ ವಿದ್ಯಾನಿಧಿಕರೋದ್ಭವಮ್।\nಕೂರ್ಮೋ ವರುಣಗಙ್ಗೇ ಚ ಯಸ್ಯ ಪ್ರತ್ಯಕ್ಷತಾಂ ಗತಾಃ॥",
      "en": "raghunāthaguruṃ naumi vidyānidhikarodbhavam|\nkūrmo varuṇagaṅge ca yasya pratyakṣatāṃ gatāḥ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-raghuvarya-tirtha",
    "order": 13,
    "name": "Sri Raghuvarya Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-raghuvarya-tirtha",
    "image": "/images/gurus/sri-raghuvarya-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/12.jpg",
    "stuti": {
      "sa": "महाप्रवाहिनी भीमा यस्य मार्गमदान्मुदा ।\nरघुवर्यो मुदं दद्यात्कामितार्थप्रदायकः ॥",
      "kn": "ಮಹಾಪ್ರವಾಹಿನೀ ಭೀಮಾ ಯಸ್ಯ ಮಾರ್ಗಮದಾನ್ಮುದಾ ।\nರಘುವರ್ಯೋ ಮುದಂ ದದ್ಯಾತ್ಕಾಮಿತಾರ್ಥಪ್ರದಾಯಕಃ ॥",
      "en": "mahāpravāhinī bhīmā yasya mārgamadānmudā |\nraghuvaryo mudaṃ dadyātkāmitārthapradāyakaḥ ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-raghuttama-tirtha",
    "order": 14,
    "name": "Sri Raghuttama Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-raghuttama-tirtha",
    "image": "/images/gurus/sri-raghuttama-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/13.jpg",
    "stuti": {
      "sa": "भावबोधकृतं सेवे रघुत्तममहागुरुम्।\nयच्छिष्यशिष्यशिष्याद्याः टिप्पण्याचार्यसंज्ञिताः॥",
      "kn": "ಭಾವಬೋಧಕೃತಂ ಸೇವೇ ರಘುತ್ತಮಮಹಾಗುರುಮ್।\nಯಚ್ಛಿಷ್ಯಶಿಷ್ಯಶಿಷ್ಯಾದ್ಯಾಃ ಟಿಪ್ಪಣ್ಯಾಚಾರ್ಯಸಂಜ್ಞಿತಾಃ॥",
      "en": "bhāvabodhakṛtaṃ seve raghuttamamahāgurum|\nyacchiṣyaśiṣyaśiṣyādyāḥ ṭippaṇyācāryasaṃjñitāḥ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-vedavyasa-tirtha",
    "order": 15,
    "name": "Sri Vedavyasa Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-vedavyasa-tirtha",
    "image": "/images/gurus/sri-vedavyasa-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/14.jpg",
    "stuti": {
      "sa": "न दग्धं यस्य कौपीनं अग्नौ दत्तमपि स्फुटम्।\nवेदव्यासगुरुं नौमि श्रीवेदेशनमस्कृतम्॥",
      "kn": "ನ ದಗ್ಧಂ ಯಸ್ಯ ಕೌಪೀನಂ ಅಗ್ನೌ ದತ್ತಮಪಿ ಸ್ಫುಟಮ್।\nವೇದವ್ಯಾಸಗುರುಂ ನೌಮಿ ಶ್ರೀವೇದೇಶನಮಸ್ಕೃತಮ್॥",
      "en": "na dagdhaṃ yasya kaupīnaṃ agnau dattamapi sphuṭam|\nvedavyāsaguruṃ naumi śrīvedeśanamaskṛtam||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-vidyadhisha-tirtha",
    "order": 16,
    "name": "Sri Vidyadhisha Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-vidyadhisha-tirtha",
    "image": "/images/gurus/sri-vidyadhisha-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/15.jpg",
    "stuti": {
      "sa": "श्रीमद्सुधाद्भुताम्बोधिविक्रीडनविचक्षणान्।\nवाक्यार्थचन्द्रिकाकारान् विद्याधीशगुरून् भजे॥",
      "kn": "ಶ್ರೀಮದ್ಸುಧಾದ್ಭುತಾಮ್ಬೋಧಿವಿಕ್ರೀಡನವಿಚಕ್ಷಣಾನ್।\nವಾಕ್ಯಾರ್ಥಚನ್ದ್ರಿಕಾಕಾರಾನ್ ವಿದ್ಯಾಧೀಶಗುರೂನ್ ಭಜೇ॥",
      "en": "śrīmadsudhādbhutāmbodhivikrīḍanavicakṣaṇān|\nvākyārthacandrikākārān vidyādhīśagurūn bhaje||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-vedanidhi-tirtha",
    "order": 17,
    "name": "Sri Vedanidhi Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-vedanidhi-tirtha",
    "image": "/images/gurus/sri-vedanidhi-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/16.jpg",
    "stuti": {
      "sa": "विद्याधीशाब्धिसंभूतो विद्वत्कुमुदबान्धवः ।\nवेदनिध्याख्यचन्द्रोऽयं कामितार्थान् प्रयच्छतु ॥",
      "kn": "ವಿದ್ಯಾಧೀಶಾಬ್ಧಿಸಂಭೂತೋ ವಿದ್ವತ್ಕುಮುದಬಾನ್ಧವಃ ।\nವೇದನಿಧ್ಯಾಖ್ಯಚನ್ದ್ರೋಽಯಂ ಕಾಮಿತಾರ್ಥಾನ್ ಪ್ರಯಚ್ಛತು ॥",
      "en": "vidyādhīśābdhisaṃbhūto vidvatkumudabāndhavaḥ |\nvedanidhyākhyacandro'yaṃ kāmitārthān prayacchatu ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyavrata-tirtha",
    "order": 18,
    "name": "Sri Satyavrata Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyavrata-tirtha",
    "image": "/images/gurus/sri-satyavrata-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/17.jpg",
    "stuti": {
      "sa": "वेदनिध्यालवालोत्थः विदुषां चिन्तितप्रदः।\nसत्यव्रताख्यकल्पद्रुः भूयादिष्टार्थसिद्धये॥",
      "kn": "ವೇದನಿಧ್ಯಾಲವಾಲೋತ್ಥಃ ವಿದುಷಾಂ ಚಿನ್ತಿತಪ್ರದಃ।\nಸತ್ಯವ್ರತಾಖ್ಯಕಲ್ಪದ್ರುಃ ಭೂಯಾದಿಷ್ಟಾರ್ಥಸಿದ್ಧಯೇ॥",
      "en": "vedanidhyālavālotthaḥ viduṣāṃ cintitapradaḥ|\nsatyavratākhyakalpadruḥ bhūyādiṣṭārthasiddhaye||"
    },
    "audioUrl": "/audio/guru-stuti/sri-satyavrata-tirtha.m4a"
  },
  {
    "id": "sri-satyanidhi-tirtha",
    "order": 19,
    "name": "Sri Satyanidhi Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyanidhi-tirtha",
    "image": "/images/gurus/sri-satyanidhi-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/18.jpg",
    "stuti": {
      "sa": "अनधीत्यमहाभाष्यं व्याख्यातं यदनुग्रहात्।\nवन्दे तं विधिना सत्यनिधिं सज्ज्ञानसिद्धये॥",
      "kn": "ಅನಧೀತ್ಯಮಹಾಭಾಷ್ಯಂ ವ್ಯಾಖ್ಯಾತಂ ಯದನುಗ್ರಹಾತ್।\nವನ್ದೇ ತಂ ವಿಧಿನಾ ಸತ್ಯನಿಧಿಂ ಸಜ್ಜ್ಞಾನಸಿದ್ಧಯೇ॥",
      "en": "anadhītyamahābhāṣyaṃ vyākhyātaṃ yadanugrahāt|\nvande taṃ vidhinā satyanidhiṃ sajjñānasiddhaye||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyanatha-tirtha",
    "order": 20,
    "name": "Sri Satyanatha Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyanatha-tirtha",
    "image": "/images/gurus/sri-satyanatha-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/19.jpg",
    "stuti": {
      "sa": "सत्यनाथगुरुः पातु यो धीरो नवचन्द्रिकाम्।\nनवामृतगदातीर्थताण्डवानि व्यचीकॢपत्॥",
      "kn": "ಸತ್ಯನಾಥಗುರುಃ ಪಾತು ಯೋ ಧೀರೋ ನವಚನ್ದ್ರಿಕಾಮ್।\nನವಾಮೃತಗದಾತೀರ್ಥತಾಣ್ಡವಾನಿ ವ್ಯಚೀಕೢಪತ್॥",
      "en": "satyanāthaguruḥ pātu yo dhīro navacandrikām|\nnavāmṛtagadātīrthatāṇḍavāni vyacīkḷpat||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyabhinava-tirtha",
    "order": 21,
    "name": "Sri Satyabhinava Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyabhinava-tirtha",
    "image": "/images/gurus/sri-satyabhinava-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/20.jpg",
    "stuti": {
      "sa": "सत्यनाथाब्धिसंभूतः सद्गोगणविजृंभितः।\nसत्याभिनवतीर्थेन्दुः  सन्तापान् हन्तु सन्ततम्॥",
      "kn": "ಸತ್ಯನಾಥಾಬ್ಧಿಸಂಭೂತಃ ಸದ್ಗೋಗಣವಿಜೃಂಭಿತಃ।\nಸತ್ಯಾಭಿನವತೀರ್ಥೇನ್ದುಃ  ಸನ್ತಾಪಾನ್ ಹನ್ತು ಸನ್ತತಮ್॥",
      "en": "satyanāthābdhisaṃbhūtaḥ sadgogaṇavijṛṃbhitaḥ|\nsatyābhinavatīrthenduḥ  santāpān hantu santatam||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyapoorna-tirtha",
    "order": 22,
    "name": "Sri Satyapoorna Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyapoorna-tirtha",
    "image": "/images/gurus/sri-satyapoorna-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/21.jpg",
    "stuti": {
      "sa": "सत्याभिनवदुग्दाब्धेः सञ्जातः सकलेष्टदः।\nश्रीसत्यपूर्णतीर्थेन्दुः सन्तापान् हन्तु सन्ततम्॥",
      "kn": "ಸತ್ಯಾಭಿನವದುಗ್ದಾಬ್ಧೇಃ ಸಞ್ಜಾತಃ ಸಕಲೇಷ್ಟದಃ।\nಶ್ರೀಸತ್ಯಪೂರ್ಣತೀರ್ಥೇನ್ದುಃ ಸನ್ತಾಪಾನ್ ಹನ್ತು ಸನ್ತತಮ್॥",
      "en": "satyābhinavadugdābdheḥ sañjātaḥ sakaleṣṭadaḥ|\nśrīsatyapūrṇatīrthenduḥ santāpān hantu santatam||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyavijaya-tirtha",
    "order": 23,
    "name": "Sri Satyavijaya Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyavijaya-tirtha",
    "image": "/images/gurus/sri-satyavijaya-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/22.jpg",
    "stuti": {
      "sa": "सत्यपूर्णाम्बुधेर्जातो विद्वज्जनविजृम्भितः।\nधनीध्वंसीतु नस्तापं श्रीसत्यविजयोडुपः॥",
      "kn": "ಸತ್ಯಪೂರ್ಣಾಮ್ಬುಧೇರ್ಜಾತೋ ವಿದ್ವಜ್ಜನವಿಜೃಮ್ಭಿತಃ।\nಧನೀಧ್ವಂಸೀತು ನಸ್ತಾಪಂ ಶ್ರೀಸತ್ಯವಿಜಯೋಡುಪಃ॥",
      "en": "satyapūrṇāmbudherjāto vidvajjanavijṛmbhitaḥ|\ndhanīdhvaṃsītu nastāpaṃ śrīsatyavijayoḍupaḥ||"
    },
    "audioUrl": "/audio/guru-stuti/sri-satyavijaya-tirtha.m4a"
  },
  {
    "id": "sri-satyapriya-tirtha",
    "order": 24,
    "name": "Sri Satyapriya Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyapriya-tirtha",
    "image": "/images/gurus/sri-satyapriya-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/23.jpg",
    "stuti": {
      "sa": "श्रीसत्यविजयाम्बोधेः जातं सत्यप्रियामृतम् ।\nजरामृती जङ्घनीतु विबुधानां मुदे सदा ॥",
      "kn": "ಶ್ರೀಸತ್ಯವಿಜಯಾಮ್ಬೋಧೇಃ ಜಾತಂ ಸತ್ಯಪ್ರಿಯಾಮೃತಮ್ ।\nಜರಾಮೃತೀ ಜಙ್ಘನೀತು ವಿಬುಧಾನಾಂ ಮುದೇ ಸದಾ ॥",
      "en": "śrīsatyavijayāmbodheḥ jātaṃ satyapriyāmṛtam |\njarāmṛtī jaṅghanītu vibudhānāṃ mude sadā ||"
    },
    "audioUrl": "/audio/guru-stuti/sri-satyapriya-tirtha.m4a"
  },
  {
    "id": "sri-satyabodha-tirtha",
    "order": 25,
    "name": "Sri Satyabodha Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyabodha-tirtha",
    "image": "/images/gurus/sri-satyabodha-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/24.jpg",
    "stuti": {
      "sa": "नैवेद्यगविषं रामे वीक्ष्य तद्भुक्तिभाक् गुरुः।\nयोऽदर्शयद्रविं रात्रौ सत्यबोधोऽस्तु मे मुदे॥",
      "kn": "ನೈವೇದ್ಯಗವಿಷಂ ರಾಮೇ ವೀಕ್ಷ್ಯ ತದ್ಭುಕ್ತಿಭಾಕ್ ಗುರುಃ।\nಯೋಽದರ್ಶಯದ್ರವಿಂ ರಾತ್ರೌ ಸತ್ಯಬೋಧೋಽಸ್ತು ಮೇ ಮುದೇ॥",
      "en": "naivedyagaviṣaṃ rāme vīkṣya tadbhuktibhāk guruḥ|\nyo'darśayadraviṃ rātrau satyabodho'stu me mude||"
    },
    "audioUrl": "/audio/guru-stuti/sri-satyabodha-tirtha.m4a"
  },
  {
    "id": "sri-satyasandha-tirtha",
    "order": 26,
    "name": "Sri Satyasandha Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyasandha-tirtha",
    "image": "/images/gurus/sri-satyasandha-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/25.jpg",
    "stuti": {
      "sa": "विष्णोः पदश्रित् गोव्रातैः स्वान्तध्वान्तनिवारकः।\nश्रीसत्यसन्धसूर्योऽयं भासतां नो हृदम्बरे॥",
      "kn": "ವಿಷ್ಣೋಃ ಪದಶ್ರಿತ್ ಗೋವ್ರಾತೈಃ ಸ್ವಾನ್ತಧ್ವಾನ್ತನಿವಾರಕಃ।\nಶ್ರೀಸತ್ಯಸನ್ಧಸೂರ್ಯೋಽಯಂ ಭಾಸತಾಂ ನೋ ಹೃದಮ್ಬರೇ॥",
      "en": "viṣṇoḥ padaśrit govrātaiḥ svāntadhvāntanivārakaḥ|\nśrīsatyasandhasūryo'yaṃ bhāsatāṃ no hṛdambare||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyavara-theertha",
    "order": 27,
    "name": "Sri Satyavara Theertha",
    "source": "https://uttaradimath.org/parampara/sri-satyavara-theertha",
    "image": "/images/gurus/sri-satyavara-theertha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/26.jpg",
    "stuti": {
      "sa": "श्रीसत्यसन्धसिन्धूत्थः श्रीसत्यवरचन्द्रमाः।\nप्रार्थितार्थप्रदो नित्यं भूयः स्यात् दृष्टिसिद्धये॥",
      "kn": "ಶ್ರೀಸತ್ಯಸನ್ಧಸಿನ್ಧೂತ್ಥಃ ಶ್ರೀಸತ್ಯವರಚನ್ದ್ರಮಾಃ।\nಪ್ರಾರ್ಥಿತಾರ್ಥಪ್ರದೋ ನಿತ್ಯಂ ಭೂಯಃ ಸ್ಯಾತ್ ದೃಷ್ಟಿಸಿದ್ಧಯೇ॥",
      "en": "śrīsatyasandhasindhūtthaḥ śrīsatyavaracandramāḥ|\nprārthitārthaprado nityaṃ bhūyaḥ syāt dṛṣṭisiddhaye||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyadharma-tirtha",
    "order": 28,
    "name": "Sri Satyadharma Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyadharma-tirtha",
    "image": "/images/gurus/sri-satyadharma-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/27.jpg",
    "stuti": {
      "sa": "श्रीसत्यवरदुग्धाब्धेः उत्थिता जगतीतले ।\nसुधा श्रीसत्यधर्माख्या पावयेत् स्मरतस्सतः",
      "kn": "ಶ್ರೀಸತ್ಯವರದುಗ್ಧಾಬ್ಧೇಃ ಉತ್ಥಿತಾ ಜಗತೀತಲೇ ।\nಸುಧಾ ಶ್ರೀಸತ್ಯಧರ್ಮಾಖ್ಯಾ ಪಾವಯೇತ್ ಸ್ಮರತಸ್ಸತಃ",
      "en": "śrīsatyavaradugdhābdheḥ utthitā jagatītale |\nsudhā śrīsatyadharmākhyā pāvayet smaratassataḥ"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyasankalpa-tirtha",
    "order": 29,
    "name": "Sri Satyasankalpa Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyasankalpa-tirtha",
    "image": "/images/gurus/sri-satyasankalpa-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/28.jpg",
    "stuti": {
      "sa": "सत्यधर्माब्धिसम्भूतः चिन्तामणिविजृम्भितः ।\nसत्यसंकल्पकल्पद्रुः कल्पयेत्कामधुङ्मम ।।",
      "kn": "ಸತ್ಯಧರ್ಮಾಬ್ಧಿಸಮ್ಭೂತಃ ಚಿನ್ತಾಮಣಿವಿಜೃಮ್ಭಿತಃ ।\nಸತ್ಯಸಂಕಲ್ಪಕಲ್ಪದ್ರುಃ ಕಲ್ಪಯೇತ್ಕಾಮಧುಙ್ಮಮ ।।",
      "en": "satyadharmābdhisambhūtaḥ cintāmaṇivijṛmbhitaḥ |\nsatyasaṃkalpakalpadruḥ kalpayetkāmadhuṅmama ||"
    },
    "audioUrl": "/audio/guru-stuti/sri-satyasankalpa-and-satyasanthushta.m4a"
  },
  {
    "id": "sri-satyasanthushta-theertha",
    "order": 30,
    "name": "Sri Satyasanthushta Theertha",
    "source": "https://uttaradimath.org/parampara/sri-satyasanthushta-theertha",
    "image": "/images/gurus/sri-satyasanthushta-theertha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/29.jpg",
    "stuti": {
      "sa": "सत्यसंकल्पवार्ध्यूत्थः सत्यसंतुष्टचंद्रमाः ।\nप्रार्थिताशेषदाता च भक्तवृंदस्य नित्यदा ॥",
      "kn": "ಸತ್ಯಸಂಕಲ್ಪವಾರ್ಧ್ಯೂತ್ಥಃ ಸತ್ಯಸಂತುಷ್ಟಚಂದ್ರಮಾಃ ।\nಪ್ರಾರ್ಥಿತಾಶೇಷದಾತಾ ಚ ಭಕ್ತವೃಂದಸ್ಯ ನಿತ್ಯದಾ ॥",
      "en": "satyasaṃkalpavārdhyūtthaḥ satyasaṃtuṣṭacaṃdramāḥ |\nprārthitāśeṣadātā ca bhaktavṛṃdasya nityadā ||"
    },
    "audioUrl": "/audio/guru-stuti/sri-satyasankalpa-and-satyasanthushta.m4a"
  },
  {
    "id": "sri-satyaparayana-theertha",
    "order": 31,
    "name": "Sri Satyaparayana Theertha",
    "source": "https://uttaradimath.org/parampara/sri-satyaparayana-theertha",
    "image": "/images/gurus/sri-satyaparayana-theertha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/30.jpg",
    "stuti": {
      "sa": "॥ सत्यसंतुष्टदुग्धाब्धेः जातः सत्यपरायणः ।\nचिंतामणिः सदा भूयात् सतां चिंतितसिद्धये ॥",
      "kn": "॥ ಸತ್ಯಸಂತುಷ್ಟದುಗ್ಧಾಬ್ಧೇಃ ಜಾತಃ ಸತ್ಯಪರಾಯಣಃ ।\nಚಿಂತಾಮಣಿಃ ಸದಾ ಭೂಯಾತ್ ಸತಾಂ ಚಿಂತಿತಸಿದ್ಧಯೇ ॥",
      "en": "|| satyasaṃtuṣṭadugdhābdheḥ jātaḥ satyaparāyaṇaḥ |\nciṃtāmaṇiḥ sadā bhūyāt satāṃ ciṃtitasiddhaye ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyakama-tirtha",
    "order": 32,
    "name": "Sri Satyakama Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyakama-tirtha",
    "image": "/images/gurus/sri-satyakama-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/31.jpg",
    "stuti": {
      "sa": "॥ सत्परायणदुग्धाब्धेः संजाता कीर्तिकामदा ।\nकामधेनुः सत्यकामनाम्नी भूयात् सतां मुदे ॥",
      "kn": "॥ ಸತ್ಪರಾಯಣದುಗ್ಧಾಬ್ಧೇಃ ಸಂಜಾತಾ ಕೀರ್ತಿಕಾಮದಾ ।\nಕಾಮಧೇನುಃ ಸತ್ಯಕಾಮನಾಮ್ನೀ ಭೂಯಾತ್ ಸತಾಂ ಮುದೇ ॥",
      "en": "|| satparāyaṇadugdhābdheḥ saṃjātā kīrtikāmadā |\nkāmadhenuḥ satyakāmanāmnī bhūyāt satāṃ mude ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-sathyestha-tirtha",
    "order": 33,
    "name": "Sri Sathyestha Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-sathyestha-tirtha",
    "image": "/images/gurus/sri-sathyestha-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/32.jpg",
    "stuti": {
      "sa": "सत्यकामार्णवोद्भूतः श्रीमत्सत्येष्टसद्गुरुः ।\nसतां चिन्तामणिरिव चिन्तितार्थप्रदो भुवि ।।",
      "kn": "ಸತ್ಯಕಾಮಾರ್ಣವೋದ್ಭೂತಃ ಶ್ರೀಮತ್ಸತ್ಯೇಷ್ಟಸದ್ಗುರುಃ ।\nಸತಾಂ ಚಿನ್ತಾಮಣಿರಿವ ಚಿನ್ತಿತಾರ್ಥಪ್ರದೋ ಭುವಿ ।।",
      "en": "satyakāmārṇavodbhūtaḥ śrīmatsatyeṣṭasadguruḥ |\nsatāṃ cintāmaṇiriva cintitārthaprado bhuvi ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyaparakrama-tirtha",
    "order": 34,
    "name": "Sri Satyaparakrama Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyaparakrama-tirtha",
    "image": "/images/gurus/sri-satyaparakrama-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/33.jpg",
    "stuti": {
      "sa": "सत्येष्टार्यसरिन्नाथादुद्भूतोद्भुतदर्शनः ।\nनाशयेत् हृदयध्वान्तं सत्पराक्रमकौस्तुभः ।।",
      "kn": "ಸತ್ಯೇಷ್ಟಾರ್ಯಸರಿನ್ನಾಥಾದುದ್ಭೂತೋದ್ಭುತದರ್ಶನಃ ।\nನಾಶಯೇತ್ ಹೃದಯಧ್ವಾನ್ತಂ ಸತ್ಪರಾಕ್ರಮಕೌಸ್ತುಭಃ ।।",
      "en": "satyeṣṭāryasarinnāthādudbhūtodbhutadarśanaḥ |\nnāśayet hṛdayadhvāntaṃ satparākramakaustubhaḥ ||"
    },
    "audioUrl": "/audio/guru-stuti/sri-satyaparakrama-tirtha.m4a"
  },
  {
    "id": "sri-satyaveera-tirtha",
    "order": 35,
    "name": "Sri Satyaveera Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyaveera-tirtha",
    "image": "/images/gurus/sri-satyaveera-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/34.jpg",
    "stuti": {
      "sa": "॥ सत्पराक्रमदुग्धाब्धेः संजातः कीर्तिचंद्रिकः ।\nसंतापं हरतु श्रीमान् सत्यवीरेंदुरंजसा ॥",
      "kn": "॥ ಸತ್ಪರಾಕ್ರಮದುಗ್ಧಾಬ್ಧೇಃ ಸಂಜಾತಃ ಕೀರ್ತಿಚಂದ್ರಿಕಃ ।\nಸಂತಾಪಂ ಹರತು ಶ್ರೀಮಾನ್ ಸತ್ಯವೀರೇಂದುರಂಜಸಾ ॥",
      "en": "|| satparākramadugdhābdheḥ saṃjātaḥ kīrticaṃdrikaḥ |\nsaṃtāpaṃ haratu śrīmān satyavīreṃduraṃjasā ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyadheera-tirtha",
    "order": 36,
    "name": "Sri Satyadheera Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyadheera-tirtha",
    "image": "/images/gurus/sri-satyadheera-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/35.jpg",
    "stuti": {
      "sa": "॥ सत्यवीरालवालोत्थो विदुषां चिंतितप्रदः ।\nसत्यधीराख्यकल्पद्रुः भूयादिष्टार्थसिद्धये ॥",
      "kn": "॥ ಸತ್ಯವೀರಾಲವಾಲೋತ್ಥೋ ವಿದುಷಾಂ ಚಿಂತಿತಪ್ರದಃ ।\nಸತ್ಯಧೀರಾಖ್ಯಕಲ್ಪದ್ರುಃ ಭೂಯಾದಿಷ್ಟಾರ್ಥಸಿದ್ಧಯೇ ॥",
      "en": "|| satyavīrālavālottho viduṣāṃ ciṃtitapradaḥ |\nsatyadhīrākhyakalpadruḥ bhūyādiṣṭārthasiddhaye ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyajnana-tirtha",
    "order": 37,
    "name": "Sri Satyajnana Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyajnana-tirtha",
    "image": "/images/gurus/sri-satyajnana-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/36.jpg",
    "stuti": {
      "sa": "॥ सत्यधीरकराब्जोत्थो ज्ञानवैराग्यसागरः ।\nसत्यज्ञानाख्यतरणिः स्वांतध्वांतं निकृंततु ॥",
      "kn": "॥ ಸತ್ಯಧೀರಕರಾಬ್ಜೋತ್ಥೋ ಜ್ಞಾನವೈರಾಗ್ಯಸಾಗರಃ ।\nಸತ್ಯಜ್ಞಾನಾಖ್ಯತರಣಿಃ ಸ್ವಾಂತಧ್ವಾಂತಂ ನಿಕೃಂತತು ॥",
      "en": "|| satyadhīrakarābjottho jñānavairāgyasāgaraḥ |\nsatyajñānākhyataraṇiḥ svāṃtadhvāṃtaṃ nikṛṃtatu ||"
    },
    "audioUrl": "/audio/guru-stuti/sri-satyajnana-tirtha.m4a"
  },
  {
    "id": "sri-satyadhyana-tirtha",
    "order": 38,
    "name": "Sri Satyadhyana Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyadhyana-tirtha",
    "image": "/images/gurus/sri-satyadhyana-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/37.jpg",
    "stuti": {
      "sa": "॥ आसेतोरातुषाराद्रेर्योदिशो जितवान् मुहुः।\nसत्यध्यानगुरुः पातु यतीन्द्रैरपि पूजितः॥",
      "kn": "॥ ಆಸೇತೋರಾತುಷಾರಾದ್ರೇರ್ಯೋದಿಶೋ ಜಿತವಾನ್ ಮುಹುಃ।\nಸತ್ಯಧ್ಯಾನಗುರುಃ ಪಾತು ಯತೀನ್ದ್ರೈರಪಿ ಪೂಜಿತಃ॥",
      "en": "|| āsetorātuṣārādreryodiśo jitavān muhuḥ|\nsatyadhyānaguruḥ pātu yatīndrairapi pūjitaḥ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyapragna-tirtha",
    "order": 39,
    "name": "Sri Satyapragna Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyapragna-tirtha",
    "image": "/images/gurus/sri-satyapragna-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/38.jpg",
    "stuti": {
      "sa": "॥ प्रावोचद्योऽधिकं न्यायसुधावाक्यार्थचंद्रिकाम् ।\nसत्यप्रज्ञगुरुर्दद्यात् प्रज्ञां वैदांतिकीम् सदा ॥",
      "kn": "॥ ಪ್ರಾವೋಚದ್ಯೋಽಧಿಕಂ ನ್ಯಾಯಸುಧಾವಾಕ್ಯಾರ್ಥಚಂದ್ರಿಕಾಮ್ ।\nಸತ್ಯಪ್ರಜ್ಞಗುರುರ್ದದ್ಯಾತ್ ಪ್ರಜ್ಞಾಂ ವೈದಾಂತಿಕೀಮ್ ಸದಾ ॥",
      "en": "|| prāvocadyo'dhikaṃ nyāyasudhāvākyārthacaṃdrikām |\nsatyaprajñagururdadyāt prajñāṃ vaidāṃtikīm sadā ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyabhijna-tirtha",
    "order": 40,
    "name": "Sri Satyabhijna Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyabhijna-tirtha",
    "image": "/images/gurus/sri-satyabhijna-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/39.jpg",
    "stuti": {
      "sa": "॥ वेङ्कटेशाद्रिमारभ्य सेतुं तोताद्रिपूर्वकान्।\nगत्वा दिग्विजयी पातु सत्याभिज्ञगुरूत्तमः॥",
      "kn": "॥ ವೇಙ್ಕಟೇಶಾದ್ರಿಮಾರಭ್ಯ ಸೇತುಂ ತೋತಾದ್ರಿಪೂರ್ವಕಾನ್।\nಗತ್ವಾ ದಿಗ್ವಿಜಯೀ ಪಾತು ಸತ್ಯಾಭಿಜ್ಞಗುರೂತ್ತಮಃ॥",
      "en": "|| veṅkaṭeśādrimārabhya setuṃ totādripūrvakān|\ngatvā digvijayī pātu satyābhijñagurūttamaḥ||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyapramoda-tirtha",
    "order": 41,
    "name": "Sri Satyapramoda Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyapramoda-tirtha",
    "image": "/images/gurus/sri-satyapramoda-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/40.jpg",
    "stuti": {
      "sa": "॥ सत्याभिज्ञकराब्जोत्थान् पञ्चाशद्वर्षपूजकान्।\nसत्यप्रमोदतीर्थार्यान् नौमि न्यायसुधारतान्॥",
      "kn": "॥ ಸತ್ಯಾಭಿಜ್ಞಕರಾಬ್ಜೋತ್ಥಾನ್ ಪಞ್ಚಾಶದ್ವರ್ಷಪೂಜಕಾನ್।\nಸತ್ಯಪ್ರಮೋದತೀರ್ಥಾರ್ಯಾನ್ ನೌಮಿ ನ್ಯಾಯಸುಧಾರತಾನ್॥",
      "en": "|| satyābhijñakarābjotthān pañcāśadvarṣapūjakān|\nsatyapramodatīrthāryān naumi nyāyasudhāratān||"
    },
    "audioUrl": null
  },
  {
    "id": "sri-satyatma-tirtha",
    "order": 42,
    "name": "Sri Satyatma Tirtha",
    "source": "https://uttaradimath.org/parampara/sri-satyatma-tirtha",
    "image": "/images/gurus/sri-satyatma-tirtha.jpg",
    "imageSource": "https://cdn.umath.in/um-assets/parampara/images/41.jpg",
    "stuti": null,
    "audioUrl": null
  }
];

