import data from './data.json' assert {type:'json'};

const dailyBtn=document.getElementById('daily');
const weeklyBtn=document.getElementById('weekly');
const monthlyBtn=document.getElementById('monthly');
let secondSection = document.getElementById('second-section')

let dailyarray = data.map(item => item.timeframes.daily);
let weeklyarray = data.map(item => item.timeframes.weekly);
let monthlyarray = data.map(item => item.timeframes.monthly);

te(dailyarray);

dailyBtn.addEventListener('click',()=>{
    te(dailyarray);
});

weeklyBtn.addEventListener('click',()=>{
    te(weeklyarray);
});

monthlyBtn.addEventListener('click',()=>{
    te(monthlyarray)
});


function te(array){
    secondSection.innerHTML='';
    for (let [index,elemento] of array.entries()) {    
        secondSection.innerHTML+=`
        <div class="bg"  style="background-color: ${data[index].color};">
            <img class="icon" src="images/icon-${data[index].title}.svg" alt="">        
            <div class="information-section">
                <div class="title-section">
                    <p>${data[index].title}</p>
                    <img src="images/icon-ellipsis.svg" alt="three-dots">
                </div>
                <div class="hours-section">
                    <p class="hours">${elemento.current}hrs</p>
                    <p class="description-hours">Last Week - ${elemento.previous}</p>
                </div>
            </div>
        </div>
        `
    }
}


