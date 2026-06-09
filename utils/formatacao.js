const meses = {
  Jan: "jan",
  Feb: "fev",
  Mar: "mar",
  Apr: "abr",
  May: "mai",
  Jun: "jun",
  Jul: "jul",
  Aug: "ago",
  Sep: "set",
  Sept: "set",
  Oct: "out",
  Nov: "nov",
  Dec: "dez",
};

export function formatarDataCriadoEm(data) {
  let partes = data.split("-");
  let dia = partes[2].split("T");
  return `${dia[0]}/${partes[1]}/${partes[0]}`;
}

export function traduzirData(data) {
  let partes = data.split(" ");
  let traducao = `${partes[1]} de ${meses[partes[0]]}`;
  return traducao;
}
