const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const hasilpromiseTheaterIXX = await promiseTheaterIXX();
  const hasilpromiseTheaterVGC = await promiseTheaterVGC();
  const hasilnonton = [...hasilpromiseTheaterIXX, ...hasilpromiseTheaterVGC];
  const filterhasil = hasilnonton.filter((e) => {
    return e.hasil == emosi;
  });
  return filterhasil.length;
};

module.exports = {
  promiseOutput,
};
