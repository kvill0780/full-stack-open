import { useState } from "react";

const Display = ({counter}) => {
    return (
        <div>{counter}</div>
    )
}

const Button = (props) => {
    console.log("props values is :", props);
    const {text, onClick} = props;
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    const [allClicks, setAll] = useState([])


    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }


    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    const History = (props) => {
        if (props.allClicks.length === 0) {
            return (
                <div>
                    the app is used by pressing the buttons
                </div>
            )
        }

        return (
            <div>
                button press history: {props.allClicks.join(' ')}
            </div>
        )
    }

    return (
        <div>
            {left}
            <Button text="Left" onClick={handleLeftClick}></Button>
            <Button text="Right" onClick={handleRightClick}></Button>
            {right}

            <History allClicks={allClicks} />
        </div>
    )
}

export default App