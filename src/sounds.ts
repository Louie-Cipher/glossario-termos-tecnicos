import correctSound from './assets/sounds/correct.mp3';
import errouSound from './assets/sounds/faustao-errou.mp3';
import missionPassedSound from './assets/sounds/gta-mission-passed.mp3';
import chavesBurroSound from './assets/sounds/chaves-ai-que-burro.mp3';
import narutoSound from './assets/sounds/naruto-sadness.mp3';
import lolDefeatSound from './assets/sounds/lol-defeat.mp3';
import { Howl } from 'howler';

export const CorrectSound = () => {
    const sounds = [correctSound];
    return sounds[Math.floor(Math.random() * sounds.length)];
};

export const WrongSound = () => {
    const sounds = [errouSound];
    return sounds[Math.floor(Math.random() * sounds.length)];
};

export const GameWinSound = () => {
    const sounds = [missionPassedSound];
    return sounds[Math.floor(Math.random() * sounds.length)];
};

export const GameLoseSound = () => {
    const sounds = [chavesBurroSound, narutoSound, lolDefeatSound];
    return sounds[Math.floor(Math.random() * sounds.length)];
};

export const play = (sound: string) => {
    const soundPlayer = new Howl({
        src: [sound],
        volume: 0.4,
    });
    soundPlayer.play();
};
