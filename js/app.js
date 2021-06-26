const container = document.querySelector('.keyboard-container');
const textarea = document.querySelector('textarea');

const buttonsText = document.querySelectorAll('.btn-text');

const buttonToggle = document.querySelector('.btn-toggle');
const buttonCapsLock = document.querySelector('.btn-caps-lock');
const buttonSpacebar = document.querySelector('.btn-spacebar');
const buttonBackspace = document.querySelector('.btn-backspace');
const buttonEnter = document.querySelector('.btn-enter');

class VirtualKeyboard {

    /**
     * Is keyboard hidden?
     * @memberof VirtualKeyboard
     */
    isKeyboardHidden = false;

    /**
     * Is caps lock on?
     * @memberof VirtualKeyboard
     */
    isCapsLockOn = false;

    constructor(container, textarea) {
        this.container = container;
        this.textarea = textarea;
    }

    toggleKeyboard() {
        this.isKeyboardHidden = !this.isKeyboardHidden;
        this.isKeyboardHidden
        ? container.style.display = 'none'
        : container.style.display = 'block';
    }

    /**
     * Toggle caps lock.
     * @memberof VirtualKeyboard
     */
    toggleCapsLock() {
        this.isCapsLockOn = !this.isCapsLockOn;
        this.isCapsLockOn
        ? buttonsText.forEach(button => button.innerText = button.innerText.toUpperCase())
        : buttonsText.forEach(button => button.innerText = button.innerText.toLowerCase())
    }

    /**
     * Add item to textarea.
     * @param {string} item 
     * @memberof VirtualKeyboard
     */
    addText(item) {
        this.textarea.value += item;
    }

    /**
     * Add space to textarea
     * @memberof VirtualKeyboard
     */
    addSpace() {
        this.textarea.value += ' ';
    }

    /**
     * Remove last item from textarea.
     * @memberof VirtualKeyboard
     */
    backspace() {
        const newString = this.textarea.value.slice(0, -1);
        this.textarea.value = newString;
    }

    enter() {
        this.textarea.value += '\n';
    }
}

const virtualKeyboard = new VirtualKeyboard(container, textarea);

buttonsText.forEach(button => button.addEventListener('click', () => virtualKeyboard.addText(button.innerText)));

buttonSpacebar.addEventListener('click', () => virtualKeyboard.addSpace());

buttonToggle.addEventListener('click', () => virtualKeyboard.toggleKeyboard());
buttonCapsLock.addEventListener('click', () => virtualKeyboard.toggleCapsLock());
buttonBackspace.addEventListener('click', () => virtualKeyboard.backspace());
buttonEnter.addEventListener('click', () => virtualKeyboard.enter());
