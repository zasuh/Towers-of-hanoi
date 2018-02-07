//A function that takes away 5 blocks so 5 are left (player clicks 5 button)

const fiveBlocks = () => {
    document.getElementById('percent-60').remove();
    document.getElementById('percent-70').remove();
    document.getElementById('percent-80').remove();
    document.getElementById('percent-90').remove();
    document.getElementById('percent-100').remove();
    return false;
}

//A function that takes away 4 blocks so 6 are left (player clicks 6 button)

const sixBlocks = () => {
    document.getElementById('percent-70').remove();
    document.getElementById('percent-80').remove();
    document.getElementById('percent-90').remove();
    document.getElementById('percent-100').remove();
    return false;
}

//A function that takes away 3 blocks so 7 are left (player clicks 7 button)

const sevenBlocks = () => {
    document.getElementById('percent-80').remove();
    document.getElementById('percent-90').remove();
    document.getElementById('percent-100').remove();
    return false;
}

//A function that takes away 2 blocks so 8 are left (player clicks 8 button)

const eightBlocks = () => {
    document.getElementById('percent-90').remove();
    document.getElementById('percent-100').remove();
    return false;
}

//A function that takes away 1 block so 9 are left (player clicks 9 button)

const nineBlocks = () => {
    const el = document.getElementsByClassName('pillon-1')[0];
    el.removeChild(document.getElementById('percent-100'));
    return false;
}

//A function that puts all available blocks on screen (player hits 10 button)

const resetBlocks = () => {
    location.reload();
    return false;
}

//Function that starts the solver

const start = (disc, pil1, pil2, pil3) => {
    //disc is number of selected discs.
    //pil1 is where the disc start aka where the discs are placed.
    //pil2 is used to move discs from pil1 to pil3. Also known as the auxiliary pillon.
    //pil3 is the final destination of the discs.

    
}

