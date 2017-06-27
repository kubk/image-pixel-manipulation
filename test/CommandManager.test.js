import CommandManager from '../src/command/CommandManager'

class AddToArrayCommand {
    constructor(array, arg) {
        this.array = array
        this.arg = arg
    }

    execute() {
        this.array.push(this.arg)
    }

    undo() {
        this.array.splice(this.array.indexOf(this.arg), 1)
    }
}

describe('CommandManager', () => {
    it('executes given command', () => {
        const commandManager = new CommandManager(3 /* undo limit */)

        const execute = jest.fn()
        const undo = jest.fn()
        const command = {execute, undo}

        commandManager.push(command)
        expect(execute).toHaveBeenCalled()

        expect(undo).not.toHaveBeenCalled()
        commandManager.undo()
        expect(undo).toHaveBeenCalled()
    })

    it('limits undo', () => {
        const commandManager = new CommandManager(1 /* undo limit */)

        const undo = jest.fn()
        const command = {execute() {}, undo}
        const command2 = {execute() {}, undo() {}}

        commandManager.push(command)
        commandManager.push(command2)

        commandManager.undo()
        expect(undo).not.toHaveBeenCalled()

        commandManager.undo()
        expect(undo).not.toHaveBeenCalled()
    })

    const commandManager = new CommandManager(3 /* undo limit */)

    const arr = []
    const command1 = new AddToArrayCommand(arr, 1)
    const command2 = new AddToArrayCommand(arr, 2)
    const command3 = new AddToArrayCommand(arr, 3)

    it('adds commands', () => {
        commandManager.push(command1)
        commandManager.push(command2)
        commandManager.push(command3)

        expect(arr).toContain(1)
        expect(arr).toContain(2)
        expect(arr).toContain(3)
    })

    it('cancels command', () => {
        commandManager.undo()
        expect(arr).not.toContain(3)
        expect(arr).toContain(2)
        expect(arr).toContain(1)

        commandManager.undo()
        expect(arr).not.toContain(2)
        expect(arr).toContain(1)

        commandManager.undo()
        expect(arr).toHaveLength(0)
    })

    it('can redo', () => {
        commandManager.redo()
        expect(arr).toContain(1)
        expect(arr).toHaveLength(1)

        commandManager.redo()
        expect(arr).toHaveLength(2)

        commandManager.redo()
        expect(arr).toHaveLength(3)

        commandManager.redo()
        expect(arr).toHaveLength(3)
    })
})