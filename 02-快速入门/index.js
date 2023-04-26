const playList = {
    data() {
        return {
            searchTerm: "",
            playList: ["回到过去", "浪漫手机", "东风破", "trouble is friend"]
        }
    },
    computed: {
        filterSongList() {
            if (this.searchTerm) {
                 return this.playList.filter((song) => {
                    return song.toLowerCase().includes(this.searchTerm.toLowerCase())
                })
            } else {
                return this.playList
            }
        }
    }
}

Vue.createApp(playList).mount("#app")