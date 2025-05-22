var buttonWithLongestTime = function(events) {
    let longestDuration = events[0][1];     // First event's time is its duration
    let buttonIndex = events[0][0];         // Initialize with the first button index

    for (let i = 1; i < events.length; i++) {
        let duration = events[i][1] - events[i - 1][1];
        let currentButton = events[i][0];

        if (duration > longestDuration) {
            longestDuration = duration;
            buttonIndex = currentButton;
        } else if (duration === longestDuration && currentButton < buttonIndex) {
            buttonIndex = currentButton;
        }
    }

    return buttonIndex;
};
