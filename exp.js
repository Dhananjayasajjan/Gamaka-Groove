let currentProgressInterval;
        let isPlaying = false;
        let currentSong = null;
        let audioPlayer = document.getElementById('audio-player');
        let currentTime = 0; // Track current time for resume functionality
        
        document.getElementById('toggleButton').addEventListener('click', function() {
            let albums = document.querySelectorAll('.album');
            let isExpanded = this.textContent === 'View Less';
            
            albums.forEach((album, index) => {
                if (index >= 4) {
                    album.style.display = isExpanded ? 'none' : 'block';
                }
            });
            
            this.textContent = isExpanded ? 'View All' : 'View Less';
        });

        function searchSongs() {
            let filter = document.getElementById('searchBar').value.toLowerCase();
            let albums = document.querySelectorAll('.album');
            
            albums.forEach(album => {
                let text = album.textContent.toLowerCase();
                if (text.includes(filter)) {
                    album.style.display = 'block';
                } else {
                    album.style.display = 'none';
                }
            });
        }

        document.getElementById('searchBar').addEventListener('input', searchSongs);
        document.getElementById('searchButton').addEventListener('click', searchSongs);


        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }

        function updateProgress(audio, progressElement) {
            const remainingTime = audio.duration - audio.currentTime;
            progressElement.textContent = formatTime(remainingTime);
        }

        function displayDuration(song, durationElementId) {
            const audio = new Audio(song);
            const durationElement = document.getElementById(durationElementId);

            audio.addEventListener('loadedmetadata', () => {
                durationElement.textContent = `Duration: ${formatTime(audio.duration)}`;
            });

            if (audio.readyState >= 1) {
                durationElement.textContent = `Duration: ${formatTime(audio.duration)}`;
            }
        }

        function playPauseSong(song, button) {
            if (currentSong === song && isPlaying) {
                // Pause the song if it's already playing
                audioPlayer.pause();
                button.textContent = '▶';  // Change to play icon
                isPlaying = false;
                currentTime = audioPlayer.currentTime; // Save the current time when paused
                clearInterval(currentProgressInterval);
            } else {
                // If it's a new song or the same song, play from where it left off
                if (currentSong !== song) {
                    currentSong = song;
                    audioPlayer.src = song;
                    audioPlayer.currentTime = currentTime; // Start from saved position
                    audioPlayer.play();
                    button.textContent = '⏸';  // Change to pause icon

                    const songDetails = button.closest('.song').querySelector('.song-details');
                    const progressElement = songDetails.querySelector('p.progress');

                    clearInterval(currentProgressInterval);
                    currentProgressInterval = setInterval(() => {
                        updateProgress(audioPlayer, progressElement);
                    }, 1000);
                } else {
                    audioPlayer.play();
                    button.textContent = '⏸';  // Change to pause icon
                }
                isPlaying = true;
            }
        }

    //  function openAlbum(albumId) {
            
    //         const albums = document.querySelectorAll('.song-list');
    //         albums.forEach(album => album.style.display = 'none');
            
    //         const selectedAlbum = document.getElementById(albumId);
    //         selectedAlbum.style.display = 'flex';

    //         const songs = selectedAlbum.querySelectorAll('.song');
    //         songs.forEach(song => {
    //             const audio = song.querySelector('button').onclick;
    //             const songSrc = audio.toString().match(/'([^']+)'/)[1];
    //             const durationId = song.querySelector('p').id;
    //             displayDuration(songSrc, durationId);
    //         });
    //     }   
        function openAlbum(albumId) {
            window.location.href = `album/album1.html?album1=${albumId}`;
        }
        function openAlbum2(albumId) {
            window.location.href = `album/album2.html?album2=${albumId}`;
        }
        function openAlbum3(albumId) {
            window.location.href = `album/album3.html?album3=${albumId}`;
        }
        