export function clx(...classes: Array<any>) {
  return classes.filter(Boolean).join(" ");
}
