export default class CommandManager {
    /**
     * @param {number} undoLimit
     */
    constructor(undoLimit) {
        if (typeof undoLimit !== 'number' || undoLimit < 1) {
            throw new Error('Argument must be a positive integer')
        }

        this.undoLimit = undoLimit
        this.commands = []
        this.pointer = -1
    }

    /**
     * @param command
     */
    push(command) {
        if (this.commands.length === this.undoLimit) {
            this.commands.shift()
            this.pointer = this.commands.length
        } else {
            this.pointer++
            this.commands.splice(this.pointer)
        }

        command.execute()
        this.commands.push(command)
    }

    undo() {
        if (this.canUndo()) {
            this.commands[this.pointer].undo()
            this.pointer--
        }
    }

    redo() {
        if (this.canRedo()) {
            this.pointer++
            this.commands[this.pointer].execute()
        }
    }

    /**
     * @return {boolean}
     */
    canUndo() {
        return this.pointer > -1
    }

    /**
     * @return {boolean}
     */
    canRedo() {
        return this.pointer < this.commands.length - 1
    }

    clearHistory() {
        this.pointer = -1
        this.commands = []
    }
}
