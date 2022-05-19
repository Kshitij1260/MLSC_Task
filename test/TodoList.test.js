const { assert } = require("chai")

const TodoList = artifacts.require('./TodoList.sol')

contract('TodoList',(accounts)=> {
    before(async()=>{
        this.TodoList = await TodoList.deployed()
    })

    it('deploys successfully',async()=>{
        const address = await this.TodoList.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('lists tasks', async()=>{
        const taskCount = await this.TodoList.taskCount()
        const task = await this.TodoList.tasks(taskCount)
        assert.equal(task.id.toNumber(),taskCount.toNumber())
        assert.equal(task.content, 'Default task(yessir)')
        assert.equal(task.completed, false)
        assert.equal(taskCount.toNumber(), 1)
    })
    

})