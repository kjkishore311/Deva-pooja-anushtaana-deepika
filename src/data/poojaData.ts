import { PoojaStep } from '../types';

export const POOJA_STEPS: PoojaStep[] = [
  {
    id: 'step_sankalpa',
    order: 1,
    stageNumber: 1,
    category: 'purvanga',
    titleKn: '೧. ಆಚಮನ ಮತ್ತು ಮಹಾಸಂಕಲ್ಪ',
    titleEn: '1. Achamana & Maha Sankalpa',
    subtitleKn: 'ದೇವಪೂಜೆಯ ಪವಿತ್ರ ಆರಂಭ ಮತ್ತು ಸಂಕಲ್ಪ',
    subtitleEn: 'Sacred invocation, mind alignment and dedication of ritual',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 2,
    requiredMaterialsKn: ['ಪಂಚಪಾತ್ರೆ & ಉದ್ಧರಣೆ', 'ಶುದ್ಧ ಜಲ', 'ಆಸನ / ಮಣೆ', 'ಗೋಪೀಚಂದನ ಮುದ್ರೆಗಳು'],
    requiredMaterialsEn: ['Panchapatra & Spoon', 'Pure water', 'Wooden seat / mat', 'Gopi Chandana & Mudras'],
    mudras: [],
    instructionsKn: [
      'ಸ್ನಾನ ಮುಗಿಸಿ ಮಡಿ ಬಟ್ಟೆ ಧರಿಸಿ, ದ್ವಾದಶ ನಾಮ-ಮುದ್ರೆಗಳನ್ನು ಧರಿಸಿ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಆಸನದಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ.',
      'ಮೂರು ಬಾರಿ ಆಚಮನ ಮಾಡಿ: "ಓಂ ಕೇಶವಾಯ ಸ್ವಾಹಾ, ಓಂ ನಾರಾಯಣಾಯ ಸ್ವಾಹಾ, ಓಂ ಮಾಧವಾಯ ಸ್ವಾಹಾ". ನಂತರ ೨೧ ನಾಮಗಳನ್ನು ಸ್ಮರಿಸಿ ಅಂಗನ್ಯಾಸ ಮಾಡಿ.',
      'ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ದೇಶಕಾಲಗಳನ್ನು ಸಂಕೀರ್ತನೆ ಮಾಡಿ ಶ್ರೀಹರಿಯ ಪ್ರೇರಣೆಯಿಂದ ಈ ಪೂಜಾಕರ್ಮವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ ಎಂದು ಸಂಕಲ್ಪ ಮಾಡಿ.'
    ],
    instructionsEn: [
      'Sit facing East or North on a consecrated wooden seat (Mane) wearing clean madi dhoti and dwadasha gopichandana mudras.',
      'Perform Achamana with 3 sips of water invoking Keshava, Narayana, Madhava.',
      'Perform Pranayama and chant the Maha Sankalpa dedicating the pooja exclusively to Sri Hari through Sri Mukhyaprana.'
    ],
    mantras: [
      {
        id: 'm_sankalpa_1',
        titleKn: 'ಮಹಾಸಂಕಲ್ಪ ಮಂತ್ರಃ',
        titleEn: 'Maha Sankalpa Mantra',
        mantraKannada: 'ಆಚಮ್ಯ, ಪ್ರಾಣಾನಾಯಮ್ಯ, ದೇಶಕಾಲೌ ಸಂಕೀರ್ತ್ಯ, ಶ್ರೀಗೋವಿಂದ ಗೋವಿಂದ ಶ್ರೀವಿಷ್ಣೋಃ ವಿಷ್ಣೋಃ...\nಭಾರತೀರಮಣಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀವಿಷ್ಣುಪ್ರೇರಣಯಾ ಶ್ರೀವಿಷ್ಣುಪ್ರೀತ್ಯರ್ಥಂ\nಭಗವತೋ ಬಲೇನ, ಭಗವತೋ ವೀರ್ಯೇಣ, ಭಗವತಸ್ತೇಜಸಾ, ಭಗವತಃ ಕರ್ಮಣಾ, ಭಗವತೋ ವಾಸುದೇವಸ್ಯ ಆಜ್ಞಯಾ ಯಥಾಮಿಲಿತೋಪಚಾರದ್ರವ್ಯೈಃ\nವಾಸುದೇವಸ್ಯ ಷೋಡಶೋಪಚಾರೈಃ ಪೂಜಾಖ್ಯಂ ಕರ್ಮ ಕರಿಷ್ಯೇ ॥',
        mantraSanskrit: 'आचम्य, प्राणानायम्य, देशकालौ संकीर्त्य, श्रीगोविन्द गोविन्द श्रीविष्णोः विष्णोः...\nभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरण्या श्रीविष्णुप्रीत्यर्थं\nभगवतो बलेन, भगवतो वीर्येण, भगवतस्तेजसा, भगवतः कर्मणा, भगवतो वासुदेवस्य आज्ञया यथा मिलितोपचारद्रव्यैः\nवासुदेवस्य षोडशोपचारैः पूजाख्यं कर्म करिष्ये ॥',
        mantraEnglish: 'Achamya, Praanaanaayamya, Deshakaalau sankeertya, Sri Govinda Govinda Sri Vishnoh Vishnoho...\nBhaaratheeramana-Mukhyapraanaantargata Sri Vishnu preranayaa Sri Vishnu preetyartham\nBhagavato balena, Bhagavato veeryena, Bhagavatastejasaa, Bhagavatah karmanaa, Bhagavato Vaasudevasya aajnyayaa yathaamilitopachaara-dravyaihi\nVaasudevasya shodashopachaaraih poojaakhyam karma karishye ||',
        repetitionCount: 1,
        meaningKn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಆತನ ಪ್ರೀತಿಗಾಗಿ, ಆತನ ಶಕ್ತಿ ಮತ್ತು ತೇಜಸ್ಸಿನಿಂದ, ಲಭ್ಯವಿರುವ ಉಪಚಾರ ದ್ರವ್ಯಗಳಿಂದ ಭಗವಾನ್ ವಾಸುದೇವನ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
        meaningEn: 'By the inspiration and for the divine pleasure of Sri Vishnu dwelling within Bharati-ramana Mukhyaprana, by His strength, energy, and command, I perform this worship with all available offerings.'
      }
    ],
    tipsKn: 'ಸಂಕಲ್ಪ ಮಾಡುವಾಗ ಅಕ್ಷತೆ ಮತ್ತು ತುಳಸಿಯನ್ನು ಬಲಗೈಯಲ್ಲಿ ಇಟ್ಟುಕೊಂಡು ಪ್ರಾರ್ಥಿಸಿ ಅರ್ಪಿಸಬಹುದು.',
    tipsEn: 'Hold a drop of water with Tulasi in the right palm while reciting Sankalpa.'
  },
  {
    id: 'step_dvara_devata',
    order: 2,
    stageNumber: 2,
    category: 'purvanga',
    titleKn: '೨. ದ್ವಾರದೇವತಾ ಸ್ಮರಣೆ & ಪ್ರಾರ್ಥನೆ',
    titleEn: '2. Dvara Devata Remembrance',
    subtitleKn: 'ಪೂಜಾ ಮಂಟಪ ಮತ್ತು ದೇವತಾ ದ್ವಾರಪಾಲಕರ ಪ್ರಾರ್ಥನೆ',
    subtitleEn: 'Invoking the gatekeepers and sanctum deities',
    modes: ['30min', 'full'],
    durationEstimateMinutes: 2,
    requiredMaterialsKn: ['ಅಕ್ಷತೆ', 'ತುಳಸಿ ದಳಗಳು'],
    requiredMaterialsEn: ['Akshata', 'Tulasi leaves'],
    mudras: [],
    instructionsKn: [
      'ದೇವರ ಮನೆಯ ಅಥವಾ ಪೂಜಾ ಮಂಟಪದ ನಾಲ್ಕೂ ದಿಕ್ಕುಗಳ ದ್ವಾರಪಾಲಕರನ್ನು ಸ್ಮರಿಸಿ ನಮಸ್ಕರಿಸಿ ಅನುಜ್ಞೆ ಪಡೆಯಿರಿ.',
      'ಪೂರ್ವದ್ವಾರ: ಜಯ-ವಿಜಯ; ದಕ್ಷಿಣದ್ವಾರ: ಬಲ-ಪ್ರಬಲ; ಪಶ್ಚಿಮದ್ವಾರ: ನಂದ-ಸುನಂದ; ಉತ್ತರದ್ವಾರ: ಕುಮುದ-ಕುಮುದಾಕ್ಷರಿಗೆ ನಮಸ್ಕರಿಸಿ.'
    ],
    instructionsEn: [
      'Seek permission of the Divine Gatekeepers before stepping into the sanctum sanctorum.',
      'East: Jaya & Vijaya; South: Bala & Prabala; West: Nanda & Sunanda; North: Kumuda & Kumudaksha.'
    ],
    mantras: [
      {
        id: 'm_dvara_1',
        titleKn: 'ದ್ವಾರದೇವತಾ ನಮನಮ್',
        titleEn: 'Dvara Devata Vandana',
        mantraKannada: 'ವಂದೇ ವಿಷ್ಣುಂ ನಮಾಮಿ ಶ್ರಿಯಮಥ ಚ ಭುವಂ ಬ್ರಹ್ಮವಾಯೂ ಚ ವಂದೇ ।\nಗಾಯತ್ರೀಂ ಭಾರತೀಂ ತಾಮಪಿ ಗರುಡಮನಂತಂ ಭಜೇ ರುದ್ರದೇವಮ್ ॥\nದೇವೀಂ ವಂದೇ ಸುಪರ್ಣೀಂ ಮಹಿಪತಿದಯಿತಾಂ ವಾರುಣೀಮಪ್ಯುಮಾಂ ತಾಂ ।\nಇಂದ್ರಾದೀನ್ ಕಾಮಮುಖ್ಯಾನ್ ಸಕಲಸುರಾನ್ ತದ್ಗುರೂನ್ ಮದ್ಗುರೂಂಶ್ಚ ॥\nದ್ವಾರದೇವತಾಭ್ಯೋ ನಮಃ ॥',
        mantraSanskrit: 'वन्दे विष्णुं नमामि श्रियमथ च भुवं ब्रह्मवायू च वन्दे ।\nगायत्रीं भारतीं तामपि गरुडमनन्तं भजे रुद्रदेवम् ॥\nदेवीं वन्दे सुपर्णीं महिपतियितां वारुणीमप्युमां तां ।\nइन्द्रादीन् काममुख्यान् सकलसुरान् तद्गुरून् मद्गुरूंश्च ॥\nद्वारदेवताभ्यो नमः ॥',
        mantraEnglish: 'Vande Vishnum namaami shriyamatha cha bhuvam brahmavaayoo cha vande |\nGaayatreem bhaaratheem taamapi garudamanantam bhaje rudradevam ||\nDeveem vande suparneem mahipatidayitaam vaaruneemapyumaam taam |\nIndraadeen kaamamukhyaan sakalasuraan tadguroon madguroonshcha ||\nDvaaradevataabhyo namaha ||',
        repetitionCount: 1,
        meaningKn: 'ಶ್ರೀಹರಿ, ರಮಾದೇವಿ, ಬ್ರಹ್ಮ-ವಾಯು, ಗಾಯತ್ರಿ-ಭಾರತಿ, ಗರುಡ-ಶೇಷ-ರುದ್ರ ಮತ್ತು ಸಕಲ ದ್ವಾರದೇವತೆಗಳಿಗೆ ಭಕ್ತಿಪೂರ್ವಕ ಪ್ರಣಾಮಗಳು.',
        meaningEn: 'Salutations to Supreme Vishnu, Mahalakshmi, Brahma-Vayu, Gayatri-Bharati, Garuda, Sesha, Rudra, and all holy celestial guardians.'
      }
    ]
  },
  {
    id: 'step_deepa_ghanta',
    order: 3,
    stageNumber: 3,
    category: 'purvanga',
    titleKn: '೩. ದೀಪ ಪ್ರಜ್ವಲನೆ ಮತ್ತು ಘಂಟಾವಾದನ',
    titleEn: '3. Deepa Prajvalana & Ghanta Vadana',
    subtitleKn: 'ಪೂಜಾ ದೀಪ ಬೆಳಗುವುದು ಮತ್ತು ಘಂಟಾನಾದ',
    subtitleEn: 'Lighting the sacred altar lamps and invoking the bell',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 2,
    requiredMaterialsKn: ['ತುಪ್ಪದ / ಎಣ್ಣೆ ದೀಪ', 'ಹೊಂದಾಣಿಕೆಯ ಪೂಜಾ ಘಂಟೆ'],
    requiredMaterialsEn: ['Ghee/Oil Lamp', 'Pooja Bell'],
    mudras: [],
    instructionsKn: [
      'ಶುದ್ಧ ದೀಪವನ್ನು ಬೆಳಗಿಸಿ: "ಅಗ್ನಿನಾಗ್ನಿಃ ಸಮಿಧ್ಯತೇ..." ಮಂತ್ರದಿಂದ ಅಗ್ನಿ ನಾರಾಯಣನನ್ನು ಪ್ರಾರ್ಥಿಸಿ.',
      'ಘಂಟೆಯಲ್ಲಿ ಬ್ರಹ್ಮ, ಗರುಡ, ಶೇಷ, ಸರಸ್ವತಿ ಮತ್ತು ಪ್ರಜಾಪತಿಯನ್ನು ಆವಾಹಿಸಿ ಘಂಟಾನಾದ ಮಾಡಿ ದೇವತೆಗಳನ್ನು ಆಹ್ವಾನಿಸಿ ವಿಘ್ನಗಳನ್ನು ದೂರವಿರಿಸಿ.'
    ],
    instructionsEn: [
      'Light the sacred altar lamp chanting the Agni mantra to dispel all darkness and spiritual impurities.',
      'Ring the Ghanta (bell) invoking divine energies and banishing all negative obstacles.'
    ],
    mantras: [
      {
        id: 'm_deepa_1',
        titleKn: 'ದೀಪ ಪ್ರಜ್ವಲನ ಮಂತ್ರಃ',
        titleEn: 'Deepa Prajvalana Mantra',
        mantraKannada: 'ಓಂ ಅ॒ಗ್ನಿನಾ॒ಗ್ನಿಃ ಸ॒ಮಿ॑ಧ್ಯತೇ ಕ॒ವಿರ್ಗೃ॒ಹಪ॑ತಿರ್ಯು॒ವಾ ।\nಹ॒ವ್ಯ॒ವಾಡ್ ಜು॒ಹ್ವಾ᳚ಸ್ಯಃ ॥ (ಋಗ್ವೇದ ೧.೧೨.೬)\nದೀಪಂ ಪ್ರಜ್ವಾಲ್ಯ ನಮಸ್ಕರೋಮಿ ॥',
        mantraSanskrit: 'ॐ अ॒ग्निना॒ग्निः स॒मि॑ध्यते क॒विर्गृ॒हप॑तिर्यु॒वा ।\nह॒व्य॒वाड् जु॒ह्वा᳚स्यः ॥ (ऋग्वेद १.१२.६)\nदीपं प्रज्वाल्य नमस्करोमि ॥',
        mantraEnglish: 'Om Agninaagnih samidhyate kavir-gruhapatir-yuvaa |\nHavyavaad juhvaasyaha || (Rigveda 1.12.6)\nDeepam prajvaalya namaskaromi ||',
        repetitionCount: 1,
        meaningKn: 'ಅಗ್ನಿಯಿಂದ ಅಗ್ನಿಯು ಬೆಳಗಲ್ಪಡುತ್ತದೆ. ಮನೆಯ ಯಜಮಾನನಾದ, ನಿತ್ಯ ಯುವಕನಾದ, ಹವಿರ್ಭಾಗವನ್ನು ಒಯ್ಯುವ ಅಗ್ನಿ ದೇವನಿಗೆ ನಮಸ್ಕಾರ.',
        meaningEn: 'Agni is kindled by fire, the poet-seer, the young ruler of the home, the bearer of sacred oblations.'
      },
      {
        id: 'm_ghanta_1',
        titleKn: 'ಘಂಟಾವಾದನ ಶ್ಲೋಕಃ',
        titleEn: 'Ghanta Vadana Sloka',
        mantraKannada: 'ಆಗಮಾರ್ಥಂ ತು ದೇವಾನಾಂ ಗಮನಾರ್ಥಂ ತು ರಕ್ಷಸಾಮ್ ।\nಕುರು ಘಂಟಾರವಂ ತತ್ರ ದೇವತಾಹ್ವಾನಲಾಂಛನಮ್ ॥\nಘಂಟಾಯೈ ನಮಃ (ಘಂಟಾನಾದಂ ಕುರ್ಯಾತ್)',
        mantraSanskrit: 'आगमार्थं तु देवानां गमनार्थं तु रक्षसाम् ।\nकुरु घण्टारवं तत्र देवताह्वानलांछनम् ॥\nघण्टायै नमः (घण्टानादं कुर्यात्)',
        mantraEnglish: 'Aagamaartham tu devaanaam gamanaartham tu rakshasaam |\nKuru ghantaaravam tatra devataahvaanalaanchanam ||\nGhantaayai namaha (Ring bell rhythmically)',
        repetitionCount: 1,
        meaningKn: 'ದೇವತೆಗಳ ಸನ್ನಿಧಾನಕ್ಕಾಗಿ ಮತ್ತು ರಾಕ್ಷಸರ-ವಿಘ್ನಗಳ ನಿವಾರಣೆಗಾಗಿ ದೇವತಾಹ್ವಾನದ ಲಾಂಛನವಾದ ಈ ಘಂಟಾನಾದವನ್ನು ಮಾಡುತ್ತೇನೆ.',
        meaningEn: 'I sound this auspicious bell to welcome the holy deities and ward off all negative and obstructive forces.'
      }
    ],
    tipsKn: 'ದೀಪವನ್ನು ಬಾಯಿಯಿಂದ ಊದಿ ಆರಿಸಬಾರದು; ಹೂವಿನಿಂದ ಅಥವಾ ತುಳಸಿಯಿಂದ ಶಾಂತಗೊಳಿಸಬೇಕು.',
    tipsEn: 'Never blow out the lamp with breath; gently quieten with a flower tip if needed.'
  },
  {
    id: 'step_nirmalya_visarjana',
    order: 4,
    stageNumber: 4,
    category: 'purvanga',
    titleKn: '೪. ನಿರ್ಮಾಲ್ಯ ವಿಸರ್ಜನೆ (ಹಿಂದಿನ ದಿನದ ಹೂವುಗಳ ತೆಗೆಯುವಿಕೆ)',
    titleEn: '4. Nirmalya Visarjana',
    subtitleKn: 'ಹಿಂದಿನ ದಿನದ ಹೂವು-ತುಳಸಿಗಳನ್ನು ರುದ್ರದೇವರ ಪಾತ್ರೆಗೆ ವಿಸರ್ಜಿಸುವುದು',
    subtitleEn: 'Relinquishing previous day’s flowers into the vessel of Sri Rudra',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 2,
    requiredMaterialsKn: ['ನಿರ್ಮಾಲ್ಯ ಪಾತ್ರೆ (ಎಡಭಾಗದಲ್ಲಿ)', 'ಶುದ್ಧ ಜಲ'],
    requiredMaterialsEn: ['Nirmalya vessel (placed on left side)', 'Pure water'],
    mudras: [],
    instructionsKn: [
      'ದೇವರ ಎಡಭಾಗದಲ್ಲಿ ರುದ್ರದೇವರು ತಮ್ಮ ತಲೆಯ ಮೇಲೆ ಪಾತ್ರೆಯನ್ನು ಧರಿಸಿ ನಿಂತಿದ್ದಾರೆ ಎಂದು ಅನುಸಂಧಾನ ಮಾಡಿಕೊಳ್ಳಿ.',
      'ಹೆಬ್ಬೆರಳು ಮತ್ತು ತೋರುಬೆರಳಿನ (ತರ್ಜನಿ) ತುದಿಯಿಂದ ಹಿಂದಿನ ದಿನ ದೇವರ ಮೇಲಿರಿಸಿದ ಹೂವು-ತುಳಸಿಗಳನ್ನು ತೆಗೆದು ಎಡಭಾಗದ ನಿರ್ಮಾಲ್ಯ ಪಾತ್ರೆಯಲ್ಲಿ ವಿಸರ್ಜಿಸಿ.',
      '"ಅಹಂ ರುದ್ರೇಭಿರ್ವಸುಭಿಶ್ಚರಾಮಿ..." ಮಂತ್ರವನ್ನು ಪಠಿಸಿ.'
    ],
    instructionsEn: [
      'Meditate that Sri Rudra Deva stands on the left of the Lord carrying the receptacle on his head.',
      'Using the tips of thumb and index finger, gently remove yesterday’s dry flowers and Tulasi into the Nirmalya bowl on the left side.',
      'Recite the Ambhrani / Rudra mantra during this step.'
    ],
    mantras: [
      {
        id: 'm_nirmalya_1',
        titleKn: 'ನಿರ್ಮಾಲ್ಯ ವಿಸರ್ಜನ ಮಂತ್ರಃ',
        titleEn: 'Nirmalya Visarjana Mantra',
        mantraKannada: 'ಓಂ ಅ॒ಹಂ ರು॒ದ್ರೇಭಿ॒ರ್ವಸು॑ಭಿಶ್ಚರಾ॒ಮ್ಯ॒ಹಮಾ᳚ದಿ॒ತ್ಯೈರು॒ತ ವಿ॒ಶ್ವದೇ᳚ವೈಃ ।\nಅ॒ಹಂ ಮಿ॒ತ್ರಾವರು॑ಣೋ॒ಭಾ ಬಿ॑ಭ॒ರ್ಮ್ಯ॒ಹಮಿಂ᳚ದ್ರಾಗ್ನೀ॒ ಅ॒ಹಮ॒ಶ್ವಿನೋ॒ಭಾ ॥\n(ಹೂವು-ತುಳಸಿಗಳನ್ನು ಎಡಭಾಗದ ಪಾತ್ರೆಯಲ್ಲಿ ವಿಸರ್ಜಿಸಬೇಕು)',
        mantraSanskrit: 'ॐ अ॒हं रु॒द्रेभि॒र्वसु॑भिश्चरा॒म्य॒हमा᳚दि॒त्यैरु॒त वि॒श्वदे᳚वैः ।\nअ॒हं मि॒त्रावरु॑णो॒भा बि॑भ॒र्म्य॒हमिं᳚न्द्राग्नी॒ अ॒हम॒श्विनो॒भा ॥',
        mantraEnglish: 'Om Aham rudrebhir-vasubhishcharaamyahamaadityairuta vishvadevaihi |\nAham mitraavarunobhaa bibharmyahamindraagnee ahamashvinobhaa ||',
        repetitionCount: 1,
        meaningKn: 'ರುದ್ರ, ವಸುಗಳು, ಆದಿತ್ಯರು ಮತ್ತು ಸಮಸ್ತ ವಿಶ್ವದೇವತೆಗಳಲ್ಲಿ ನಾನೇ ವ್ಯಾಪಕಳಾಗಿದ್ದೇನೆ. ಸಕಲ ದೇವತೆಗಳನ್ನು ಧರಿಸಿರುವ ಮಹಾಲಕ್ಷ್ಮಿಯ ಅನುಸಂಧಾನದೊಂದಿಗೆ ನಿರ್ಮಾಲ್ಯ ವಿಸರ್ಜಿಸುತ್ತೇನೆ.',
        meaningEn: 'I move with Rudras, Vasus, Adityas, and all Vishvadevas. I support Mitra-Varuna, Indra-Agni, and the Ashvins (Meditating on Sri Lakshmi holding the cosmos).'
      }
    ]
  },
  {
    id: 'step_shankhabhisheka_prana',
    order: 5,
    stageNumber: 5,
    category: 'abhisheka',
    titleKn: '೫. ಶಂಖಾಭಿಷೇಕ ಮತ್ತು ಮುಖ್ಯಪ್ರಾಣ-ಶೇಷ-ಗರುಡ ಪೂಜೆ',
    titleEn: '5. Shankhabhisheka & Mukhyaprana Pooja',
    subtitleKn: 'ಶಂಖ, ಪ್ರಾಣದೇವರು ಮತ್ತು ಪರಿವಾರ ದೇವತೆಗಳ ಆರಾಧನೆ',
    subtitleEn: 'Conch purification & worship of Sri Mukhyaprana, Garuda & Sesha',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 3,
    requiredMaterialsKn: ['ಶಂಖ', 'ಉದ್ಧರಣೆ', 'ತುಳಸಿ ದಳ', 'ಶುದ್ಧೋದಕ'],
    requiredMaterialsEn: ['Shankha (Conch)', 'Spoon', 'Tulasi leaves', 'Pure water'],
    mudras: ['avahani', 'sthapani', 'sannidhayini', 'sannirodhini', 'sammukhi', 'avagunthana', 'prasada', 'shankha', 'tarkshya'],
    instructionsKn: [
      'ಮೊದಲು ಶ್ರೀಹರಿಯನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹನಾದಿ ಏಳು ಮುದ್ರೆಗಳನ್ನು (ಆವಾಹನೀ, ಸ್ಥಾಪನೀ, ಸಾನ್ನಿಧ್ಯ, ಸನ್ನಿರೋಧ, ಸಮ್ಮುಖ, ಅವಗುಂಠನ, ಪ್ರಸಾದ) ಕ್ರಮವಾಗಿ ತೋರಿಸಿ.',
      'ಶಂಖಕ್ಕೆ "ಹಿರಣ್ಯವರ್ಣಾಂ ಹರಿಣೀಂ..." ಮಂತ್ರದಿಂದ ಅಭಿಷೇಕ ಮಾಡಿ ಜಲವನ್ನು ವಿಸರ್ಜಿಸಿ ವಸ್ತ್ರದಿಂದ ಒರೆಸಿಡಿ.',
      'ಮುಖ್ಯಪ್ರಾಣ ದೇವರಿಗೆ "ಬಲಿತ್ಥಾ ತದ್ವಪುಷೇ..." ಮತ್ತು "ಮಾತರ್ಮೇ ಮಾತರಿಶ್ವನ್..." ಶ್ಲೋಕ ಹೇಳುತ್ತಾ ಅಭಿಷೇಕ ಮಾಡಿ.',
      'ಗರುಡ-ಶೇಷ ದೇವರಿಗೆ "ಗರುಡಾಯ ನಮಃ, ಶೇಷಾಯ ನಮಃ" ಎಂದು ಅಭಿಷೇಕ ಮಾಡಿ.'
    ],
    instructionsEn: [
      'First meditate on Sri Hari and show the seven Avahanadi mudras in order: Avahani, Sthapani, Sannidhayini, Sannirodhini, Sammukhi, Avagunthana and Prasada.',
      'Purify the conch with water chanting the Sri Sukta opening verse, wipe dry.',
      'Perform Abhisheka to Mukhyaprana vigraha with Balittha Sukta and "Matarme Matarishvan" prayer.',
      'Perform Abhisheka to Garuda and Sesha devaru with their respective mantras.'
    ],
    mantras: [
      {
        id: 'm_prana_abhisheka',
        titleKn: 'ಮುಖ್ಯಪ್ರಾಣ ಧ್ಯಾನ & ಅಭಿಷೇಕ ಮಂತ್ರಃ',
        titleEn: 'Mukhyaprana Abhisheka Mantra',
        mantraKannada: 'ಬ॒ಲಿತ್ಥಾ ತದ್ವಪು॑ಷೇ ಧಾಯಿ ದರ್ಶಿ॒ತಂ ದೇ॒ವಸ್ಯ॒ ಭರ್ಗಃ॒ ಸಹ॑ಸೋ॒ ಯತೋ ಜನಿ॑ ।\nಮಾತರ್ಮೇ ಮಾತರಿಶ್ವನ್ ಪಿತರತುಲಗುರೋ ಭ್ರಾತರಿಷ್ಟಾಪ್ತಬಂಧೋ\nಸ್ವಾಮಿನ್ ಸರ್ವಾಂತರಾತ್ಮನ್ ಅಜರಜರಯಿತರ್ಜನ್ಮಮೃತ್ಯಾಮಯಾನಾಮ್ ।\nಗೋವಿಂದೇ ದೇಹಿ ಭಕ್ತಿಂ ಭವತಿ ಚ ಭಗವನ್ನೂರ್ಜಿತಾಂ ನಿರ್ನಿಮಿತ್ತಾಂ\nನಿರ್ವ್ಯಾಜಾಂ ನಿಶ್ಚಲಾಂ ಸದ್ಗುಣಗಣಬೃಹತೀಂ ಶಾಶ್ವತೀಮಾಶು ದೇವ ॥',
        mantraSanskrit: 'ब॒लित्था तद्वपु॑षे धायि दर्शि॒तं दे॒वस्य॒ भर्गः॒ सह॑सो॒ यतो जनि॑ ।\nमातर्मे मातरिश्वन् पितर तुलगुरो भ्रातरिष्टाप्तबन्धो\nस्वामिन् सर्वान्तरात्मन् अजरजरयितर्जन्ममृत्वामयानाम् ।\nगोविन्दे देहि भक्तिं भवति च भगवन्नूर्जितां निर्निमित्तां\nनिर्व्याजां निश्चलां सद्गुणगणबृहतीं शाश्वतीमाशु देव ॥',
        mantraEnglish: 'Balitthaa tadvapushe dhaayi darshitam devasya bhargaha sahaso yato jani |\nMaatarme maatarishvan pitaratulaguro bhraatarishtaaptabandho\nSvaamin sarvaantaraatman ajarajarayitar janma mrutyaamayaanaam |\nGovinde dehi bhaktim bhavati cha bhagavannoorjitaam nirnimittaam\nNirvyaajaam nishchalaam sadgunaganabruhateem shaashvateemaashu deva ||',
        repetitionCount: 1,
        meaningKn: 'ಓ ಪವಮಾನ ಮುಖ್ಯಪ್ರಾಣನೇ! ನೀನೇ ನನ್ನ ತಾಯಿ, ತಂದೆ, ಸಾಟಿಯಿಲ್ಲದ ಗುರು, ಪ್ರಿಯ ಬಾಂಧವ. ಶ್ರೀಗೋವಿಂದನಲ್ಲಿ ನನಗೆ ನಿಷ್ಕಾಮವಾದ, ಅಚಲವಾದ, ನಿಸ್ವಾರ್ಥವಾದ ನಿತ್ಯ ಭಕ್ತಿಯನ್ನು ದಯಪಾಲಿಸು.',
        meaningEn: 'O Mukhyaprana! You are my mother, father, matchless Guru, and closest kinsman. Please bestow upon me pure, unswerving, selfless, and eternal devotion unto Sri Govinda.'
      }
    ]
  },
  {
    id: 'step_kalasha_pooja',
    order: 6,
    stageNumber: 6,
    category: 'purvanga',
    titleKn: '೬. ಕಲಶ ಪೂಜೆ (ಜಲ ಸಂಸ್ಕಾರ ಮತ್ತು ಮುದ್ರೆಗಳು)',
    titleEn: '6. Kalasha Pooja & Water Sanctification',
    subtitleKn: 'ಕಲಶದಲ್ಲಿ ಸಪ್ತನದಿಗಳ ಆವಾಹನೆ ಮತ್ತು ಧೇನು-ಶಂಖ ಮುದ್ರೆಗಳು',
    subtitleEn: 'Invoking sacred rivers and sanctifying water with Dhenu & Shankha mudras',
    modes: ['30min', 'full'],
    durationEstimateMinutes: 3,
    requiredMaterialsKn: ['೨ ಕಲಶ ಪಾತ್ರೆಗಳು', 'ಶುದ್ಧ ಜಲ', 'ತುಳಸಿ ದಳಗಳು', 'ಗಂಧ & ಅಕ್ಷತೆ'],
    requiredMaterialsEn: ['2 Kalasha pots', 'Clean water', 'Tulasi leaves', 'Gandha & Akshata'],
    mudras: ['tarkshya', 'dhenu', 'shankha', 'chakra', 'gada'],
    instructionsKn: [
      'ಎರಡು ಕಲಶಗಳಲ್ಲಿ ನೀರು ತುಂಬಿ ತುಳಸಿ ಹಾಕಿ. ನಾಲ್ಕು ದಿಕ್ಕುಗಳಲ್ಲಿ ಗಂಧ-ಅಕ್ಷತೆ ಹಚ್ಚಿ ಪೂಜಿಸಿ.',
      'ಗಂಗೆ, ಯಮುನೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ನರ್ಮದೆ, ಸಿಂಧು, ಕಾವೇರಿ ನದಿಗಳನ್ನು ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸಿ.',
      '೫ ಮಹಾಮುದ್ರೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸಿ: ಗರುಡ ಮುದ್ರಾ (ನಿರ್ವಿಷೀಕರಣ), ಧೇನು ಮುದ್ರಾ (ಅಮೃತೀಕರಣ), ಶಂಖ ಮುದ್ರಾ (ಪವಿತ್ರೀಕರಣ), ಚಕ್ರ ಮುದ್ರಾ (ಸಂರಕ್ಷಣೆ), ಗದಾ ಮುದ್ರಾ (ದಿಗ್ಬಂಧನ).'
    ],
    instructionsEn: [
      'Fill 2 Kalashas with fresh water, insert Tulasi leaves, apply Gandha-Akshata to four sides.',
      'Invoke the 7 holy rivers: Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, Kaveri.',
      'Display the 5 sanctification mudras: Garuda, Dhenu (Amritikarana), Shankha (Pavitrikarana), Chakra, and Gada.'
    ],
    mantras: [
      {
        id: 'm_kalasha_rivers',
        titleKn: 'ತೀರ್ಥಾಹ್ವಾನ ಮಂತ್ರಃ',
        titleEn: 'Sacred Rivers Invocation',
        mantraKannada: 'ಓಂ ಇ॒ಮಂ ಮೇ᳚ ಗಂಗೇ ಯಮುನೇ ಸರಸ್ವತಿ ಶು॒ತುದ್ರಿ॒ ಸ್ತೋಮಂ॑ ಸಚತಾ ಪರು॒ಷ್ಣಿಯಾ᳚ ।\nಗಂಗೇ ಚ ಯಮುನೇ ಚೈವ ಗೋದಾವರಿ ಸರಸ್ವತಿ ।\nನರ್ಮದೇ ಸಿಂಧು ಕಾವೇರಿ ಜಲೇಽಸ್ಮಿನ್ ಸನ್ನಿಧಿಂ ಕುರು ॥\nಓಂ ನಮೋ ನಾರಾಯಣಾಯ (೮ ಬಾರಿ ಜಪಿಸಿ ಕಲಶವನ್ನು ಅಭಿಮಂತ್ರಿಸುವುದು)',
        mantraSanskrit: 'ॐ इ॒मं मे᳚ गङ्गे यमुने सरस्वति शु॒तुद्रि॒ स्तोमं॑ सचता परु॒ष्णिHostा᳚ ।\nगङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥\nॐ नमो नारायणाय (८ वारं जप्त्वा अभिमन्त्रयेत्)',
        mantraEnglish: 'Om Imam me Gange Yamune Saraswati Shutudri stomam sachataa parushniyaa |\nGange cha Yamune chaiva Godaavari Saraswati |\nNarmade Sindhu Kaaveri jale-asmin sannidhim kuru ||\nOm Namo Naaraayanaaya (Chant 8 times over Kalasha)',
        repetitionCount: 8,
        meaningKn: 'ಹೇ ಗಂಗೆ, ಯಮುನೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ನರ್ಮದೆ, ಸಿಂಧು ಮತ್ತು ಕಾವೇರಿ ನದಿಗಳೇ, ಈ ಕಲಶದ ಜಲದಲ್ಲಿ ಸನ್ನಿಹಿತರಾಗಿ ಇದನ್ನು ಪರಮ ಪಾವನ ತೀರ್ಥವನ್ನಾಗಿಸಿ.',
        meaningEn: 'O sacred rivers Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, Kaveri! Please abide in this water and transform it into divine purifying nectar.'
      }
    ]
  },
  {
    id: 'step_panchamruta_abhisheka',
    order: 7,
    stageNumber: 7,
    category: 'abhisheka',
    titleKn: '೭. ಪಂಚಾಮೃತ ಅಭಿಷೇಕ (ಹಾಲು, ಮೊಸರು, ತುಪ್ಪ, ಜೇನು, ಸಕ್ಕರೆ)',
    titleEn: '7. Panchamruta Abhisheka',
    subtitleKn: 'ಶ್ರೀಹರಿಯ ೫ ರೂಪಗಳಿಗೆ ಪಂಚಾಮೃತ ಸಮರ್ಪಣೆ',
    subtitleEn: 'Five nectars abhisheka representing Govinda, Vamana, Vishnu, Madhusudana, Achyuta',
    modes: ['30min', 'full'],
    durationEstimateMinutes: 5,
    requiredMaterialsKn: ['ಹಸುವಿನ ಹಾಲು (ಮಧ್ಯ)', 'ಮೊಸರು (ಪೂರ್ವ)', 'ತುಪ್ಪ (ದಕ್ಷಿಣ)', 'ಜೇನುತುಪ್ಪ (ಪಶ್ಚಿಮ)', 'ಸಕ್ಕರೆ (ಉತ್ತರ)'],
    requiredMaterialsEn: ['Cow milk (center)', 'Curd (east)', 'Ghee (south)', 'Honey (west)', 'Sugar (north)'],
    mudras: ['dhenu', 'shankha'],
    instructionsKn: [
      'ಹಾಲು: "ಆಪ್ಯಾಯಸ್ವ ಸಮೇತು ತೇ..." (ಗೋವಿಂದ ರೂಪ ಚಿಂತನೆ) -> ಶುದ್ಧೋದಕ ಸ್ನಾನ.',
      'ಮೊಸರು: "ದಧಿಕ್ರಾವ್ಣೋ ಅಕಾರಿಷಂ..." (ವಾಮನ ರೂಪ ಚಿಂತನೆ) -> ಶುದ್ಧೋದಕ ಸ್ನಾನ.',
      'ತುಪ್ಪ: "ಘೃತಂ ಮಿಮಿಕ್ಷೇ ಘೃತಮಸ್ಯ ಯೋನಿಃ..." (ವಿಷ್ಣು ರೂಪ ಚಿಂತನೆ) -> ಶುದ್ಧೋದಕ ಸ್ನಾನ.',
      'ಜೇನುತುಪ್ಪ: "ಮಧುವಾತಾ ಋತಾಯತೇ..." (ಮಧುಸೂದನ ರೂಪ ಚಿಂತನೆ) -> ಶುದ್ಧೋದಕ ಸ್ನಾನ.',
      'ಸಕ್ಕರೆ: "ಸ್ವಾದೂಃ ಪವಸ್ವ ದಿವ್ಯಾಯ..." (ಅಚ್ಯುತ ರೂಪ ಚಿಂತನೆ) -> ಶುದ್ಧೋದಕ ಸ್ನಾನ.'
    ],
    instructionsEn: [
      'Milk: "Aapyayasva sametu te..." (Govinda roopa) -> Clean water bath.',
      'Curd: "Dadhikravno akaarisham..." (Vamana roopa) -> Clean water bath.',
      'Ghee: "Ghrutam mimikshe..." (Vishnu roopa) -> Clean water bath.',
      'Honey: "Madhu vaata rutaayate..." (Madhusudana roopa) -> Clean water bath.',
      'Sugar: "Svaaduh pavasva..." (Achyuta roopa) -> Clean water bath.'
    ],
    mantras: [
      {
        id: 'm_panchamruta_1',
        titleKn: 'ಪಂಚಾಮೃತ ಸಮರ್ಪಣ ಶ್ಲೋಕಃ',
        titleEn: 'Panchamruta Devata Dhyana',
        mantraKannada: 'ಮಧ್ಯೇ ಕ್ಷೀರೇ ಗೋವಿಂದಂ, ಪೂರ್ವೇ ದಧ್ನಿ ವಾಮನಂ ।\nದಕ್ಷಿಣೇ ಆಜ್ಯೇ ವಿಷ್ಣುಂ, ಪಶ್ಚಿಮೇ ಮಧುನಿ ಮಧುಸೂದನಂ ।\nಉತ್ತರೇ ಶರ್ಕರಾಯಾಂ ಅಚ್ಯುತಂ ಸ್ಮರೇತ್ ॥\nಶ್ರೀವಿಷ್ಣುಪೂಜಾಂಗ ಪಂಚಾಮೃತಪೂಜಾಂ ಸಮರ್ಪಯಾಮಿ ॥',
        mantraSanskrit: 'मध्ये क्षीरे गोविन्दं, पूर्वे दध्नि वामनं ।\nदक्षिणे आज्ये विष्णुं, पश्चिमे मधुनि मधुसूदनं ।\nउत्तरे शर्करायां अच्युतं स्मरेत् ॥\nश्रीविष्णुपूजांग पञ्चामृतपूजां समर्पयामि ॥',
        mantraEnglish: 'Madhye ksheere Govindam, poorve dadhni Vaamanam |\nDakshine aajye Vishnum, pashchime madhuni Madhusoodanam |\nUttare sharkaraayaam Achyutam smaret ||\nSri Vishnu-poojaanga panchaamruta-poojaam samarpayaami ||',
        repetitionCount: 1,
        meaningKn: 'ಹಾಲಿನಲ್ಲಿ ಗೋವಿಂದ, ಮೊಸರಿನಲ್ಲಿ ವಾಮನ, ತುಪ್ಪದಲ್ಲಿ ವಿಷ್ಣು, ಜೇನಿನಲ್ಲಿ ಮಧುಸೂದನ, ಸಕ್ಕರೆಯಲ್ಲಿ ಅಚ್ಯುತನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ ಪಂಚಾಮೃತವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
        meaningEn: 'Meditating on Govinda in milk, Vamana in curd, Vishnu in ghee, Madhusudana in honey, and Achyuta in sugar, I offer the sacred Panchamruta.'
      }
    ],
    ekadashiDifferenceKn: 'ಏಕಾದಶಿಯ ದಿನ ಪಂಚಾಮೃತ ಅಭಿಷೇಕದ ಬದಲಿಗೆ ಕೇವಲ ಶುದ್ಧೋದಕ ಅಭಿಷೇಕ ಮಾಡಬೇಕು.',
    ekadashiDifferenceEn: 'On Ekadashi, perform only pure water (Shuddhodaka) Abhisheka.'
  },
  {
    id: 'step_shuddhabhisheka',
    order: 8,
    stageNumber: 8,
    category: 'abhisheka',
    titleKn: '೮. ಶುದ್ಧಾಭಿಷೇಕ & ವೇದಸೂಕ್ತ ಪಠಣ',
    titleEn: '8. Shuddhabhisheka (Vedic Suktas)',
    subtitleKn: 'ಶಂಖದಿಂದ ಪುರುಷಸೂಕ್ತ, ಶ್ರೀಸೂಕ್ತ ಮತ್ತು ಮನ್ಯುಸೂಕ್ತಗಳೊಂದಿಗೆ ಮಹಾಸ್ನಾನ',
    subtitleEn: 'Continuous stream abhisheka from conch with Purusha, Sri and Manyu Suktas',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 4,
    requiredMaterialsKn: ['ಶಂಖ', 'ಕಲಶದ ಪವಿತ್ರ ಜಲ', 'ಘಂಟೆ', 'ಒರೆಸುವ ಮಡಿ ವಸ್ತ್ರ'],
    requiredMaterialsEn: ['Pooja Shankha', 'Consecrated Kalasha water', 'Bell', 'Drying cloth'],
    mudras: [],
    instructionsKn: [
      'ಘಂಟಾನಾದ ಮಾಡುತ್ತಾ ಶಂಖದಲ್ಲಿ ಕಲಶೋದಕವನ್ನು ತುಂಬಿಕೊಂಡು ಸಾಲಿಗ್ರಾಮ ಮತ್ತು ಪ್ರತಿಮೆಗಳಿಗೆ ನಿರಂತರ ಧಾರೆಯಾಗಿ ಅಭಿಷೇಕ ಮಾಡಿ.',
      '೧೦ ನಿಮಿಷದ ಮೋಡ್‌ನಲ್ಲಿ ಪುರುಷಸೂಕ್ತದ ಮೊದಲ ೧ ಮಂತ್ರ, ೩೦ ನಿಮಿಷದ ಮೋಡ್‌ನಲ್ಲಿ ಪೂರ್ಣ ಪುರುಷಸೂಕ್ತ & ಶ್ರೀಸೂಕ್ತ ಪಠಿಸಿ.',
      'ಅಭಿಷೇಕದ ನಂತರ ನಿರ್ಮಾಲ್ಯ ಜಲವನ್ನು ತೀರ್ಥಕ್ಕಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿ, ಪ್ರತಿಮೆಗಳನ್ನು ಮಡಿ ವಸ್ತ್ರದಿಂದ ಮೃದುವಾಗಿ ಒರೆಸಿ ಪೀಠದಲ್ಲಿರಿಸಿ.'
    ],
    instructionsEn: [
      'While softly ringing the bell, pour continuous water from the conch over Saligrama and deities.',
      'In 10-minute mode, chant verse 1 of Purusha Sukta; in 30-minute/full mode chant Purusha Sukta & Sri Sukta completely.',
      'Gently dry the deities with clean cloth and place them gracefully on the consecrated Simhasana / Peetha.'
    ],
    mantras: [
      {
        id: 'm_shuddhabhisheka_1',
        titleKn: 'ಶುದ್ಧಾಭಿಷೇಕ ಪುರುಷಸೂಕ್ತ ಮಂತ್ರಃ',
        titleEn: 'Shuddhabhisheka Purusha Sukta',
        mantraKannada: 'ಓಂ ಸ॒ಹಸ್ರ॑ಶೀರ್ಷಾ॒ ಪುರು॑ಷಃ ಸ॒ಹ॒ಸ್ರಾ॒ಕ್ಷಃ ಸ॒ಹಸ್ರ॑ಪಾತ್ ।\nಸ ಭೂಮಿಂ॑ ವಿ॒ಶ್ವತೋ॑ ವೃ॒ತ್ವಾತ್ಯ॑ತಿಷ್ಠದ್ದಶಾಂಗು॒ಲಮ್ ॥\nಓಂ ನಮೋ ನಾರಾಯಣಾಯ ನಮಃ । ಸಾಲಿಗ್ರಾಮ-ಪ್ರತಿಮಾಭ್ಯೋ ಶುದ್ಧಾಭಿಷೇಕಸ್ನಾನಂ ಸಮರ್ಪಯಾಮಿ ॥',
        mantraSanskrit: 'ॐ स॒हस्र॑शीर्षा॒ पुरु॑षः स॒ह॒स्रा॒क्षः स॒हस्र॑पात् ।\nस भूमिं॑ वि॒श्वतो॑ वृ॒त्वात्य॑तिष्ठद्दशांगु॒लम् ॥\nॐ नमो नारायणाय नमः । सालिग्राम-प्रतिमाभ्यो शुद्धाभिषेकस्नानं समर्पयामि ॥',
        mantraEnglish: 'Om Sahasrasheershaa Purushaha Sahasraakshaha Sahasrapaat |\nSa bhoomim vishvato vrutvaatyatishthad-dashaangulam ||\nOm Namo Naaraayanaaya Namaha | Saligrama-pratimaabhyo shuddhabhisheka-snaanam samarpayaami ||',
        repetitionCount: 1,
        meaningKn: 'ಸಹಸ್ರ ಶಿರಸ್ಸುಗಳುಳ್ಳ ಭಗವಂತನಿಗೆ ಕಲಶದ ಪವಿತ್ರ ಶಂಖೋದಕದಿಂದ ಮಹಾ ಶುದ್ಧಾಭಿಷೇಕವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
        meaningEn: 'I offer this supreme purifying conch abhisheka to the Thousand-headed Cosmic Lord Sri Narayana.'
      }
    ]
  },
  {
    id: 'step_vastra_yajnopavita',
    order: 9,
    stageNumber: 9,
    category: 'archana',
    titleKn: '೯. ವಸ್ತ್ರ, ಉಪವೀತ & ವೈಜಯಂತೀ ಮಾಲಾ ಸಮರ್ಪಣೆ',
    titleEn: '9. Vastra, Yajnopaveeta & Ornaments',
    subtitleKn: 'ಮಡಿ ವಸ್ತ್ರ, ಜನಿವಾರ ಮತ್ತು ಆಭರಣಗಳ ಸಮರ್ಪಣೆ',
    subtitleEn: 'Adorning with sacred cloth, holy thread and divine garland',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 2,
    requiredMaterialsKn: ['ಹತ್ತಿ ವಸ್ತ್ರ / ತುಳಸಿ ದಳಗಳು', 'ಯಜ್ಞೋಪವೀತ (ಜನಿವಾರ) / ತುಳಸಿ', 'ಕೌಸ್ತುಭ-ವೈಜಯಂತಿ ಚಿಂತನೆ'],
    requiredMaterialsEn: ['Sacred cloth / Tulasi', 'Yajnopavita thread / Tulasi', 'Koustubha meditation'],
    mudras: [],
    instructionsKn: [
      '"ಯುವಂ ವಸ್ತ್ರಾಣಿ..." ಮಂತ್ರದಿಂದ ದೇವರಿಗೆ ಶುದ್ಧ ಮಡಿ ವಸ್ತ್ರವನ್ನು (ಅಥವಾ ವಸ್ತ್ರದ ಪ್ರತಿನಿಧಿಯಾಗಿ ತುಳಸಿ ದಳ) ಸಮರ್ಪಿಸಿ.',
      '"ಯಜ್ಞೋಪವೀತಂ ಪರಮಂ ಪವಿತ್ರಂ..." ಮಂತ್ರದಿಂದ ಯಜ್ಞೋಪವೀತವನ್ನು ಸಮರ್ಪಿಸಿ.',
      'ಲಕ್ಷ್ಮೀದೇವಿಯ ವೈಜಯಂತೀ ಮಾಲೆ ಮತ್ತು ಬ್ರಹ್ಮದೇವರ ಕೌಸ್ತುಭ ಮಣಿಯನ್ನು ದೇವರಿಗೆ ಮಾನಸಿಕವಾಗಿ ಸಮರ್ಪಿಸಿ ತುಳಸಿ ಇಡಿ.'
    ],
    instructionsEn: [
      'Offer sacred madi vastra (or Tulasi leaf as representative) reciting the Vedic Vastra mantra.',
      'Offer Yajnopavita (sacred thread) reciting "Yajnopaveetam Paramam Pavitram...".',
      'Mentally adorn the Lord’s chest with the celestial Vaijayanti garland and dazzling Koustubha gem.'
    ],
    mantras: [
      {
        id: 'm_yajnopavita_1',
        titleKn: 'ಯಜ್ಞೋಪವೀತ ಸಮರ್ಪಣ ಮಂತ್ರಃ',
        titleEn: 'Yajnopavita Samarpanam',
        mantraKannada: 'ಯ॒ಜ್ಞೋ॒ಪ॒ವೀತಂ॑ ಪoutputರ॒ಮಂ ಪ॒ವಿತ್ರಂ॑ ಪ್ರ॒ಜಾಪ॑ತೇ॒ರ್ಯತ್ಸ॑ಹ॒ಜಂ ಪು॒ರಸ್ತಾ᳚ತ್ ।\nಆಯು॑ಷ್ಯಮಗ್ರ್ಯಂ॑ ಪ್ರ॒ತಿಮುಂ॑ಚ ಶು॒ಭ್ರಂ ಯ॑ಜ್ಞೋಪ॒ವೀತಂ॒ ಬಲ॑ಮಸ್ತು॒ ತೇಜಃ॑ ॥\nಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣಾಭ್ಯಾಂ ನಮಃ ಯಜ್ಞೋಪವೀತಂ ಸಮರ್ಪಯಾಮಿ ॥',
        mantraSanskrit: 'य॒ज्ञो॒प॒वीतं॑ परमं प॒वित्रं॑ प्र॒जाप॑ते॒र्यत्स॑ह॒जं पु॒रस्ता᳚त् ।\nआयु॑ष्यमग्र्यं॑ प्र॒तिमुं॑च शु॒भ्रं य॑ज्ञोप॒वीतं॒ बल॑मस्तु॒ तेजः॑ ॥\nश्रीलक्ष्मीनारायणाभ्यां नमः यज्ञोपवीतं समर्पयामि ॥',
        mantraEnglish: 'Yajnopaveetam paramam pavitram prajaapateryat-sahajam purastaat |\nAayushyamagryam pratimuncha shubhram yajnopaveetam balamastu tejaha ||\nSri Lakshmi-Narayanaabhyaam namaha Yajnopaveetam samarpayaami ||',
        repetitionCount: 1,
        meaningKn: 'ಪರಮ ಪವಿತ್ರವಾದ, ಬ್ರಹ್ಮನಿಂದ ಮೊದಲು ಉತ್ಪನ್ನವಾದ, ಆಯುಸ್ಸು ಮತ್ತು ತೇಜಸ್ಸನ್ನು ವರ್ಧಿಸುವ ಶುಭ್ರ ಯಜ್ಞೋಪವೀತವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
        meaningEn: 'I offer this most sacred thread, co-created with Prajapati, conferring spiritual vitality, longevity, and radiance.'
      }
    ]
  },
  {
    id: 'step_gandha_tulasi_archana',
    order: 10,
    stageNumber: 10,
    category: 'archana',
    titleKn: '೧೦. ಗಂಧಲೇಪನ & ತುಳಸೀ-ಪುಷ್ಪಾರ್ಚನೆ',
    titleEn: '10. Gandha & Tulasi-Pushpa Archana',
    subtitleKn: 'ಶ್ರೀಗಂಧ ಲೇಪನ ಮತ್ತು ಕೇಶವಾದಿ ೨೪ ನಾಮಗಳಿಂದ ತುಳಸಿ ಅರ್ಚನೆ',
    subtitleEn: 'Anointing with pure sandalwood and Tulasi archana with 24 Keshava Namas',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 4,
    requiredMaterialsKn: ['ತೇವವಾದ ಶ್ರೀಗಂಧದ ಉಂಡೆ', 'ಹಸಿ ತುಳಸೀ ದಳಗಳು & ಮಂಜರಿ', 'ಶುದ್ಧ ಪುಷ್ಪಗಳು'],
    requiredMaterialsEn: ['Moist Sandalwood paste', 'Fresh Tulasi leaves & manjari', 'Fragrant flowers'],
    mudras: [],
    instructionsKn: [
      'ಗಂಧದ ಉಂಡೆಯನ್ನು ಶಂಖಕ್ಕೆ ಸ್ಪರ್ಶಿಸಿ ತುಳಸಿ ಸಹಿತವಾಗಿ ಸಾಲಿಗ್ರಾಮ ಮತ್ತು ಪ್ರತಿಮೆಗಳಿಗೆ ಲೇಪನ ಮಾಡಿ.',
      'ಕೇಶವಾದಿ ೨೪ ನಾಮಗಳನ್ನು ಹೇಳುತ್ತಾ ಪ್ರತಿ ನಾಮಕ್ಕೂ ಒಂದೊಂದು ತುಳಸಿ ದಳ ಮತ್ತು ಹೂವನ್ನು ಭಕ್ತಿಯಿಂದ ಅರ್ಪಿಸಿ:',
      '೧. ಓಂ ಕೇಶವಾಯ ನಮಃ  ೨. ಓಂ ನಾರಾಯಣಾಯ ನಮಃ  ೩. ಓಂ ಮಾಧವಾಯ ನಮಃ  ೪. ಓಂ ಗೋವಿಂದಾಯ ನಮಃ ... ೨೪. ಓಂ ಶ್ರೀಕೃಷ್ಣಾಯ ನಮಃ.'
    ],
    instructionsEn: [
      'Touch the moist sandalwood paste to the conch and apply lovingly with Tulasi onto Saligrama and deities.',
      'Perform Archana offering a Tulasi leaf and fragrant flower with each of the 24 sacred names of Vishnu (Keshava to Sri Krishna).'
    ],
    mantras: [
      {
        id: 'm_gandha_1',
        titleKn: 'ಗಂಧ ಸಮರ್ಪಣ ಮಂತ್ರಃ',
        titleEn: 'Gandha Samarpanam',
        mantraKannada: 'ಗಂ॒ಧ॒ದ್ವಾರಾಂ ದು॑ರಾಧ॒ರ್ಷಾಂ ನಿ॒ತ್ಯಪು॑ಷ್ಟಾಂ ಕರೀ॒ಷಿಣೀ᳚ಮ್ ।\nಈ॒ಶ್ವರೀಂ᳚ ಸರ್ವ॑ಭೂತಾ॒ನಾಂ ತಾಮಿ॒ಹೋಪ॑ಹ್ವಯೇ॒ ಶ್ರಿಯಮ್ ॥\nಶ್ರೀಖಂಡಂ ಚಂದನಂ ದಿವ್ಯಂ ನಾನಾಗಂಧಮನೋಹರಮ್ ।\nವಿಲೇಪನಂ ಸುರಶ್ರೇಷ್ಠ ಪ್ರೀತ್ಯರ್ಥಂ ಪ್ರತಿಗೃಹ್ಯತಾಮ್ ॥',
        mantraSanskrit: 'ग॒न्ध॒द्वारां दु॑राध॒र्षां नि॒त्यपु॑ष्टां करी॒षिणी᳚म् ।\nई॒श्वरीं᳚ सर्व॑भूता॒नां तामि॒होप॑ह्वये॒ श्रियम् ॥\nश्रीखण्डं चन्दनं दिव्यं नानागन्धमनोहरम् ।\nविलेपनं सुरश्रेष्ठ प्रीत्यर्थं प्रतिगृह्यताम् ॥',
        mantraEnglish: 'Gandhadvaaraam duraadharshaam nitya-pushtaam kareeshineem |\nEeshvareem sarva-bhootaanaam taamihopahvaye shriyam ||\nShreekhandam chandanam divyam naanaagandhamanoharam |\nVilepanam surashreshtha preetyartham pratigruhyataam ||',
        repetitionCount: 1,
        meaningKn: 'ದಿವ್ಯ ಸುಗಂಧಭರಿತವಾದ, ಮನೋಹರವಾದ ಶ್ರೀಖಂಡ ಚಂದನ ಲೇಪನವನ್ನು ಶ್ರೀಹರಿಯ ಪ್ರೀತಿಗಾಗಿ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
        meaningEn: 'I offer this fragrant, soothing celestial sandalwood paste for the supreme pleasure of Lord Sri Hari.'
      },
      {
        id: 'm_keshavadi_24',
        titleKn: 'ಕೇಶವಾದಿ ೨೪ ನಾಮಾವಳಿ ಅರ್ಚನಾ',
        titleEn: '24 Keshava Namavali Archana',
        mantraKannada: 'ಓಂ ಕೇಶವಾಯ ನಮಃ । ಓಂ ನಾರಾಯಣಾಯ ನಮಃ । ಓಂ ಮಾಧವಾಯ ನಮಃ । ಓಂ ಗೋವಿಂದಾಯ ನಮಃ । ಓಂ ವಿಷ್ಣವೇ ನಮಃ । ಓಂ ಮಧುಸೂದನಾಯ ನಮಃ । ಓಂ ತ್ರಿವಿಕ್ರಮಾಯ ನಮಃ । ಓಂ ವಾಮನಾಯ ನಮಃ । ಓಂ ಶ್ರೀಧರಾಯ ನಮಃ । ಓಂ ಹೃಷೀಕೇಶಾಯ ನಮಃ । ಓಂ ಪದ್ಮನಾಭಾಯ ನಮಃ । ಓಂ ದಾಮೋದರಾಯ ನಮಃ । ಓಂ ಸಂಕರ್ಷಣಾಯ ನಮಃ । ಓಂ ವಾಸುದೇವಾಯ ನಮಃ । ಓಂ ಪ್ರದ್ಯುಮ್ನಾಯ ನಮಃ । ಓಂ ಅನಿರುದ್ಧಾಯ ನಮಃ । ಓಂ ಪುರುಷೋತ್ತಮಾಯ ನಮಃ । ಓಂ ಅಧೋಕ್ಷಜಾಯ ನಮಃ । ಓಂ ನಾರಸಿಂಹಾಯ ನಮಃ । ಓಂ ಅಚ್ಯುತಾಯ ನಮಃ । ಓಂ ಜನಾರ್ದನಾಯ ನಮಃ । ಓಂ ಉಪೇಂದ್ರಾಯ ನಮಃ । ಓಂ ಹರಯೇ ನಮಃ । ಓಂ ಶ್ರೀಕೃಷ್ಣಾಯ ನಮಃ ॥',
        mantraSanskrit: 'ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः । ॐ गोविन्दाय नमः । ॐ विष्णवे नमः । ॐ मधुसूदनाय नमः । ॐ त्रिविक्रमाय नमः । ॐ वामनाय नमः । ॐ श्रीधराय नमः । ॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः । ॐ दामोदराय नमः । ॐ संकर्षणाय नमः । ॐ वासुदेवाय नमः । ॐ प्रद्युम्नाय नमः । ॐ अनिरुद्धाय नमः । ॐ पुरुषोत्तमाय नमः । ॐ अधोक्षजाय नमः । ॐ नारसिंहाय नमः । ॐ अच्युताय नमः । ॐ जनार्दनाय नमः । ॐ उपेन्द्राय नमः । ॐ हरये नमः । ॐ श्रीकृष्णाय नमः ॥',
        mantraEnglish: 'Om Keshavaaya Namaha | Om Naaraayanaaya Namaha | Om Maadhavaaya Namaha | Om Govindaaya Namaha | Om Vishnave Namaha | Om Madhusoodanaaya Namaha | Om Trivikramaaya Namaha | Om Vaamanaaya Namaha | Om Shreedharaaya Namaha | Om Hrusheekeshaaya Namaha | Om Padmanaabhaaya Namaha | Om Daamodaraaya Namaha | Om Sankarshanaaya Namaha | Om Vaasudevaaya Namaha | Om Pradyumnaaya Namaha | Om Aniruddhaaya Namaha | Om Purushottamaaya Namaha | Om Adhokshajaaya Namaha | Om Naarasimhaaya Namaha | Om Achyutaaya Namaha | Om Janaardanaaya Namaha | Om Upendraaya Namaha | Om Haraye Namaha | Om Sri Krishnaaya Namaha ||',
        repetitionCount: 24,
        meaningKn: 'ಶ್ರೀಹರಿಯ ಚತುರ್ವಿಂಶತಿ ರೂಪಗಳಿಗೆ ತುಳಸೀ-ಪುಷ್ಪಗಳಿಂದ ಅನಂತ ಪ್ರಣಾಮಗಳು.',
        meaningEn: 'Reverent Tulasi offerings to the twenty-four primary cosmic manifestations of Lord Vishnu.'
      }
    ]
  },
  {
    id: 'step_dhoopa_deepa',
    order: 11,
    stageNumber: 11,
    category: 'archana',
    titleKn: '೧೧. ಧೂಪ ಮತ್ತು ದೀಪಾರತಿ ಸಮರ್ಪಣೆ',
    titleEn: '11. Dhoopa & Deepa Arati',
    subtitleKn: 'ದಶಾಂಗ ಧೂಪ ಮತ್ತು ತ್ರಿವರ್ತಿ ದೀಪಾರತಿ',
    subtitleEn: 'Aromatic incense offering & triple-wick auspicious lamp arati',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 2,
    requiredMaterialsKn: ['ದಶಾಂಗ ಧೂಪ / ಅಗರಬತ್ತಿ', 'ಆರತಿ ದೀಪ (೩ ಬತ್ತಿಗಳು)', 'ಘಂಟೆ', 'ಬೀಸಣಿಗೆ'],
    requiredMaterialsEn: ['Natural incense / Dhoopa', 'Arati lamp (3 wicks)', 'Bell', 'Small fan'],
    mudras: [],
    instructionsKn: [
      'ಘಂಟಾನಾದ ಮಾಡುತ್ತಾ "ವನಸ್ಪತ್ಯುದ್ಭವೋ ದಿವ್ಯೋ..." ಶ್ಲೋಕದಿಂದ ದೇವರಿಗೆ ಧೂಪವನ್ನು ಬೀಸಿ ಸಮರ್ಪಿಸಿ.',
      'ನಂತರ ಮೂರು ಬತ್ತಿಗಳ ತುಪ್ಪದ ದೀಪದಿಂದ "ಸಾಜ್ಯಂ ತ್ರಿವರ್ತಿಸಂಯುಕ್ತಂ..." ಶ್ಲೋಕ ಹೇಳುತ್ತಾ ಮೂರು ಬಾರಿ ಆರತಿ ಬೆಳಗಿ.'
    ],
    instructionsEn: [
      'Waft fragrant Dhoopa towards the Lord with a small fan while ringing the bell.',
      'Wave the triple-wick ghee lamp clockwise three times before the deity.'
    ],
    mantras: [
      {
        id: 'm_dhoopa_1',
        titleKn: 'ಧೂಪ-ದೀಪ ಶ್ಲೋಕೌ',
        titleEn: 'Dhoopa & Deepa Slokas',
        mantraKannada: 'ವನಸ್ಪತ್ಯುದ್ಭವೋ ದಿವ್ಯೋ ಗಂಧಾಢ್ಯೋ ಗಂಧ ಉತ್ತಮಃ ।\nಆಘ್ರೇಯಃ ಸರ್ವದೇವಾನಾಂ ಧೂಪೋಽಯಂ ಪ್ರತಿಗೃಹ್ಯತಾಮ್ ॥\nಸಾಜ್ಯಂ ತ್ರಿವರ್ತಿಸಂಯುಕ್ತಂ ವಹ್ನಿನಾ ಯೋಜಿತಂ ಮಯಾ ।\nದೀಪಂ ಗೃಹಾಣ ದೇವೇಶ ತ್ರೈಲೋಕ್ಯತಿಮಿರಾಪಹ ॥\nಧೂಪಂ ದೀಪಂ ಚ ದರ್ಶಯಾಮಿ ॥',
        mantraSanskrit: 'वनस्पत्युद्भवो दिव्यो गन्धाढ्यो गन्ध उत्तमः ।\nआघ्रेयः सर्वदेवानां धूपोऽयं प्रतिगृह्यताम् ॥\nसाज्यं त्रिवर्तिसंयुक्तं वह्निना योजितं मया ।\nदीपं गृहाण देवेश त्रैलोक्यतिमिरापह ॥\nधूपं दीपं च दर्शयामि ॥',
        mantraEnglish: 'Vanaspatyudbhavo divyo gandhaadhyo gandha uttamaha |\nAaghreyah sarvadevaanaam dhoopo-ayam pratigruhyataam ||\nSaajyam trivartisamyuktam vahninaa yojitam mayaa |\nDeepam gruhaana devesha trailokyatimiraapaha ||\nDhoopam deepam cha darshayaami ||',
        repetitionCount: 1,
        meaningKn: 'ವೃಕ್ಷ-ಗಿಡಮೂಲಿಕೆಗಳಿಂದ ಉತ್ಪನ್ನವಾದ ಉತ್ತಮ ಪರಿಮಳದ ಧೂಪವನ್ನು ಮತ್ತು ಮೂರು ಲೋಕಗಳ ಕತ್ತಲನ್ನು ಓಡಿಸುವ ತ್ರಿವರ್ತಿ ದೀಪಾರತಿಯನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
        meaningEn: 'I offer this fragrant herbal incense and the radiant triple-wick ghee lamp that dispels darkness across the three worlds.'
      }
    ]
  },
  {
    id: 'step_maha_naivedya',
    order: 12,
    stageNumber: 12,
    category: 'naivedya',
    titleKn: '೧೨. ಮಹಾ ನೈವೇದ್ಯ, ಪರಿಷೇಚನ ಮತ್ತು ಮುದ್ರಾ ಪ್ರದರ್ಶನ',
    titleEn: '12. Maha Naivedya & Parishechana',
    subtitleKn: 'ಮಂಡಲ ರಚನೆ, ಅಮೃತೀಕರಣ ಮುದ್ರೆಗಳು ಮತ್ತು ಪ್ರಾಣಾಹುತಿ ಸಮರ್ಪಣೆ',
    subtitleEn: 'Mandala drawing, 6 sanctifying mudras and Pancha-Prana oblations',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 5,
    requiredMaterialsKn: ['ನೈವೇದ್ಯ ಪಾತ್ರೆ (ಅನ್ನ / ಪಾಯಸ / ಫಲ / ಕಲ್ಲುಸಕ್ಕರೆ)', 'ತುಳಸಿ ದಳಗಳು', 'ಶಂಖೋದಕ & ಉದ್ಧರಣೆ'],
    requiredMaterialsEn: ['Naivedya plate (Food/Fruits/Candy)', 'Tulasi leaves', 'Water & Spoon'],
    mudras: ['dhenu', 'shankha', 'chakra', 'gada', 'meru', 'chandra'],
    instructionsKn: [
      'ದೇವರ ಎದುರು ನೀರಿನಿಂದ ಚತುರಸ್ರ ಮಂಡಲ ರಚಿಸಿ ನೈವೇದ್ಯ ಪಾತ್ರೆಯನ್ನು ಇರಿಸಿ, ಪ್ರತಿ ಪದಾರ್ಥದ ಮೇಲೂ ತುಳಸೀ ದಳಗಳನ್ನು ಇಡಿ.',
      'ಗಾಯತ್ರಿ ಮಂತ್ರ ಹೇಳಿ ಪ್ರೋಕ್ಷಣೆ ಮಾಡಿ, "ಸತ್ಯಂ ತ್ವರ್ತೇನ ಪರಿಷಿಂಚಾಮಿ" ಎಂದು ನೈವೇದ್ಯದ ಸುತ್ತ ನೀರು ಸುತ್ತಿ.',
      '೬ ಮುದ್ರೆಗಳನ್ನು ತೋರಿಸಿ: ಧೇನು (ಅಮೃತೀಕರಣ), ಶಂಖ (ಪವಿತ್ರೀಕರಣ), ಚಕ್ರ (ರಕ್ಷಣೆ), ಗದಾ (ದಿಗ್ಬಂಧನ), ಮೇರು (ವಿಪುಲತೆ), ಚಂದ್ರ (ಶೀತಲತೆ).',
      '"ಓಂ ನಮೋ ನಾರಾಯಣಾಯ" ೮ ಬಾರಿ ಜಪಿಸಿ; ಪ್ರಾಣಾಯ ಸ್ವಾಹಾ... ೫ ಪ್ರಾಣಾಹುತಿ ಮಂತ್ರಗಳಿಂದ ಶಂಖೋದಕವನ್ನು ಪಾತ್ರೆಗೆ ಬಿಡಿ.'
    ],
    instructionsEn: [
      'Draw a square water mandala on the floor, place the naivedya plate, and put Tulasi leaves on every food item.',
      'Encircle water chanting "Satyam tvartena parishinchaami".',
      'Display the 6 sacred mudras: Dhenu (Nectar), Shankha (Purity), Chakra (Shield), Gada (Boundary), Meru (Abundance), Chandra (Cooling).',
      'Chant "Om Namo Narayanaya" 8 times, and offer the 5 Prana oblations: Pranaya Svaha, Apanaya Svaha, Vyanaya Svaha, Udanaya Svaha, Samanaya Svaha.'
    ],
    mantras: [
      {
        id: 'm_naivedya_prana',
        titleKn: 'ಪ್ರಾಣಾಹುತಿ ಮಂತ್ರಾಃ',
        titleEn: 'Pancha-Prana Naivedya Mantras',
        mantraKannada: 'ಅಮೃತೋಪಸ್ತರಣಮಸಿ ಸ್ವಾಹಾ ।\nಓಂ ಪ್ರಾಣಾಯ ಸ್ವಾಹಾ (ಶ್ರೀನಾರಾಯಣಾಯ) ।\nಓಂ ಅಪಾನಾಯ ಸ್ವಾಹಾ (ಶ್ರೀವಾಸುದೇವಾಯ) ।\nಓಂ ವ್ಯಾನಾಯ ಸ್ವಾಹಾ (ಶ್ರೀಸಂಕರ್ಷಣಾಯ) ।\nಓಂ ಉದಾನಾಯ ಸ್ವಾಹಾ (ಶ್ರೀಪ್ರದ್ಯುಮ್ನಾಯ) ।\nಓಂ ಸಮಾನಾಯ ಸ್ವಾಹಾ (ಶ್ರೀಅನಿರುದ್ಧಾಯ) ।\nಓಂ ಬ್ರಹ್ಮಣೇ ಸ್ವಾಹಾ । ಅಮೃತಾಪಿಧಾನಮಸಿ ಸ್ವಾಹಾ ॥',
        mantraSanskrit: 'अमृतोपस्तरणमसि स्वाहा ।\nॐ प्राणाय स्वाहा (श्रीनारायणाय) ।\nॐ अपानाय स्वाहा (श्रीवासुदेवाय) ।\nॐ व्यानाय स्वाहा (श्रीसंकर्षणाय) ।\nॐ उदानाय स्वाहा (श्रीप्रद्युम्नाय) ।\nॐ समानाय स्वाहा (श्रीअनिरुद्धाय) ।\nॐ ब्रह्मणे स्वाहा । अमृतापिधानमसि स्वाहा ॥',
        mantraEnglish: 'Amrutopastaranamasi svaahaa |\nOm Praanaaya Svaahaa (Sri Narayanaaya) |\nOm Apaanaaya Svaahaa (Sri Vaasudevaaya) |\nOm Vyaanaaya Svaahaa (Sri Sankarshanaaya) |\nOm Udaanaaya Svaahaa (Sri Pradyumnaaya) |\nOm Samaanaaya Svaahaa (Sri Aniruddhaaya) |\nOm Brahmane Svaahaa | Amrutaapidhaanamasi svaahaa ||',
        repetitionCount: 1,
        meaningKn: 'ಅಮೃತಸ್ವರೂಪಿಯಾದ ಅನ್ನವನ್ನು ಶ್ರೀಹರಿಯ ೫ ಪ್ರಾಣರೂಪಗಳಾದ ನಾರಾಯಣ, ವಾಸುದೇವ, ಸಂಕರ್ಷಣ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧರಿಗೆ ಭಕ್ತಿಯಿಂದ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
        meaningEn: 'I offer this sanctified nectar-food to the five indwelling Prana aspects of Sri Hari: Narayana, Vasudeva, Sankarshana, Pradyumna, and Aniruddha.'
      }
    ],
    ekadashiDifferenceKn: 'ಏಕಾದಶಿಯಂದು ಅನ್ನ-ಪಾಯಸಗಳ ನೈವೇದ್ಯ ಮಾಡಬಾರದು! ಕೇವಲ ಹಣ್ಣುಗಳು, ಒಣದ್ರಾಕ್ಷಿ ಮತ್ತು ಕಲ್ಲುಸಕ್ಕರೆ ಮಾತ್ರ ನೈವೇದ್ಯ ಮಾಡಬೇಕು.',
    ekadashiDifferenceEn: 'On Ekadashi, do NOT offer cooked grains or rice! Offer strictly fruits, raisins, and rock sugar.'
  },
  {
    id: 'step_mahamangalarati',
    order: 13,
    stageNumber: 13,
    category: 'uttaranga',
    titleKn: '೧೩. ಮಹಾಮಂಗಳಾರತಿ (ಜಯತಿ ಹರಿರಚಿಂತ್ಯಃ)',
    titleEn: '13. Maha Mangalarati',
    subtitleKn: 'ಕರ್ಪೂರ / ತುಪ್ಪದ ಮಹಾಮಂಗಳಾರತಿ ಮತ್ತು ಮಂಗಳ ಸ್ತೋತ್ರ',
    subtitleEn: 'Grand light offering with Mangala slokas and conch circle',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 3,
    requiredMaterialsKn: ['ಮಂಗಳಾರತಿ ತಟ್ಟೆ (ಕರ್ಪೂರ / ತುಪ್ಪ)', 'ಘಂಟೆ & ಶಂಖ'],
    requiredMaterialsEn: ['Mangalarati plate (Camphor/Ghee)', 'Bell & Conch'],
    mudras: [],
    instructionsKn: [
      'ಘಂಟಾನಾದ ಮತ್ತು ಶಂಖನಾದದೊಂದಿಗೆ ಶ್ರೀಮನ್ಮಧ್ವಾಚಾರ್ಯರ ಮಂಗಳ ಶ್ಲೋಕ "ಜಯತಿ ಹರಿರಚಿಂತ್ಯಃ..." ಪಠಿಸುತ್ತಾ ಮಹಾಮಂಗಳಾರತಿ ಬೆಳಗಿ.',
      'ಶಂಖದಲ್ಲಿ ನೀರು ತುಂಬಿ ದೇವರ ಪಾದದಿಂದ ಕಿರೀಟದವರೆಗೆ ೩ ಬಾರಿ ಪ್ರದಕ್ಷಿಣಾಕಾರವಾಗಿ ಶಂಖಭ್ರಮಣ ಮಾಡಿ ಆ ತೀರ್ಥವನ್ನು ಪ್ರೋಕ್ಷಣೆ ಮಾಡಿಕೊಳ್ಳಿ.'
    ],
    instructionsEn: [
      'Ring the bell joyously and chant the celebrated Mangala hymn "Jayati Harirachintyah..." by Srimad Ananda Teertha.',
      'Fill conch with pure water, circle 3 times from Lord’s lotus feet to crown, and sprinkle sanctified droplets over yourself.'
    ],
    mantras: [
      {
        id: 'm_mangalarati_1',
        titleKn: 'ಮಹಾಮಂಗಳಾರತಿ ಶ್ಲೋಕಃ',
        titleEn: 'Mahamangalarati Sloka',
        mantraKannada: 'ಜಯತಿ ಹರಿರಚಿಂತ್ಯಃ ಸರ್ವದೇವೈಕವಂದ್ಯಃ\nಪರಮಗುರುರಭೀಷ್ಟಾವಾಪ್ತಿದಃ ಸಜ್ಜนานಾಮ್ ।\nನಿಖಿಲಗುಣಗಣಾರ್ಣೋ ನಿತ್ಯನಿರ್ಮುಕ್ತದೋಷಃ\nಸರಸಿಜನಯನೋಽಸೌ ಶ್ರೀಪತಿರ್ಮಾನದೋ ನಃ ॥',
        mantraSanskrit: 'जयति हरिरचिन्त्यः सर्वदेवैकवन्द्यः\nपरमगुरुरभीष्टावाप्तिदः सज्ज॒नानाम् ।\nनिखिलगुणगणार्णो नित्यनिर्मुक्तदोषः\nसरसिजनयनोऽसौ श्रीपतिर्मानदो नः ॥',
        mantraEnglish: 'Jayati Harirachintyah sarvadevaikavandyah\nParamagururabheeshtaavaaptidah sajjanaanaam |\nNikhilagunaganaarno nityanirmuktadoshaha\nSarasijanayano-asau Shreepatirmaanado nah ||',
        repetitionCount: 1,
        meaningKn: 'ಅಚಿಂತ್ಯ ಮಹಿಮೆಯುಳ್ಳ, ಸಕಲ ದೇವತೆಗಳಿಂದ ಪೂಜಿಸಲ್ಪಡುವ, ಸಜ್ಜನರಿಗೆ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ನೀಡುವ ಪರಮಗುರುವಾದ, ಸಕಲ ಸದ್ಗುಣಗಳ ಸಾಗರನಾದ, ನಿರ್ದೋಷಿಯಾದ ಕಮಲನಯನ ಶ್ರೀಪತಿ ಶ್ರೀಹರಿಗೆ ಜಯವಾಗಲಿ!',
        meaningEn: 'Victorious is Sri Hari, inconceivable, sole master worshipped by all celestials, Supreme Guru who fulfills the noble aspirations of virtuous souls, ocean of auspicious attributes, eternally flawless lotus-eyed Lord of Lakshmi!'
      }
    ]
  },
  {
    id: 'step_hastodaka_ramadi',
    order: 14,
    stageNumber: 14,
    category: 'uttaranga',
    titleKn: '೧೪. ಹಸ್ತೋದಕ & ರಮಾದಿ ದೇವತಾ ಪೂಜೆ',
    titleEn: '14. Hastodaka & Parivara Devatas',
    subtitleKn: 'ಶ್ರೀ ರಾಘವೇಂದ್ರಸ್ವಾಮಿಗಳು ಮುಂತಾದ ಗುರುಗಳಿಗೆ ಮತ್ತು ರಮಾದಿ ದೇವತೆಗಳಿಗೆ ಹಸ್ತೋದಕ',
    subtitleEn: 'Teertha & Hastodaka to sacred Guru Parampara (Sri Rayaru & Yatis) & deities',
    modes: ['30min', 'full'],
    durationEstimateMinutes: 2,
    requiredMaterialsKn: ['ವೃಂದಾವನ ಪ್ರತಿಮೆ', 'ತೀರ್ಥ', 'ತುಳಸಿ & ನಿರ್ಮಾಲ್ಯ ಗಂಧ'],
    requiredMaterialsEn: ['Guru Vrindavana idol', 'Teertha', 'Tulasi & Gandha'],
    mudras: [],
    instructionsKn: [
      'ಮನೆಯಲ್ಲಿರುವ ಶ್ರೀರಾಘವೇಂದ್ರತೀರ್ಥರ ಅಥವಾ ಯತಿಗಳ ವೃಂದಾವನಕ್ಕೆ ನಿರ್ಮಾಲ್ಯ ಗಂಧ-ಅಕ್ಷತೆ-ತುಳಸಿ ನೀಡಿ ೩ ಬಾರಿ ತೀರ್ಥ ನೀಡಿ ಹಸ್ತೋದಕ ಸಮರ್ಪಿಸಿ.',
      'ರಮಾದಿ ದೇವತೆಗಳಿಗೂ ನಿರ್ಮಾಲ್ಯ ಪ್ರಸಾದ ಸಮರ್ಪಿಸಿ.'
    ],
    instructionsEn: [
      'Offer Hastodaka (Sri Hari’s sanctified teertha & prasada) to the Vrindavana of Sri Raghavendra Swamy and revered Gurus.',
      'Offer 3 spoons of Teertha and Tulasi to all Parivara Devatas.'
    ],
    mantras: [
      {
        id: 'm_hastodaka_1',
        titleKn: 'ಗುರು ಹಸ್ತೋದಕ ಶ್ಲೋಕಃ',
        titleEn: 'Guru Hastodaka Sloka',
        mantraKannada: 'ಬ್ರಹ್ಮಾಂತಾ ಗುರವಃ ಸಾಕ್ಷಾದಿಷ್ಟಂ ದೈವಂ ಶ್ರಿಯಃಪತಿಃ ।\nಆಚಾರ್ಯಾಃ ಶ್ರೀಮದಾಚಾರ್ಯಾಸ್ಸಂತು ಮೇ ಜನ್ಮಜನ್ಮನಿ ॥\nಪೂಜ್ಯಾಯ ರಾಘವೇಂದ್ರಾಯ ಸತ್ಯಧರ್ಮರತಾಯ ಚ ।\nಭಜತಾಂ ಕಲ್ಪವೃಕ್ಷಾಯ ನಮತಾಂ ಕಾಮಧೇನವೇ ॥\nಶ್ರೀಮದ್ಗುರುಭ್ಯೋ ಹಸ್ತೋದಕಂ ಸಮರ್ಪಯಾಮಿ ॥',
        mantraSanskrit: 'ब्रह्मान्ता गुरवः साक्षादिष्टं दैवं श्रियःपतिः ।\nआचार्याः श्रीमदाचार्यास्सन्तु मे जन्मजन्मनि ॥\nपूज्याय राघवेंद्राय सत्यधर्मरताय च ।\nभजतां कल्पवृक्षाय नमतां कामधेनवे ॥\nश्रीमद्गुरुभ्यो हस्तोदकं समर्पयामि ॥',
        mantraEnglish: 'Brahmaantaa guravah saakshaadishtam daivam shriyahpatih |\nAachaaryaah Sreemadaachaaryaassantu me janmajanmani ||\nPoojyaaya Raaghavendraaya satyadharmarataaya cha |\nBhajataam kalpavrukshaaya namataam kaamadhenave ||\nSreemad-gurubhyo hastodakam samarpayaami ||',
        repetitionCount: 1,
        meaningKn: 'ಬ್ರಹ್ಮದೇವರವರೆಗಿನ ಗುರುಗಳಿಗೆ, ಇಷ್ಟದೈವ ಶ್ರೀಹರಿಗೆ ಮತ್ತು ಶ್ರೀಮಧ್ವಾಚಾರ್ಯ-ಶ್ರೀರಾಘವೇಂದ್ರತೀರ್ಥರಿಗೆ ಹಸ್ತೋದಕ ತೀರ್ಥವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
        meaningEn: 'Salutations to the entire lineage of Gurus up to Brahma, with Sri Hari as supreme ishta-devata, and Srimad Ananda Teertha & Sri Raghavendra Swamy guiding us across lifetimes.'
      }
    ],
    ekadashiDifferenceKn: 'ಏಕಾದಶಿಯ ದಿನ ಯತಿಗಳಿಗೆ ಕೇವಲ ೧ ಬಾರಿ ಮಾತ್ರ ತೀರ್ಥ ನೀಡಬೇಕು. ಗಂಧ-ನೈವೇದ್ಯ ಇರುವುದಿಲ್ಲ.',
    ekadashiDifferenceEn: 'On Ekadashi, offer Teertha to Gurus/Yatis only ONCE; no grain naivedya.'
  },
  {
    id: 'step_pradakshina_namaskara',
    order: 15,
    stageNumber: 15,
    category: 'uttaranga',
    titleKn: '೧೫. ಪ್ರದಕ್ಷಿಣೆ & ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕಾರ',
    titleEn: '15. Pradakshina & Sashtanga Namaskara',
    subtitleKn: 'ಕನಿಷ್ಠ ೪ ಪ್ರದಕ್ಷಿಣೆ ಮತ್ತು ೫ ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕಾರಗಳು',
    subtitleEn: 'Reverent circumambulation (minimum 4) and full prostrations (minimum 5)',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 2,
    requiredMaterialsKn: [],
    requiredMaterialsEn: [],
    mudras: [],
    instructionsKn: [
      'ತಂತ್ರಸಾರೋಕ್ತ ನಿಯಮ: ೪ಕ್ಕಿಂತ ಅಧಿಕ ಪ್ರದಕ್ಷಿಣೆಗಳನ್ನು (೪, ೮, ೧೨) ಮತ್ತು ೫ಕ್ಕಿಂತ ಅಧಿಕ ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕಾರಗಳನ್ನು (೫, ೧೨) ಶ್ರದ್ಧೆಯಿಂದ ಮಾಡಿ.',
      'ಪ್ರದಕ್ಷಿಣೆ ಮಾಡುವಾಗ "ಯಾನಿ ಕಾನಿ ಚ ಪಾಪಾನಿ..." ಶ್ಲೋಕವನ್ನು ಸ್ಮರಿಸಿ.'
    ],
    instructionsEn: [
      'According to Tantrasara rule: perform more than 4 circumambulations (e.g. 4 or 8) and more than 5 prostrations (e.g. 5 or 12).',
      'Chant the cleansing sloka during pradakshina.'
    ],
    mantras: [
      {
        id: 'm_pradakshina_1',
        titleKn: 'ಪ್ರದಕ್ಷಿಣಾ ನಮಸ್ಕಾರ ಶ್ಲೋಕಃ',
        titleEn: 'Pradakshina & Namaskara Sloka',
        mantraKannada: 'ಯಾನಿ ಕಾನಿ ಚ ಪಾಪಾನಿ ಜನ್ಮಾಂತರಕೃತಾನಿ ಚ ।\nತಾನಿ ತಾನಿ ಪ್ರಣಶ್ಯಂತಿ ಪ್ರದಕ್ಷಿಣಪದೇ ಪದೇ ॥\nಅನ್ಯಥಾ ಶರಣಂ ನಾಸ್ತಿ ತ್ವಮೇವ ಶರಣಂ ಮಮ ।\nತಸ್ಮಾತ್ಕಾರುಣ್ಯಭಾವೇನ ರಕ್ಷ ರಕ್ಷ ರಮಾಪತೇ ॥',
        mantraSanskrit: 'यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि प्रणश्यन्ति प्रदक्षिणपदे पदे ॥\nअन्यथा शरणं नास्ति त्वमेव शरणं मम ।\nतस्मात्कारुण्यभावेन रक्ष रक्ष रमापते ॥',
        mantraEnglish: 'Yaani kaani cha paapaani janmaantarakrutaani cha |\nTaani taani pranashyanti pradakshinapade pade ||\nAnyathaa sharanam naasti tvameva sharanam mama |\nTasmaat kaarunyabhaavena raksha raksha Ramaapate ||',
        repetitionCount: 4,
        meaningKn: 'ಜನ್ಮಜನ್ಮಾಂತರಗಳಲ್ಲಿ ಮಾಡಿದ ಸಕಲ ಪಾಪಗಳೂ ಪ್ರದಕ್ಷಿಣೆಯ ಪ್ರತಿ ಹೆಜ್ಜೆಯಲ್ಲೂ ನಾಶವಾಗಲಿ. ಹೇ ರಮಾಪತೇ, ನಿನ್ನನ್ನಲ್ಲದೆ ನನಗೆ ಬೇರೆ ಯಾರೂ ಗತಿಯಿಲ್ಲ, ನನ್ನನ್ನು ಕರುಣೆಯಿಂದ ರಕ್ಷಿಸು.',
        meaningEn: 'May all errors committed across lifetimes dissolve with every step of circumambulation. O Lord of Ramaa, I have no other refuge than You—kindly protect me.'
      }
    ]
  },
  {
    id: 'step_samarpana_krishnarpanam',
    order: 16,
    stageNumber: 16,
    category: 'uttaranga',
    titleKn: '೧೬. ಪೂಜಾ ಸಮರ್ಪಣೆ (ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು)',
    titleEn: '16. Pooja Samarpanam (Sri Krishnarpanam)',
    subtitleKn: '"ನಾಹಂ ಕರ್ತಾ ಹರಿಃ ಕರ್ತಾ" - ಸಂಪೂರ್ಣ ಫಲ ಸಮರ್ಪಣೆ',
    subtitleEn: 'Complete non-doership surrender: "Naham Karta Harih Karta"',
    modes: ['10min', '30min', 'full'],
    durationEstimateMinutes: 2,
    requiredMaterialsKn: ['ಉದ್ಧರಣೆ', 'ತೀರ್ಥ / ಶುದ್ಧ ಜಲ'],
    requiredMaterialsEn: ['Spoon', 'Water/Teertha'],
    mudras: [],
    instructionsKn: [
      'ಉದ್ಧರಣೆಯಲ್ಲಿ ನೀರನ್ನು ತೆಗೆದುಕೊಂಡು "ನಾಹಂ ಕರ್ತಾ ಹರಿಃ ಕರ್ತಾ..." ಮತ್ತು "ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ..." ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ ಪಾತ್ರೆಗೆ ಬಿಡಿ.',
      '"ಕಾಯೇನ ವಾಚಾ ಮನಸೇಂದ್ರಿಯೈರ್ವಾ..." ಶ್ಲೋಕದಿಂದ ಸರ್ವ ಕರ್ಮಗಳನ್ನೂ ಶ್ರೀ ನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸಿ "ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು" ಎನ್ನಿ.',
      '೩ ಬಾರಿ ಶ್ರೀಹರಿಯ ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥವನ್ನು ಪ್ರಸನ್ನತೆಯಿಂದ ಸ್ವೀಕರಿಸಿ ಪೂಜೆ ಸಂಪನ್ನಗೊಳಿಸಿ.'
    ],
    instructionsEn: [
      'Take a spoonful of water in your right palm and release it with the supreme non-doership surrender sloka "Naham Karta Harih Karta...".',
      'Dedicate all bodily, vocal, mental actions to Sri Narayana and conclude with "Sri Krishnarpanamastu".',
      'Partake of the holy Nirmalya Teertha in 3 sips with supreme peace and fulfillment.'
    ],
    mantras: [
      {
        id: 'm_samarpana_naham',
        titleKn: 'ಸರ್ವಸಮರ್ಪಣ ಶ್ಲೋಕಾಃ',
        titleEn: 'Complete Surrender & Dedication',
        mantraKannada: 'ನಾಹಂ ಕರ್ತಾ ಹರಿಃ ಕರ್ತಾ ತತ್ಪೂಜಾ ಕರ್ಮ ಚಾಖಿಲಮ್ ।\nತಥಾಪಿ ಮತ್ಕೃತಾ ಪೂಜಾ ತತ್ಪ್ರಸಾದೇನ ನಾನ್ಯಥಾ ॥\nಯಸ್ಯ ಸ್ಮೃತ್ಯಾ ಚ ನಾಮೋಕ್ತ್ಯಾ ತಪಃಪೂಜಾಕ್ರಿಯಾದಿಷು ।\nನ್ಯೂನಂ ಸಂಪೂರ್ಣತಾಂ ಯಾತಿ ಸದ್ಯೋ ವಂದೇ ತಮಚ್ಯುತಮ್ ॥\nಮಂತ್ರಹೀನಂ ಕ್ರಿಯಾಹೀನಂ ಭಕ್ತಿಹೀನಂ ರಮಾಪತೇ ।\nಯತ್ಕೃತಂ ತು ಮಯಾ ದೇವ ಪರಿಪೂರ್ಣಂ ತದಸ್ತು ಮೇ ॥\nಕಾಯೇನ ವಾಚಾ ಮನಸೇಂದ್ರಿಯೈರ್ವಾ ಬುದ್ಧ್ಯಾತ್ಮನಾ ವಾನುಸೃತಸ್ವಭಾವಮ್ ।\nಕರೋಮಿ ಯದ್ಯತ್ ಸಕಲಂ ಪರಸ್ಮೈ ನಾರಾಯಣಾಯೇತಿ ಸಮರ್ಪಯಾಮಿ ॥\n॥ ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು ॥',
        mantraSanskrit: 'नाहं कर्ता हरिः कर्ता तत्पूजा कर्म चाखिलम् ।\nतथापि मत्कृता पूजा तत्प्रसादेन नान्यथा ॥\nयस्य स्मृत्या च नामोक्त्या तपःपूजाक्रियादिषु ।\nन्यूनं संपूर्णतां याति सद्यो वन्दे तमच्युतम् ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं रमापते ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥\nकायेन वाचा मनसेन्द्रियैर्वा बुद्ध्यात्मना वानुसृतस्वभावम् ।\nकरोमि यद्यत् सकलं परस्मै नारायणायेति समर्पयामि ॥\n॥ श्रीकृष्णार्पणमस्तु ॥',
        mantraEnglish: 'Naaham kartaa Harih kartaa tatpoojaa karma chaakhilam |\nTathaapi matkrutaa poojaa tatprasaadena naanyathaa ||\nYasya smrutyaa cha naamoktyaa tapah-poojaa-kriyaadishu |\nNyoonam sampoornataam yaati sadyo vande tamachyutam ||\nMantraheenam kriyaaheenam bhaktiheenam Ramaapate |\nYatkrutam tu mayaa deva paripoornam tadastu me ||\nKaayena vaachaa manasendriyairvaa buddhyaatmanaa vaanusrutasvabhaavam |\nKaromi yadyat sakalam parasmai Naaraayanaayeti samarpayaami ||\n|| Sri Krishnaarpanamastu ||',
        repetitionCount: 1,
        meaningKn: 'ನಾನು ಕರ್ತನಲ್ಲ, ಶ್ರೀಹರಿಯೇ ಸರ್ವಕರ್ತನು. ಈ ಪೂಜೆಯೂ ಆತನ ಪ್ರೇರಣೆಯಿಂದಲೇ ನಡೆಯಿತು. ಮಂತ್ರದಲ್ಲಾಗಲಿ ಕ್ರಿಯೆಯಲ್ಲಾಗಲಿ ಭಕ್ತಿಯಲ್ಲಾಗಲಿ ಆದ ಲೋಪಗಳನ್ನು ಕ್ಷಮಿಸಿ ಈ ಪೂಜೆಯನ್ನು ಪರಿಪೂರ್ಣಗೊಳಿಸಲಿ. ಸರ್ವವೂ ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತ.',
        meaningEn: 'I am not the independent doer; Lord Hari alone is the supreme doer. Whatever worship was performed was purely by His grace. May all deficiencies in mantra, action, or devotion be made complete by Sri Hari. Everything is dedicated unto Sri Krishna.'
      }
    ]
  }
];
