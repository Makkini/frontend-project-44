#!/usr/bin/env node
import {greetings} from "../src/cli.js";
import {evenOddGame} from "./games/brain-even.js";
import {calcGame} from "./games/brain-calc.js";
import {gcdGame} from "./games/brain-gcd.js";
import {isPrimeGame} from "./games/brain-prime.js";
import {progressionGame} from "./games/brain-progression.js";

console.log("Welcome to the Brain Games!")
const name = greetings();
isPrimeGame(name);