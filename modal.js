function _createModal(options){
    const modal=document.createElement("div")
    modal.classList.add('amodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">modal title</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatem.
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
</div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal=function(options){
    const $modal=_createModal(options)
    return{
        open() {},
        close() {},
        destroy() {}
    }
}