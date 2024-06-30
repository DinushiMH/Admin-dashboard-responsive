const chart = document.querySelector("#chart").getContext('2d');

// creat a new chart instance
new Chart(chart, {
    type: 'line',
    Date:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'Oct', 'Nov'],
        datasets:[
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 33574, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18658, 24832, 36844],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    Options: {
        responsive: true
    }
})

// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () =>{
    sidebar.style.display = 'block';
})

closeBtnBtn.addEventListener('click', () =>{
    sidebar.style.display = 'none';
})

// change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:frist-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})
