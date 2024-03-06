function calculatePoints(matches) {
    let totalPoints = 0;

    // Iterate over each match
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        const [ourScore, opponentScore] = match.split(':').map(Number);

        // Calculate points based on match result
        if (ourScore > opponentScore) {
            // Win
            totalPoints += 3;
        } else if (ourScore === opponentScore) {
            // Tie
            totalPoints += 1;
        }
        // Loss - no points awarded if ourScore < opponentScore
    }

    return totalPoints;
}

// Example usage
const matches = ["3:1", "2:2", "0:1", "4:0", "1:2", "1:1", "2:1", "0:3", "3:3", "2:0"];
console.log(calculatePoints(matches)); // Output should be the total points obtained by our team
