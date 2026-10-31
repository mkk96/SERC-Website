# SERC Website

A Flask-based redesign of the website for the Software Engineering Research Center (SERC), IIIT Hyderabad, with data-driven People, Resources and Publications pages.

![Python](https://img.shields.io/badge/Python-3-3776AB?style=flat-square&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

## Overview

The site is a small Flask application that serves Jinja2 templates for each section of a research-centre website. Rather than hard-coding content into HTML, most pages are generated from data:

- **People** and **Resources** are driven by CSV files. One template per section is reused for every sub-category (faculty, PhD students, projects, posters, ...), so adding or removing an entry only means editing a CSV row.
- **Publications** are fetched live from Google Scholar through [SerpAPI](https://serpapi.com/) on every page load and rendered into a table in the browser.
- **News, events and tweets** are embedded through third-party RSS and Twitter widgets.
- A simple **Admin** page toggles a scrolling news ticker on or off across the whole site.

## Features

| Section | What it does |
|---|---|
| Home | Scrolling news ticker (when enabled), an RSS news feed from iiit.ac.in, an "About SERC" panel listing focus areas, and an embedded `@SERC_IIITH` Twitter timeline. |
| People | Sub-menus for Faculty, PhD, MS, B.Tech students and Project Interns. Rows from `namephoto.csv` matching the category are rendered as a photo gallery with name and bio. |
| Publications | Queries Google Scholar (via SerpAPI) and builds a table of title, snippet, authors, citation count and a link to the paper. |
| Focus areas | Static page showing SERC research areas as an image. |
| Events | Events feed from iiit.ac.in, embedded through an rss.app widget. |
| Resources | Sub-menus for Projects, Teaching, Downloads/Useful Links, Demos, Dataset and Posters. Rows from `reso.csv` are rendered as a table of name and linked description. |
| Contact | Contact form (name, email, phone, message). On submit it shows an "Email Sent!" confirmation; no email is actually sent by the backend. |
| Admin | Yes/No form that switches the site-wide news ticker on or off (held in an in-memory flag, so it resets when the server restarts). |

## Tech stack

- **Backend:** Python, Flask, Jinja2 templates
- **Data:** CSV files for people and resources; `google-search-results` (SerpAPI client) for Google Scholar
- **Frontend:** HTML, CSS, vanilla JavaScript (dynamic table/gallery building), Bootstrap 3, jQuery
- **Embeds:** rss.app ticker and wall widgets, surfing-waves RSS feed widget, Twitter timeline widget

## Project structure

```
SERC-Website/
├── app.py                    # Flask routes for every page
├── static/
│   ├── files/
│   │   ├── namephoto.csv     # category, name, photo file, about
│   │   ├── reso.csv          # category, title, summary, link
│   │   └── dumy.json         # sample SerpAPI response (handy for offline testing)
│   ├── image/                # profile photos (1-40) and page images
│   ├── scripts/main.js       # builds the publication table, people gallery, resource table
│   └── styles/main.css
└── templates/                # index, profile, publication, focus, event, resources, contact, admin
```

## Getting started

### Prerequisites

- Python 3
- A [SerpAPI](https://serpapi.com/) API key (needed for the Publications page)

### Install and run

```bash
git clone https://github.com/mkk96/SERC-Website.git
cd SERC-Website

python -m venv venv
# Windows (PowerShell)
.\venv\Scripts\Activate.ps1
# macOS / Linux
source venv/bin/activate

pip install flask google-search-results
python app.py
```

Then open <http://127.0.0.1:5000/>. The app runs with Flask's debug mode on.

Before using the Publications page, set the `api_key` value in the `publication()` route in `app.py` to your own SerpAPI key. The CSV files are read relative to the current working directory, so start the app from the repository root.

## Usage

### Editing people and resources

Both CSV files are read row by row and filtered on the first column, which must match the category in the URL (for example `/profile/phd` or `/resources/posters`).

`static/files/namephoto.csv`, one person per row:

```
<category>,<name>,<photo file in static/image>,<about text>
```

Categories used by the navigation: `faculty`, `phd`, `ms`, `btech`, `project`.

`static/files/reso.csv`, one resource per row:

```
<category>,<title>,<summary / link text>,<url>
```

Categories used by the navigation: `project`, `teaching`, `download`, `demos`, `dataset`, `posters`.

Fields are split on plain commas, so values must not contain commas themselves.

### Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/profile/<category>` | People gallery for a category |
| `/publication` | Google Scholar publications |
| `/focus` | Focus areas |
| `/event` | Events |
| `/resources/<category>` | Resource table for a category |
| `/contact` | Contact form |
| `/admin` | News ticker on/off |

## Notes and limitations

- The Admin page has no authentication, and the ticker setting lives in a process-global variable.
- The Contact form does not send email; it only renders a confirmation message.
- News, events and tweets depend on third-party widgets (rss.app, surfing-waves, Twitter), which may change or stop working over time.

## Context

Built at IIIT Hyderabad (2021) as a redesign exercise for the SERC website.

---

Made by [Mukul Kumar](https://mkk96.github.io) · [GitHub](https://github.com/mkk96) · [LinkedIn](https://www.linkedin.com/in/mukul-kumar-60322616b/)
