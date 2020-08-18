window.addEventListener('load',async () => {
    const response = await fetch('http://localhost:3000/posts/');
    const posts = await response.json();
    const postContainer = document.getElementById('post-card');
        for (const post of posts) {
            postContainer.innerHTML += `
                <div class="card m-3">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-block px-2">
                                <h4 class="card-title pt-1">${post.title}</h4>
                                <p class="card-text">${post.content}</p>
                                <a href="#" class="btn btn-secondary mb-1" _id="${post._id}">Editar</a>
                                <a href="#" class="btn btn-danger delete mb-1" _id="${post._id}">Eliminar</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        ${post.created_at}
                    </div>
                </div>
            `;
        };
});

document.getElementById('post-form')
    .addEventListener('submit', (e) => {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const formData = new FormData();
        formData.append(`title`, title);
        formData.append(`content`, content);


        e.preventDefault();
        reset();
    })