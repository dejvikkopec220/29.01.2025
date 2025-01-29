class Square {
    constructor(element) {
        this.element = element;
        this.posX = 0;
        this.posY = 0;
        this.step = 10; 
        this.updatePosition();
        this.initEventListeners();
        
        // Získání rozměrů kontejneru
        this.container = document.getElementById('container');
        this.containerWidth = this.container.clientWidth;
        this.containerHeight = this.container.clientHeight;
    }

    updatePosition() {
        this.element.style.left = this.posX + 'px';
        this.element.style.top = this.posY + 'px';
        this.displayCoordinates();
    }

    displayCoordinates() {
        const coordinatesDisplay = document.getElementById('coordinates');
        coordinatesDisplay.textContent = `Souřadnice: (X: ${this.posX}, Y: ${this.posY})`;
    }

    move(direction) {
        const squareWidth = 50; 
        const squareHeight = 50; 

        switch (direction) {
            case 'up':
                if (this.posY - this.step >= 0) { 
                    this.posY -= this.step;
                }
                break;
            case 'down':
                if (this.posY + squareHeight + this.step <= this.containerHeight) { 
                    this.posY += this.step;
                }
                break;
            case 'left':
                if (this.posX - this.step >= 0) { 
                    this.posX -= this.step;
                }
                break;
            case 'right':
                if (this.posX + squareWidth + this.step <= this.containerWidth) { 
                    this.posX += this.step;
                }
                break;
        }
        this.updatePosition();
    }

    initEventListeners() {
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.move('up');
                    break;
                case 'ArrowDown':
                    this.move('down');
                    break;
                case 'ArrowLeft':
                    this.move('left');
                    break;
                case 'ArrowRight':
                    this.move('right');
                    break;
            }
        });
    }
}

const squareElement = document.getElementById('square');
const square = new Square(squareElement);
