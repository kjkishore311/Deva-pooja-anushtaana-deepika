// Pundit recordings for the guided Deva Pooja.
// Each clip is a step cut from "Deva Pooja Paddhati" recited by
// Vid. Sriramavittala Achar (JnanaGamya Prasarana). Files live in
// public/audio/deva-pooja/ and `start` is the matching position in the video.

export const DEVA_POOJA_SOURCE_VIDEO = 'https://www.youtube.com/watch?v=hTSDBlRFJkQ';
export const DEVA_POOJA_SOURCE_CREDIT = 'Vid. Sriramavittala Achar · JnanaGamya Prasarana';

export interface PoojaRecordingClip {
  id: string;
  src: string;
  titleEn: string;
  subtitle: string;
  youtubeUrl: string;
}

const CLIPS: Record<string, { file: string; titleEn: string; subtitle: string; start: string }> = {
  '01': { file: '01-introduction.mp3', titleEn: "Introduction", subtitle: "Atha Deva-Pūjā Paddhatiḥ", start: '00:04' },
  '02': { file: '02-glory-of-puja.mp3', titleEn: "The Glory of Worship", subtitle: "from Kṛṣṇāmṛta Mahārṇava (Śrī Madhvācārya)", start: '02:45' },
  '03': { file: '03-materials-and-setup.mp3', titleEn: "Materials & Setup", subtitle: "Pūjā-sāmagrī & arrangement", start: '03:45' },
  '04': { file: '04-tirtha-prashana.mp3', titleEn: "Taking Tīrtha (rules & mantra)", subtitle: "Tīrtha-prāśana", start: '10:42' },
  '05': { file: '05-namaskara-at-the-door.mp3', titleEn: "Salutation at the Door", subtitle: "Guru – Hari – Madhva Namaskāra", start: '12:21' },
  '06': { file: '06-dvarapala-namana.mp3', titleEn: "Sri Lakshmi & Dik Devatha Vandhanam & Sri Vayu Deva Vandhanam", subtitle: "Dvārapāla / Dik-Devatā Namana", start: '13:18' },
  '07': { file: '07-entering-lighting-the-lamp.mp3', titleEn: "Lighting the Lamp", subtitle: "Dīpa-prajvālana", start: '13:53' },
  '08': { file: '08-namaskara-to-the-deities.mp3', titleEn: "Salutation to All Deities", subtitle: "Sarva-devatā Namaskāra", start: '14:25' },
  '09': { file: '09-bhutocchatana.mp3', titleEn: "Removing Obstructing Spirits", subtitle: "Bhūtocchāṭana", start: '14:59' },
  '10': { file: '10-asana-shuddhi.mp3', titleEn: "Purifying the Seat", subtitle: "Āsana Śuddhi", start: '15:43' },
  '11': { file: '11-deha-shuddhi.mp3', titleEn: "Prayer to the Lord to Bear the Human Odor", subtitle: "Prārthanā", start: '16:51' },
  '12': { file: '12-brahmapara-stotra.mp3', titleEn: "Brahmapāra Stotra", subtitle: "for fitness to worship (Pūjādhikāra-siddhi)", start: '17:43' },
  '13': { file: '13-ghanta-nada.mp3', titleEn: "Ringing the Bell", subtitle: "Ghaṇṭā-nāda", start: '19:26' },
  '14': { file: '14-prarthana-opening-the-casket.mp3', titleEn: "Prayer to Open the Casket", subtitle: "Prārthanā", start: '19:55' },
  '15': { file: '15-nirmalya-visarjana-shri-sukta.mp3', titleEn: "Removing the Previous Offerings", subtitle: "Nirmālya Visarjana · Śrī Sūkta", start: '20:29' },
  '16': { file: '16-salagrama-preparation.mp3', titleEn: "Preparing the Sālagrāmas", subtitle: "Sālagrāma Prokṣaṇa", start: '21:25' },
  '17': { file: '17-ashtakshara-japa.mp3', titleEn: "Purifying the Abhiṣeka Water", subtitle: "Nārāyaṇa Aṣṭākṣara Mantra", start: '21:54' },
  '18': { file: '18-ambhrini-sukta-abhisheka.mp3', titleEn: "Abhiṣeka with the Devī Sūkta", subtitle: "Ambhṛṇī / Devī Sūkta", start: '22:19' },
  '19': { file: '19-shankha-abhisheka-shri-sukta.mp3', titleEn: "Abhiṣeka of the Śaṅkha", subtitle: "Śaṅkha Abhiṣeka · Śrī Sūkta", start: '23:36' },
  '20': { file: '20-pranadeva-abhisheka.mp3', titleEn: "Abhiṣeka of Prāṇadeva (Vāyu)", subtitle: "Baḷitthā Sūkta · Vāyu Stuti", start: '24:14' },
  '21': { file: '21-garuda-shesha-guru-abhisheka.mp3', titleEn: "Abhiṣeka of Garuḍa, Śeṣa & Gurus", subtitle: "Garuḍa · Śeṣa · Guru Abhiṣeka", start: '25:44' },
  '22': { file: '22-mantapa-dhyana.mp3', titleEn: "Meditation on the Pavilion", subtitle: "Maṇṭapa Dhyāna", start: '26:19' },
  '23': { file: '23-prarthana-bimba-pratibimba.mp3', titleEn: "Prayer — Reflection of the Lord", subtitle: "Bimba-Pratibimba Prārthanā", start: '27:49' },
  '24': { file: '24-achamana-pranayama-sankalpa.mp3', titleEn: "Ācamana · Prāṇāyāma · Saṅkalpa", subtitle: "Saṅkalpa (statement of intent)", start: '28:37' },
  '25': { file: '25-kalasha-puja.mp3', titleEn: "Kalaśa Pūjā & Mudrās", subtitle: "Kalaśa Pūjā", start: '30:04' },
  '26': { file: '26-kalasha-avahana.mp3', titleEn: "Invoking into the Kalaśa", subtitle: "Kalaśa Āvāhana", start: '32:13' },
  '27': { file: '27-kalasha-upachara.mp3', titleEn: "Honouring the Kalaśa", subtitle: "Kalaśa Upacāra & Prārthanā", start: '33:01' },
  '28': { file: '28-shankha-puja.mp3', titleEn: "Śaṅkha Pūjā", subtitle: "Worship of the Conch · Śaṅkha Gāyatrī", start: '33:42' },
  '29': { file: '29-pitha-puja.mp3', titleEn: "Pīṭha Pūjā", subtitle: "Worship of the Seat", start: '35:39' },
  '30': { file: '30-dhyana.mp3', titleEn: "Meditation on the Lord", subtitle: "Dhyāna", start: '36:19' },
  '31': { file: '31-avahana.mp3', titleEn: "Invocation", subtitle: "Āvāhana", start: '37:07' },
  '32': { file: '32-arghyadi-upachara.mp3', titleEn: "Arghya & Welcome Offerings", subtitle: "Arghyādi Upacāra", start: '38:03' },
  '33': { file: '33-mahabhisheka-purusha-sukta.mp3', titleEn: "Grand Abhiṣeka — Puruṣa Sūkta", subtitle: "Mahābhiṣeka · Puruṣa Sūkta", start: '39:10' },
  '34': { file: '34-vastra-abharana.mp3', titleEn: "Garments, Ornaments & Flowers", subtitle: "Vastra · Ābharaṇa · Puṣpa", start: '40:45' },
  '35': { file: '35-dhupa-dipa.mp3', titleEn: "Incense & Lamp", subtitle: "Dhūpa · Dīpa", start: '41:49' },
  '36': { file: '36-naivedya.mp3', titleEn: "Food Offering", subtitle: "Naivedya · Prāṇa-āhuti", start: '43:01' },
  '37': { file: '37-dvadasha-stotra-naivedya.mp3', titleEn: "Dvādaśa Stotra & Offering", subtitle: "Dvādaśa Stotra (Śrī Madhvācārya)", start: '44:52' },
  '38': { file: '38-tambula-rajopachara.mp3', titleEn: "Hand-rinse & Betel", subtitle: "Hasta-prakṣālana · Tāmbūla", start: '45:39' },
  '39': { file: '39-maha-mangalarati.mp3', titleEn: "Great Ārati", subtitle: "Mahā Maṅgaḷārati (Dvādaśa Stotra)", start: '46:30' },
  '40': { file: '40-mantra-pushpa.mp3', titleEn: "Mantra Puṣpa", subtitle: "Mantra-Puṣpa", start: '47:39' },
  '41': { file: '41-chatra-chamara-rajopachara.mp3', titleEn: "Royal Honours", subtitle: "Rājopacāra", start: '48:47' },
  '42': { file: '42-shankha-tirtha.mp3', titleEn: "Śaṅkha Tīrtha", subtitle: "Śaṅkha Tīrtha & Ārati", start: '49:26' },
  '43': { file: '43-tirtha-distribution.mp3', titleEn: "Receiving the Tīrtha", subtitle: "Tīrtha-vitaraṇa", start: '50:19' },
  '44': { file: '44-kshamapana-samarpana.mp3', titleEn: "Completion & Dedication", subtitle: "Samarpaṇa · Nāmatraya", start: '51:31' },
  '45': { file: '45-kshamapana-stotra.mp3', titleEn: "Asking Forgiveness", subtitle: "Kṣamāpaṇa Stotra", start: '52:28' },
  '46': { file: '46-namaskara-mantras.mp3', titleEn: "Prostration", subtitle: "Namaskāra", start: '53:41' },
  '47': { file: '47-conclusion.mp3', titleEn: "Conclusion", subtitle: "Śrī Kṛṣṇārpaṇam astu", start: '54:44' },
};

