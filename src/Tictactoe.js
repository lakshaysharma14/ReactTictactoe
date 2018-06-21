//https://codesandbox.io/s/m32pl06839



import React, { Component } from "react";

class Tictactoe extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        winner: "",
        currentPlayer: "X",
        board: ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
      }
  }

  handleClick(btnIndex, e) {
    var currBoard = this.state.board;
    var currentPlayer = this.state.currentPlayer;

    currBoard[btnIndex] = currentPlayer;

    e.target.disabled = true;

    if (currentPlayer == "X") {
      currentPlayer = "O";
    }

    else {
      currentPlayer = "X";
    }

    this.setState
      ({
        currentPlayer: currentPlayer,
        board: currBoard
      })

    this.analyze();
  }

  analyze() {
    var b = this.state.board;

    if (b[0] === b[1] && b[1] === b[2] && b[0] != "-")
      this.setState({ winner: b[0] })

    else if (b[3] === b[4] && b[4] === b[5] && b[3] != "-")
      this.setState({ winner: b[3] })

    else if (b[6] === b[7] && b[7] === b[8] && b[6] != "-")
      this.setState({ winner: b[6] })

    else if (b[0] === b[3] && b[3] === b[6] && b[0] != "-")
      this.setState({ winner: b[0] })

    else if (b[1] === b[4] && b[4] === b[7] && b[1] != "-")
      this.setState({ winner: b[1] })

    else if (b[2] === b[5] && b[5] === b[8] && b[2] != "-")
      this.setState({ winner: b[2] })

    else if (b[0] === b[4] && b[4] === b[8] && b[0] != "-")
      this.setState({ winner: b[0] })

    else if (b[2] === b[4] && b[4] === b[6] && b[2] != "-")
      this.setState({ winner: b[2] })

    else if (b[0] != "-" && b[1] != "-" && b[2] != "-" && b[3] != "-" && b[4] != "-" && b[5] != "-" && b[6] != "-" && b[7] != "-" && b[8] != "-") {

      this.setState({ winner: "*** Match Draw ***" });
    }
  }

  render() {
    return (
      <div>
        <h2>TicTacToe
      </h2>
        {
          this.state.board.map((v, i) => {
            return (
              <span key={i}>

                {i % 3 == 0 ? <br /> : null}
                <button style={{ height: 80, width: 80 }} onClick={(e) => { this.handleClick(i, e) }}>{v}</button>

              </span>
            )
          })
        }
        <p>The Winner is:{this.state.winner}</p>
      </div>
    );

  }

}

export default Tictactoe;