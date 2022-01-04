const { Plugin } = require("powercord/entities");
const { inject, uninject } = require("powercord/injector");
const { getModule } = require("powercord/webpack");

function playSound(url, volume) {
    const audio = new Audio();
    audio.src = url;
    if (volume) audio.volume = volume;
    audio.play();
}

class LilSoundPlugin extends Plugin {
    async startPlugin() {
        const SoundPlayer = await getModule(["playSound"]);
        inject("lilcord-playSound", SoundPlayer, "playSound", (e) => {
            console.log(e[0]);
            console.log("[DBG] " + window.location.pathname);
            if (e[0] === "message1") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/message.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "unmute") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/unmute.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "mute") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/mute.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "undeafen") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/undeafen.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "deafen") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/deafen.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "user_join") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/user_join.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "user_leave") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/user_leave.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "disconnect") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/disconnect.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "stream_started") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/stream_started.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "stream_ended") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/stream_stopped.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "stream_user_joined") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/viewer_join.mp3?raw=true", e[1]);
                return false;
            } else if (e[0] === "stream_user_left") {
                playSound("https://github.com/Lemorz56/pc-lilcord/blob/main/lil-sounds/viewer_leave.mp3?raw=true", e[1]);
                return false;
            }

            return e;
        }, true);
    }

    pluginWillUnload() {
        uninject("lilcord-playSound");
    }
}

module.exports = LilSoundPlugin;
