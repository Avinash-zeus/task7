class Background {
    constructor(color = 'lightblue') {
        this.color = color;
        this.backgroundDiv = this.createBackground();

        const conatiner = document.getElementById('container');
        conatiner.appendChild(this.backgroundDiv);
    }

    createBackground() {
        const div = document.createElement('div');
        div.classList.add('background');
        div.style.backgroundColor = this.color;
        return div;
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