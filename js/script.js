/*var element = React.createElement('div', {}, 'Hello world!');
ReactDOM.render(element, document.getElementById('app'));


var element =
    React.createElement('div', {},
        React.createElement('h1', {}, "Lista filmów"),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Władca Pierścieni'),
                React.createElement('p', {}, 'Film o hobbitach, elfach, ludziach i... pierścieniu')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Nigdy w życiu'),
                React.createElement('p', {}, 'Film o kobiecie, która raz jeszcze musi ułożyć sobie życie')
            )
        )
    );
ReactDOM.render(element, document.getElementById('app'));
*/

var movies = [{
        id: 1,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        length: 'Time: 2h 58min',
        desc: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        imgSrc: 'images/LordOfTheRing.jpg',
        video: 'https://www.youtube.com/watch?v=V75dMMIW2B4'

    },
    {
        id: 2,
        title: 'Sully',
        length: 'Time: 1h 36min',
        desc: 'The story of Chesley Sullenberger, an American pilot who became a hero after landing his damaged plane on the Hudson River in order to save the  passengers and crew.',
        imgSrc: 'images/Sully.jpg',
        video: 'https://www.youtube.com/watch?v=mjKEXxO2KNE'
    },
    {
        id: 3,
        title: "harry potter and the philosopher's stone poster",
        length: 'Time: 2h 32min',
        desc: 'Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.',
        imgSrc: 'images/harryPotter.jpg',
        video: 'https://www.youtube.com/watch?v=VyHV0BRtdxo'
    }
];

var card = movies.map(function(movie) {
    return React.createElement('div', { className: 'card' },
        React.createElement('div', { className: 'leftCard' },
            React.createElement('img', { src: movie.imgSrc })
        ),

        React.createElement('div', { className: 'rightCard' },
            React.createElement('h2', { key: movie.id }, movie.title),
            React.createElement('div', { className: 'rightCard_more' },
                React.createElement('ul', {},
                    React.createElement('li', {}, movie.length)
                )
            ),

            React.createElement('div', { className: 'rightCard_desc' },
                React.createElement('p', {}, movie.desc)
            ),

            React.createElement('div', { className: 'rightCard_button' },
                React.createElement('a', { href: movie.video, target: '_blank' }, 'Watch triler')
            )
        )
    )
});






var element =
    React.createElement('section', {},
        React.createElement('div', { className: 'container' },

            React.createElement('h1', {}, 'My favorite Films:'), card
        )
    );
ReactDOM.render(element, document.getElementById('app'));