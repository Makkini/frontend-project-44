#!/usr/bin/env node
import {greetings} from "../src/cli.js";
import {evenOddGame} from "./games/brain-even.js";

console.log("Welcome to the Brain Games!")
const name = greetings();
evenOddGame(name);