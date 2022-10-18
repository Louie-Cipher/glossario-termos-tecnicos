import { Howl } from 'howler';

// resposta certa
import certaResposta from './assets/sounds/certa-resposta.mp3';
import acertoMizeravi from './assets/sounds/acerto-mizeravi.mp3';
import acertoAhMizeravi from './assets/sounds/acerto-ah-miseravi.mp3';

// resposta errada
import errou from './assets/sounds/faustao-errou.mp3';

// gameOver vitória
import missionPassed from './assets/sounds/gta-mission-passed.mp3';
import acabou from './assets/sounds/acabou.mp3';

// gameOver 50%
import dilmaGanharPerder from './assets/sounds/dilma-ganhar-perder.mp3';
import galvaoPerdeuGanhou from './assets/sounds/galvao-perdeu-ganhou.mp3';

// gameOver derrota
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
const gameTieSounds = [dilmaGanharPerder, galvaoPerdeuGanhou];
const gameLoseSound = [chavesBurro, narutoSad, lolDefeat, amongusDefeat];

export const GameOverSound = (percent: number) => {
    if (percent > 50) return gameWinSounds[Math.floor(Math.random() * gameWinSounds.length)];
    if (percent < 50) return gameLoseSound[Math.floor(Math.random() * gameLoseSound.length)];
    return gameTieSounds[Math.floor(Math.random() * gameTieSounds.length)];
};

export const play = (sound: string) => {
    const soundPlayer = new Howl({
        src: [sound],
        volume: 1,
    });
    soundPlayer.play();
};
