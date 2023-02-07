console.log('Welcome Knox', location.href)
$('body').addClass('zzzzzzzz')


// fetch('https://icanhazdadjoke.com/slack')
// .then(data => data.json())
//     .then(jokeData => {
//         const jokeText = jokeData.attachments[0].text;
//         const jokeElement = document.getElementById('jokeElement');

//         jokeElement.innerHTML = jokeText;
//     })

$(".lvz-subscription-grouped-details__teaser").each(function (index) {
  console.log($(this).find('.lvz-subscription-grouped-details__header').text())
});