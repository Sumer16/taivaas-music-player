<template>
  <div class="home">
    <header>
      <div class="header-shadow">
        <i class="fas fa-arrow-left"></i>
      </div>
      <h1 class="title-main">Taivaas</h1>
      <div class="header-shadow">
        <i class="fas fa-bars"></i>
      </div>
    </header>
    <main>
      <section class="thumbnail">
        <img :src="current.thumbnail" alt="">
      </section>
      <section class="player">
        <div class="song-title">
          <h2>{{ current.title }}</h2>
          <span>{{ current.artist }}</span>
        </div>
        <div class="progress-container" id="progress-container" v-on:click="clickProgress">
          <div class="progress" id="progress" :style="{ width: progressWidth + '%'}" v-on:timeupdate="updateProgress"></div>
        </div>
        <div class="controls">
          <button class="previous" v-on:click="previous"><i class="fas fa-backward"></i></button>
          <button class="play" v-if="!isPlaying" v-on:click="play"><i class="fas fa-play"></i></button>
          <button class="pause" v-else v-on:click="pause"><i class="fas fa-pause"></i></button>
          <button class="next" v-on:click="next"><i class="fas fa-forward"></i></button>
        </div>
      </section>
      <section class="playlist">
        <h3>The Playlist</h3>
        <button v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
          {{ song.title }}
        </button>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      progressWidth: null,
      songs: [
        {
          title: 'Affection',
          artist: 'Cigrattes after Sex',
          thumbnail: require('../assets/thumbnail-1.jpg'),
          src: require('../assets/affection.mp3')
        },
        {
          title: 'Apocalypse',
          artist: 'Cigrattes after Sex',
          thumbnail: require('../assets/thumbnail-2.jpg'),
          src: require('../assets/apocalypse.mp3')
        },
        {
          title: 'Boom Clap',
          artist: 'Charlie XCX',
          thumbnail: require('../assets/thumbnail-3.jpg'),
          src: require('../assets/boom-clap.mp3')
        },
        {
          title: 'Wake Me Up',
          artist: 'Avicii',
          thumbnail: require('../assets/thumbnail-5.jpg'),
          src: require('../assets/wake-me-up.mp3')
        },
        {
          title: 'Photograph',
          artist: 'Ed Sheeren',
          thumbnail: require('../assets/thumbnail-4.jpg'),
          src: require('../assets/photograph.mp3')
        }        
      ],
      player: new Audio()
    }
  },
  methods: {
    play(song) {
      if(typeof song.src != 'undefined' ) {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener('ended', this.next);
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if(this.index > this.songs.length - 1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
    previous() {
      this.index--;
      if(this.index < 0) {
        this.index = this.songs.length - 1;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
    updateProgress() {
      const duration = this.player.duration;
      const currentTime = this.player.currentTime;
      const progressPercent = (currentTime / duration) * 100;
      this.progressWidth = progressPercent;
    },
    clickProgress(e) {
      const width = this.$el.children[1].children[1].children[1].clientWidth;
      const clickX = e.offsetX;
      const duration = this.player.duration;

      this.player.currentTime = (clickX / width) * duration;
      this.updateProgress();
    }
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
  updated() {
    this.player.addEventListener('timeupdate', this.updateProgress);
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
header{
  padding: 25px;
  text-align: center;
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-main{
  font-family: monospace;
  color: #6C7A93;
  text-transform: uppercase;
}
main{
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 25px;
}
.header-shadow{
  padding:15px;
  border-radius:50%;
  box-shadow: -2px -2px 6px 3px #FBFFFF, 2px 2px 4px 3px #B7C4DD;
  border: 0.1px solid #c4cae696;
}
.header-shadow:hover{
  color: #525252;
  background-image: linear-gradient(to right, #BDBDBD, #525252);
  border: 0.1px solid #b7c4ddaf;
  box-shadow: 2px 2px 4px 3px #FBFFFF, -2px -2px 6px 3px #B7C4DD;
}
.thumbnail{
  text-align: center;
  box-shadow: -5px -5px 15px 3px #FBFFFF, 5px 5px 25px 15px #B7C4DD;
}
.thumbnail, img{
  border-radius: 55%;
}
img{
  border: 10px solid #DEE9FD;
}

.player{
  margin: 2rem 0;
}
.song-title{
  margin: 3rem 0;
  text-align: center;
}
.song-title h2{
  color: #6C7A93;
  font-size: 1.9rem;
  font-weight: 700;
}
.song-title span{
  color: gray;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: monospace;
}
.progress-container {
  background-color: #c8d9ee;
  border-radius: 5px;
  cursor: pointer;
  margin: 2rem 0;
  padding: 5px 0;
  height: 5px;
  width: 100%;
  display: flex;
  align-items: center;
}

.progress {
  background-color: #8e96a7af;
  border-radius: 5px;
  height: 10px;
  width: 0%;
  transition: width 0.1s linear;
  align-items: flex-start;
}

.controls{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 5px;
}

button{
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

/* .play, .pause{
  font-size: 1.25rem;
  font-weight: 700;
  padding: 15px 25px;
  margin: 20px 15px;
  border-radius: 8px;
  color: #fff;
  background-color: #cc2e50;
} */
.previous, .next, .play, .pause{
  font-size: 1rem;
  font-weight: 700;
  padding: 25px;
  margin: 15px 15px;
  border-radius: 50%;
  color: gray;
  border: 0.1px solid #b7c4ddaf;
  box-shadow: -2px -1px 15px 3px #FBFFFF, 2px 4px 5px 3px #B7C4DD;
}

.play:hover,
.next:hover,
.previous:hover,
.pause:hover{
  color: #525252;
  background-image: linear-gradient(to right, #BDBDBD, #525252);
  border: 0.1px solid #b7c4ddaf;
  box-shadow: 2px 4px 5px 3px #FBFFFF, -2px -1px 15px 3px #B7C4DD;
}

button:hover{
  opacity: 0.8;
}

.playlist{
  padding: 0 30px;
  margin: 3rem 0;
}
.playlist h3{
  color: #212121;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
  text-align: center;
}
.playlist .song{
  display: block;
  width: 100%;
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: 700;
  padding: 1rem;
  margin: 10px 0;
  color: gray;
}
.playlist .song:hover{
  border-radius: 10px;
  color: #494949;
  box-shadow: 2px 4px 5px 3px #FBFFFF, -2px -1px 15px 3px #B7C4DD;
}

.playlist .song.playing{
  color: #494949;
  border-radius: 10px;
  box-shadow: -2px -1px 15px 3px #FBFFFF, 2px 4px 5px 3px #B7C4DD;
  background-image: linear-gradient(to right, #525252, #BDBDBD);
}
</style>