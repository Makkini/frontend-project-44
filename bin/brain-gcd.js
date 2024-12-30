#!/usr/bin/env node

import { greetings } from '../src/cli.js';
import { gcdGame } from '../src/games/brain-gcd.js';

const name = greetings();
gcdGame(name);
