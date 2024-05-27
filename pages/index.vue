<template>
  <div class="bg">
    <div class="row">
      <div class="col-6"></div>
      <div class="col-6">
        <h2 class="text-center my-4">ISI BUKU KUNJUNGAN</h2>
        <form class="mt-5" @submit.prevent="kirimData">
          <div class="mb-4">
            <input v-model="form.nama" type="text" class="form-control form-control-lg rounded-5" placeholder="Nama" />
          </div>
          <div class="mb-4">
            <select v-model="form.keanggotaan" class="form-control form-control-lg form-select rounded-5">
              <option value="">Keanggotaan</option>
              <option v-for="(member, i) in members" :key="i" :value="member.id">{{ member.nama }}</option>
            </select>
          </div>
          <div class="mb-4" v-if="form.keanggotaan === 1">
            <div class="row">
              <div class="col-md-4">
                <select v-model="form.tingkat" class="form-control form-control-lg form-select rounded-5 mb-2">
                  <option value="">Tingkat</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div class="col-md-4">
                <select v-model="form.jurusan" class="form-control form-control-lg form-select rounded-5 mb-2">
                  <option value="">Jurusan</option>
                  <option value="PPLG">PPLG</option>
                  <option value="TJKT">TJKT</option>
                  <option value="TBSM">TBSM</option>
                  <option value="DKV">DKV</option>
                  <option value="TOI">TOI</option>
                </select>
              </div>
              <div class="col-md-4">
                <select v-model="form.kelas" class="form-control form-control-lg form-select rounded-5 mb-2">
                  <option value="">Kelas</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <select v-model="form.keperluan" class="form-control form-control-lg form-select rounded-5">
              <option value="">Keperluan</option>
              <option v-for="(item, i) in objectives" :key="i" :value="item.id">{{ item.nama }}</option>
            </select>
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-light btn-lg rounded-5 px-5 me-md-2 mt-4">Kirim</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const members = ref([]);
const objectives = ref([]);

const form = ref({
  nama: "",
  keanggotaan: "",
  tingkat: "",
  jurusan: "",
  kelas: "",
  keperluan: "",
});

const kirimData = async () => {
  // console.log(form.value);
  const { error } = await supabase.from("Pengunjung").insert([form.value]);
  if (!error) navigateTo("/pengunjung");
};

const getKeanggotaan = async () => {
  const { data, error } = await supabase.from("Keanggotaan").select("*");
  if (data) members.value = data;
};
const getKeperluan = async () => {
  const { data, error } = await supabase.from("Keperluan").select("*");
  if (data) objectives.value = data;
};

onMounted(() => {
  getKeanggotaan();
  getKeperluan();
});
</script>

<style scoped>
.bg {
  background-image: url("assets/img/bg1.webp");
}
h2 {
  color: #fff;
}
</style>
