import { Howl } from 'howler';

import certaResposta from './assets/sounds/certa-resposta.mp3';
import acertoMizeravi from './assets/sounds/acerto-mizeravi.mp3';
import acertoAhMizeravi from './assets/sounds/acerto-ah-miseravi.mp3';

import errou from './assets/sounds/faustao-errou.mp3';

import missionPassed from './assets/sounds/gta-mission-passed.mp3';
import acabou from './assets/sounds/acabou.mp3';

import dilmaGanharPerder from './assets/sounds/dilma-ganhar-perder.mp3';

import chavesBurro from './assets/sounds/chaves-ai-que-burro.mp3';
import narutoSad from './assets/sounds/naruto-sadness.mp3';
import lolDefeat from './assets/sounds/lol-defeat.mp3';
import amongusDefeat from './assets/sounds/amongus-defeat.mp3';

const correctSounds = [certaResposta, acertoMizeravi, acertoAhMizeravi];
const wrongSounds = [errou];

export const AnswerSound = (correct: boolean) => {
    const sounds = correct ? correctSounds : wrongSounds;
    return sounds[Math.floor(Math.random() * sounds.length)];
};

const gameWinSounds = [missionPassed, acabou];
export const GameWinSound = () => gameWinSounds[Math.floor(Math.random() * gameWinSounds.length)];

const gameTieSounds = [dilmaGanharPerder];
export const GameTieSound = () => gameTieSounds[Math.floor(Math.random() * gameTieSounds.length)];

const gameLoseSound = [chavesBurro, narutoSad, lolDefeat, amongusDefeat];
export const GameLoseSound = () => gameLoseSound[Math.floor(Math.random() * gameLoseSound.length)];

export const GameOverSound = (percent: number) => {
    if (percent > 50) return GameWinSound();
    if (percent < 50) return GameLoseSound();
    return GameTieSound();
};

export const play = (sound: string) => {
    const soundPlayer = new Howl({
        src: [sound],
        volume: 0.4,
    });
    soundPlayer.play();
};
