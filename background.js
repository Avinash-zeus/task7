class Background {
    constructor(color = 'lightblue') {
        this.color = color;
        this.backgroundDiv = this.createBackground();
        this.updateSize();
        window.addEventListener('resize', () => this.updateSize());
    }

    createBackground() {
        const div = document.createElement('div');
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.position = 'relative';
        div.style.backgroundColor = this.color;
        return div;
    }

    updateSize() {
        this.backgroundDiv.style.width = `${window.innerWidth}px`;
        this.backgroundDiv.style.height = `${window.innerHeight}px`;
    }

    getElement() {
        return this.backgroundDiv;
    }

    addChild(child) {
        child.setParent(this);
        this.backgroundDiv.appendChild(child.getElement());
    }
}

export default Background;