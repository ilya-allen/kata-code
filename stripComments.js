function solution(text, markers) {
    return text
        .split("\n")
        .map(line => {
            for (let marker of markers) {
                let index = line.indexOf(marker);
                if (index !== -1) {
                    line = line.slice(0, index); // Keep only the part before the marker
                }
            }
            return line.replace(/\s+$/, ""); // Remove only trailing whitespace
        })
        .join("\n");
}
