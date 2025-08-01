using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class TodoController : ControllerBase
{
    private static List<TodoItem> todos = new List<TodoItem>();
    private static int nextId = 1;

    [HttpPost]
    public ActionResult<TodoItem> CreateTodo([FromBody] TodoItem todo)
    {
        todo.Id = nextId++;
        todos.Add(todo);
        return CreatedAtAction(nameof(CreateTodo), new { id = todo.Id }, todo);
    }

    [HttpGet]
    public ActionResult<IEnumerable<TodoItem>> GetTodos()
    {
        return Ok(todos);
    }
}

public class TodoItem
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public bool IsComplete { get; set; }
}