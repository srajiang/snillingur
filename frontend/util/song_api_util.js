export const fetchSongs = () => (

  $.ajax({

    method: "GET",
    url: `api/songs`,
  })
)

export const fetchSong = songId => (

  $.ajax({

    method: "GET",
    url: `api/songs/${songId}`,

  })
)

export const createSong = song => (

  $.ajax({

    method: "POST",
    url: `api/songs/`,
    data: { song: song },

  })
)

export const updateSong = song => (

  $.ajax({

    method: "PATCH",
    url: `api/songs/${song.id}`,
    data: { song: song },

  })
)

export const deleteSong = song => (

  $.ajax({

    method: "DELETE",
    url: `api/songs/${song.id}`

  })
)