const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
    const targetEle = e.target;
    const isReply = targetEle.classList.contains("reply");
    if (isReply) {
        createReplyInput(e)
    }
    else {
        const isSubmit = targetEle.classList.contains("btn-submit");
        if (isSubmit == false) {
            return;
        }
        createComment(e)
    }
})

function createReplyInput(e) {
    //create ele 
    const fragment = document.createDocumentFragment();
    const replyContainer=document.createElement("div")
    const input = document.createElement("input");
    const button = document.createElement("button");

    //set attributes
    replyContainer.setAttribute("class", "comment-reply-container");
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "Write your comment");
    button.setAttribute("class", "btn-submit");
    button.textContent = "submit"
    
    //appendChild -> single , return what ele was appended
    // append->multiple -> does not return anything 
    replyContainer.appendChild(input)
    replyContainer.appendChild(button)
    fragment.appendChild(replyContainer)

    e.target.parentNode.appendChild(fragment);

}

function createComment(e) {
    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "comment-container");
    const comment = e.target.parentNode.children[0].value;
    commentContainer.innerHTML = `<div class="comment-card">
                <h3 class="comment_text">${comment}</h3>
                <div class="reply">Reply</div>
            </div>`;
    // const input=e.target.parentNode.previousSibling
    const replyContainer = e.target.parentNode;
    const commentCard = replyContainer.parentNode
    commentCard.replaceChild(commentContainer, replyContainer);
    
}

