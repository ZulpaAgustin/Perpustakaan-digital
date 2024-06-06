<template>
  <div class="container-fluid">
    <div class="row justify-content-between">
      <div class="col-1">
        <div class="icon">
          <nuxt-link to="/">
            <i class="bi bi-person-vcard-fill" style="width:50; height:80;"></i>
          </nuxt-link>
        </div>
      </div>
      <div class="col-2 d-flex justify-content-end align-items-center">
        <nuxt-link to="/buku/">
          <button type="button" class="btn btn-dark text-white">Cari Buku</button>
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

    <!-- bagian kategori -->
    <div class="oval">
      <span lang="en" class="badge text-bg-light">Kategori Buku Populer</span>
    </div>

    <div class="row row-cols-1 row-cols-md-5 g-5 mt-4 justify-content-center">
  <div class="col">
    <div class="card">
      <img src="~/assets/img/comic-1.webp" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h6>Komik</h6>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="~/assets/img/mapel-1.webp" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h6>Mata Pelajaran</h6>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="~/assets/img/novel-1.webp" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h6>Novel</h6>
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
/* .btn-bg {
  background-color: #6194f6;
  color: #ffffff;
} */
.container-fluid {
  background-color: #4377de;
}
</style>

<script setup>
useHead({
  title: "Menu - Perpus Digital Zulpa"
})
</script>
