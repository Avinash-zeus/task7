class Child {
    constructor(width = '50px', height = '50px', color = 'red', parent = null) {
        this.parent = parent;
        this.width = width;
        this.height = height;
        this.color = color;
        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.childDiv = this.createChild();
    }

    createChild() {
        const div = document.createElement('div');
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.backgroundColor = this.color;
        div.style.position = 'absolute';
        div.style.cursor = 'grab';
        div.style.touchAction = 'none';
        return div;
    }

    initEvents() {
        window.addEventListener('resize', () => this.onResize());
        this.childDiv.addEventListener('pointerdown', this.onPointerDown.bind(this));
        window.addEventListener('pointerup', this.onPointerUp.bind(this));
        window.addEventListener('pointermove', this.onPointerMove.bind(this));
    }

    onPointerDown(event) {
        this.isDragging = true;
        this.offsetX = event.clientX - this.childDiv.getBoundingClientRect().left;
        this.offsetY = event.clientY - this.childDiv.getBoundingClientRect().top;
        this.childDiv.style.cursor = 'grabbing';
    }

    onPointerUp() {
        this.isDragging = false;
        this.childDiv.style.cursor = 'grab';
    }

    onPointerMove(event) {
        if (this.isDragging) {
            const backgroundRect = this.parent.getElement().getBoundingClientRect();
            let newX = event.clientX - this.offsetX;
            let newY = event.clientY - this.offsetY;

            newX = Math.max(0, Math.min(newX, backgroundRect.width - parseInt(this.width)));
            newY = Math.max(0, Math.min(newY, backgroundRect.height - parseInt(this.height)));

            this.childDiv.style.left = `${newX}px`;
            this.childDiv.style.top = `${newY}px`;
        }
    }

    setParent(parent) {
        this.parent = parent;
        // console.log('aaa');
        this.initEvents();
    }

    getElement() {
        return this.childDiv;
    }

    onResize() {
        const backgroundRect = this.parent.getElement().getBoundingClientRect();

        // Calculate max allowed positions
        const maxLeft = backgroundRect.width - parseInt(this.width);
        const maxTop = backgroundRect.height - parseInt(this.height);

        let left = parseFloat(this.childDiv.style.left) || 0;
        let top = parseFloat(this.childDiv.style.top) || 0;

        // Clamp left/top to keep inside parent
        left = Math.max(0, Math.min(left, maxLeft));
        top = Math.max(0, Math.min(top, maxTop));

        this.childDiv.style.left = `${left}px`;
        this.childDiv.style.top = `${top}px`;
    }
}

export default Child;