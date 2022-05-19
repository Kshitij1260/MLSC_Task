// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TodoList {
    uint public taskCount = 0;
    struct Task{
        uint id;
        string content;
        bool completed;
    }
    mapping(uint => Task) public tasks;

    event TaskCreated(
        uint id,
        string content,
        bool completed
    );

    constructor() public{
        createTask("Default task(yessir)");
    }


    function createTask(string  memory _content) public{
        taskCount++;
        tasks[taskCount] = Task(taskCount,_content,false);
    emit TaskCreated(taskCount, _content, false);
    }


}