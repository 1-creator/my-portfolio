// creating dynamic project card

const projectContainer = document.querySelector('.project-container');

projects.forEach(project => {
    projectContainer.innerHTML += `
    <div class="project-card" data-tags="#all, ${project.tags}">
        <img src="img/${project.image}" alt="">
        <div class="content">
            <h1 class="project-name">${project.name}</h1>
            <span class="tags">${project.tags}</span>
        </div>
    </div>
    `;
})
const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');
            } else{
                card.classList.add('hide');
            }
        })

        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
    })
})

//contact form
$('form').submit(function () {

    // Get the Login Name value and trim it
    var fname = $.trim($('#fname').val());
    var lname = $.trim($('#lname').val());
    var email =$.trim($('#email').val());

    // Check if empty of not
    if (fname === '') {
        alert('First name is empty.');
        return false;
    }
    else if (lname === '') {
        alert('Last Name is empty.');
        return false;
    }
    else if (email === '') {
        alert('email is empty.');
        return false;
    }
});
