function getConfigFlag(name: string, defaultValue?: string) {
  switch (name) {
    case "shouldShowPage":
      return Math.random() > 0.5;
    case "userName":
      return Math.random() > 0.5 ? "John" : "Jane";
    default:
      return defaultValue;
  }
}

export default getConfigFlag;
