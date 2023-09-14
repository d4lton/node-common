export function sprintf(template: string, ...args: any[]): string {
  if (typeof template !== "string") { return `${template}`; }
  // %[flags][width][.precision]specifier
  const regex = new RegExp(/%([+-]*)([.0-9]*)([sdf])/g);
  const tokens = template.match(regex);
  if (tokens) {
    const regex = new RegExp(/%([+-]*)([.0-9]*)([sdf])/);
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const [original, flags, format, type] = token.match(regex);
      let value = args[i] !== undefined ? args[i] : "";
      const match = format.match(/([0-9]+)\.([0-9]+)/);
      let width: number = match ? parseInt(match[1]) : parseInt(format);
      const precision: number = match ? parseInt(match[2]) : 0;
      switch (type) {
        case "s":
          if (width) {
            if (flags.includes("-")) { width = -width; }
            value = pad(value, width, " ");
          }
          template = template.replace(original, value);
          break;
      }
    }
  }
  return template;
}

export function printf(template: string, ...args: any[]): void {
  console.log(sprintf(template, ...args));
}

function pad(value: string, width: number, fill: string): string {
  if (width < 0) {
    width = Math.abs(width) - value.length;
    if (width > 1) {
      value = `${new Array(width).fill(fill).join("")}${value}`;
    }
  }
  if (width > 0) {
    width -= value.length;
    if (width > 1) {
      value = `${value}${new Array(width).fill(fill).join("")}`;
    }
  }
  return value;
}
