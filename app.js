console.log('Welcome');

// Data is an array of objects whick contais=ns information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 25,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    },
    {
        name: 'Shubham Sharma',
        age: 50,
        city: 'Banglore',
        language: 'C++',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/med/men/5.jpg',
    },
    {
        name: 'Mohit',
        age: 18,
        city: 'Haridwar',
        language: 'JS',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/med/men/45.jpg',
    },
    {
        name: 'Mohini',
        age: 30,
        city: 'Delhi',
        language: 'Java',
        framework: 'Spring Boot',
        image: 'https://randomuser.me/api/portraits/med/women/75.jpg',
    },
    {
        name: 'Harsh',
        age: 105,
        city: 'Jaipur',
        language: 'Go',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/med/men/15.jpg',
    }
]

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

const candidates = cvIterator(data);

nextCV();

// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;

        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">${currentCandidate.name}</li>
                            <li class="list-group-item">${currentCandidate.age} years old</li>
                            <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                            <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                            <li class="list-group-item">uses ${currentCandidate.framework} framework</li>
                        </ul>`;
    }
    else {
        alert('End of the candidate applications');
        window.location.reload();
    }
}