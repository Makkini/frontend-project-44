#!/usr/bin/env node

import { greetings } from '../src/cli.js';
import { isPrimeGame } from '../src/games/brain-prime.js';

const name = greetings();
isPrimeGame(name);
