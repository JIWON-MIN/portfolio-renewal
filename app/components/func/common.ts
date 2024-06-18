export function clx(...classes: Array<any>) {
  return classes.filter(Boolean).join(" ");
}

export function copyStr(str: string) {
  const tempInput = document.createElement("input");
  tempInput.value = str;

  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
