<template>
  <div class="container-fluid">
    <div class="row justify-content-between">
      <div class="col-1">
        <div class="icon">
          <nuxt-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" fill="currentColor" class="bi bi-person-vcard-fill text-white" viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
      <div class="col-2 d-flex justify-content-end align-items-center">
        <nuxt-link to="/buku/">
          <button type="button" class="btn btn-bg">Cari Buku</button>
        </nuxt-link>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-lg-6">
        <nuxt-link to="/pengunjung/" style="text-decoration: none">
          <div class="card bg-pengunjung rounded-5">
            <div class="card-body">
              <h2>Riwayat Pengunjung</h2>
            </div>
          </div>
        </nuxt-link>
      </div>

      <div class="col-lg-6">
        <nuxt-link to="/buku/rekomen" style="text-decoration: none">
          <div class="card bg-buku rounded-5">
            <div class="card-body">
              <h2>Rekomendasi Buku</h2>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- bagian new book -->
    <div class="oval">
      <span class="badge text-bg-light">Buku Terbaru</span>
    </div>

    <!-- card -->
    <div class="row row-cols-1 row-cols-md-5 g-5 mt-4 justify-content-center">
      <div class="col">
        <div class="card h-100">
          <nuxt-link to="/buku/[id]">
            <img src="~/assets/img/korea.webp" class="card-img-top" alt="..." />
          </nuxt-link>
          <div class="card-body">
            <h5 class="card-title">The Sadness Winter in Korea</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <nuxt-link to="/buku/[id]">
            <img src="~/assets/img/jingga.webp" class="card-img-top" alt="..." />
          </nuxt-link>
          <div class="card-body">
            <h5 class="card-title">Bidadari Jingga</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <nuxt-link to="/buku/[id]">
            <img src="~/assets/img/step.webp" class="card-img-top" alt="..." />
          </nuxt-link>
          <div class="card-body">
            <h5 class="card-title">Kepemimpinan Pembelajaran dan Supervisi Akademik</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <nuxt-link to="/buku/[id]">
            <img src="~/assets/img/7key.webp" class="card-img-top" alt="..." />
          </nuxt-link>
          <div class="card-body">
            <h5 class="card-title">7 Kunci Sukses Family Business</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 250px;
  box-shadow: 1px 1px 10px #424242;
}
.card.bg-pengunjung {
  background-image: url("img/kunjung.webp");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: #ffffff;
}
.card.bg-buku {
  background: url("img/cari.webp") no-repeat center center;
  background-size: cover;
  color: #ffffff;
}
.oval {
  font-size: 30px;
}
.btn-bg {
  background-color: #6194f6;
  color: #ffffff;
}
.container-fluid {
  background-color: #4377de;
}
</style>
