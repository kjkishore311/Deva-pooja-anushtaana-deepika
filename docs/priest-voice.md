# Priest voice for shloka recital

The guided pooja's **AI Priest Voice** buttons play each mantra in a deep, slow male voice. The voice is instructed to chant in the manner of a Madhwa priest of the Uttaradi Matha sampradaya and to pronounce every word distinctly, with a short pause after each word so beginners can repeat along. The **AI Priest Guidance** button reads the step's instructions in Kannada or English. The voice is AI-generated with Google Gemini text-to-speech. It is not a recording of a real pundit.

## Setup

1. Create an API key at https://aistudio.google.com/apikey.
2. In Netlify, open **Project configuration → Environment variables** and add `GEMINI_API_KEY` with the key as its value, scoped to Functions.
3. Redeploy. Until the key is set, the buttons fall back to the visitor's device voice, which prefers a male Indian voice where one is installed.

Optionally, set `GEMINI_TTS_MODEL` to choose a specific Gemini speech model. Otherwise the newest available model is tried first.

## How it works

`/api/chant?id=<mantra id>` only accepts the IDs of mantras and step guidance defined in `src/data/poojaData.ts`. The server looks up the text itself, so the endpoint can't be used to voice arbitrary text. The first request for a mantra starts a background function that generates the recording and saves it in the `priest-voice` Netlify Blobs store. The browser shows "Preparing priest voice…" and checks back every few seconds, which usually takes under a minute. From then on, every visitor gets the saved recording instantly, and no further Gemini usage is incurred. Editing a mantra's text automatically creates a new recording for it. If generation fails, it isn't retried for ten minutes, and the device voice is used meanwhile.