// Clips that carry the recitation of each shloka in POOJA_STEPS (first one plays by default).
const MANTRA_CLIP_IDS: Record<string, string[]> = {
  m_sankalpa_1: ['24'],
  m_dvara_1: ['05', '06', '08'],
  m_deepa_1: ['07'],
  m_ghanta_1: ['13'],
  m_nirmalya_1: ['15'],
  m_prana_abhisheka: ['20', '19', '21'],
  m_kalasha_rivers: ['25', '26', '27'],
  m_panchamruta_1: ['18', '16', '17'],
  m_shuddhabhisheka_1: ['33'],
  m_yajnopavita_1: ['34'],
  m_gandha_1: ['32'],
  m_keshavadi_24: ['34'],
  m_dhoopa_1: ['35'],
  m_naivedya_prana: ['36', '37'],
  m_mangalarati_1: ['39', '40'],
  m_hastodaka_1: ['42', '43'],
  m_pradakshina_1: ['46'],
  m_samarpana_naham: ['44', '45', '47'],
};

const toSeconds = (start: string) =>
  start.split(':').reduce((total, part) => total * 60 + Number(part), 0);

const toClip = (id: string): PoojaRecordingClip => {
  const clip = CLIPS[id];
  return {
    id,
    src: `/audio/deva-pooja/${clip.file}`,
    titleEn: clip.titleEn,
    subtitle: clip.subtitle,
    youtubeUrl: `${DEVA_POOJA_SOURCE_VIDEO}&t=${toSeconds(clip.start)}s`,
  };
};

export const getMantraRecordings = (mantraId: string): PoojaRecordingClip[] =>
  (MANTRA_CLIP_IDS[mantraId] ?? []).map(toClip);

export const ALL_POOJA_RECORDINGS: PoojaRecordingClip[] = Object.keys(CLIPS).map(toClip);
