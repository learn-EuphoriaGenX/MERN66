let myImage = document.getElementById('image')
let myHeading = document.getElementById('heading')
let myPara = document.getElementById('para')
let myButton = document.getElementById('btn')
let main = document.getElementById('main')

let myCount = document.getElementById('count').innerText;


let changeEveryThing = () => {
    if (myCount == 1) {
        myImage.src = 'https://plus.unsplash.com/premium_photo-1668703459367-f25643cce808';
        myHeading.innerText = "Best Wishes from Red Rosesn 2025"
        myPara.innerText = 'We recommend that you use addEventListener() to register event handlers. Its the most powerful method and scales best with more complex programs.However.'
        myButton.innerText = "Back To Original"
        myCount = 2
        main.classList.remove('bg-black')
        main.classList.add('bg-red-800')
    } else if (myCount == 2) {
        myImage.src = 'https://images.unsplash.com/photo-1501059520966-c59141726d6c';
        myHeading.innerText = "Noteworthy technology acquisitions 2021"
        myPara.innerText = 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
        myButton.innerText = "Click Me to Change"
        myCount = 1
        main.classList.remove('bg-red-800')
        main.classList.add('bg-black')


    }
}

let test = () => {
    // let classArr = document.getElementsByClassName('myclass')
    // for (let i = 0; i < classArr.length; i++) {
    //     const element = classArr[i];
    //     element.style.color = "red"

    // }

    document.getElementsByTagName('button')[0].classList?.add('bg-red-400')


}

myButton.addEventListener('click', test)