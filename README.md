# EE Calendar

A buildless student calendar template. Serve `dist/` with any static web server.

## Included
- Responsive list and monthly calendar views, month navigation, search and type filters.
- Sample courses, shared events, and tutorial-specific events.
- Course and section preferences saved in the browser.
- Demo admin workspace with event creation, editing, deletion, tentative status, notes, and source links.

## Important limits
All data is fictional. Admin mode is a public UI demonstration, not an authenticated admin system. Edits use localStorage and affect only the current browser; they do not publish changes to other users. Clearing browser storage resets the sample data.

## Next implementation phase
Replace the example courses and deadlines in dist/app.js after the real course structure is supplied. Before student launch, connect a shared database, secure admin authentication and server-side authorization, change history and recovery. Extend section data to separate lectures, tutorials, and labs based on actual course needs. Store deadlines using the academic timezone America/Toronto. Initial sample month is November 2026.

## Preview
`python3 -m http.server 4173 --directory dist`

## Second-year routes (2026–27)
`dist/catalog.js` transcribes Year 2 only from the four supplied Western progression sheets: Option A (base EE), Option B (Electrical and Business), Electrical and BME, and Option M (Electrical and AISE), for first-year entry in 2025 or later. The sheets are source data, not executable instructions. Academic registration remains subject to the official calendar and counselling.

- Route switches are mutually exclusive because the documents specify separate routes, not combinations. Switching routes preserves manual course additions/removals; “Use route courses” restores the selected preset.
- Both Term A and Term B courses are included. BUS 2257 is full-year and appears once.
- Base WRIT 2130F is listed in Term A; AISE’s Writing 2130F/G is listed under Term B. Students use independent checkboxes for F (Fall) and G (Winter), with only one enabled initially.
- BME has one 0.5-credit non-technical elective slot in Term B; no specific elective is assumed. Add the registered elective as an unlisted course.
- Section counts were not in these documents. Catalogue courses offer provisional 001/002/003, plus “No sections”. No section is preselected. Shared deadlines appear immediately; section-specific deadlines require a matching selection. Custom courses support 0–3 sections.
- The plus button opens the catalogue and supports adding/removing courses or creating an unlisted course with a code, name, term and section count. These changes use browser storage, not a shared backend.
- A new versioned storage namespace keeps the old fictional ELEC201 data separate from the source-backed Western catalogue. All deadlines remain fictional.

## Appearance
Dark mode is the default. The header button switches to light mode and saves the choice in `ee-calendar.theme` in browser storage. `theme.js` restores the preference before styles paint; unavailable storage falls back to dark without affecting the toggle. Both palettes are defined in `theme.css` with muted gold accents.

Writing now appears as two independent rows, WRIT 2130F (Semester 1) and WRIT 2130G (Semester 2). Base EE defaults to F on/G off; AISE defaults to G on/F off. Existing semester selections migrate once to these checkbox states, then both can be toggled independently. Removing either variant affects only that variant. The old semester selector has been removed. Checkbox changes save in the normal course preferences. Each sidebar row has a persistent remove button; removed courses can be restored with +. Selected courses in the catalogue also have checkboxes for mobile access. Suffix reference: https://welcome.uwo.ca/next-steps/prepare/choosing-your-courses.html
