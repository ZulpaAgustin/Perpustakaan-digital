<script setup>
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')
const supabase = useSupabaseClient()

const route = useRoute()
const buku = ref([])  

const getBookById = async () => {
  const { data, error } = await supabase.from('Buku').select(`*, Kategori_Buku(*)`)
  .eq('id', route.params.id)
  .single()
  if(data) buku.value = data
}

onMounted(() => {
  getBookById()

//   myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

})



</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="icon mt-4">
          <nuxt-link to="/buku">
            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="40" fill="currentColor" class="bi bi-arrow-left-square-fill text-white" viewBox="0 0 16 16">
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
            </svg>
          </nuxt-link>
          <h2 class="text-center my-4">{{ buku.judul }}</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-4 text-white d-flex flex-column justify-content-center">
        <h4>Detail Buku :</h4>
        <h5>Penulis: {{ buku.penulis }}</h5>
        <h5>Jumlah Halaman: {{ buku.jumlah_halaman }}</h5>
        <h5>Tahun Terbit: {{ buku.tahun_terbit }}</h5>
        <h5>Penerbit: {{ buku.penerbit }}</h5>
        <h5>Rak: {{ buku.rak }}</h5>
      </div>
      <div class="col-4 d-flex flex-column justify-content-center align-items-center">
        <div class="mb-5">
          <div class="card-body">
            <img :src= "buku.cover"  alt="">
          </div>
        </div>
      </div>
      <div class="col-4 d-flex flex-column justify-content-center align-items-center">
        <button type="button" class="btn btn-lg text-white mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal"  style="background-color: #123577; width: 200px;">Selesai</button>
        <!-- <button type="submit" class="btn btn-lg text-white mb-4" style="background-color: #123577; width: 200px;">Membaca Buku</button>
        <button type="submit" class="btn btn-lg text-white mb-4" style="background-color: #123577; width: 200px;">Mengembalikan</button> -->
      </div>
    </div>

<!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->

<!-- Modal -->
<!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->


    
  <div class="row text-white">
      <div class="col">
        <h4>Deskripsi :</h4>
        <h5>{{ buku.deskripsi }}</h5>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container-fluid {
  background-color: #4377de;
}
h2 {
  color: #fff;
}
</style>