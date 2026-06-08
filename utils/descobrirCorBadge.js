export default function descobrirCorBadge(status) {
  if (status === "Vaga Divulgada") {
    return ["#2563eb", "#3b82f6"];
  } else if (status === "Aprovado") {
    return ["#008000", "#2e962e"];
  } else if (status === "Rejeitado") {
    return ["#ff0000", "#e74747"];
  } else {
    return ["#ffff00", "#e9e93c"];
  }
}
