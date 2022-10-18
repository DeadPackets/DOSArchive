# DOSArchive

A website dedicating to showcasing my father's (Yasser Awad) DOS programming work from the 90s. You can view the website [here](http://projects.deadpackets.pw/DOSArchive/).

## How it works

- Bootstrap v4.5 for the frontend
- [`js-dos`](https://js-dos.com/) for emulating a DOS OS in the browser
- Google Fonts for the custom fonts

## Project structure

- `programs/` is the directory where the original source of all the DOS projects are.
- `dist/` contains the zipped versions of each project, to be fetched by the frontend.
- `prepare.py` is the script that prepares the zip files in the `dist/` folder.
- `js/` contains the source for `js-dos`, the library used to emulate DOS in the browser.
- `images/` is the directory containing the screenshots of each project.
- `index.html`, `run.html`, and `terminal.html` are the 3 frontend files for the project.
