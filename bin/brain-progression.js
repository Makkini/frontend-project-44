#!/usr/bin/env node

import { greetings } from '../src/cli.js';
import { progressionGame } from '../src/games/brain-progression.js';

const name = greetings();
progressionGame(name);
