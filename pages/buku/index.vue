<template>
  <div class="container-fluid">
    <div style="background-color: #4377de">
      <div class="row">
        <div class="col-lg-12">
          <div class="icon mt-4">
            <nuxt-link to="/pengunjung/menu">
              <svg aria-label="icon' xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" class="bi bi-arrow-left-square-fill text-white" viewBox="0 0 16 16">
                <path aria-label="back" d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-8">
          <h2 class="text-center ms-5">Pilih Buku</h2>
        </div>
        <div class="col-lg-4 d-flex justify-content-end align-items-center">
          <div class="me-3">
            <form @submit.prevent="getBooks">
              <input v-model="keyword" type="search" class="form-control rounded-5 bi bi-search" placeholder="Cari buku disini..." />
            </form>
          </div>
        </div>
      </div>
      <div class="ms-3 fs-6 text-white">Menampilkan {{ books.length }} Dari {{ Semua }}</div>
      <div class="row mt-5">
        <div v-for="(book, i) in books" :key="i" class="col-3 d-flex flex-column justify-content-center align-items-center">
          <div class="card mb-3" style="width: 16rem">
            <div class="card-header" style="height: 350px">
              <img :src="book.cover" alt="book.judul" class="card-img-top" />
              <div class="card-body">
                <h5>{{ book.judul }}</h5>
                <nuxt-link :to="`/buku/${book.id}`">
                  <button type="submit" class="btn my-3">Buka</button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Buku - Perpus Digital Zulpa"
})
const supabase = useSupabaseClient();

const books = ref([]);
const Semua = ref(0);
const keyword = ref("");

const getBooks = async () => {
  const { data, error } = await supabase.from("Buku").select(`*, kategori(*)`).ilike("judul, ", `%${keyword.value}%`);
  if (data) books.value = data;
};

const getSemuabuku = async () => {
  const { data, count } = await supabase.from("Buku").select("*", { count: "exact" });
  if (data) Semua.value = count;
};

onMounted(() => {
  getBooks();
  getSemuabuku();
});

</script>

<style scoped>
.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 30;
}
h2 {
  color: #fff;
  font-family: inherit;
}
.btn {
  background-color: #315fb7;
  color: #fff;
}
</style>
