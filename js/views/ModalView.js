(function () {
    function ModalView(content, title) {
        this.content = content;
        this.title = title;
        this.popupTitle = document.querySelector('.popup-title');
        this.wrapper = document.querySelector('.overlay-wrapper');
        this.popup = document.querySelector('.popup');
        this.popupBody = document.querySelector('.popup-body');
        this.closeButton = document.querySelector('.popup-close');
    }

    ModalView.prototype.emptyModal = function () {
        // empty title && content
        while (this.popupTitle.firstChild) this.popupTitle.removeChild(this.popupTitle.firstChild);
        while (this.popupBody.firstChild) this.popupBody.removeChild(this.popupBody.firstChild);
    }

    ModalView.prototype.showModal = function (e) {
        this.emptyModal();

        if (this.popupTitle && this.title) {
            this.popupTitle.textContent = '';
            this.popupTitle.insertAdjacentHTML('beforeend', this.title);
        }

        document.body.classList.add('no-scroll');

        this.popupBody.append(this.content);

        this.wrapper.classList.remove('hidden');

        this.closeButton.addEventListener('click', this.hideModal.bind(this));
        // this.wrapper.addEventListener('click', this.hideModal.bind(this));
    }

    ModalView.prototype.hideModal = function (e, options) {
        // click outside popup
        if (options !== '-force' && this.popup.contains(e.target) && e.target !== this.closeButton) {
            return;
        }

        document.body.classList.remove('no-scroll');

        this.wrapper.classList.add('hidden');
        this.emptyModal();

        this.closeButton.removeEventListener('click', this.hideModal.bind(this));
        // this.wrapper.removeEventListener('click', this.hideModal.bind(this));
    }

    window.ModalView = ModalView;
})()