// images
import learnProgrammingImg from '../assets/img/learnProgramming.png'
import FilmHubImg from '../assets/img/FilmHub.png';
import CraftSellImg from '../assets/img/CraftSell.png';
import discordBotImg from '../assets/img/discordBot.png';
import fomponentImg from '../assets/img/fomponent.png';
import fastCssCopyImg from '../assets/img/fastCssCopy.png';
import interpreterImg from '../assets/img/interpreter.png';
import cleanUpReactImg from '../assets/img/cleanUpReact.png';

import photobomberImg from '../assets/img/photobomber.png';
import svgEditorImg from '../assets/img/svgEditor.png';

const selectedProjectsData = [
  {
    link: "https://github.com/khe4oyan/learn_programming_site",
    imgSrc: learnProgrammingImg,
    title: "Learn Programming",
    whatIs: "A site for training various skills with the ability to admin panel with a convenient editor of a new post",
    extensionName: null,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "https://khe4oyan.github.io/react_filmHub/",
    imgSrc: FilmHubImg,
    title: 'FilmHub',
    whatIs: 'Films list with ganres',
    extensionName: null,
    tags: ["React JS", "redux js", "react-redux", "@reduxjs/toolkit", "axios"],
  },
  {
    link: "https://khe4oyan.github.io/react-shop/",
    imgSrc: CraftSellImg,
    title: 'Buy Craft Sell',
    whatIs: 'Game where you can buy cases, craft items and sell',
    extensionName: null,
    tags: ["React JS", "redux js", "react-redux", "@reduxjs/toolkit"],
  },
  {
    link: "https://github.com/khe4oyan/discord_bot",
    imgSrc: discordBotImg,
    title: "Discord BOT | Барахолка",
    whatIs: "This is a discord bot that adds a mini-game to chats with interesting mechanics of seasonal events, cases and items!",
    extensionName: null,
    tags: ["discord.js", "express", "sharp"],
  },
  {
    link: "https://github.com/khe4oyan/FastCssCopy-vscode",
    imgSrc: fastCssCopyImg,
    title: 'Fast CSS Copy',
    whatIs: 'Is a extention for Visual Studio Code for Speed up development by copying styles from HTML to CSS with a single keyboard shortcut',
    extensionName: "khechoyan.fast-css-copy",
    tags: [],
  },
  {
    link: "https://github.com/khe4oyan/CleanUpReact-vscode",
    imgSrc: cleanUpReactImg,
    title: 'Clean Up React',
    whatIs: 'Clean-Up React is a VS Code extension that automatically removes unnecessary files created when initializing a React project and cleans up the remaining files from unnecessary information.',
    extensionName: "khechoyan.clean-up-react",
    tags: [],
  },
  {
    link: "https://github.com/khe4oyan/fomponent-vscode",
    imgSrc: fomponentImg,
    title: 'Fomponent',
    whatIs: 'Fomponent is a extention for Visual Studio Code for instant creation of React.JS components in your project',
    extensionName: "khechoyan.fomponent",
    tags: [],
  },
  {
    link: "https://github.com/khe4oyan/picsart_academy_project_interpretator",
    imgSrc: interpreterImg,
    title: 'Interpreter',
    whatIs: 'An interpreter written in C++ that compiles a fictional programming language.',
    extensionName: null,
    tags: ["C++"],
  },
  {
    link: "https://github.com/khe4oyan/photobomber",
    imgSrc: photobomberImg,
    title: 'Photobomber | Photo Storage',
    whatIs: 'Storage of photos in separate albums, sorted by date of their addition',
    extensionName: null,
    tags: ["React JS", "Node JS", "express", "multer"],
  },
  {
    link: "https://github.com/khe4oyan/svg_editor",
    imgSrc: svgEditorImg,
    title: 'SVG Editor',
    whatIs: 'Client side SVG editor',
    extensionName: null,
    tags: ["HTML", "CSS", "JavaScript", "Node JS", "express"],
  },
];

export default selectedProjectsData;