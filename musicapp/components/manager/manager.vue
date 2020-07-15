<template>
  <section class="mt-5">
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="card-title mb-4">
                <h4>Add Music</h4>
              </div>
              <form>
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" id="title" class="form-control" name="title" />
                </div>
                <div class="form-group">
                  <label for="artist">Artist</label>
                  <input type="text" id="artist" class="form-control" name="artist" />
                </div>
                <div class="form-group">
                  <label for="music">Music</label>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" />
                    <label for="customFile" class="custom-file-label">Choose file</label>
                  </div>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card bg-light p-1 showdow-sm">
            <div class="card-title">
              <button class="btn btn-info m-3">Add Music</button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Date created</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <div
                  v-if="musicLoading"
                  class="spinner-border"
                  style="width: 3rem; height: 3rem"
                  role="status"
                >
                  <span class="sr-only">Loading...</span>
                </div>
                <tbody v-else>
                  <tr v-for="(music, index) in allmusic.data" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ music.title }}</td>
                    <td>{{ music.artist }}</td>
                    <td>{{ music.createdAt }}</td>
                    <td>
                      <button class="btn btn-info" @click="deleteMusic(music._id)">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      allmusic: [],
      musicLoading: false
    };
  },
  methods: {
    async getAllMusics() {
      this.musicLoading = true;
      try {
        let data = await this.$axios.$get("/api/music");
        console.log(data);
        this.allmusic = data;
        this.musicLoading = false;
      } catch (err) {
        this.musicLoading = false;
        // swal("Error", "Error Fetching Musics", "error");
      }
    },
    addNewMusic() {},
    deleteMusic(id) {}
  },
  created() {
    this.getAllMusics();
  }
};
</script>