const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { getModule } = require('powercord/webpack');
const sound = require('sound-play');
const path = require('path');

function playSound (file, volume) {
  const filePath = path.join(__dirname, '/lil-sounds/' + file);
  try {
    sound.play(filePath, volume);
  } catch (ex) {
    console.log(ex.message);
  }
}

class LilSoundPlugin extends Plugin {
  async startPlugin () {
    const SoundPlayer = await getModule([ 'playSound' ]);
    inject('lilcord-playSound', SoundPlayer, 'playSound', (e) => {
      switch (e[0]) {
        case 'message1':
          playSound('message.mp3', e[1]);
          return false;
        case 'unmute':
          playSound('unmute.mp3', e[1]);
          return false;
        case 'mute':
          playSound('mute.mp3', e[1]);
          return false;
        case 'undeafen':
          playSound('undeafen.mp3', e[1]);
          return false;
        case 'deafen':
          playSound('deafen.mp3', e[1]);
          return false;
        case 'user_join':
          playSound('user_join.mp3', e[1]);
          return false;
        case 'user_leave':
          playSound('user_leave.mp3', e[1]);
          return false;
        case 'disconnect':
          playSound('disconnect.mp3', e[1]);
          return false;
        case 'stream_started':
          playSound('stream_started.mp3', e[1]);
          return false;
        case 'stream_ended':
          playSound('stream_stopped.mp3', e[1]);
          return false;
        case 'stream_user_joined':
          playSound('viewer_join.mp3', e[1]);
          return false;
        case 'stream_user_left':
          playSound('viewer_leave.mp3', e[1]);
          return false;
        default:
          return e;
      }
    }, true);
  }

  pluginWillUnload () {
    uninject('lilcord-playSound');
  }
}

module.exports = LilSoundPlugin;
