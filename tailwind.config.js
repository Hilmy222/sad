/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/preline/dist/*.js',
    "index.html",
    "waspada.html",
    "tanya.html",
    "deskripsi.html",       
    "alternatif.html",
    "scan.html",
    "boleh.html",
    "createinformasi.html",
    "test.html",
    "pp.html"

  ],
  theme: {
    extend: {
      // screens:{
      //   'xs' : '320px',
      // },
      fontFamily:{
        sans : ["Poppins"]
     }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}