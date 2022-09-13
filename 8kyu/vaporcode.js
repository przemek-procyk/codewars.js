function vaporcode(string) {
    let newString = ""
    for (let i of string) {
      if (i == " ") {
        continue
      } else {
        newString += i.toUpperCase() + "  ";
      }
    }
    return newString.trim();
  }