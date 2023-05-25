# Harmonio-Inator

This repository contains the code for Harmonio-Inator, a music grid powered by Tone.js. It allows users to create melodies by clicking on cells in the grid, triggering musical notes to be played.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Harmonio-Inator is a web-based music grid built using HTML, CSS, and JavaScript. It utilizes the Tone.js library to generate and play musical notes based on user interactions with the grid.

The grid consists of multiple rows and cells, where each cell represents a musical element. By clicking on a cell, the corresponding musical note or chord is played. The melodies are predefined and stored in an array, and each cell is associated with an index that maps to a specific melody.

## Usage

To use Harmonio-Inator, simply open the `index.html` file in a web browser. The grid will be displayed, and you can start creating melodies by clicking on the cells. Each click will trigger a melody based on the associated index of the cell. The melodies are played sequentially, allowing you to create unique musical patterns by selecting different cells.

Feel free to modify the melodies in the `melodyArray` to experiment with different chord progressions and musical ideas. You can also customize the styling of the grid by editing the `style.css` file.

## Dependencies

Harmonio-Inator relies on the following external library:

- [Tone.js](https://tonejs.github.io/): A Web Audio framework for creating interactive music in the browser.

The necessary version of Tone.js is included in the HTML file using a Content Delivery Network (CDN) link.

## Contributing

Contributions to Harmonio-Inator are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.

---

Enjoy creating melodies with Harmonio-Inator! If you have any further questions or need assistance, please let me know.
