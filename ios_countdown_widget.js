// ================================
// Multi-Event Countdown Widget
// For Scriptable app (free, App Store)
// ================================

let widget = new ListWidget()
widget.backgroundColor = new Color("#1E1E2F")

// ---- WIDGET TITLE (edit this) ----
let headerText = widget.addText("⏳ Important Countdowns")
headerText.font = Font.boldSystemFont(14)
headerText.textColor = Color.white()
headerText.centerAlignText()

widget.addSpacer(10)

// ---- EDIT YOUR EVENTS HERE ----
// Add/remove rows as needed. Format: name, date (YYYY-MM-DD), hex color
let events = [
  { name: "Vacation", date: new Date("2026-12-25"), color: "#4ECDC4" },
  { name: "Birthday", date: new Date("2026-08-15"), color: "#FF6B6B" },
  { name: "Concert",  date: new Date("2026-09-10"), color: "#FFD166" },
  { name: "Exam",     date: new Date("2026-10-01"), color: "#A78BFA" }
]

let now = new Date()

for (let i = 0; i < events.length; i++) {
  let e = events[i]
  let days = Math.ceil((e.date - now) / (1000 * 60 * 60 * 24))

  let row = widget.addStack()
  row.layoutHorizontally()
  row.centerAlignContent()

  let dot = row.addStack()
  dot.size = new Size(8, 8)
  dot.backgroundColor = new Color(e.color)
  dot.cornerRadius = 4

  row.addSpacer(6)

  let nameText = row.addText(e.name)
  nameText.font = Font.semiboldSystemFont(12)
  nameText.textColor = Color.white()

  row.addSpacer()

  let daysText = row.addText(days + "d")
  daysText.font = Font.boldSystemFont(14)
  daysText.textColor = new Color(e.color)

  if (i < events.length - 1) {
    widget.addSpacer(8)
  }
}

Script.setWidget(widget)
Script.complete()
