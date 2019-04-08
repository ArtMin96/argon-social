// Chart.js

var likesChart = document.getElementById('likesChart').getContext('2d');
var chart = new Chart(likesChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Likes chart',
            backgroundColor: 'rgb(0, 123, 255)',
            borderColor: 'rgb(0, 123, 255)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

var followersChart = document.getElementById('followersChart').getContext('2d');
var myPieChart = new Chart(followersChart, {
    type: 'pie',
    data: {
        labels: [
            'Followers',
            'Following'
        ],
        datasets: [{
            backgroundColor: ['rgb(0, 123, 255)', 'rgb(50,205,50)'],
            data: [32, 17]
        }]
    },
    // Configuration options go here
    options: {}
});
