#!/usr/bin/env node

import { greetings } from '../src/cli.js';
import { calcGame } from '../src/games/brain-calc.js';

const name = greetings();
calcGame(name);
