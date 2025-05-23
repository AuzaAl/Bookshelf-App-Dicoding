# Tugas Dicoding

**Proyek Aplikasi Bookshelf**  
Tugas ini telah diselesaikan oleh *Auza Alfarizi Ramadhan* sebagai bagian dari kursus *Belajar Membuat Front-End Web untuk Pemula* di Dicoding. Proyek ini menunjukkan keahlian dalam pengembangan web interaktif dan pengelolaan data.

## Tentang Saya

Saya memiliki keahlian dalam:  
- **HTML** dan **CSS** untuk membangun tampilan web yang *menarik* dan *responsif*.  
- Dasar **JavaScript** untuk menciptakan *interaktivitas* pada situs.  

## Ketentuan Pengerjaan Proyek

Untuk mempermudah penilaian, harap patuhi ketentuan berikut:

1. **Jaga Atribut `data-testid`**  
   Dilarang mengubah atau menghapus atribut `data-testid` pada elemen HTML.

2. **Penambahan Atribut**  
   Anda boleh menambahkan atribut seperti `class` untuk keperluan styling, selama atribut `data-testid` dan nilainya tidak diubah atau dihapus.

3. **Atribut Data Buku**  
   Setiap elemen buku harus menyertakan atribut berikut:  
   - `data-bookid`: ID unik untuk setiap buku.  
   - `data-testid`: Penanda jenis data buku, dengan nilai:  
     - `bookItem`: Kontainer data buku.  
     - `bookItemTitle`: Judul buku.  
     - `bookItemAuthor`: Penulis buku.  
     - `bookItemYear`: Tahun terbit buku.  
     - `bookItemIsCompleteButton`: Tombol untuk mengubah status buku ("Belum Selesai" ↔ "Selesai").  
     - `bookItemDeleteButton`: Tombol untuk menghapus buku.  
     - `bookItemEditButton`: Tombol untuk mengedit data buku.

4. **Templat Buku**  
   Gunakan templat HTML berikut untuk mempermudah pengerjaan:

```html
<div data-bookid="{{ id_buku }}" data-testid="bookItem">
  <h3 data-testid="bookItemTitle">{{ judul_buku }}</h3>
  <p data-testid="bookItemAuthor">Penulis: {{ penulis_buku }}</p>
  <p data-testid="bookItemYear">Tahun: {{ tahun_buku }}</p>
  <div>
    <button data-testid="bookItemIsCompleteButton">{{ tombol_status }}</button>
    <button data-testid="bookItemDeleteButton">{{ tombol_hapus }}</button>
    <button data-testid="bookItemEditButton">{{ tombol_edit }}</button>
  </div>
</div>
```

## Catatan Penutup

Tugas Di Selesaikan Oleh Auza Alfarizi Ramadhan , Pada 10/02/2025
