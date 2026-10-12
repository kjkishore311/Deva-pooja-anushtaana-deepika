# Devotional resources and navigation

## Home widgets and setup photographs

The main page has three compact square photo widgets linking to Trikala Sandhyavandana, Madhwa Guru Stuti, and Deva Pooja. The Sandhyavandana image was rendered directly from the first page of the supplied PDF; the guru widget uses the existing official Sri Madhwacharya reference image, and the pooja widget uses an existing supplied sanctum photograph. No devotional imagery was generated. The duration choices and existing paid-download approval flow were retained.

The main title is a keyboard-accessible home button. The home option is labeled **Main Page** in the header and both navigation menus; internal tab identifiers were retained for compatibility.

All 19 newly supplied JPEGs were moved into `public/images/setup`. Photos of Shaligrama and deities, the bell, conch, Somasutra vessel, and sandalwood grinding stone are attached to their corresponding setup items. Other supplied materials and diagrams are individually labeled in the additional setup references. Each photograph opens its original file without changing the checklist selection. The Dhenu Mudra upload is handwritten finger-pairing information, not a gesture photograph, and does not replace the previously supplied five hand-signal crops.

The clarification selections requested approved Shankha–Chakra artwork and authorized pundit recordings, but no such files or source links accompanied those selections. The conch and Sudarshana Shaligrama setup photographs were not misrepresented as approved monastic emblems. No real pundit recordings were fabricated or substituted. Existing generated speech was retained and labeled honestly, with a pending-recordings notice; guru recordings remain pending. To complete the remaining requests, supply the approved emblem artwork and authorized audio with its shloka-to-file mapping.

## Movable Anjaniputra

The floating launcher and the chat window can both be moved with a mouse or touch. Drag the launcher itself or the chat header. Focus either drag control and use the arrow keys to reposition it; Shift increases the step and Home restores its starting position. Positions are retained while the app remains open, including when closing and reopening the chat, but are not saved across reloads. Panels are kept within the viewport and adjusted when the screen size changes. The chat no longer blocks the rest of the page with a full-screen overlay.

Desktop and mobile menus start collapsed, expand on demand, and collapse again after a navigation choice. Play Store installation and publishing controls are no longer rendered by the application. Browser-native PWA support remains unchanged. The previous Chaturmasya Darshan link is labeled **Uttaradimath Adhyatmavani channel** and retains the existing official channel destination.

## Official UM Panchanga

The Panchanga page displays the official published calendar, not mock or calculated daily readings. Its read-only Netlify endpoint retrieves the published editions from `https://uttaradimath.org/panchanga`, selects the latest published year, and accepts only PDF links on the official UM CDN. Refresh retrieves the source again, preserves the user's selected edition when available, and reloads the viewer.

The language and regional selector should be used to choose the appropriate calendar. The page displays today's date in India time and the time the source was last retrieved. If the PDF cannot be embedded on a device, **Open official PDF** opens it separately. If the official source is unavailable or its markup changes, the page reports the failure rather than substituting guessed Tithi or Nakshatra values. Previously loaded editions remain labeled with their original retrieval time.

## Supplied mudra images

The original attachment is preserved at `public/images/mudras/tarkshyadi-original.jpg`. The five crops retain the hand signals and printed captions, in the attachment's numbered order:

1. Tarkshya / Garuda — `tarkshya.jpg`
2. Dhenu — `dhenu.jpg`
3. Shankha — `shankha.jpg`
4. Gada — `gada.jpg`
5. Chakra — `chakra.jpg`

All previously synthesized hand illustrations were removed from the shared mudra image component. Other mudras show that no reference image was supplied; no substitute gesture is shown. Detailed views can open the relevant crop at full size, and the main mudra page links to the original attachment. No image-generation service was used.

## Madhwa Guru Stuti

The homepage, desktop menu, and mobile menu link to the new **MADHWA GURU STUTI** section, also available through `/madhwa-guru-stuti` and `/#guru-stuti`. It contains all 42 entries in the official Uttaradi Math lineage, from Sri Madhwacharya through Sri Satyatma Tirtha, with locally stored official reference images. Each entry links to its official source. The data and image-source URLs are recorded in `src/data/madhwaGuruData.ts`; the local images are in `public/images/gurus`.

Sources were checked on October 12, 2026. Forty-one Sanskrit verses were obtained from the official individual-guru pages, including Sri Vidyanidhi Tirtha's verse. Kannada and English/Roman versions were mechanically transliterated from the source Sanskrit using Sanscript; they are not English meaning translations or newly composed verses. The official Sri Satyatma Tirtha page did not provide a verse, and the clarification response did not include the requested approved text. That entry therefore explicitly awaits its approved verse rather than inventing or borrowing another guru's stuti.

No guru audio has been supplied. The Listen controls honestly show that recordings are pending, and no synthesized voice or unrelated recording is used. When recordings are attached in a later task, move the supplied files into the project's public audio assets and set the corresponding entry's `audioUrl` to its published path. The existing player then displays the recording with native playback controls and no autoplay. When the approved Sri Satyatma Tirtha verse is supplied, populate that entry's three `stuti` fields and record its actual provenance.
