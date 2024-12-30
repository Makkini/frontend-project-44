#!/usr/bin/env node

import { evenOddGame } from '../src/games/brain-even.js';
import { greetings } from '../src/cli.js';

const name = greetings();
evenOddGame(name);
