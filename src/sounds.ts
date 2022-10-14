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

export const CorrectSound = () => {
    const sounds = [certaResposta, acertoMizeravi, acertoAhMizeravi];
    return sounds[Math.floor(Math.random() * sounds.length)];
};

export const WrongSound = () => {
    const sounds = [errou];
    return sounds[Math.floor(Math.random() * sounds.length)];
};

export const GameWinSound = () => {
    const sounds = [missionPassed, acabou];
    return sounds[Math.floor(Math.random() * sounds.length)];
};

export const GameTieSound = () => {
    const sounds = [dilmaGanharPerder];
    return sounds[Math.floor(Math.random() * sounds.length)];
};

export const GameLoseSound = () => {
    const sounds = [chavesBurro, narutoSad, lolDefeat, amongusDefeat];
    return sounds[Math.floor(Math.random() * sounds.length)];
};

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
