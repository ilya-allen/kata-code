function findKDistantIndices(nums, key, k) {
    const resultSet = new Set();
    
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key) {
            // Include all i where |i - j| <= k
            const start = Math.max(0, j - k);
            const end = Math.min(nums.length - 1, j + k);
            for (let i = start; i <= end; i++) {
                resultSet.add(i);
            }
        }
    }

    // Convert to sorted array
    return Array.from(resultSet).sort((a, b) => a - b);
}
