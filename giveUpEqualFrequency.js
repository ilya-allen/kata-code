var equalFrequency = function(word) {
    const freq = {};
    
    // Step 1: Calculate the frequency of each character
    for (const char of word) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    // Step 2: Try removing each character and check
    for (const char of word) {
        freq[char]--;

        // Remove from the map if frequency becomes 0
        if (freq[char] === 0) delete freq[char];

        // Check if all remaining frequencies are equal
        const uniqueFreq = new Set(Object.values(freq));
        if (uniqueFreq.size === 1) return true;

        // Restore the frequency map
        freq[char] = (freq[char] || 0) + 1;
    }

    return false;
};
