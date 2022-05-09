import React from 'react'
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounce: {
        animation: 'x 3s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}

function App1() {

    return (
        <div>
            <StyleRoot>
                <div className="test" style={styles.bounce}>
                    aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa<br />aa
                </div>
            </StyleRoot >
        </div >
    )
}

export default App1
