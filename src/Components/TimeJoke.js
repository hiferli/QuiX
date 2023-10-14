// Also consider to add the result of the test to display the jokes

const TimeJoke = ({ initial, final }) => {
    // The result is just the propotion between the time given and the time
    // that the user used to finished the quiz
    // the faster the user finishes, the closer the result gets to 10
    const result = (final / initial) * 10;

    let message = '';
    if (result >= 0 && result < 3) message = 'You are too slow';
    if (result >= 3 && result < 5) message = 'slow';
    if (result >= 5 && result < 7) message = 'medium';
    if (result >= 7 && result < 8) message = 'fast';
    if (result >= 8 && result < 9) message = 'pretty fast';
    if (result > 9) message = 'hack?';

    console.log(message);

    return (
        <div>
            <h2>you finished the quiz in {initial - final} seconds</h2>
            <h2>{message}</h2>
        </div>
    );
};

export default TimeJoke;
