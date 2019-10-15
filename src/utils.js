export function calcLinePercentage(timesDisplayed, timesClicked) {
    const percentage = (timesClicked / timesDisplayed) * 100;
    return percentage + '&percnt;';
}

//need to turn percentage to display as 00%