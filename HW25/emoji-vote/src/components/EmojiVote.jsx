import React, { Component } from "react";

class EmojiVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: this.getStoredVotes(),
            showResults: false,
        };
    }
    getStoredVotes() {
        const storedVotes = localStorage.getItem("emojiVotes");
        return storedVotes ? JSON.parse(storedVotes) : Array(this.props.emojis.length).fill(0);
    }


    updateLocalStorage(votes) {
        localStorage.setItem("emojiVotes", JSON.stringify(votes));
    }

    handleVote = (index) => {
        const newVotes = [...this.state.votes];
        newVotes[index] += 1;
        this.setState({ votes: newVotes });
        this.updateLocalStorage(newVotes);
    };

    handleClear = () => {
        const resetVotes = Array(this.props.emojis.length).fill(0);
        this.setState({ votes: resetVotes });
        localStorage.removeItem("emojiVotes");
    };

    toggleResults = () => {
        this.setState({ showResults: !this.state.showResults });
    };

    getWinner = () => {
        const maxVotes = Math.max(...this.state.votes);
        const winnerIndex = this.state.votes.indexOf(maxVotes);
        return { emoji: this.props.emojis[winnerIndex], votes: maxVotes };
    };

    render() {
        const { emojis } = this.props;
        const { votes, showResults } = this.state;
        const winner = this.getWinner();

        return (
            <div style={styles.container}>
                <h2>Голосування за найкращий смайлик</h2>
                <div style={styles.emojiContainer}>
                    {emojis.map((emoji, index) => (
                        <div key={index} style={styles.emojiBox}>
              <span style={styles.emoji} onClick={() => this.handleVote(index)}>
                {emoji}
              </span>
                            <p>{votes[index]}</p>
                        </div>
                    ))}
                </div>

                <button style={styles.button} onClick={this.toggleResults}>Show Results</button>
                <button style={styles.clearButton} onClick={this.handleClear}>Очистити результати</button>

                {showResults && (
                    <div style={styles.results}>
                        <h3>Результати голосування:</h3>
                        <p>Переможець:</p>
                        <span style={styles.winner}>{winner.emoji}</span>
                        <p>Кількість голосів: {winner.votes}</p>
                    </div>
                )}
            </div>
        );
    }
}

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
    emojiContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "20px",
    },
    emojiBox: {
        textAlign: "center",
        cursor: "pointer",
    },
    emoji: {
        fontSize: "50px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: "5px",
        margin: "5px",
    },
    clearButton: {
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        margin: "5px",
    },
    results: {
        marginTop: "20px",
        fontSize: "20px",
    },
    winner: {
        fontSize: "60px",
        display: "block",
    },
};

export default EmojiVote;
