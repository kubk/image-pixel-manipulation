const filters = require("./filters")
// @ponicode
describe("filters.invertColors", () => {
    test("0", () => {
        let callFunction = () => {
            filters.invertColors([-1, 1, 0, -10, 10.0, 0.0, 0, 0.1, -10, 0, 0.0, -10, 0.1, 10.0, 0.0, 10.0, 0.0, 10, 0.0, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filters.invertColors([0, 1, 0, -10, -1, 0.0, 10, 0.0, -1, -1, -1, 1, 10, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, -10])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filters.invertColors([-10, 1, 0, 10, -10, 1, 0.0, -10, 0.0, 10, -1, 0, 1, 1, 0, 0.1, -10, 0.0, -10, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filters.invertColors([-10, -10, 0, 0.1, -10, 10, 0, 10, 0.0, 1, 0, 10, -1, 0.0, 0.5, 1, -10, 0.0, -10, 0.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filters.invertColors([10.0, -10, 10, 0.0, 1.0, 2.0, 1, 2.0, 0, 0.0, 10, 0, -10, 0, 0.0, 1, -10, 1, 1, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filters.invertColors(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("filters.noise", () => {
    test("0", () => {
        let callFunction = () => {
            filters.noise(-1, { length: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filters.noise(-10, { length: 3 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filters.noise(10, { length: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filters.noise(0.0, { length: 5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filters.noise(0, { length: 2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filters.noise(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("filters.sepia", () => {
    test("0", () => {
        let callFunction = () => {
            filters.sepia([0, -10, 1, 0.0, 0.0, 0, 1, -10, -10, -1, -10, -1, 0, 0.0, -10, -10, 0.0, 0, 0, -10])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filters.sepia([-10, 1, 0.0, 0.0, 1, -1, 0.1, -10, -10, 0.0, -1, -10, 1, 0.0, -10, 10, 0, 0, -10, -1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filters.sepia([-10, 2.0, 10, 0, -1, -10, 0, -10, 0.0, 0, 1, 0.0, 1, 0, 10, 0, -1, 10, 10, 0.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filters.sepia([0.0, 10, 1, 0.0, 10, 0.1, 1, -10, 10, -1, 1, 0, 10, 0.0, 1, 0.0, -10, 10, -10, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filters.sepia([10, 0, 10, 0.0, -10, -1, 1, 0.0, 10, -1, 0, 0.0, 0, -10, 10, 0, -1, 0.0, -10, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filters.sepia(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("filters.brightness", () => {
    test("0", () => {
        let callFunction = () => {
            filters.brightness(1.0, [0.1, 0.1, 0.1, 2.0, 0.5, 10.0, 2.0, 1.0, 0.5, 10.0, 1.0, 2.0, 0.5, 0.1, 2.0, 0.1, 0.5, 0.1, 1.0, 0.1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filters.brightness(1.0, [2.0, 1.0, 0.5, 2.0, 2.0, 2.0, 2.0, 0.5, 2.0, 0.1, 10.0, 2.0, 0.5, 2.0, 0.5, 0.1, 0.1, 0.1, 2.0, 1.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filters.brightness(2.0, [0.5, 1.0, 1.0, 0.1, 0.1, 2.0, 10.0, 2.0, 0.5, 0.5, 10.0, 0.5, 0.5, 10.0, 1.0, 2.0, 0.1, 1.0, 10.0, 0.5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filters.brightness(2.0, [0.5, 2.0, 1.0, 10.0, 1.0, 0.5, 10.0, 10.0, 1.0, 0.5, 2.0, 2.0, 0.1, 0.1, 0.5, 1.0, 0.1, 0.5, 10.0, 10.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filters.brightness(0.1, [0.5, 0.5, 2.0, 10.0, 0.5, 2.0, 10.0, 10.0, 1.0, 0.1, 0.5, 0.1, 0.1, 1.0, 1.0, 0.5, 0.5, 1.0, 2.0, 0.5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filters.brightness(Infinity, [])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("filters.saturate", () => {
    test("0", () => {
        let callFunction = () => {
            filters.saturate("#FF00FF", "red", "rgb(20%,10%,30%)", [1.0, 1.0, 1.0, 1.0, 1.0, 0.1, 0.1, 10.0, 1.0, 0.1, 1.0, 2.0, 0.5, 1.0, 0.1, 0.1, 0.5, 1.0, 2.0, 0.1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filters.saturate("black", "hsl(10%,20%,40%)", "rgb(0.1,0.2,0.3)", [1.0, 10.0, 0.5, 0.1, 2.0, 2.0, 0.1, 0.1, 1.0, 0.1, 0.1, 0.1, 0.5, 1.0, 10.0, 1.0, 10.0, 0.1, 10.0, 0.5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filters.saturate("red", "rgb(20%,10%,30%)", "rgb(20%,10%,30%)", [0.5, 2.0, 2.0, 2.0, 2.0, 2.0, 0.1, 2.0, 10.0, 0.5, 0.1, 2.0, 2.0, 2.0, 1.0, 2.0, 10.0, 2.0, 2.0, 10.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filters.saturate("#F00", "green", "rgb(0,100,200)", [2.0, 0.1, 1.0, 10.0, 1.0, 2.0, 2.0, 0.1, 0.5, 10.0, 0.1, 10.0, 1.0, 0.5, 1.0, 2.0, 2.0, 1.0, 0.1, 1.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filters.saturate("hsl(10%,20%,40%)", "#F00", "rgb(20%,10%,30%)", [0.5, 2.0, 1.0, 2.0, 1.0, 0.5, 0.1, 0.1, 1.0, 0.1, 2.0, 0.5, 1.0, 2.0, 10.0, 2.0, 2.0, 0.1, 10.0, 10.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filters.saturate(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("filters.flipVertical", () => {
    test("0", () => {
        let callFunction = () => {
            filters.flipVertical(400, 0.0, [0.1, 1.0, 2.0, 1.0, 10.0, 0.1, 0.5, 2.0, 0.5, 10.0, 0.5, 1.0, 10.0, 1.0, 2.0, 10.0, 10.0, 10.0, 0.5, 10.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filters.flipVertical(-10, 15, [2.0, 10.0, 10.0, 10.0, 10.0, 0.1, 2.0, 1.0, 1.0, 2.0, 2.0, 0.5, 2.0, 10.0, 0.1, 0.1, 1.0, 0.5, 2.0, 0.5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filters.flipVertical(24000, 544, [1.0, 1.0, 10.0, 0.1, 2.0, 2.0, 0.1, 0.5, 2.0, 0.1, 1.0, 0.1, 0.1, 0.5, 10.0, 0.5, 0.1, 2.0, 2.0, 2.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filters.flipVertical(1, 8, [1.0, 1.0, 10.0, 1.0, 2.0, 1.0, 0.1, 1.0, 0.1, 0.1, 10.0, 0.1, 1.0, 10.0, 0.5, 0.5, 10.0, 0.5, 0.5, 2.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filters.flipVertical(5, 20, [10.0, 2.0, 1.0, 0.1, 1.0, 0.1, 1.0, 2.0, 10.0, 0.5, 0.1, 2.0, 0.1, 10.0, 0.1, 0.1, 2.0, 0.1, 0.5, 0.5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filters.flipVertical(Infinity, Infinity, [])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("filters.flipHorizontal", () => {
    test("0", () => {
        let callFunction = () => {
            filters.flipHorizontal(576, 8, [1.0, 0.1, 0.5, 0.5, 2.0, 10.0, 1.0, 0.5, 0.5, 1.0, 2.0, 1.0, 10.0, 10.0, 0.1, 0.5, 0.1, 10.0, 2.0, 2.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filters.flipHorizontal(-1, 1000, [1.0, 0.5, 2.0, 0.1, 2.0, 0.5, 0.5, 0.5, 2.0, 1.0, 10.0, 10.0, 1.0, 0.1, 2.0, 2.0, 0.5, 10.0, 0.5, 10.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filters.flipHorizontal(5, 8, [1.0, 2.0, 1.0, 10.0, 10.0, 2.0, 0.5, 1.0, 0.5, 1.0, 10.0, 10.0, 0.5, 10.0, 1.0, 0.1, 0.5, 0.1, 2.0, 10.0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filters.flipHorizontal(480, 40, [0.1, 0.1, 10.0, 0.1, 10.0, 0.1, 1.0, 10.0, 1.0, 10.0, 10.0, 10.0, 1.0, 0.5, 1.0, 2.0, 0.5, 1.0, 0.5, 0.1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filters.flipHorizontal(80.0, 6, [1.0, 1.0, 0.5, 1.0, 0.5, 10.0, 1.0, 0.5, 2.0, 0.5, 2.0, 1.0, 0.1, 1.0, 2.0, 1.0, 1.0, 0.1, 0.1, 0.5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filters.flipHorizontal(NaN, NaN, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
