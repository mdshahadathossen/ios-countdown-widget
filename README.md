# iOS Countdown Widget

A free, customizable Home Screen widget for iOS that shows multiple 
event countdowns at once - built with [Scriptable](https://scriptable.app/) 
(free app, no coding experience needed to use it).

## Features
- Track multiple events (birthdays, vacations, deadlines, etc.)
- Custom color per event
- Clean dark theme, small colored dots for each event
- Fully free, no ads, no subscription

## Setup

1. Download the free **Scriptable** app from the App Store
2. Open Scriptable → tap **+** to create a new script
3. Copy the contents of [`ios_countdown_widget.js`](./https://raw.githubusercontent.com/mdshahadathossen/ios-countdown-widget/refs/heads/main/ios_countdown_widget.js) and paste it in
4. Rename the script (tap the pencil icon)
5. Edit the `events` array near the top with your own event names, dates, and colors
6. On your Home Screen: long-press → tap **+** → search "Scriptable" → 
   choose widget size → **Add Widget**
7. Long-press the new widget → **Edit Widget** → select your script

## Customizing

Just edit the `events` array:

\`\`\`javascript
let events = [
  { name: "Vacation", date: new Date("2026-12-25"), color: "#4ECDC4" },
  { name: "Birthday", date: new Date("2026-08-15"), color: "#FF6B6B" }
]
\`\`\`

Add as many events as you like — pick a bigger widget size (medium/large) 
if you add more than 2-3.

## License
Free to use and modify.
