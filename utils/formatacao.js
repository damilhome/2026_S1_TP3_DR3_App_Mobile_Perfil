export function formatarDataCriadoEm(data) {
  let partes = data.split("-");
  let dia = partes[2].split("T");
  return `${dia[0]}/${partes[1]}/${partes[0]}`;
}
