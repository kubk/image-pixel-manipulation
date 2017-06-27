/**
 * All user actions in the app are implemented as command objects.
 * CommandManager keeps a stack of the most recently executed commands.
 */
export default class CommandManager {
    /**
     * @param {number} undoLimit
     * @param {Function} onExecute
     * @param {Function} onUndo
     */
    constructor(undoLimit) {
        if (undoLimit < 1) {
            throw new Error('Argument must be a positive');
        }

        this.undoLimit = undoLimit;
        this.commands = [];
        this.lastPop = null;
    }

    /**
     * @param {Command} command
     */
    push(command) {
        if (this.commands.length >= this.undoLimit) {
            this.commands.shift();
        }

        command.execute();
        this.commands.push(command);
    }

    undo() {
        if (this.canUndo()) {
            const topCommand = this.commands.pop();
            topCommand.undo();
            this.lastPop = topCommand;
        }
    }

    redo() {
        if (this.canRedo()) {
            this.push(this.lastPop);
        }
    }

    /**
     * @return {boolean}
     */
    canUndo() {
        return this.commands.length > 0;
    }

    /**
     * @return {boolean}
     */
    canRedo() {
        return !! this.lastPop;
    }
}
